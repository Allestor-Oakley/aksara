import "./ContentSlide.css";

import { Context, ReactNode, useContext } from "react";
import HeadMainFoot from "../HeadMainFoot/HeadMainFoot";
import ArrowUp from "../../assets/images/ui/arrow-up.svg";
import useSwipe from "../../hooks/useSwipe";
import { Link } from "react-router-dom";

interface IContentSlideProp {
    content_count: number;
    preview_button_color?: string[];
    children: ReactNode;
    context: Context<{ slide: number; setSlide: (slide: number) => void }>;
    back_url?: string;
    visible_circ?: string;
}

/**
 * Komponen ini untuk membuat block yang bisa sliding (entah itu SatelliteBlock atau apalah)
 * sudah tersedia dua panah kanan dan kiri yang akan hilang kalau sudah di akhir atau awal sliding content
 * dan ada preview button yang mempermudah berpindah (apabila tidak perlu kosongkan aja [])
 *
 * @important
 * const Context = createContext({ slide: 0, setSlide: (_: number) => {} });
 * harus buat variable di atas, dan masukkan <ContentSlide> ke dalam
 * <Context.Provider value={{slide, setSlide}}>{ke_sini}<Context.Provider>
 *
 * @property content_count - Untuk menghitung lebar dari konten agar bisa sliding
 * @property preview_button_color - untuk memberi warna preview button (length-nya harus sama dengan content_count)
 * @property children - sebagai sliding content
 * @property context - gunakan variable Context diatas sebagai prop ini
 * @property visible_circ - cuma buat Material.tsx, batas jumlah logo yang muncul kalau penuh di-view
 * @property back_url - optional, kalau ada, akan ada tombol "<- kembali" di bagian bawah
 */
function ContentSlide({
    content_count,
    preview_button_color,
    children,
    context,
    visible_circ,
    back_url,
}: IContentSlideProp) {
    const { slide, setSlide } = useContext(context);

    // set slide according to the direction,
    // slide right if it's not the first
    // slide left if it's not the last
    function buttonClicked(direction: "right" | "left") {
        if (direction == "left") {
            if (slide != 0) setSlide(slide - 1);
        } else {
            if (slide != content_count - 1) setSlide(slide + 1);
        }
    }

    // this is just for the swipe movement
    const swipeHandlers = useSwipe({
        onSwipedLeft: () => buttonClicked("left"),
        onSwipedRight: () => buttonClicked("right"),
    });

    // Trust me, this works, I just can't explain how it works, so just trust me
    const blocks_style = {
        transform: `translateX(calc(-100% * ${slide}/${content_count}))`,
        width: `calc(100% * (${content_count} / ${visible_circ ?? 1}) )`,
    };

    return (
        <HeadMainFoot>
            <div className="main">
                {/* Arrow Left */}
                <div
                    className={`arrow aks-arrow aks-arrow-left ${
                        slide == 0 ? "aks-arrow-hide" : ""
                    }`}
                >
                    <img
                        onClick={() => buttonClicked("left")}
                        src={ArrowUp}
                        alt="Arrow"
                    />
                </div>

                <div className="blocks-main" {...swipeHandlers}>
                    {/* Main Slide-able content */}
                    <div className="blocks-container" style={blocks_style}>
                        {/*children prop goes here*/}
                        {children}
                    </div>

                    {/* Kembali Buttons */}
                    {/* cuma muncul kalau ada {back_url} */}
                    <div
                        className="kembali-button-cont"
                        style={{ display: back_url ? "flex" : "none" }}
                    >
                        <div className="kembali-button aks-btn">
                            <Link to={back_url ?? "/"}>&lt; Kembali</Link>
                        </div>
                    </div>

                    {/* Slide Preview Buttons */}
                    <div
                        className={`slide-preview-container`}
                        style={{
                            display:
                                preview_button_color == undefined
                                    ? "none"
                                    : "flex",
                        }}
                    >
                        <div className="slide-preview">
                            {preview_button_color?.map((v, i) => {
                                const cName = `preview-button ${
                                    slide == i ? "highlight-pb" : ""
                                }`;
                                return (
                                    <div
                                        className={cName}
                                        style={{
                                            backgroundColor: v,
                                        }}
                                        key={i}
                                        onClick={() => setSlide(i)}
                                    ></div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="swipe-guide">&lt;- Swipe -&gt;</div>
                </div>

                {/* Arrow Right */}
                <div
                    className={`arrow aks-arrow aks-arrow-right ${
                        slide == content_count - 1 ? "aks-arrow-hide" : ""
                    }`}
                >
                    <img
                        onClick={() => buttonClicked("right")}
                        src={ArrowUp}
                        alt="Arrow"
                    />
                </div>
            </div>
        </HeadMainFoot>
    );
}

export default ContentSlide;
