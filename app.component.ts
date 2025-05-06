import { Component } from '@angular/core'; 
@Component({ 
selector: 'app-root', 
templateUrl: './app.component.html', 
styleUrls: ['./app.component.css'] 
}) 
export class AppComponent { 


title = 'Simple Registration Example'; 
displayUsername = ''; 
displayCity = ''; 
displayPhone = ''; 
displayEmail = ''; 
 
  submit(username: string, city: string, phone: string, email: string) { 
    this.displayUsername = username; 
    this.displayCity = city; 
    this.displayPhone = phone; 
    this.displayEmail = email; 
  } 
} 