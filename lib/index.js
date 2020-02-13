const letters = require('./letters')

function emojify ({
  background = '0',
  font = '1',
  text = '',
}) {
  return text
    .toLocaleUpperCase()
    .split('')
    .map(letter => letters[letter])
    .join('')
    .replace(/0/g, background)
    .replace(/1/g, font)
}

module.exports = emojify
