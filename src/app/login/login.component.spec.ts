import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[ ReactiveFormsModule,RouterTestingModule,HttpClientTestingModule],

    })
    .compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('From Check', () => {
    expect(component.loginForm).toBeTruthy();
  });

  it('User UserName Check', () => {
    let name = component.loginForm.controls['username'] ;
    expect(name.valid).toBeFalsy();
    name.setValue("Admin");
    expect(name.valid).toBeTruthy();
    expect(component.loginForm.value.username).toEqual("Admin");
  });

  it('From password value Check', () => {
    let name = component.loginForm.controls['password'];
    expect(name.valid).toBeFalsy();
    name.setValue("123");
    expect(name.valid).toBeTruthy();
    expect(component.loginForm.value.password).toEqual("123");
  })

  it('Submit function Testing', () => {
    expect(component.loginForm.valid).toBeFalsy();
    component.loginForm.controls['username'].setValue('Admin');
    component.loginForm.controls['password'].setValue('123');
    expect(component.loginForm.valid).toBeTruthy();
    component.login();
    fixture.detectChanges();
    console.log(component.formData);
    expect(component.formData.username).toBe('Admin');
    expect(component.formData.password).toBe('123');
    // expect(component.formData.role).toBe('Admin');
  });
});
