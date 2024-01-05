import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logintemplateform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './logintemplateform.component.html',
  styleUrl: './logintemplateform.component.css'
})
export class LogintemplateformComponent
{
  onSubmit(loginForm:any)
  {
      console.log("Username = "+loginForm.controls.username.value);
      console.log("Password = "+loginForm.controls.pwd.value);
  }
}
