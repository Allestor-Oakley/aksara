import HeadMainFoot from "../../layouts/HeadMainFoot/HeadMainFoot";
import CrewData from "./data";
import "./About.css";
import { getImgUrl } from "../../utils/url/url";

function AboutPages() {
    const baseUrl = "person/";
    return (
        <HeadMainFoot>
            <div className="about-container">
                {CrewData.map((v, i) => {
                    return (
                        <div key={i} className="person-container">
                            <div
                                className="person-image"
                                style={{
                                    backgroundImage: `url(${getImgUrl(
                                        `${baseUrl}${v.profile_image}`
                                    )})`,
                                }}
                            ></div>
                            <div className="person-name">{v.name}</div>
                            <div className="person-role">{v.role}</div>
                        </div>
                    );
                })}
            </div>
        </HeadMainFoot>
    );
}

export default AboutPages;
