import { Component, OnInit } from '@angular/core';
import {catalouges} from "../../Constant/workoutsCatalouges";

@Component({
  selector: 'app-catalouge',
  templateUrl: './catalouge.component.html',
  styleUrls: ['./catalouge.component.css']
})
export class CatalougeComponent implements OnInit {
title="Workouts Catalouge";
searchValue:string;
catalougeItems=catalouges;

  constructor() { }

  ngOnInit() {
    console.log(this.catalougeItems);
  }
  searchHandler():any{
    let serachResult=[];
    
    if(this.searchValue.length){
      serachResult=this.catalougeItems.filter(item=>item.title.toLowerCase().includes(this.searchValue.toLocaleLowerCase()));
    }else{
      serachResult=catalouges;
    }
    this.catalougeItems=serachResult;
    
  }
}
