const src = "vids/"
const thumbSrc = "thumb/"
const DATA = new Array(100).fill(2).map(id => {
    return {
        id,
        "img" : thumbSrc + id + ".png",
        "src" : src + id + ".webm",
    }
})