'use client'

import { useEffect } from "react"

export function KakaoMap(props: {}) {
    useEffect( ()=> {
        const KEY = "7e762a89d43d0768cf57b7867f72b37b"
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
                new window.kakao.maps.Map(document.querySelector("div"), {
                    // @ts-ignore
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3
                })
            })
        })
    }, [])
    return <div />
}