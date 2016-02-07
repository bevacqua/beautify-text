'use strict';

var rquotes = /['"\u2019]/;
var rpunctuation = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
var rscoped = /\((c|tm|r|p)\)/ig;
var scoped = {
  c: '©',
  r: '®',
  p: '§',
  tm: '™'
};

function beautifyQuotes (text) {
  if (!rquotes.test(text)) {
    return text;
  }
  return text
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018') // opening singles
    .replace(/'/g, '\u2019') // closing singles & apostrophes
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c') // opening doubles
    .replace(/"/g, '\u201d'); // closing doubles
}

function replaceScoped (match, name) {
  return scoped[name.toLowerCase()];
}

function beautifyScoped (text) {
  return text.replace(rscoped, replaceScoped);
}

function beautifyPunctuation (text) {
  if (!rpunctuation.test(text)) {
    return text;
  }
  return text
    .replace(/\+-/g, '±')
    .replace(/\.{2,}/g, '…') // .., ..., ....... -> …
    .replace(/([?!])…/g, '$1..') // ?..... & !..... -> ?.. & !..
    .replace(/([?!]){4,}/g, '$1$1$1').replace(/,{2,}/g, ',')
    .replace(/(^|[^-])---([^-]|$)/mg, '$1\u2014$2') // em-dash
    .replace(/(^|\s)--(\s|$)/mg, '$1\u2013$2') // en-dash
    .replace(/(^|[^-\s])--([^-\s]|$)/mg, '$1\u2013$2'); // en-dash
}

function beautifyText (text) {
  return beautifyQuotes(beautifyPunctuation(beautifyScoped(text)));
}

module.exports = beautifyText;
