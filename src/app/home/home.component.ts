import { Component ,OnInit } from '@angular/core';
import { Category } from '../model/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
//title='Home Twin';
title:string;
//listCategory:Category[];
listCategory:Array<Category>
constructor(){
  //this.title ="Welcome to TwinStore";
}
ngOnInit(){
  this.title ="Welcome to TwinStore";
  this.listCategory=[
    {id:1,
    name:'clothing',
    nbrlike:10,
    available:true,
    picture:'https://www.uniqclothing.co.za/home/_jcr_content/root/container/container/carousel/item_1709884541657_c_502260147.coreimg.png/1722415640689/uniq-banner-2.png'
    }
  ]
}

}
