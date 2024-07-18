import HeadMainFoot from "../../layouts/HeadMainFoot/HeadMainFoot";
import './404.css'
import { Link } from "react-router-dom";

export default function Pages404() {
    return (
        <HeadMainFoot>
            <div className="block-404">
                <h1> Beep, beep, this page does not exist</h1>
                <Link to="/">
                    <div className="aks-btn"> &lt;- Kembali ke beranda</div>
                </Link>
            </div>
        </HeadMainFoot>
    )
}
