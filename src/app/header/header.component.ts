import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {DataStorage} from "../shared/data-storage";
import {Response} from '@angular/http'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('FeatureSelected') featureSelected = new EventEmitter<string>();

  constructor(private  storageService: DataStorage) { }

  ngOnInit() {
  }

  onSaveData()
  {
    this.storageService.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response); }

  );
  }
}
