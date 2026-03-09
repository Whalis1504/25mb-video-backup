var savedInnerHtml = ""
var savedTop = 0
async function init() {
  var a = ""
  DATA.forEach((i, id) => {
    const thumbnail = `<img onclick = "generateVideo('${i.src}', 'th${id}')" loading = "lazy" class = "thumbnail" id = "th${id}" src="${i.img}" width="300">`
    const textBelow = `<div class = "desc text">ID:${i.id}~Desc comin soon</div>`
    a += `<div id = "${id}" class = "entry">${thumbnail}${textBelow}</div>`
  })
  document.getElementById('container').innerHTML = a
}

function copyToClipboard(a, id) {
  document.getElementById("fuckthisshit").value = arr[id].src
  if (!a || !a.length) alert('nothing to save');
  else {
    try {
      navigator.clipboard.writeText(a);
      alert(`saved to clipboard1`)
    } catch (err) {
      try {
        document.getElementById("fuckthisshit").select()
        document.execCommand('copy')
        alert(`saved to clipboard2`)
      } catch (err) {
        alert('failed to copy')
      }
    }
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateVideo(localLink, id) {
  //console.log(id)
  savedInnerHtml = document.getElementById('container').innerHTML
  savedTop = document.getElementById('container').scrollTop

  // document.getElementById("backbutton").classList.remove("invi")
  // document.getElementById("numberInput").classList.remove("invi")
  // document.getElementById("backwards").classList.remove("invi")
  // document.getElementById("forwards").classList.remove("invi")
  switchOn("videoControls")

  document.getElementById(id).classList.add("full")
  await sleep(870)

  document.getElementById('container').innerHTML = `<video muted="muted" class = "videoBox" controls src="${localLink}" type="video/mp4" >`
  document.getElementsByClassName('videoBox')[0].play()
}

//return from the full-screen video to thee list
function back() {
  // document.getElementById("backbutton").classList.add("invi")
  // document.getElementById("numberInput").classList.add("invi")
  // document.getElementById("backwards").classList.add("invi")
  // document.getElementById("forwards").classList.add("invi")
  switchOff("videoControls")

  document.getElementById('container').innerHTML = savedInnerHtml
  document.getElementById('container').scrollTop = savedTop
}

//skip backward in time
function backward() {
  var a = Number(document.getElementById("numberInput").value)
  var element = document.getElementsByClassName('videoBox')[0]
  a = (!a) ? 10 : a
  var x = element.currentTime - a
  if (x <= 0) { element.currentTime = 0 }
  else element.currentTime = x
}

//skip forward in time
function forward() {
  var a = Number(document.getElementById("numberInput").value)
  var element = document.getElementsByClassName('videoBox')[0]
  a = (!a) ? 10 : a
  var x = element.currentTime + a
  if (x <= 0) { element.currentTime = 0 }
  else element.currentTime = x
}

//switch off the full-screen video display
function switchOff(parentId) {
  var element = document.getElementById(parentId).childNodes
  for (var i = 0; i < element.length; i++) {
    try {
      element[i].classList.add("invi")
    } catch (err) {
      //do nothing, ignore, probably text element that cant be changed
    }
  }
}

//switch on the full-screen video display
function switchOn(parentId) {
  var element = document.getElementById(parentId).childNodes
  for (var i = 0; i < element.length; i++) {
    try {
      element[i].classList.remove("invi")
    } catch (err) {
      //do nothing, ignore, probably text element that cant be changed
    }
  }
}