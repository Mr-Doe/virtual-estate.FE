export {
    _selectMap,
    DynamicComponent,
    _map,
    updateMap
}

const _selectMap = {
    kakao: [ "",  import("./kakao/useKakaoMap") ]
}
const DynamicComponent = dynamic(
    ()=> {
        return _selectMap.kakao[1] as Promise<any>
    }, { ssr: false }
)

const _map: object
const updateMap = (newMap: Record<string, any>)=> {
    _map = { ...newMap }
}