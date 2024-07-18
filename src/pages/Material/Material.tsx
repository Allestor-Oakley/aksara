import "./Material.css";

import { Link, useNavigate, useParams } from "react-router-dom";
import { createContext, useEffect, useState } from "react";

import { getImgUrl } from "../../utils/url/url";
import ContentSlide from "../../layouts/ContentSlide/ContentSlide";

import MaterialData from "../../pdf/data/data";

// For routing
const subjects = ["physics", "biology", "math", "chemistry"] as const;
const grades = ["10", "11", "12"] as const;
type RouteParams = {
    subject: typeof subjects[number];
    grade: typeof grades[number];
};

// For ContentSlide
const Context = createContext({ slide: 0, setSlide: (_: number) => {} });

function MaterialPages() {
    const { subject, grade } = useParams<RouteParams>();
    const [slide, setSlide] = useState(0);

    // Just to be safe
    const navigate = useNavigate();
    useEffect(() => {
        if (subject == undefined || grade == undefined) {
            return navigate("/404");
        } else if (!subjects.includes(subject) || !grades.includes(grade)) {
            return navigate("/404");
        }
    }, [subject, grade]);

    const data = MaterialData[subject!][grade!];

    // Change material name each time slide change
    useEffect(() => {
        document.documentElement.style.setProperty(
            "--content-mat-name",
            `"${data[slide].name}"`
        );
    }, [slide]);

    // If the image is the current image, go to PDFViewPages for that
    // specific material, but if it isn't, move slide to that image
    function imageClicked(idx: number) {
        if (slide == idx) {
            navigate(`/${subject}/${grade}/${idx}/`);
        } else {
            setSlide(idx);
        }
    }

    return (
        <Context.Provider value={{ slide, setSlide }}>
            {/* Baca comment di ContentSlide.tsx */}
            <ContentSlide
                preview_button_color={[]}
                content_count={data.length}
                context={Context}
                visible_circ={"var(--visible-circ-mat)"}
                back_url={`/${subject}/`}
            >
                {data.map((v, i) => {
                    return (
                        // perbesar lingkaran dengan .big-mat-circ, turunkan
                        // opacity untuk .material-circle yang gak punya .big-mat-circ
                        <div
                            key={i}
                            className={`material-circle ${
                                slide == i ? "big-mat-circ" : ""
                            }`}
                        >
                            <img
                                src={getImgUrl(v.icon_url)}
                                alt="material icon"
                                onClick={() => imageClicked(i)}
                            />
                        </div>
                    );
                })}
            </ContentSlide>
        </Context.Provider>
    );
}

export default MaterialPages;
