import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {DataStorage} from "../../shared/data-storage";
import {Response} from '@angular/http'
import {Authservice} from "../../auth/authservice";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('FeatureSelected') featureSelected = new EventEmitter<string>();

  authService: Authservice;

  constructor(private  storageService: DataStorage,private authServiceInj: Authservice) {
    this.authService = authServiceInj;
  }

  ngOnInit() {

  }

  onSaveData()
  {
    this.storageService.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response); }

    );
  }
    onGetData()
    {
      this.storageService.getRecipes();
    }

  onLogOut()
  {
    this.authService.logOut();
  }

}
