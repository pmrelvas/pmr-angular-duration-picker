import { FormsModule } from "@angular/forms";
import { PmrDurationPickerComponent } from "./pmr-duration-picker.component";
import { PmrDurationAtomComponent } from "../pmr-duration-atom/pmr-duration-atom.component";

describe('PmrDurationPickerComponent', () => {
  it('should mount', () => {
    cy.mount(PmrDurationPickerComponent);
  });

  it('should parse a duration', () => {
    cy.mount(`<pmr-duration-picker [(ngModel)]="val"></pmr-duration-picker>`, {
      imports: [FormsModule],
      declarations: [PmrDurationPickerComponent, PmrDurationAtomComponent],
      componentProperties: {
        val: 'P1Y2M3W4DT5H6M7S'
      }
    });

    cy.get('[data-cy=duration-picker-label]').contains('P1Y2M3W4DT5H6M7S');
    cy.get('pmr-duration-atom').eq(0).find('.pmr-duration-atom-label').contains(/^Y$/);
    cy.get('pmr-duration-atom').eq(0).find('input').should('have.value', "1");
    cy.get('pmr-duration-atom').eq(1).find('.pmr-duration-atom-label').contains(/^M$/);
    cy.get('pmr-duration-atom').eq(1).find('input').should('have.value', "2");
    cy.get('pmr-duration-atom').eq(2).find('.pmr-duration-atom-label').contains(/^W$/);
    cy.get('pmr-duration-atom').eq(2).find('input').should('have.value', "3");
    cy.get('pmr-duration-atom').eq(3).find('.pmr-duration-atom-label').contains(/^D$/);
    cy.get('pmr-duration-atom').eq(3).find('input').should('have.value', "4");
    cy.get('pmr-duration-atom').eq(4).find('.pmr-duration-atom-label').contains(/^H$/);
    cy.get('pmr-duration-atom').eq(4).find('input').should('have.value', "5");
    cy.get('pmr-duration-atom').eq(5).find('.pmr-duration-atom-label').contains(/^M$/);
    cy.get('pmr-duration-atom').eq(5).find('input').should('have.value', "6");
    cy.get('pmr-duration-atom').eq(6).find('.pmr-duration-atom-label').contains(/^S$/);
    cy.get('pmr-duration-atom').eq(6).find('input').should('have.value', "7");
  });

  it('Should write a duration', () => {
    cy.mount(`<pmr-duration-picker [(ngModel)]="val"></pmr-duration-picker>`, {
      imports: [FormsModule],
      declarations: [PmrDurationPickerComponent, PmrDurationAtomComponent],
      componentProperties: {
        val: ''
      }
    });

    cy.get('pmr-duration-atom').eq(0).find('input').type('7');
    cy.get('pmr-duration-atom').eq(1).find('input').type('6');
    cy.get('pmr-duration-atom').eq(2).find('input').type('5');
    cy.get('pmr-duration-atom').eq(3).find('input').type('4');
    cy.get('pmr-duration-atom').eq(4).find('input').type('3');
    cy.get('pmr-duration-atom').eq(5).find('input').type('2');
    cy.get('pmr-duration-atom').eq(6).find('input').type('1');
    cy.get('[data-cy=duration-picker-label]').contains(/^P7Y6M5W4DT3H2M1S$/);
  });

  it('should not append T label on durations without time units', () => {
    cy.mount(`<pmr-duration-picker [(ngModel)]="val"></pmr-duration-picker>`, {
      imports: [FormsModule],
      declarations: [PmrDurationPickerComponent, PmrDurationAtomComponent],
      componentProperties: {
        val: 'P1Y2M3W4D'
      }
    });
    cy.get('[data-cy=duration-picker-label]').contains('P1Y2M3W4D');
  });

  it('should not append T label on durations without time units on edit', () => {
    cy.mount(`<pmr-duration-picker [(ngModel)]="val"></pmr-duration-picker>`, {
      imports: [FormsModule],
      declarations: [PmrDurationPickerComponent, PmrDurationAtomComponent],
      componentProperties: {
        val: ''
      }
    });
    cy.get('pmr-duration-atom').eq(0).find('input').type('1');
    cy.get('pmr-duration-atom').eq(1).find('input').type('2');
    cy.get('pmr-duration-atom').eq(2).find('input').type('3');
    cy.get('pmr-duration-atom').eq(3).find('input').type('4');
    cy.get('[data-cy=duration-picker-label]').contains(/^P1Y2M3W4D$/);
  });

  it('should parse duration in string mode', () => {
    cy.mount(`<pmr-duration-picker [(ngModel)]="val"></pmr-duration-picker>`, {
      imports: [FormsModule],
      declarations: [PmrDurationPickerComponent, PmrDurationAtomComponent],
      componentProperties: {
        val: 'P1Y2M3W4DT5H6M7S'
      }
    });
    cy.get('[data-cy=btn-switch-mode]').click();
    cy.get('[data-cy=input-duration-picker-str]').should('have.value', 'P1Y2M3W4DT5H6M7S');
    cy.get('[data-cy=input-duration-picker-str]').clear();
    cy.get('[data-cy=input-duration-picker-str]').type('P8Y7M6W5DT4H3M2S');
    cy.get('[data-cy=duration-picker-label]').contains(/^P8Y7M6W5DT4H3M2S$/);
    cy.get('[data-cy=btn-switch-mode]').click();
    cy.get('pmr-duration-atom').eq(0).find('input').should('have.value', "8");
    cy.get('pmr-duration-atom').eq(1).find('input').should('have.value', "7");
    cy.get('pmr-duration-atom').eq(2).find('input').should('have.value', "6");
    cy.get('pmr-duration-atom').eq(3).find('input').should('have.value', "5");
    cy.get('pmr-duration-atom').eq(4).find('input').should('have.value', "4");
    cy.get('pmr-duration-atom').eq(5).find('input').should('have.value', "3");
    cy.get('pmr-duration-atom').eq(6).find('input').should('have.value', "2");
  });

  it('should validate duration in string mode', () => {
    cy.mount(`<pmr-duration-picker [(ngModel)]="val"></pmr-duration-picker>`, {
      imports: [FormsModule],
      declarations: [PmrDurationPickerComponent, PmrDurationAtomComponent],
      componentProperties: {
        val: ''
      }
    });
    cy.get('[data-cy=btn-switch-mode]').click();
    cy.get('[data-cy=label-duration]').contains(/^Duration$/)
    // missing T
    cy.get('[data-cy=input-duration-picker-str]').type('P8Y7M6W5D4H3M2S');
    cy.get('[data-cy=invalid-duration-label]').should('be.visible')
      .and('contain', 'Invalid duration format.');
    // invalid code
    cy.get('[data-cy=input-duration-picker-str]').clear();
    cy.get('[data-cy=input-duration-picker-str]').type('bananas com ervilhas');
    cy.get('[data-cy=invalid-duration-label]').should('be.visible')
      .and('contain', 'Invalid duration format.');
  });

  it('should hide label', () => {
    cy.mount(`<pmr-duration-picker [(ngModel)]="val" [disableLabel]="true"></pmr-duration-picker>`, {
      imports: [FormsModule],
      declarations: [PmrDurationPickerComponent, PmrDurationAtomComponent],
      componentProperties: {
        val: 'P1Y2M3W4DT5H6M7S'
      }
    });

    cy.get('[data-cy=duration-picker-label]').should('not.exist');
  });

  it('should disable switch mode button', () => {
    cy.mount(`<pmr-duration-picker [(ngModel)]="val" [disableSwitchMode]="true"></pmr-duration-picker>`, {
      imports: [FormsModule],
      declarations: [PmrDurationPickerComponent, PmrDurationAtomComponent],
      componentProperties: {
        val: 'P1Y2M3W4DT5H6M7S'
      }
    });

    cy.get('[data-cy=btn-switch-mode]').should('not.exist');
  });

  it('should be able to override duration label', () => {
    cy.mount(`<pmr-duration-picker [(ngModel)]="val" [label]="'PMRXPTO'"></pmr-duration-picker>`, {
      imports: [FormsModule],
      declarations: [PmrDurationPickerComponent, PmrDurationAtomComponent],
      componentProperties: {
        val: 'P1Y'
      }
    });
    cy.get('[data-cy=btn-switch-mode]').click();
    cy.get('[data-cy=label-duration]').contains(/^PMRXPTO$/)
  });

  it('should allow to only display year field', () => {
    cy.mount(`<pmr-duration-picker [(ngModel)]="val" [displayedItems]="displayedItems"></pmr-duration-picker>`, {
      imports: [FormsModule],
      declarations: [PmrDurationPickerComponent, PmrDurationAtomComponent],
      componentProperties: {
        val: 'P1Y',
        displayedItems: ['Y']
      }
    });
    cy.get('pmr-duration-atom').should('have.length', 1);
    cy.get('pmr-duration-atom').eq(0).find('.pmr-duration-atom-label').contains(/^Y$/);
    cy.get('pmr-duration-atom').eq(0).find('input').should('have.value', "1");
  });

  it('should allow to only display month field', () => {
    cy.mount(`<pmr-duration-picker [(ngModel)]="val" [displayedItems]="displayedItems"></pmr-duration-picker>`, {
      imports: [FormsModule],
      declarations: [PmrDurationPickerComponent, PmrDurationAtomComponent],
      componentProperties: {
        val: 'P1M',
        displayedItems: ['M']
      }
    });
    cy.get('pmr-duration-atom').should('have.length', 1);
    cy.get('pmr-duration-atom').eq(0).find('.pmr-duration-atom-label').contains(/^M$/);
    cy.get('pmr-duration-atom').eq(0).find('input').should('have.value', "1");
  });

  it('should allow to only display week field', () => {
    cy.mount(`<pmr-duration-picker [(ngModel)]="val" [displayedItems]="displayedItems"></pmr-duration-picker>`, {
      imports: [FormsModule],
      declarations: [PmrDurationPickerComponent, PmrDurationAtomComponent],
      componentProperties: {
        val: 'P1W',
        displayedItems: ['W']
      }
    });
    cy.get('pmr-duration-atom').should('have.length', 1);
    cy.get('pmr-duration-atom').eq(0).find('.pmr-duration-atom-label').contains(/^W$/);
    cy.get('pmr-duration-atom').eq(0).find('input').should('have.value', "1");
  });

  it('should allow to only display days field', () => {
    cy.mount(`<pmr-duration-picker [(ngModel)]="val" [displayedItems]="displayedItems"></pmr-duration-picker>`, {
      imports: [FormsModule],
      declarations: [PmrDurationPickerComponent, PmrDurationAtomComponent],
      componentProperties: {
        val: 'P1D',
        displayedItems: ['D']
      }
    });
    cy.get('pmr-duration-atom').should('have.length', 1);
    cy.get('pmr-duration-atom').eq(0).find('.pmr-duration-atom-label').contains(/^D$/);
    cy.get('pmr-duration-atom').eq(0).find('input').should('have.value', "1");
  });

  it('should allow to only display hour field', () => {
    cy.mount(`<pmr-duration-picker [(ngModel)]="val" [displayedItems]="displayedItems"></pmr-duration-picker>`, {
      imports: [FormsModule],
      declarations: [PmrDurationPickerComponent, PmrDurationAtomComponent],
      componentProperties: {
        val: 'PT1H',
        displayedItems: ['TH']
      }
    });
    cy.get('pmr-duration-atom').should('have.length', 1);
    cy.get('pmr-duration-atom').eq(0).find('.pmr-duration-atom-label').contains(/^H$/);
    cy.get('pmr-duration-atom').eq(0).find('input').should('have.value', "1");
  });

  it('should allow to only display minutes field', () => {
    cy.mount(`<pmr-duration-picker [(ngModel)]="val" [displayedItems]="displayedItems"></pmr-duration-picker>`, {
      imports: [FormsModule],
      declarations: [PmrDurationPickerComponent, PmrDurationAtomComponent],
      componentProperties: {
        val: 'PT1M',
        displayedItems: ['TM']
      }
    });
    cy.get('pmr-duration-atom').should('have.length', 1);
    cy.get('pmr-duration-atom').eq(0).find('.pmr-duration-atom-label').contains(/^M$/);
    cy.get('pmr-duration-atom').eq(0).find('input').should('have.value', "1");
  });

  it('should allow to only display seconds field', () => {
    cy.mount(`<pmr-duration-picker [(ngModel)]="val" [displayedItems]="displayedItems"></pmr-duration-picker>`, {
      imports: [FormsModule],
      declarations: [PmrDurationPickerComponent, PmrDurationAtomComponent],
      componentProperties: {
        val: 'PT1S',
        displayedItems: ['TS']
      }
    });
    cy.get('pmr-duration-atom').should('have.length', 1);
    cy.get('pmr-duration-atom').eq(0).find('.pmr-duration-atom-label').contains(/^S$/);
    cy.get('pmr-duration-atom').eq(0).find('input').should('have.value', "1");
  });
})
