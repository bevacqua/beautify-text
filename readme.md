# beautify-text [![Build Status](https://travis-ci.org/bevacqua/beautify-text.svg?branch=master)](https://travis-ci.org/bevacqua/beautify-text)

> Automated typographic quotation and punctuation marks

## install

```
$ npm install --save beautify-text
```

## features

Prettifies several typographic marks, some cases are outlined below.

- Single and double quotes
- Apostrophes
- Marks like `(tm)`, `(c)`, `(r)` and `(p)` into `™`, `©`, `®` and `§`
- Long dashes, like `---` into `—`
- `..`, `...`, etc into `…` (but `?..`, `!..` aren't transformed)
- `+-` into `±`

## `beautifyText(text)`

```js
beautifyText('a --- "b (tm) c"');
// -> 'a \u2014 “b ™ c”'
```

## license

MIT © [Nicolas Bevacqua](https://ponyfoo.com)
