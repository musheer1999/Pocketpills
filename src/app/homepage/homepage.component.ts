import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import {InjectorService} from '../injector.service'
@Component({                         
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

// setsetInterval( function(){ alert("Hello"); }, 3000);
public date= new Date();
  cla="cl1";
  cla2="cl2";
  name="Musheer Ahmad";
  greeting="";
  bool=true;
  public color="blue";
  public colors=["red","green","blue","yellow"];
  public object={
    name:"musheer ahmad",
    course:"computer engineering"
 
  }

  public objarray=[];
 
  server=window.location.href;
    x=0;
    // this is intput from parent to child 
   @Input() public parentData; 
   @Output() public childEvent = new EventEmitter();
   constructor(private objar:InjectorService) { 
   
    
  }

  ngOnInit(): void {
    this.objarray=this.objar.objarra()
  }
 

  onfire(){
    this.childEvent.emit("this is exported from child to parent");
  }

onclicks(event){

  this.greeting=event;
 
}

}
