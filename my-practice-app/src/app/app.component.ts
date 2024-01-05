import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LogintemplateformComponent } from './component/logintemplateform/logintemplateform.component';
import { LoginreactiveformComponent } from './component/loginreactiveform/loginreactiveform.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet, 
    LogintemplateformComponent,LoginreactiveformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-practice-app';
}
