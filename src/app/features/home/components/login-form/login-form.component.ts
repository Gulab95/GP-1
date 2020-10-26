import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationService } from 'src/app/core/navigation.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  myForm: FormGroup;


  constructor( private formBuilder: FormBuilder , private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  submitForm() {

  }

  goToSignUpPage() {
    this.navigationService.goToSignUpPage();
  }

  private buildForm() {
    this.myForm = this.formBuilder.group({
      userName: new FormControl( '' , [ Validators.required ]),
      userPassword: new FormControl( '', [ Validators.required ])
    })
  }

}
