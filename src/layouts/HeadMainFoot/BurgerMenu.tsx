import { useState } from "react";
import "./BurgerMenu.css";

interface IBurgerMenu {
    on_click: () => void
}
function BurgerMenu({on_click}: IBurgerMenu) {
    const [clicked, setClicked] = useState(false);
    return (
        <div
            className={`burger-menu ${clicked ? "burger-menu--opened" : ""}`}
            onClick={() => {
                setClicked(!clicked);
                on_click();
            }}
        >
            <div className="burger-1 burger"></div>
            <div className="burger-2 burger"></div>
            <div className="burger-3 burger"></div>
        </div>
    );
}

export default BurgerMenu;
