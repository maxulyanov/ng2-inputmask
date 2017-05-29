import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {InputMaskDirective} from './input-mask.directive';


@NgModule({
    imports: [
        FormsModule
    ],
    declarations: [
        InputMaskDirective
    ],
    exports: [
        InputMaskDirective
    ]
})
export class InputMaskModule {
}
