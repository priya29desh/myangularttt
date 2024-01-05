import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-loginreactiveform',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './loginreactiveform.component.html',
  styleUrl: './loginreactiveform.component.css'
})
export class LoginreactiveformComponent
{
  loginForm=new FormGroup({
    username:new FormControl(""),
    pwd:new FormControl(""),
    });
  
    onSubmit()
    {
      console.log("User name : "+this.loginForm.controls.username.value);
      console.log("Password : "+this.loginForm.controls.pwd.value);
    }
  
    get username()
    {
      return this.loginForm.get("username");
    }
  
    get pwd()
    {
      return this.loginForm.get("pwd");
    }
}
