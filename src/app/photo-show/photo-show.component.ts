import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {
url =''
  constructor(private photosService:PhotosService){
this.getPhoto()
  }

ngOnInit(): void {

}

generate(){
  this.getPhoto()
}

getPhoto(){
  this.photosService.getPhoto().subscribe(( url) => {
    this.url = url
   })
}
}
