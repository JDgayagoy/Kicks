import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product2.page.html',
  styleUrls: ['./product2.page.scss'],
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class Product2Page implements OnInit {
  container = document.getElementById('imgcontainer');
  images: string[] = ['assets/blaz.jpg', '/assets/second.jpg'];
  currentIndex = 0

  constructor(
    private router:Router
  ) { }

  GoToHome(){
    this.router.navigateByUrl('/home')
  }
  GoToFeatured(){
    this.router.navigateByUrl('/featured')
  }
  GoToCheckout(){
    this.router.navigateByUrl('checkout')
  }
  GoToProfile(){ 
    this.router.navigateByUrl('profile')
  }
  ngOnInit() {
  }
  selectSize(size: string) {
    console.log('Selected size:', size);
    // Add your logic for size selection, like updating the selected size in state or passing it to checkout
  }
  nextImage(){
    if(this.currentIndex <  this.images.length - 1){
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }
  prevImage(){
    if(this.currentIndex > 0){
      this.currentIndex--;
    }else{
      this.currentIndex = this.images.length - 1;
    }
  }  
}
