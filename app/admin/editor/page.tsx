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
        setMap(newMap)
    }
    
    return (
        <div>
            <DynamicComponent { ...{ map: map, updateMap: updateMap } } />
            <SideNavigator />
        </div>
    )
}
