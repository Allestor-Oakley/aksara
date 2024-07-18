import "./Grade.css";

import { useNavigate, useParams } from "react-router-dom";
import { createContext, useEffect, useState } from "react";

import ContentSlide from "../../layouts/ContentSlide/ContentSlide.tsx";
import SatelliteBlock from "../../components/SatelliteBlock/SatelliteBlock.tsx";
import Geo10 from "../../components/Geometry/Geo10.tsx";
import Geo11 from "../../components/Geometry/Geo11.tsx";
import Geo12 from "../../components/Geometry/Geo12.tsx";
import { Link } from "react-router-dom";
//-----------------------------------------//

const subjects = ["chemistry", "math", "physics", "biology"] as const;
type Params = {
    subject: typeof subjects[number];
};

const Context = createContext({ slide: 0, setSlide: (_: number) => {} });
function GradePages() {
    const { subject } = useParams<Params>();

    // Just to be safe
    const navigate = useNavigate();
    useEffect(() => {
        if (subject == undefined) {
            return navigate("/404");
        } else if (!subjects.includes(subject)) {
            return navigate("/404");
        }
    }, [subject]);

    const [slide, setSlide] = useState(0);
    const grade_roman = ["X", "XI", "XI"];
    const grade_geo = [Geo10, Geo11, Geo12];

    // TODO = Refactor all of this shit
    const [showGeo10, setShowGeo10] = useState(true);
    const [showGeo11, setShowGeo11] = useState(true);
    const [showGeo12, setShowGeo12] = useState(true);
    const showGeo = [showGeo10, showGeo11, showGeo12];
    const setShowGeo = [setShowGeo10, setShowGeo11, setShowGeo12];

    useEffect(() => {
        setShowGeo[slide](false);
        setTimeout(() => setShowGeo[slide](true), 200);
    }, [slide]);

    return (
        <Context.Provider value={{ slide, setSlide }}>
            {/* Baca comment di ContentSlide.tsx */}
            <ContentSlide
                content_count={grade_roman.length}
                context={Context}
                back_url={`/subject/${subjects.indexOf(subject!)}`}
            >
                {grade_roman.map((v, i) => {
                    const GeoElem = grade_geo[i];
                    return (
                        <SatelliteBlock
                            key={i}
                            sattelite_url={Array(8).fill(
                                `planets/${subject}-sat/${subject}1.png`
                            )}
                            class_name={`gradeblock ${
                                slide != i ? "hide-grade" : ""
                            }`}
                        >
                            <div className="grade-container">
                                <div className="grade-circle">
                                    <Link to={`/${subject}/${i+10}/`}>
                                        {v}
                                    </Link>
                                </div>

                                <GeoElem
                                    show={showGeo[i]}
                                    name={subject ?? "math"}
                                ></GeoElem>
                            </div>
                        </SatelliteBlock>
                    );
                })}
            </ContentSlide>
        </Context.Provider>
    );
}

export default GradePages;
