ng2-inputmask
[![npm](https://img.shields.io/npm/dt/ng2-inputmask.svg)](https://www.npmjs.com/package/ng2-inputmask)
[![npm](https://img.shields.io/npm/v/ng2-inputmask.svg)](https://www.npmjs.com/package/ng2-inputmask)
===============
Angular 2 directive input mask

## Installation

To install this library, run:

```bash
$ npm install ng2-inputmask --save
```

## Consuming your library

import library in any Angular application by running:

```bash
$ npm install ng2-inputmask
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import library
import { InputMaskModule } from 'ng2-inputmask';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    InputMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Use
```html
  <input mask="00:00:00">
  <input mask="AAAA">
```

## Placeholders
`0` - number <br>
`A` - text char

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

