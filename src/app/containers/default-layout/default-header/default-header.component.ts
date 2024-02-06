import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import {AuthService} from "../../../services/auth.service";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private classToggler: ClassToggleService,private  authservice:AuthService,private http: HttpClient) {
    super();
  }


  signOut(){
    this.authservice.SignOut();
  }

  switch(){
    const url = 'http://192.168.1.19:5000/red';
console.log(url,"URL")

this.http.post(url, {}).subscribe(
  response => {
    console.log('Switched to red successfully!', response);
    // Add any further logic here
  },
  error => {
    console.error('Error switching to red:', error);
    // Handle errors if needed
  }
);
}
    // this.httpservice.post(url, {}).subscribe(
    //   response => {
    //     console.log('Switched to red successfully!', response);
    //     // Add any further logic here
    //   },
    //   error => {
    //     console.error('Error switching to red:', error);
    //     // Handle errors if needed
    //   }
    // );
  }

