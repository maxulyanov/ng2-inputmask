import { Directive, HostListener, Input, ElementRef } from '@angular/core';


const placeholders = {
  'A': '^[a-zA-ZA-zА-яЁё]',
  '0': '\\d'
};


interface iState {
  value: string
}


@Directive({
  selector: '[mask]'
})


export class InputMaskDirective {

  private state: iState;

  @Input() mask: any;

  /**
   *
   * @param element
   */
  constructor(private element: ElementRef) {
    this.state = {
      value: this.getValue()
    };
  }


  /**
   *
   */
  @HostListener('input')
  public onChange(): void {
    this.applyMask(this.getClearValue(this.getValue()));
  }

  /**
   *
   * @param event
   */
  @HostListener('keypress', ['$event'])
  public onKeyPress(event): void {
    const cursorPosition = this.getCursorPosition();
    let regexp = this.createRegExp(cursorPosition);
    if(regexp != null && !regexp.test(event.key)) {
      event.preventDefault();
    }
  }

  /**
   *
   */
  public ngOnInit(): void {
    this.applyMask(this.getClearValue(this.getValue()));
  }

  /**
   *
   * @param value
   */
  private applyMask(value): void {
    let newValue = '';
    let maskPosition = 0;

    if(this.getClearValue(value).length > this.getClearValue(this.mask).length) {
      this.setValue(this.state.value);
      return;
    }

    for(let i = 0; i < value.length; i++) {
      let current = value[i];

      let regexp = this.createRegExp(maskPosition);
      if(regexp != null) {
        if(!regexp.test(current)) {
          this.setValue(this.state.value);
          break;
        }
        newValue += current;
      }
      else if(this.mask[maskPosition] === current) {
        newValue += current;
      }
      else {
        newValue += this.mask[maskPosition];
        i--;
      }

      maskPosition++;
    }

    const nextMaskElement = this.mask[maskPosition];
    if(nextMaskElement != null && /^[-\/\\^$#&@№:<>_\^!*+?.()|\[\]{}]/.test(nextMaskElement)) {
      newValue += nextMaskElement;
    }

    const oldValue = this.state.value;
    const cursorPosition = this.getCursorPosition();
    this.setValue(newValue);
    this.state.value = newValue;

    if(oldValue.length >= newValue.length) {
      this.setCursorPosition(cursorPosition);
    }

  }

  /**
   *
   * @param position
   * @returns {any}
   */
  private createRegExp(position): RegExp | null {
    if(this.mask[position] == null) return null;

    const currentSymbol = this.mask[position].toUpperCase();
    const keys = Object.keys(placeholders);
    const searchPosition = keys.indexOf(currentSymbol);
    if(searchPosition >= 0) {
      return new RegExp(placeholders[keys[searchPosition]], 'gi');
    }
    return null;
  }


  /**
   *
   * @returns {any}
   */
  private getValue(): string {
    return this.element.nativeElement.value;
  }

  /**
   *
   * @param value
   * @returns {string}
   */
  private getClearValue(value): string {
    return value.trim().replace(/[-\/\\^$#&@№:<>_\^!*+?.()|\[\]{}]/gi, '');
  }

  /**
   *
   * @param value
   */
  private setValue(value: string): void {
    this.element.nativeElement.value = value;
  }

  /**
   *
   * @returns {number}
   */
  private getCursorPosition(): number {
    return this.element.nativeElement.selectionStart;
  }

  /**
   *
   * @param start
   * @param end
   */
  private setCursorPosition(start: number, end: number = start): void {
    this.element.nativeElement.setSelectionRange(start, end);
  }

}
