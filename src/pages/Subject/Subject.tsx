import "./Subject.css";

import SatelliteBlock from "../../components/SatelliteBlock/SatelliteBlock.tsx";
import ContentSlide from "../../layouts/ContentSlide/ContentSlide.tsx";
import { Link, useNavigate, useParams } from "react-router-dom";

import { createContext, useEffect, useState } from "react";
import { block_data } from "./data.ts";
import { getImgUrl } from "../../utils/url/url.ts";
import SuspenseImage from "../../components/SuspenseImage/SuspenseImage.tsx";

// For ContentSlide
const Context = createContext({ slide: 0, setSlide: (_: number) => {} });

function SubjectPages() {
    // Handle param from '/subject/:subjectId'
    // if subjectId is not a number or not in
    // (0, 1, 2, 3), go to 404
    const { subjectId } = useParams<{ subjectId: string }>();
    const navigate = useNavigate();
    useEffect(() => {
        // if the route is just /subject/, then end this func
        if (subjectId == undefined) return;

        const intSubjId = parseInt(subjectId);
        if (isNaN(intSubjId)) {
            return navigate("/404");
        }
        if (intSubjId > 3 || intSubjId < 0) {
            return navigate("/404");
        }
    }, [subjectId]);

    // slide  for switching subject slide
    const [slide, setSlide] = useState(parseInt(subjectId ?? "0"));

    const planets_url = "planets/";

    return (
        <Context.Provider value={{ slide, setSlide }}>
            {/* Baca comment di ContentSlide.tsx */}
            <ContentSlide
                content_count={block_data.length}
                preview_button_color={block_data.map((v, _) => v.main_color)}
                context={Context}
            >
                {/* Subject Blocks */}
                {block_data.map((val, idx) => {
                    const l_url = `${planets_url}ring/ring-${val.name}.png`;
                    const sat_url = val.sattelite_name.map((sat, _) => {
                        return `${planets_url}${val.name}-sat/${sat}.png`;
                    });

                    // hide planet if it isnt't the current slide
                    const c_name = `subjectblock ${
                        slide != idx ? "hide-planet" : ""
                    }`;
                    return (
                        <SatelliteBlock
                            key={val.name}
                            sattelite_url={sat_url}
                            class_name={c_name}
                        >
                            <Link to={`/${val.name}/`}>
                                <SuspenseImage
                                    className="planet-subject-ring"
                                    src={getImgUrl(l_url)}
                                    alt="Logo"
                                />
                            </Link>
                        </SatelliteBlock>
                    );
                })}
            </ContentSlide>
        </Context.Provider>
    );
}

export default SubjectPages;
