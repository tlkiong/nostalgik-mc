import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ImageInfo } from '../interfaces/image-info.interface';
import { ImageModalComponent } from '../image-modal/image-modal.component';
import { SimpleModalService } from 'ngx-simple-modal';
import { Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [SimpleModalService],
})
export class GalleryComponent implements OnInit, OnDestroy {
  GALLERY_IMAGES: ImageInfo[] = [
    {
      caption: 'AlterDimension',
      path: 'assets/gallery/AlterDimension.png',
    },
    {
      caption: 'CCStelleri',
      path: 'assets/gallery/CCStelleri.png',
    },
    {
      caption: 'Mozo95',
      path: 'assets/gallery/Mozo95.png',
    },
    {
      caption: 'TheTrulyMad',
      path: 'assets/gallery/TheTrulyMad.png',
    },
    {
      caption: 'Vinaco',
      path: 'assets/gallery/Vinaco.png',
    },
    {
      caption: 'AlterDimension',
      path: 'assets/gallery/AlterDimension.png',
    },
    {
      caption: 'CCStelleri',
      path: 'assets/gallery/CCStelleri.png',
    },
    {
      caption: 'Mozo95',
      path: 'assets/gallery/Mozo95.png',
    },
    {
      caption: 'TheTrulyMad',
      path: 'assets/gallery/TheTrulyMad.png',
    },
    {
      caption: 'Vinaco',
      path: 'assets/gallery/Vinaco.png',
    },
    {
      caption: 'AlterDimension',
      path: 'assets/gallery/AlterDimension.png',
    },
    {
      caption: 'CCStelleri',
      path: 'assets/gallery/CCStelleri.png',
    },
    {
      caption: 'Mozo95',
      path: 'assets/gallery/Mozo95.png',
    },
    {
      caption: 'TheTrulyMad',
      path: 'assets/gallery/TheTrulyMad.png',
    },
    {
      caption: 'Vinaco',
      path: 'assets/gallery/Vinaco.png',
    },
    {
      caption: 'AlterDimension',
      path: 'assets/gallery/AlterDimension.png',
    },
    {
      caption: 'CCStelleri',
      path: 'assets/gallery/CCStelleri.png',
    },
    {
      caption: 'Mozo95',
      path: 'assets/gallery/Mozo95.png',
    },
    {
      caption: 'TheTrulyMad',
      path: 'assets/gallery/TheTrulyMad.png',
    },
    {
      caption: 'Vinaco',
      path: 'assets/gallery/Vinaco.png',
    },
    {
      caption: 'AlterDimension',
      path: 'assets/gallery/AlterDimension.png',
    },
    {
      caption: 'CCStelleri',
      path: 'assets/gallery/CCStelleri.png',
    },
    {
      caption: 'Mozo95',
      path: 'assets/gallery/Mozo95.png',
    },
    {
      caption: 'TheTrulyMad',
      path: 'assets/gallery/TheTrulyMad.png',
    },
    {
      caption: 'Vinaco',
      path: 'assets/gallery/Vinaco.png',
    },
    {
      caption: 'AlterDimension',
      path: 'assets/gallery/AlterDimension.png',
    },
    {
      caption: 'CCStelleri',
      path: 'assets/gallery/CCStelleri.png',
    },
    {
      caption: 'Mozo95',
      path: 'assets/gallery/Mozo95.png',
    },
    {
      caption: 'TheTrulyMad',
      path: 'assets/gallery/TheTrulyMad.png',
    },
    {
      caption: 'Vinaco',
      path: 'assets/gallery/Vinaco.png',
    },
    {
      caption: 'AlterDimension',
      path: 'assets/gallery/AlterDimension.png',
    },
    {
      caption: 'CCStelleri',
      path: 'assets/gallery/CCStelleri.png',
    },
    {
      caption: 'Mozo95',
      path: 'assets/gallery/Mozo95.png',
    },
    {
      caption: 'TheTrulyMad',
      path: 'assets/gallery/TheTrulyMad.png',
    },
    {
      caption: 'Vinaco',
      path: 'assets/gallery/Vinaco.png',
    },
  ];

  private unsubscribe$ = new Subject();

  constructor(
    private _SimpleModalService: SimpleModalService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activatedRoute.queryParams.pipe(take(1)).subscribe(params => {
      const { image } = params;

      const img = this.GALLERY_IMAGES.find(img => img.path === image);

      if (!img) return;

      this.showImg(img);
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.complete();
  }

  showImg(imageInfo: ImageInfo) {
    this._triggerQueryParams({ image: imageInfo.path });
    this._SimpleModalService
      .addModal(ImageModalComponent, imageInfo)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this._triggerQueryParams({});
      });
  }

  _triggerQueryParams(queryParams: {}) {
    this._router.navigate([], {
      queryParams,
    });
  }
}
