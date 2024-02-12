"use client"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const _selectMap = {
    kakao: [ "",  import("./kakao/useKakaoMap") ]
}
const DynamicComponent = dynamic(
    ()=> {
        return _selectMap.kakao[1] as Promise<any>
    }, { ssr: false }
)

let _map: object
const updateMap = (newMap: Record<string, any>)=> {
    _map = { ...newMap }
}

export default function DynamicMap() {
    const [ apiSecret, setApiSecrect ] = useState()
    useEffect( ()=> {
        fetch("/api/getKeyData")
        .then( (res)=> res.json() )
        .then( (data)=> setApiSecrect(data) )
        .catch( (err)=> console.error("Error fetching data : ", err) )
    }, [])
    return (
        <div>
            {/* @ts-ignore */}
            <DynamicComponent mapData={ apiSecret } onMap={ updateMap } />
        </div>
    )
}