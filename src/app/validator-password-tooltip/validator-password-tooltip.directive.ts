
import { Directive, Input, OnInit } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';


@Directive({
    selector: '[validatorTooltip]',
    exportAs: 'validatorTooltip'
})
export class ValidatorPasswordTooltipDirective extends MatTooltip implements OnInit {

  ngOnInit(): void {
    super.tooltipClass = 'validator-password-tooltip';
  }

  @Input()
  get validatorTooltip() { return this.message; }

  set validatorTooltip(value: string) {
    this.message = this.getMessage(value);
    this.show();
  }

  private getMessage(value: string): string {
    const text = `${this.getTextRoleNumber(this.hasAnyNumber(value))}
    ${this.getTextRoleUpper(this.hasAnyUpper(value))}
    ${this.getTextRoleLower(this.hasAnyLower(value))}
    ${this.getTextRoleSpecial(this.hasAnySpecial(value))}
    ${this.getTextRoleLimit(this.hasLimit(value))}`;

    return text;
  }

  private getTextRoleNumber(showIcon: boolean): string { return `${this.getIcon(showIcon)} - Password must contain at least 1 number (0-9)\n` }

  private getIcon(showIcon: boolean): string { return `${showIcon ? '✅' : '❌'}` }
  
  private hasAnyNumber(value: string): boolean { return /[0-9]/.test(value) }
  
  private getTextRoleUpper(showIcon: boolean): string { return `${this.getIcon(showIcon) } - Password must contain at least 1 uppercase letter\n` }
  
  private hasAnyUpper(value: string): boolean { return /[A-Z]/.test(value) }
  
  private getTextRoleLower(showIcon: boolean): string { return `${this.getIcon(showIcon) } - Password must contain at least 1 lowercase letter\n` }
  
  private hasAnyLower(value: string): boolean { return /[a-z]/.test(value) }
  
  private getTextRoleSpecial(showIcon: boolean): string { return `${this.getIcon(showIcon) } - Password must contain at least 1 special character\n` }
  
  private hasAnySpecial(value: string): boolean { return /[^\w\d\s:]/.test(value) }
  
  private getTextRoleLimit(showIcon: boolean): string { return `${this.getIcon(showIcon)} - Password must have 7 to 20 characters without spaces\n` }
  
  private hasLimit(value: string): boolean { return /^([^\s]){7,20}$/gm.test(value) }

}