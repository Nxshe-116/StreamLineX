import { Component } from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loading: boolean = false;
  showpassword: boolean = false;
  username:any;
  password:any;
  loginObject: any;
  authorise: boolean = true;
  errorMessage: string | undefined
  apiResponse: any


  constructor(private authService:AuthService) { }


login(){
  this.authService.SignIn(this.username,this.password);

}


}
