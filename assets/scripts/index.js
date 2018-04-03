'use strict'

const ui = require('./ui')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // $('#main-view').hide('slow')
  $('#lang-en').on('click', ui.useEnglish)
  $('#lang-es').on('click', ui.useSpanish)
  $('#lang-jp').on('click', ui.useJapanese)
  // $('#lang-cn').on('click', ui.useChinese)
})
