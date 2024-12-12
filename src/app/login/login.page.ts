import 'ionicons/dist/ionicons/ionicons.esm.js';
import 'ionicons/dist/ionicons/ionicons.js';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonTabButton, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonIcon, IonTabButton, IonButton, IonInput, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  
  GoToSignup(){
    this.router.navigateByUrl('/signup')
  }
  GoToHome(){
    this.router.navigateByUrl('/landing')
  }
}
