function shorten(str, wantedLength, paddingLength) {
  if (str.length <= wantedLength) return str
  if (wantedLength <= paddingLength) return new Array(wantedLength).fill(".").join("")
  var pad = new Array(paddingLength).fill(".").join("")
  return str.split("").slice(0, wantedLength).join("") + pad
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

function backward() {
  var a = Number(document.getElementById("numberInput").value)
  var element = document.getElementsByClassName('videoBox')[0]
  a = (!a) ? 10 : a
  var x = element.currentTime - a
  if (x <= 0) { element.currentTime = 0 }
  else element.currentTime = x
}

function forward() {
  var a = Number(document.getElementById("numberInput").value)
  var element = document.getElementsByClassName('videoBox')[0]
  a = (!a) ? 10 : a
  var x = element.currentTime + a
  if (x <= 0) { element.currentTime = 0 }
  else element.currentTime = x
}

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