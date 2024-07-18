import "./PDFView.css";
import MaterialData from "../../pdf/data/data";
import HeadMainFoot from "../../layouts/HeadMainFoot/HeadMainFoot";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getColor } from "../../components/Geometry/utils";

const subjects = ["physics", "biology", "math", "chemistry"] as const;
const grades = ["10", "11", "12"] as const;
type RouteParams = {
    subject: typeof subjects[number];
    grade: typeof grades[number];
    materialId: string;
};

function PDFViewPages() {
    const { subject, grade, materialId } = useParams<RouteParams>();
    const navigate = useNavigate();
    useEffect(() => {
        if (subject == undefined || grade == undefined) {
            return navigate("/404");
        } else if (!subjects.includes(subject) || !grades.includes(grade)) {
            return navigate("/404");
        }
    }, [subject, grade]);

    const data = MaterialData[subject!][grade!][parseInt(materialId!)];
    const base_url = `/pdf/${subject}/${grade}/${data.name}/`;

    const [pdfView, setPdfView] = useState(0);
    const pdf_file_name = [
        "Rangkuman Materi.pdf",
        "Contoh Soal.pdf",
        "Latihan Soal.pdf",
    ];
    function buttonClicked(direction: "up" | "down") {
        if (direction == "up") {
            if (pdfView != 0) setPdfView(pdfView - 1);
        } else {
            if (pdfView != 2) setPdfView(pdfView + 1);
        }
    }

    return (
        <HeadMainFoot>
            <div
                className="pdfview-cont"
                style={{ background: getColor(subject!) }}
            >
                <div
                    className="pdfview-slide"
                    style={{
                        transform: `translateY( calc((100%/3) - (100%*${pdfView}/3)) )`,
                    }}
                >
                    {pdf_file_name.map((v, i) => {
                        return (
                            <object
                                data={`${base_url}/${v}#view=FitH&toolbar=0`}
                                type="application/pdf"
                                key={i}
                            >
                                pdf viewer not found
                            </object>
                        );
                    })}
                </div>
                <div className="pdf-control-btn">
                    <div
                        className={`aks-btn ${
                            pdfView == 0 ? "hide-button" : ""
                        }`}
                        onClick={() => buttonClicked("up")}
                    >
                        {pdfView == 1 ? "Materi" : ""}
                        {pdfView == 2 ? "Contoh" : ""}
                    </div>

                    <div className="aks-btn">
                        <Link to={`/${subject}/${grade}/`}>&lt;-kembali</Link>
                    </div>

                    <div
                        className={`aks-btn ${
                            pdfView == 2 ? "hide-button" : ""
                        }`}
                        onClick={() => buttonClicked("down")}
                    >
                        {pdfView == 0 ? "Contoh" : ""}
                        {pdfView == 1 ? "Latihan" : ""}
                    </div>
                </div>
            </div>
        </HeadMainFoot>
    );
}
export default PDFViewPages;
