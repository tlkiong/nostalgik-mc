import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  galleryImages: {
    path: string;
    caption: string;
  }[] = [
    {
      caption: 'AlterDimension',
      path: 'AlterDimension.png',
    },
    {
      caption: 'CCStelleri',
      path: 'CCStelleri.png',
    },
    {
      caption: 'Mozo95',
      path: 'Mozo95.png',
    },
    {
      caption: 'TheTrulyMad',
      path: 'TheTrulyMad.png',
    },
    {
      caption: 'Vinaco',
      path: 'Vinaco.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    return;
  }
}
