export function Controls ({
btnPause,
btnPlay,
btnSet,
btnStop,
}) {

function reset(){
  btnStop.classList.add('hide')
  btnSet.classList.remove('hide')
  btnPlay.classList.remove('hide')
  btnPause.classList.add('hide')
}
function play(){
  btnPlay.classList.add('hide')
  btnPause.classList.remove('hide')
  btnStop.classList.remove('hide')
  btnSet.classList.add('hide')
}
function pause(){
  btnPlay.classList.remove('hide')
  btnPause.classList.add('hide')
}
function getMinutes(){
  let newMinutes = prompt('Quantos minutos ?')
  if(!newMinutes) {
    return false
  }
  return newMinutes
}

return {
  reset,
  play,
  pause,
  getMinutes,
}

}