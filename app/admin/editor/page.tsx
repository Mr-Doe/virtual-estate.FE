"use client"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import SideNavigator from "./sideNavigator"

const DynamicComponent = dynamic(
    ()=> {
        return import("./kakao/mapController") as Promise<{ default: React.ComponentType<any> }>
    }, { ssr: false }
)

export default function DynamicMap() {
    const [ map, setMap ] = useState<Object | null>(null)
    const updateMap = (newMap: Record<string, Object>)=> {
        if ( map !== newMap ) {
            setMap(newMap)
        }
    }
    const [ polygonData, setPolygonData ] = useState<Object | null>(null)
    const updatePolygon = (newData: Record<string, Object>)=> {
        setPolygonData(newData)
    }
    
    return (
        <div>
            <DynamicComponent { ...{map: map, updateMap: updateMap } } />
            <SideNavigator />
        </div>
    )
}
