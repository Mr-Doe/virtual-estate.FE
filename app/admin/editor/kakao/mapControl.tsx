"use client"
import { useState, useEffect } from "react"
import InitMap from "./useKakaoMap"

export default function MapControl(props: { mapData: { map: Object | null, setMap: Function }}) {
    // console.log(props)
    const [ mapInfo, setMapInfo ] = useState<{ sign: string, apiKey: string } | null>(null)
    useEffect( ()=> {
        ( async ()=> {
            const result = await ( await fetch("/api/getKeyData") ).json() as { sign: string, apiKey: string }
            setMapInfo(result)
        })()
    }, [])

    return <InitMap mapInfo={ mapInfo } setMap={ props.mapData.setMap } />
}