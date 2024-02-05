import exp from "constants";
import KakaoMap from "./initMap";
import css from "./page.module.css"

interface initMapData {
    mapData: {
        api : string
        map : object
    }
}

export async function serverSideProps() {
    const mapData = {
        api: process.env.KAKAO_API_KEY || "" ,
        map: null
    }

    return {
        props: {
            mapData
        }
    }
}

const EditPage:React.FC<initMapData> = ({ mapData })=> {
    return (
        <div className={css._map}>
            <KakaoMap mapData={ mapData } />
        </div>
    )
}

export default EditPage