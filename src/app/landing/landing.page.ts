import { routes } from './../app.routes';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabButton, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonTabButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LandingPage implements OnInit {
  isVisible = true;  // To manage visibility

  constructor(
    private router: Router
  ) {}

  ngOnInit() {}
  GoToHome(){
    this.router.navigateByUrl('/home')
  }
}
