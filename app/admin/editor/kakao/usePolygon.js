"use client"

import { useState, useEffect } from 'react';

export function UsePolygon(thisKakao, kakaoMap, path) {
    window.kakao = thisKakao
    if ( kakaoMap ) {
        return makePolygon(kakaoMap, path)
    }
    return null
}

async function initPolygon(map, path) {
    const color = "#D3D3D3"

    // return opts(map, color, path)
    return new window.kakao.maps.Polygon({
        map: map,
    })
}

function opts(map, color, path) {
    return {
        map: map,
        path: path,
        strokeWeight : 2,
        strokeColor : color,
        strokeOpacity : 0.9,
        fillColor : color,
        fillOpacity : 0.25
    }
}

export async function getPaths() {
    const res = await fetch("/api/getMapData?c=1", {cache : "no-store"})
    const ls = await res.json()

    const paths = []
    for ( const dist of ls ) {
        dist.coordsList.forEach( (arr)=> {
            const innerPaths = []
            for ( const coords of arr ) {
                innerPaths.push(
                    new window.kakao.maps.LatLng(coords.lat, coords.lng)
                )
            }
            paths.push(innerPaths)
        })
    }
    return paths
}
