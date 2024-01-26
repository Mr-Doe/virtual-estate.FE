import { KakaoMap } from "./initMap";
import css from "./page.module.css"

export default function EditPage() {
    return (
        <div className={css._map}>
            <KakaoMap api={ process.env.KAKAO_API_KEY || "" } />
        </div>
    )
}