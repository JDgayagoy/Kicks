import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonSearchbar, IonList, IonItem } from '@ionic/angular/standalone';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],  
  imports: [IonItem, IonList, IonSearchbar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon]
})
export class HomePage implements OnInit {
  container = document.getElementById('imgcontainer');
  images: string[] = ['assets/dunklow.png', '/assets/hisecond.jpg', 'assets/hithird.jpg'];
  currentIndex = 0

  constructor() { }
  ngOnInit() {
    
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
