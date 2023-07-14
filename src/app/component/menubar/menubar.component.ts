import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from 'src/app/service/token-storage.service';
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
  badgevisible = false;
  menuList: any;
  navList :any;
  private roles: string[] = [];
  roleId: number=0;
  isLoggedIn = false;
  showAdminBoard = false;
  initiator=false;
  approver=false;
  showModeratorBoard = false;
  username?: string;
   constructor(private tokenStorageService: TokenStorageService,private authservice:AuthService  ,private http: HttpClient) { 
   
  }
  ngOnInit(): void {
    debugger
   
   // if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      console.log(user)
      this.roles = user.roles;
      this.isLoggedIn = !!this.tokenStorageService.getToken();
    
      console.log('this.roles='+this.roles)
      for (let i = 0; i < this.roles.length; i++) {
        console.log ("values from loop" + this.roles[i]);
        if (this.roles[i]==='ROLE_ADMIN'){
          console.log(this.roles[i])
          this.roleId=2;
          this.authservice.getMenubyrole(this.roleId).subscribe(result=>{
        
            this.menuList=result;
            console.table('menuList='+this.menuList[i])
            })
        }
        else if(this.roles[i]==='ROLE_USER'){
            console.log(this.roles[i])
            this.roleId=1;
            this.authservice.getMenubyrole(this.roleId).subscribe(result=>{
        
              this.menuList=result;
              console.table('menuList='+this.menuList)
              })
          }
         
            
            
        }
      
      
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');

      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.initiator = this.roles.includes('ROLE_INITIATOR');
      this.approver=this.roles.includes('ROLE_APPROVER');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = user.username;
   // }
  }

  logout(): void {
    console.log('logout called')
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  //menuList: Array<string>= ['admin', 'view-admin'] ;
  badgevisibility() {
    this.badgevisible = true;
  }


}
