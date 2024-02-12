"use client"
import { useEffect } from "react"

export default function InitMap(props: { mapData: { sign: string, apiKey: string}, onMap: Function }) {
    let map: {}
    useEffect( ()=> {
        if ( props.mapData ) {
            const scrip = document.createElement("script")
            scrip.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${ props.mapData.apiKey }&autoload=false`
            // scrip.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=7e762a89d43d0768cf57b7867f72b37b&autoload=false`
            scrip.id = props.mapData.sign
            
            if (!document.querySelector(`#${props.mapData.sign}`)) {
                document.head.appendChild(scrip)
    
                scrip.onload = ()=> {
                    // @ts-ignore
                    window.kakao.maps.load( ()=> {
                        // @ts-ignore
                        map = new window.kakao.maps.Map(document.querySelector("#map"), {
                            // @ts-ignore
                            center: new window.kakao.maps.LatLng(37.566610, 126.978388),
                            level: 7,
                            // @ts-ignore
                            mapTypeId: window.kakao.maps.MapTypeId.SKYVIEW,
                            disableDoubleClick: true,
                        })
    
                        // @ts-ignore
                        delete window.kakao
                        document.querySelector(`#${props.mapData.sign}`)?.remove()
                        props.onMap(map)
                    })
                }
            }
        }
    }, [props])

    return <div id="map" style={{ width: "100vw", height: "100vh" }} />
}