import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {DataStorage} from "../shared/data-storage";
import {Response} from '@angular/http'
import {Authservice} from "../auth/authservice";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('FeatureSelected') featureSelected = new EventEmitter<string>();

  constructor(private  storageService: DataStorage,private authService: Authservice) { }

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
