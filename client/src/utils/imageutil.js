function getImageUrl(name){
    return new URL(`../images/${name}`,import.meta.url).href
}
export{getImageUrl}