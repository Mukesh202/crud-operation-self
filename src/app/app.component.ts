import { Component } from '@angular/core';
import { NewService } from './new.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cruddemo2';
  alluser: any;
  isEdit=false;
userObj={
  name:'',mobile:'',email:'',password:'',id:''
}

  constructor(private newservice:NewService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getLatestuser();
  }

  addUser(formObj:any){
    console.log(formObj)
    this.newservice.createUser(formObj).subscribe((Response)=>{
      this.getLatestuser();
    })    
  }
  getLatestuser(){
    this.newservice.getAllUser().subscribe((Response)=>{
      this.alluser = Response;
    })
  }
  deleteuser(user:any){
    this.newservice.deleteUser(user).subscribe((Response)=>{
      this.getLatestuser();
    })
  }

  edituser(user:any){
    this.userObj=user;
    this.isEdit=true;
  }

  updateUser(){
    this.isEdit=!this.isEdit ;
    this.newservice.updateUser(this.userObj).subscribe(()=>{
      this.getLatestuser();
    })
  }

}
