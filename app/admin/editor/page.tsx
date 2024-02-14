"use client"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import SideNavigator from "./sideNavigator"

const DynamicComponent = dynamic(
    ()=> {
        return import("./kakao/mapControl") as Promise<any>
    }, { ssr: false }
)

export default function DynamicMap() {
    const [ map, setMap ] = useState<Object | null>(null)
    const updateMap = (newMap: Record<string, Object>)=> {
        setMap(newMap)
    }

    useEffect(
        ()=> {

        }, []
    )
    
    const mapData: { map: Object | null, setMap: Function } = {
        map: map,
        setMap: updateMap
    }
    
    return (
        <div>
            {/* @ts-ignore */}
            <DynamicComponent mapData={ mapData } />
            <SideNavigator />
        </div>
    )
}