import { Component, OnInit } from '@angular/core';
import {InjectorService} from '../injector.service'
@Component({  //note: componenr dependency also do the work of @injectable  which tells the angular that the class of this component may have dependencies thats why we dont have any injectable decorator here. 
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {

  public stuinfo=[];
  public covid=[];
  public EM;
  constructor(private stuinf:InjectorService  ) { }

  ngOnInit(): void {
    this.stuinfo=this.stuinf.objarra();
   
    this.stuinf.https().subscribe(data=> this.covid=data,error=>this.EM=error);
    
  }


}

