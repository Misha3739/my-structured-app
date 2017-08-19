import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'app';

  loadedFeature = 'recipe';

  onNavigate(feature: string)
  {
    this.loadedFeature = feature;
  }

  ngOnInit()
  {
    firebase.initializeApp({
      apiKey: "AIzaSyAM6GNseEOkSwZjHVvvPD2mL6D7WZoAFLY",
      authDomain: "ng-recipe-book-3e445.firebaseapp.com",
    });
  }
}
