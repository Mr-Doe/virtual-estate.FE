"use client"
import { useState, useEffect } from "react"
import MapLoader from "./useKakaoMap"
import { ploygon } from "./mapPolygon"

interface ctrProps {
    map: Object | null
    updateMap: Function
}

export default function MapController(props: ctrProps ) {
    const [ mapInfo, setMapInfo ] = useState<{ sign: string, apiKey: string } | null>(null)
    useEffect( ()=> {
        ( async ()=> {
            const result = await ( await fetch("/api/getKeyData") ).json() as { sign: string, apiKey: string }
            setMapInfo(result)
        })()
    }, [])

    ploygon(props.map)

    return <MapLoader { ...{updateMap: props.updateMap, mapInfo: mapInfo}} />
}