"use client"
import { useEffect } from "react"

export default function InitMap(props: { mapInfo: { sign:string, apiKey:string } | null, setMap:Function } ) {
    let map: {}
    useEffect( ()=> {
        if ( props.mapInfo ) {
            const scrip = document.createElement("script")
            scrip.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${ props.mapInfo.apiKey }&autoload=false`
            scrip.id = props.mapInfo.sign
            
            if (!document.querySelector(`#${props.mapInfo.sign}`)) {
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
    
                        if (props.mapInfo) {
                            // @ts-ignore
                            delete window.kakao
                            document.querySelector(`#${props.mapInfo.sign}`)?.remove()
                            props.setMap(map)
                        }
                    })
                }
            }
        }
    }, [props.mapInfo])

    return <div className="absolute" id="map" style={{ width: "100vw", height: "100vh" }} />
}