import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have the DOM element initially as flag is false', () => {
    const containerElement = fixture.nativeElement.querySelector('.container');
    expect(containerElement).toBeNull();
  });

  it('should contain dom element when flag is set to true', () => {
    component.isVisible = true;
    fixture.detectChanges();
    const containerElement = fixture.nativeElement.querySelector('.container');
    expect(containerElement).not.toBeNull();
    expect(containerElement.innerText).toContain('This is DOM testing example!');
  });

  it('should have toggle button name based on flag', () => {
    const buttonElement = fixture.nativeElement.querySelector('#customBtn');
    component.isVisible = false;
    fixture.detectChanges();
    expect(buttonElement.innerText).toBe('Show');
    component.isVisible = true;
    fixture.detectChanges();
    expect(buttonElement.innerText).toBe('Hide');
  });
});
