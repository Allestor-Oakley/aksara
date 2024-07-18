import "./Geo10.css";
import { getColor, Props } from "./utils.tsx";

export default function Geo10(props: Props) {
    return (
        <svg
            width="42.502682mm"
            height="42.502663mm"
            version="1.1"
            clipRule="evenodd"
            fillRule="evenodd"
            imageRendering="optimizeQuality"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            viewBox="0 0 4250.268 4250.2661"
            id="svg4"
            xmlns="http://www.w3.org/2000/svg"
            className={props.show ? "start-geo-10" : ""}
        >
            <defs id="defs1"></defs>
            <g id="Layer_x0020_1" transform="translate(-2108.1968,-2108.1869)">
                <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                <g
                    id="_2226935740496"
                    style={{ stroke: getColor(props.name), strokeOpacity: "1" }}
                >
                    <g
                        id="g2"
                        style={{
                            stroke: getColor(props.name),
                            strokeOpacity: "1",
                        }}
                    >
                        <path
                            className={"fil0 str0 rRmsJAYa_0"}
                            id="polygon1"
                            style={{
                                stroke: getColor(props.name),
                                strokeOpacity: "1",
                            }}
                            d="M6350,4814.07L5945.75,3571.5L5541.51,2328.92L4233.33,2328.92L2925.16,2328.92L2520.92,3571.49L2116.67,4814.07L3175,5582.03L4233.33,6349.98L5291.67,5582.03Z"
                        ></path>
                        <path
                            className={"fil0 str0 rRmsJAYa_1"}
                            id="polygon2"
                            style={{
                                stroke: getColor(props.name),
                                strokeOpacity: "1",
                            }}
                            d="M6350,4814.07L2925.16,2328.92L4233.33,6349.99L5541.5,2328.92L2116.66,4814.07Z"
                        ></path>
                    </g>
                    <g
                        id="g4"
                        style={{
                            stroke: getColor(props.name),
                            strokeOpacity: "1",
                        }}
                    >
                        <path
                            className={"fil0 str0 rRmsJAYa_2"}
                            id="polygon3"
                            style={{
                                stroke: getColor(props.name),
                                strokeOpacity: "1",
                            }}
                            d="M6350,3652.57L5945.75,4895.14L5541.51,6137.72L4233.33,6137.72L2925.16,6137.72L2520.92,4895.15L2116.67,3652.57L3175,2884.61L4233.33,2116.66L5291.67,2884.61Z"
                        ></path>
                        <path
                            className={"fil0 str0 rRmsJAYa_3"}
                            id="polygon4"
                            style={{
                                stroke: getColor(props.name),
                                strokeOpacity: "1",
                            }}
                            d="M6350,3652.57L2925.16,6137.72L4233.33,2116.65L5541.5,6137.72L2116.66,3652.57Z"
                        ></path>
                    </g>
                </g>
            </g>
        </svg>
    );
}
