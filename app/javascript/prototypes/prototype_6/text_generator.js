import { sample, getFrame, getTextRect } from './utilities'

const texts = [
  'Type post text here'
]

const positions = ['top', 'bottom']

function generateText() {
  return new Promise((resolve, reject) => {
    const frame = getFrame()
    const text = sample(texts)
    const position = sample(positions)

    const textWrapper = document.createElement('div')
    const textElement = document.createElement('div')

    textWrapper.classList.add('textWrapper')
    textWrapper.classList.add(position)

    textElement.innerText = text
    textElement.contentEditable = true
    textElement.classList.add('text')

    textWrapper.appendChild(textElement)
    frame.appendChild(textWrapper)

    resolve()
  })
}

// function generateStickerOnText() {
//   return new Promise((resolve, reject) => {
//     const textRect = getTextRect()
//   })
// }

export { generateText }
