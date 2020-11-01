import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Perfectly Positioned Pics';
  image1 = 'https://peopledotcom.files.wordpress.com/2017/08/shoppingapp.jpg?w=768';
  image2 = 'https://i1.wp.com/nerdbastards.com/wp-content/uploads/2013/04/Kikis_Delivery_Service_full_937028.jpg';
  image3 = 'https://dontgetserious.com/wp-content/uploads/2018/07/travel-gadgets.jpg';

  constructor() { }

  ngOnInit() {
  }

}