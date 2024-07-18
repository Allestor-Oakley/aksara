import "./Dropdown.css";
import { useEffect, useState } from "react";
import ArrowUp from "../../assets/images/ui/arrow-up.svg";

interface IDropDown {
    options_list: { [id: string]: string };
    default_option: string;
    on_change: (newOption: any) => void;
    z_index: number[];
}

function DropDown({
    options_list,
    default_option,
    on_change,
    z_index,
}: IDropDown) {
    const [currentOption, setCurrentOption] = useState("");
    const [openOption, setOpenOption] = useState(false);

    function getStyle(idx: number, show: boolean) {
        return {
            transform: !show ? `translateY(calc(-100% * ${idx} - 5px))` : "",
            opacity: !show ? "0" : "1",
            zIndex: z_index[0],
        };
    }

    useEffect(() => {
        on_change(currentOption);
    }, [currentOption]);

    // select and close
    function optionClicked(option: string) {
        setCurrentOption(option);
        setOpenOption(false);
    }

    return (
        <div className="d-dropdown">
            <div
                className={`d-current ${openOption ? "d-opened" : ""}`}
                style={{ zIndex: z_index[1] }}
            >
                {currentOption == ""
                    ? default_option
                    : options_list[currentOption]}
                <img
                    src={ArrowUp}
                    alt=""
                    onClick={() => setOpenOption(!openOption)}
                    style={{ height: "100%", rotate: "180deg" }}
                />
            </div>
            <div className="d-options-cont">
                <div
                    className="d-option"
                    style={{ ...getStyle(1, openOption) }}
                    onClick={() => optionClicked("")}
                >
                    --empty--
                </div>
                {Object.keys(options_list).map((v, i) => {
                    return (
                        <div
                            className="d-option"
                            key={i}
                            style={{ ...getStyle(i + 2, openOption) }}
                            onClick={() => optionClicked(v)}
                        >
                            {options_list[v]}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default DropDown;
