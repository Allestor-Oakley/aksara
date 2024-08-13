import "./Home.css";
import LogoAksara from "../../assets/images/logo/logo-aksara.svg";
import LogoMonoAksara from "../../assets/images/logo/logo-aksara-mono_animated.svg";
import StarrySky from "../../assets/images/background/Starry Sky.svg";
import { Link } from "react-router-dom";
import SuspenseImage from "../../components/SuspenseImage/SuspenseImage.tsx";
import { getImgUrl } from "../../utils/url/url.ts";

function Home() {
    // big_sat and small_sat will be positioned in different grid
    // to make the structure looks like this (bm = big math, bp = big physics, ...)
    // ..bm......bp..
    // ..bc......bb..
    // and small satelites (sm = small math, sp = small physics, ...)
    // ....sm..sp....
    // ..............
    // sm..........sb
    // ..............
    // ....sc..sb....
    // and then combined them to make it looks like this
    // ....sm..sp....
    // ..bm......bp..
    // sm..........sb
    // ..bc......bb..
    // ....sc..sb....
    const big_sat = ["math", "physics", "chemistry", "biology"];
    // this goes from right to left and top to bottom
    const small_sat: string[][] = [
        ["math", "math1"], //sm1
        ["physics", "physics1"], //sp1
        ["math", "math2"], //sm2
        ["biology", "biology1"], //sb1
        ["chemistry", "chemistry1"], //sc1
        ["biology", "biology2"], //sb2
    ];

    return (
        <div
            className="home"
            style={{
                backgroundImage: `url(${StarrySky})`,
                backgroundRepeat: "repeat",
                backgroundSize: "contain",
            }}
        >
            <div className="logo-button">
                {/* Aksara Logo */}
                <div className="logo-button__logo">
                    <SuspenseImage
                        className="logo__colored"
                        src={LogoAksara}
                        alt="Logo Aksara"
                    />
                    <object
                        className="logo__mono"
                        data={LogoMonoAksara}
                    ></object>
                </div>

                {/* MULAI button */}
                <Link to="/subject" style={{ textDecoration: "none" }}>
                    <div className="logo-button__button aks-btn">
                        <p>MULAI</p>
                    </div>
                </Link>
            </div>

            {/*
                    Big satellites
                    big-sat and big-sat__grid is separated,
                    so that big-sat doesn't get animated, because big-sat
                    has background to cover StarrySky background
                */}
            <div className="big-sat">
                <div className="big-sat__grid">
                    {big_sat.map((v, i) => {
                        return (
                            <SuspenseImage
                                src={getImgUrl(`planets/${v}.png`)}
                                alt={v}
                                style={{ gridArea: "s" + (i + 1) }}
                                className="big-sat__image"
                                key={i}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Small satellites */}
            <div className="small-sat">
                {small_sat.map((v, i) => {
                    return (
                        <SuspenseImage
                            src={getImgUrl(`planets/${v[0]}-sat/${v[1]}.png`)}
                            alt={v[1]}
                            style={{ gridArea: "s" + (i + 1) }}
                            className="small-sat__image"
                            key={i}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
