const src = "vids/"
const thumbSrc = "thumb/"
const DATA = [1, 2, 3, 12].map(id => {
    return {
        id,
        "img" : thumbSrc + id + ".png",
        "src" : src + id + ".webm",
    }
})