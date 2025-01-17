import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabButton, IonTabBar, IonFooter, IonTabs } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
  standalone: true,
  imports: [IonTabs, IonFooter, IonTabBar, IonTabButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class OrdersPage implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  GoToInbox(){
    this.router.navigateByUrl('/inbox')
  }
  GoToOrder(){
    this.router.navigateByUrl('/profile')
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
