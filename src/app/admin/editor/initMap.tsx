'use client'

import { useEffect } from "react"

// @ts-ignore
export default function KakaoMap(props) {
    useEffect( ()=> {
        console.log(props)
        // const KEY = props.mapData.api;
        const KEY = ""
        const URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${ KEY }&autoload=false`
        
        const prevAPI = document.querySelector("#apiKey") as HTMLScriptElement
        const SCRIPT = document.createElement('script')
        if(prevAPI) {
            if(prevAPI.src !== `http:${URL}`) prevAPI.src = URL
        }else {
            SCRIPT.id = "apiKey"
            SCRIPT.src = URL
            document.head.appendChild(SCRIPT)
        }

        SCRIPT.addEventListener("load", ()=> {
            // @ts-ignore
            window.kakao.maps.load( ()=> {
                // @ts-ignore
                props.mapData.map = new window.kakao.maps.Map(document.querySelector("div"), {
                    // @ts-ignore
                    center: new window.kakao.maps.LatLng(37.551891, 126.991793),
                    level: 7
                })
            })
        })
    }, [])
    return <div />
}
