import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { ElementRef ,ViewChild } from '@angular/core';
import *  as $ from "jquery";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 contactsForm=new FormGroup({
    userEmail:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z]/)])
  });
  messageContainer:any[]=[];
saveform(){
   let message={
     email:this.contactsForm.controls.userEmail.value,
     password:this.contactsForm.controls.password.value,
   }
  this.messageContainer.push(message);
}
  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    var jquery=document.createElement('script');
    jquery.type='text/javascript';
    jquery.src='./assets/js/custom.js';
    this.elementRef.nativeElement.appendChild(jquery);
  }
}
