import "./Download.css";
import HeadMainFoot from "../../layouts/HeadMainFoot/HeadMainFoot";
import { useEffect, useState } from "react";
import DropDown from "./Dropdown";
import MaterialData from "../../pdf/data/data";
import { IMaterialList } from "../../pdf/data/type";

const grade: { [id: string]: string } = {
    "10": "X",
    "11": "XI",
    "12": "XII",
};
const subject: { [id: string]: string } = {
    math: "Matematika",
    chemistry: "Kimia",
    physics: "Fisika",
    biology: "Biologi",
};
type SubjectType = "math"|"chemistry"|"physics"|"biology"|""
type GradeType = "10"|"11"|"12"|""

function DownloadPages() {
    const [currentSubject, setCurrentSubject] = useState<SubjectType>("");
    const [currentGrade, setCurrentGrade] = useState<GradeType>("");
    const [materialList, setMaterialList] = useState<IMaterialList[]>([]);

    useEffect(() => {
        if (currentGrade == "" || currentSubject == "") {
            setMaterialList([]);
            return
        };
        setMaterialList(MaterialData[currentSubject][currentGrade]);
    }, [currentGrade, currentSubject])
    return (
        <HeadMainFoot>
            <div className="download-container">
                <DropDown
                    options_list={subject}
                    default_option="Mata Pelajaran"
                    on_change={setCurrentSubject}
                    z_index={[4, 5]}
                />
                <DropDown
                    options_list={grade}
                    default_option="Kelas"
                    on_change={setCurrentGrade}
                    z_index={[2, 3]}
                />
                <div className="mat-download-cont">
                    <div className="mat-download-list">
                        {materialList.map((v, i) => {
                            return <div className="mat-download-item" key={i}>
                            {v.name}
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </HeadMainFoot>
    );
}

export default DownloadPages;
