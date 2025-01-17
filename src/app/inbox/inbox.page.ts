import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonTabBar, IonFooter, IonTabs, IonTabButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
  standalone: true,
  imports: [IonTabButton, IonTabs, IonFooter, IonTabBar, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InboxPage implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  GoToInbox(){
    this.router.navigateByUrl('/profile')
  }
  GoToOrder(){
    this.router.navigateByUrl('/orders')
  }
  GoToHome(){
    this.router.navigateByUrl('/home')
  }
  GoToFeatured(){
    this.router.navigateByUrl('/featured')
  }
  GoToCheckout(){
    this.router.navigateByUrl('checkout')
  }
}
