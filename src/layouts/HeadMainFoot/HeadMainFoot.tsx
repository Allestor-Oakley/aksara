import { ReactNode, useState } from "react";
import "./HeadMainFoot.css";
import AksaraLogo from "../../assets/images/logo/logo-aksara.svg";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";

interface IHeadMainFoot {
    children: ReactNode;
}

function HeadMainFoot({ children }: IHeadMainFoot) {
    const [navDown, setNavDown] = useState(false);
    return (
        <div id="hmf">
            <header>
                <div className="aksara-container">
                    <Link to="/">
                        <img src={AksaraLogo} alt="" />
                    </Link>
                    <BurgerMenu on_click={() => setNavDown(!navDown)} />
                </div>
                <div
                    className={`navbar-buttons ${navDown ? "navbtn-down" : ""}`}
                >
                    <div style={{ gridArea: "aksara" }} className="aks-btn">
                        <Link to={'/'}>
                            Aksara
                        </Link>
                    </div>
                    <div style={{ gridArea: "download" }} className="aks-btn">
                        <Link to={'/download'}>
                            Download
                        </Link>
                    </div>
                    <div style={{ gridArea: "tentang" }} className="aks-btn">
                        <Link to={'/about'}>
                            Tentang
                        </Link>
                    </div>
                </div>
            </header>
            <main>{children}</main>
            <footer>© 2024 Aksara</footer>
        </div>
    );
}

export default HeadMainFoot;
