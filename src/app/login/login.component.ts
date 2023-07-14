import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  returnUrl = '';
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
 

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;
   
    this.authService.login(username, password).subscribe(
      data => {
        debugger
        this.tokenStorage.saveToken(data.accessToken);
        localStorage.setItem('currentUser', data.access_token);
        this.tokenStorage.saveUser(data);
        console.log(JSON.stringify(data))
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
        //this.returnUrl = "menubar";
        //this.router.navigate([this.returnUrl]);
        
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
    
  }

  reloadPage(): void {
    window.location.reload();
  }
}
