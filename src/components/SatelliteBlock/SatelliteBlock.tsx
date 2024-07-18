import "./SatelliteBlock.css";
import { Keyframes } from "../Keyframes/Keyframes";
import { getImgUrl } from "../../utils/url/url";
import { ReactNode } from "react";

// biar lebih gampang aja nulisnya,
function getTransform(x: number, y: number, deg: number) {
    return `rotate(${deg}deg) translate(${x}px, ${y}px) rotate(-${deg}deg)`;
}

interface ISatelliteBlockProps {
    sattelite_url: string[];
    class_name: string;
    children: ReactNode;
}

/**
    This is component to make a block where there is "main element" (could be anything)
    and then there are satellites that orbiting that "main element", {children} props
    will be the "main element", {class_name} props can be used for manipulating the
    appearance of this block, {satellite_url} is a string[]
*/
function SatelliteBlock({
    sattelite_url,
    class_name,
    children,
}: ISatelliteBlockProps) {
    let satSize = [80, 65, 50, 35];
    satSize = satSize.concat(satSize.reverse());

    // radius untuk jarak satelit ke pusat logo
    // R untuk mengubah derajat agar bisa dimasukkan ke Math.sin/cos
    const radius = 250;
    const R = Math.PI / 180;

    return (
        <div className={"satblock " + class_name}>
            <div className="satblock-main-img">{children}</div>

            {/*
                Bagian ini cuma ngebuat biar satelit ada di posisi yang benar
                4 di kanan, 4 di kiri, dengan jarak yang sama (jadi pakai sudut, kira-kira
                36deg setiap satelitnya, dan ambil satSize sebagai panduan ukuran untuk setiap satelitnya,
                36deg karena satelit mengisi 4 point di kanan/kiri, tapi titik atas dan bawah tidak diisi

                dan dengan menggunakan <Keyframes /> untuk membuat keyframes untuk setiap satelit,
                jadi setiap satelit punya animasinya masing2, semua ini dilakukan agar satelit
                bergerak melingkar, tapi tidak berputar di sumbu z satelit itu sendiri
            */}
            <div className="satellites">
                {satSize.map((val, idx) => {
                    // kalau di kiri, mulai dari 90deg dan ke bawah +36deg
                    let degree = 90 + 36 * (idx + 1);
                    // kalau di kanan, mulai dari 270deg dan ke atas +36deg
                    if (idx > 3) {
                        degree = 270 + 36 * (idx + 1 - 4);
                    }
                    let x = radius * Math.cos(degree * R);
                    let y = radius * Math.sin(degree * R);

                    const size = val + "px";
                    const ani_name = "small-sat-orb-" + idx;
                    return (
                        <div key={ani_name}>
                            {/*
                                muter, dari 0deg sampe 360deg, jadi satu putaran
                            */}
                            <Keyframes
                                name={ani_name}
                                from={{ transform: getTransform(x, y, 0) }}
                                to={{ transform: getTransform(x, y, 360) }}
                            />

                            <img
                                src={getImgUrl(sattelite_url[idx])}
                                style={{
                                    height: size,
                                    width: size,
                                    animationName: ani_name,
                                    // margin gini biar tiap satelit mulainya
                                    // ditengah, jadinya tiap satelit dalam koordinat (0,0)
                                    margin:
                                        -(val / 2) +
                                        "px 0 0 " +
                                        -val / 2 +
                                        "px",
                                }}
                                alt="logo"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SatelliteBlock;
