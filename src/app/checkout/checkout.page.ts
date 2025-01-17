import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBadge, IonButton, IonTabButton, IonFooter, IonTabs, IonTabBar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
  standalone: true,
  imports: [IonTabBar, IonTabs, IonFooter, IonTabButton, IonButton, IonBadge, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CheckoutPage implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
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
  GoToProfile(){
    this.router.navigateByUrl('profile')
  }
}
