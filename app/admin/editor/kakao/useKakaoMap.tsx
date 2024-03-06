"use client"
import { useEffect } from "react"

type MapProps = {
    saveKakao: Function
    updateMap : Function
    mapInfo: null | {
        sign: string
        apiKey: string
    }
}

export default function MapLoader(props: MapProps) {
    let map: {}
    useEffect( ()=> {
        if ( props.mapInfo ) {
            const scrip = document.createElement("script")
            scrip.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${ props.mapInfo.apiKey }&autoload=false`
            scrip.id = props.mapInfo.sign
            
            if (!document.querySelector(`#${props.mapInfo.sign}`)) {
                document.head.appendChild(scrip)
    
                scrip.onload = ()=> {
                    kakao.maps.load( ()=> {
                        map = new kakao.maps.Map(document.querySelector("#map") as HTMLElement, {
                            center: new kakao.maps.LatLng(37.566610, 126.978388),
                            level: 8,
                            mapTypeId: kakao.maps.MapTypeId.SKYVIEW,
                            disableDoubleClick: true,
                        })
    
                        if (props.mapInfo) {
                            props.updateMap(map)
                            document.querySelector(`#${props.mapInfo.sign}`)?.remove()
                            props.saveKakao(kakao)
                            // @ts-ignore
                            delete window.kakao
                        }
                    })
                }
            }
        }
    }, [props.mapInfo])


    return <div className="absolute" id="map" style={{ width: "100vw", height: "100vh" }} />
}