import { generateBackground } from '../prototypes/prototype_6/background_generator'
import { generateText } from '../prototypes/prototype_6/text_generator'
import html2canvas from 'html2canvas'

function checkRect() {
  const textWrapper = document.getElementsByClassName('textWrapper')[0]
  const boundingRect = textWrapper.getBoundingClientRect()
  console.log(boundingRect)
}

function generateStory() {
  generateBackground()
    .then(circleTypes)
    .then(generateText)
    .then(checkRect)
}


const particlesQuantity = [1,1]

// [class-name, min-diameter, max-diameter, min-layer, max-layer]
// prettier-ignore
const circleTypes = [
  ['Bubble01-400',      300,  812,  1, 1],
  ['Bubble02-400',      300,  812,  1, 1],
  ['Ellipse01-400',      300,  812,  1, 1],
  ['Ellipse02-400',      300,  812,  1, 1],
  ['Ellipse03-400',      300,  812,  1, 1],
  ['Ellipse04-400',      300,  812,  1, 1],
  ['Ellipse05-400',      300,  812,  1, 1],
  ['Ellipse06-400',      300,  812,  1, 1],
  ['Firework00-400',      300,  812,  1, 1],
  ['Firework01-400',      300,  812,  1, 1],
  ['Firework02-400',      300,  812,  1, 1],
  ['Firework03-400',      300,  812,  1, 1],
  ['Firework04-400',      300,  812,  1, 1],
  ['Firework05-400',      300,  812,  1, 1],
  ['Firework06-400',      300,  812,  1, 1],
  ['Firework07-400',      300,  812,  1, 1],
  ['start01-400',      300,  812,  1, 1],
  ['start02-400',      300,  812,  1, 1],
  ['start03-400',      300,  812,  1, 1],
  ['start04-400',      300,  812,  1, 1],
  ['start05-400',      300,  812,  1, 1],
  ['Vector107-400',      300,  812,  1, 1],

  ['Bubble01-700',      300,  812,  1, 1],
  ['Bubble02-700',      300,  812,  1, 1],
  ['Ellipse01-700',      300,  812,  1, 1],
  ['Ellipse02-700',      300,  812,  1, 1],
  ['Ellipse03-700',      300,  812,  1, 1],
  ['Ellipse04-700',      300,  812,  1, 1],
  ['Ellipse05-700',      300,  812,  1, 1],
  ['Ellipse06-700',      300,  812,  1, 1],
  ['Firework00-700',      300,  812,  1, 1],
  ['Firework01-700',      300,  812,  1, 1],
  ['Firework02-700',      300,  812,  1, 1],
  ['Firework03-700',      300,  812,  1, 1],
  ['Firework04-700',      300,  812,  1, 1],
  ['Firework05-700',      300,  812,  1, 1],
  ['Firework06-700',      300,  812,  1, 1],
  ['Firework07-700',      300,  812,  1, 1],
  ['start01-700',      300,  812,  1, 1],
  ['start02-700',      300,  812,  1, 1],
  ['start03-700',      300,  812,  1, 1],
  ['start04-700',      300,  812,  1, 1],
  ['start05-700',      300,  812,  1, 1],
  ['Vector107-700',      300,  812,  1, 1],

]

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

function sample(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function createCircle(frame) {
  const circleElement = document.createElement('div')
  const circleType = sample(circleTypes)
  circleElement.classList.add('circle')

  const top = getRandomArbitrary(0, 0)
  const left = getRandomArbitrary(0, 0)
  const size = getRandomArbitrary(circleType[1], circleType[2])

  circleElement.style.top = [top, 'px'].join('')
  circleElement.style.left = [left, 'px'].join('')
  circleElement.style.width = [size, 'px'].join('')
  circleElement.style.height = [size, 'px'].join('')

  circleElement.style.zIndex = Math.floor(
    getRandomArbitrary(circleType[3], circleType[4])
  )

  circleElement.style.transform = `rotate(${getRandomArbitrary(-15, 15)}deg)`
  circleElement.classList.add(circleType[0])

  frame.appendChild(circleElement)
}

function generateHash() {
  const symbols = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5]
  let hash = ''

  for (var i = 0; i < 6; i++) {
    hash += sample(symbols)
  }

  return hash
}

function generateImage() {
  return new Promise((resolve, reject) => {
    const container = document.getElementsByClassName('prototype_6')[0]

    html2canvas(container).then((canvas) => {
      canvas.style.position = 'absolute'
      canvas.style.left = '-99999px'
      document.body.appendChild(canvas)

      resolve()
    })
  })
}

function downloadImage() {
  const canvas = document.getElementsByTagName('canvas')[0]
  const imageData = canvas.toDataURL('image/png')

  const link = document.createElement('a')
  link.download = `Day-${generateHash()}.png`
  link.href = imageData
  link.click()
  link.remove()

  canvas.remove()
}


document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementsByClassName('prototype_6')[0]
  const frame = document.createElement('div')
  frame.classList.add('frame')
  container.appendChild(frame)
  generateStory()



  const button = document.createElement('div')
  button.classList.add('downloadButton')
  button.innerText = 'Download'
  document.body.appendChild(button)

  button.addEventListener('click', () => {
    generateImage().then(downloadImage)
  })

  for (var i = 0; i < sample(particlesQuantity); i++) {
    createCircle(frame)
  }
})
