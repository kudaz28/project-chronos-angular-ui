import { Component, OnInit } from '@angular/core';
import { AssetService } from '../../services/asset.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit
{
  public assets;

  constructor(private assetService: AssetService) { }

  ngOnInit()
  {
    this.getAssets();
  }

  getAssets()
  {
    this.assetService.getAssets().subscribe(
    data => {this.assets = data},
    err => console.error(err),
    () => console.log('assets loaded'));
  }

}
