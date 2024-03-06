"use client"
import { useState, useEffect } from "react"
import MapLoader from "./useKakaoMap"
import { UsePolygon, getPaths } from "./usePolygon"

interface ctrProps {
    map?: kakao.maps.Map
    updateMap: Function
}

export default function MapController(props: ctrProps ) {
    const [ kakao, setKakao ] = useState<Object | null>(null)
    const saveKakao = (newKakao: Object)=> setKakao(newKakao)

    const [ mapInfo, setMapInfo ] = useState<{ sign: string, apiKey: string } | null>(null)

    const [ polygon, setPolygon ] = useState<kakao.maps.Polygon | null>(null)

    useEffect( ()=> {
        ( async ()=> {
            setMapInfo(await ( await fetch("/api/getKeyData") ).json() as { sign: string, apiKey: string })
        })()
        
        props.map && setPolygon(
            new window.kakao.maps.Polygon({ map : props.map, path : [] })
        )
        console.log(polygon)
    }, [])
    

    return <MapLoader { ...{  saveKakao: saveKakao, updateMap: props.updateMap, mapInfo: mapInfo }} />
}