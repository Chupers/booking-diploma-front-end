import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AccommodationService } from '../services/accommodation.service';

@Component({
  selector: 'app-hotel-manage-base',
  templateUrl: './hotel-manage-base.component.html',
  styleUrls: ['./hotel-manage-base.component.css']
})
export class HotelManageBaseComponent implements OnInit {

  hotelBasicInfoGroup: FormGroup;
  imageGorup:FormGroup;
  newEmptyName: String = "";
  currentId : number;

  datasource:TreeDataItem[] = []

  constructor(private _formBuilder: FormBuilder,private _accService : AccommodationService,private authService: AuthService,private _route:ActivatedRoute, private router: Router) {
    this.currentId = parseInt(this._route.snapshot.paramMap.get('id'))  
  }

  ngOnInit(): void {
    this.hotelBasicInfoGroup  =  this._formBuilder.group({
      hotelName: ['', Validators.required],
      hotelCountry: ['', Validators.required],
      hotelCity: ['', Validators.required],
      hotelStreet: ['', Validators.required],
      hotelDescription:['',Validators.required],
  });
  this.imageGorup = this._formBuilder.group({
    image:['',Validators.required]
  })
  }

  saveBasic(){
    this._accService.updateBasicInfo(
      this.hotelBasicInfoGroup.controls['hotelName'].value,
      this.hotelBasicInfoGroup.controls['hotelCountry'].value,
      this.hotelBasicInfoGroup.controls['hotelCity'].value,
      this.hotelBasicInfoGroup.controls['hotelStreet'].value,
      this.hotelBasicInfoGroup.controls['hotelDescription'].value,
      this.currentId).subscribe(data =>{
        console.log("saved")
      })
  }
  saveImage(){
    this._accService.loadImage(
      this.imageGorup.controls['image'].value,
      this.currentId.toString()
      ).subscribe(data =>{
        console.log("saved")
      })
  }

  addNewNode(){
    console.log("Add item");
    this.datasource.push(new TreeDataItem())
  }
  saveNode(name:String){
 
    this.datasource.forEach(element => {
      if(element.name == this.newEmptyName){
        console.log("save item")
        element.name = name;
        return;
      }
    });
  }

  onFileChanged(event){
    this.selectedFile = event.target.files[0];
  }
  onUpload(){
    //Upload
  }
  selectedFile : File
  saveChild(node:TreeChildItem,parentNode:String,name:String){
    this.datasource.forEach(element => {
      if(element.name == parentNode){
        element.characteristicChildren.forEach(child => {
          if(child.childName == this.newEmptyName){
            child.childName = name;
          }
        });
      }
    });
    console.log(this.datasource)
  }

  saveCharacteristic(){
    this._accService.saveCharacteristic(this.currentId,this.datasource).subscribe(data =>{
      console.log("saved")
    })
  }

  addChild(node:TreeDataItem){
    this.datasource.forEach(element => {
      if(element.name == node.name){
        element.characteristicChildren.push(new TreeChildItem())
      }
    });
   
  }

}
export class TreeDataItem{
  name: String;
  characteristicChildren?: TreeChildItem[] = [];

  constructor(){
    this.name = "";
  }
}
export class TreeChildItem{
  childName: String
  iconName:String
  constructor(){
    this.childName = "";
  }
}
