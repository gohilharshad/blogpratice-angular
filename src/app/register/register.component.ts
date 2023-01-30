import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {

  @Input() item:{name:string,email:string,phon:String}={name:'',email:'',phon:''}


}
