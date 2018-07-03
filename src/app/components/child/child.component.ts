import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-child',
  template: '<h1>{{result}}</h1>',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  private result:any;
  constructor(private _route:ActivatedRoute) { }

  ngOnInit() {
      //this.result = this._route.snapshot.params["message"];
  
    
      this._route.params.subscribe(res=>{
        this.result = res["message"];
      });
    

     /* this._route.paramMap.switchMap((params:paramMap)=>{
        this.result = params.get("message");
      });*/



  }


}
