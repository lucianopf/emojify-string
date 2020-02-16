# emojify-string

This project aims to convert regular strings into strings made of emojis or whatever you like.

## Install

```sh
npm install --save emojify-string
```

## Example

```js
const emojify = require('emojify-string')

const parsedString = emojify({
  text: 'test',
  background: ':jack_o_lantern:',
  font: ':invisibleparrot:',
})
```

Result:

<details>
  <summary>Click to here to check the result!</summary>

```
:jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern:
:jack_o_lantern::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::jack_o_lantern:
:jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::invisibleparrot::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern:
:jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::invisibleparrot::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern:
:jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::invisibleparrot::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern:
:jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::invisibleparrot::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern:
:jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::invisibleparrot::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern:
:jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::invisibleparrot::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern:
:jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern:
:jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern:
:jack_o_lantern::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::jack_o_lantern:
:jack_o_lantern::invisibleparrot::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern:
:jack_o_lantern::invisibleparrot::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern:
:jack_o_lantern::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::jack_o_lantern:
:jack_o_lantern::invisibleparrot::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern:
:jack_o_lantern::invisibleparrot::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern:
:jack_o_lantern::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::jack_o_lantern:
:jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern:
:jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern:
:jack_o_lantern::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::jack_o_lantern:
:jack_o_lantern::invisibleparrot::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern:
:jack_o_lantern::invisibleparrot::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern:
:jack_o_lantern::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::jack_o_lantern:
:jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::invisibleparrot::jack_o_lantern:
:jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::invisibleparrot::jack_o_lantern:
:jack_o_lantern::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::jack_o_lantern:
:jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern:
:jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern:
:jack_o_lantern::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::invisibleparrot::jack_o_lantern:
:jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::invisibleparrot::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern:
:jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::invisibleparrot::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern:
:jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::invisibleparrot::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern:
:jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::invisibleparrot::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern:
:jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::invisibleparrot::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern:
:jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::invisibleparrot::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern:
:jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern::jack_o_lantern:
```
</details>

<br/>

<img width="243" alt="Screen Shot 2020-02-13 at 16 18 21" src="https://user-images.githubusercontent.com/8251208/74470093-9fac4580-4e7c-11ea-860a-da0c72555ac4.png">
