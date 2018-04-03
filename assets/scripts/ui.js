'use strict'

const useEnglish = function () {
  $('#favicon-locale').attr('href', './favicon-en.ico')
  $('#title-locale').text('English')
  $('#pagehead-locale').text('Simple Localization Demo')
  $('#body-locale').text('This is a rudimentary example of how localization could be implemented in a rudimentary way.  Obviously, this would be inefficient for anything other than the most basic of applications.  However, it demonstrates the possibilities of using localization to extend the reach of your application to markets outside your native country.')
}

const useSpanish = function () {
  $('#favicon-locale').attr('href', './favicon-es.ico')
  $('#title-locale').text('Español')
  $('#pagehead-locale').text('Ejemplo simple de localización')
  $('#body-locale').text('Esto es un ejemplo simple de cómo se puede usar la localización en su aplicación. Obviamente, este metodo sería suficiente solo para las aplicaciones mas basica. Sin embargo, demuestra las posibilidades para extender el alcance de su aplicación a mercados en países extranjero.')
}

const useJapanese = function () {
  $('#favicon-locale').attr('href', './favicon-jp.ico')
  $('#title-locale').text('日本の')
  $('#pagehead-locale').text('シンプルなローカリゼーションのデモ')
  $('#body-locale').text('これは、ローカライゼーションが基本的な方法でどのように実装されるかの基本的な例です。 明らかに、これは最も基本的なアプリケーション以外のものにとっては非効率的である。 ただし、ローカリゼーションを使用してアプリケーションの範囲を本国以外の市場に拡大する可能性があることを示しています。')
}

const useChinese = function () {
  $('#favicon-locale').attr('href', './favicon-cn.ico')
  $('#title-locale').text('')
  $('#pagehead-locale').text('')
  $('#body-locale').text('')
}

module.exports = {
  useEnglish,
  useSpanish,
  useJapanese,
  useChinese
}
