import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blog';



  loginForm = new FormGroup({
    user:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  })
  loginUser(){
    console.log(this.loginForm.value)

  }


  get user(){
    return this.loginForm.get('user')
  }

  get password(){
    return this.loginForm.get('password')
  }

  // name:any;



  
  // userDetials = [
  //   {
  //     name: 'Harshad',
  //     email: 'h@gmail.com',
  //     phon: '8888'
  //   },
  //   {
  //     name: 'mohit',
  //     email: 'm@gmail.com',
  //     phon: '9999'
  //   },
  //   {
  //     name: 'kartik',
  //     email: 'k@gmail.com',
  //     phon: '999'
  //   }
  // ]





  // userData:any = {};
  // getData(data:NgForm) {
  //   console.warn(data);
  //   this.userData=data;
  // }
  // list:any=[];

  // addTask(item:string){

  //   console.log(item)
  //   // item=this.list;
  //   this.list.push({id:this.list.length,name:item}) 
  // }
  // removeTask(id:number){
  //   console.log(id)
  //   this.list=this.list.filter(item=>item.id!=id)
  // }
}
