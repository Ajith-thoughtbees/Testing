import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly render the passed @Input value', () => {
    expect(fixture.nativeElement.querySelector('.custom-input').innerText).toBe('');
    component.inputValue = 'Test Value';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.custom-input').innerText).toBe('Test Value');
  });

  it('should emit the event when button is clicked', () => {
    let emittedValue;
    component.msg.subscribe(d => {
      emittedValue = d;
    });
    spyOn(component.msg, 'emit').and.callThrough();
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.msg.emit).toHaveBeenCalledWith('This is emitted message');
    // expect(emittedValue).toBe('This is emitted message');
  });

});
