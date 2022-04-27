import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-full-page',
  templateUrl: './loader-full-page.component.html',
  styleUrls: ['./loader-full-page.component.scss'],
})
export class LoaderFullPageComponent implements OnInit {
  isLoading = false;
  constructor() {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 2000);
    return;
  }
}
