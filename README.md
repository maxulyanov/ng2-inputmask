# Angular 2 directive input mask
[![npm](https://img.shields.io/npm/dt/ng2-inputmask.svg)](https://www.npmjs.com/package/my-tooltip)
[![npm](https://img.shields.io/npm/v/ng2-inputmask.svg)](https://www.npmjs.com/package/my-tooltip)


## Install
```bash
$ npm install ng2-inputmask --save
```

## Import directive in module
```js
import { InputMaskDirective } from '../../node_modules/ng2-inputmask';
@NgModule({
  declarations: [
    InputMaskDirective
  ],
})
```

## Use
```html
  <input mask="00:00:00">
  <input mask="AAAA">
```

## Placeholders
`0` - number <br>
`A` - text char
