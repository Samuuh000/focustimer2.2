import { Timer } from './timer.js'
import { Controls } from './controls.js'
import { elements } from './elements.js'
import Sound from './sounds.js'

let forestVolume = document.querySelector('.volumeForest')
let cloudyVolume = document.querySelector('.volumeCloudy')
let coffeeVolume = document.querySelector('.volumeCoffee')
let flameVolume = document.querySelector('.volumeFlame')

const {
  btnCloudy,
  btnCoffee,
  btnDark,
  btnFlame,
  btnForest,
  btnLight,
  btnMinus,
  btnPause,
  btnPlay,
  btnPlus,
  btnSet,
  btnStop,
  minutesDisplay,
  secondsDisplay
} = elements

const sound = Sound()

const controls = Controls({
  btnPause,
  btnPlay,
  btnSet,
  btnStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

function themeLight() {
  btnDark.classList.add('hide')
  btnLight.classList.remove('hide')
  document.documentElement.classList.add('theme-light')
  document.documentElement.classList.remove('theme-dark')
}
function themeDark() {
  btnLight.classList.add('hide')
  btnDark.classList.remove('hide')
  document.documentElement.classList.add('theme-dark')
  document.documentElement.classList.remove('theme-light')
}

btnDark.addEventListener('click', function () {
  themeLight()
  sound.pressButton()
})
btnLight.addEventListener('click', function () {
  themeDark()
  sound.pressButton()
})
btnPlay.addEventListener('click', function () {
  controls.play()
  timer.countdown()
  sound.pressButton()
})
btnPause.addEventListener('click', function () {
  controls.pause()
  timer.hold()
  sound.pressButton()
})
btnStop.addEventListener('click', function () {
  controls.reset()
  timer.reset()
  sound.pressButton()
})
btnSet.addEventListener('click', function () {
  let newMinutes = controls.getMinutes()

  if (!newMinutes) {
    timer.reset()
    return
  }

  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
  sound.pressButton()
})
btnPlus.addEventListener('click', function () {
  sound.pressButton()
  timer.plusMinutes()
})
btnMinus.addEventListener('click', function () {
  sound.pressButton()
  timer.minusMinutes()
})

btnCloudy.addEventListener('click', function () {
  btnCloudy.classList.toggle('on')
  btnForest.classList.remove('on')
  btnCoffee.classList.remove('on')
  btnFlame.classList.remove('on')
  sound.playAudio(btnCloudy, sound.musics.cloudy)
})
btnForest.addEventListener('click', function () {
  btnForest.classList.toggle('on')
  btnCloudy.classList.remove('on')
  btnCoffee.classList.remove('on')
  btnFlame.classList.remove('on')
  sound.playAudio(btnForest, sound.musics.forest)
})
btnFlame.addEventListener('click', function () {
  btnFlame.classList.toggle('on')
  btnForest.classList.remove('on')
  btnCoffee.classList.remove('on')
  btnCloudy.classList.remove('on')
  sound.playAudio(btnFlame, sound.musics.flame)
})
btnCoffee.addEventListener('click', function () {
  btnCoffee.classList.toggle('on')
  btnForest.classList.remove('on')
  btnCloudy.classList.remove('on')
  btnFlame.classList.remove('on')
  sound.playAudio(btnCoffee, sound.musics.coffee)
})

forestVolume.addEventListener('change', function () {
  let volumeForest = forestVolume.value
  sound.musics.forest.volume = volumeForest
})

cloudyVolume.addEventListener('change', function () {
  let volumeCloudy = cloudyVolume.value
  sound.musics.cloudy.volume = volumeCloudy
})

flameVolume.addEventListener('change', function () {
  let volumeFlame = flameVolume.value
  sound.musics.flame.volume = volumeFlame
})

coffeeVolume.addEventListener('change', function () {
  let volumeCoffee = coffeeVolume.value
  sound.musics.coffee.volume = volumeCoffee
})
