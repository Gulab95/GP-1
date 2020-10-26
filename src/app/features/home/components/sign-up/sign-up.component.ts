import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationService } from 'src/app/core/navigation.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  myForm: FormGroup;
  constructor( private formBuilder: FormBuilder, private navigationService: NavigationService ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
   this.myForm = this.formBuilder.group({
                    userName : new FormControl('', [Validators.required]) , 
                    email : new FormControl('', [Validators.required , Validators.email]),
                    Password: new FormControl(''),
                    confirmPassword : new FormControl(''),
                    branches: new FormControl('')
    })
  };

  submitForm() {
    console.log('Form Submitted :',  this.myForm.value );
  };
  
  log(event) {
    console.log('Checkbox :', event)
  }

  goToSignInPage() {
    this.navigationService.goToLoginPage();
  }

}
