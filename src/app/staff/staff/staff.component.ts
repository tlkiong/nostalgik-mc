import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { StaffInfo } from '../interfaces/staff-info.interface';
import { StaffModalComponent } from '../staff-modal/staff-modal.component';
import { Subject, take, takeUntil } from 'rxjs';

declare const skinview3d: any;

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
  providers: [SimpleModalService],
})
export class StaffComponent implements OnInit, OnDestroy, AfterViewInit {
  STAFF_INFO: StaffInfo[] = [
    {
      ign: 'AlterDimension',
      path: 'assets/staffs/AlterDimension.png',
    },
    {
      ign: 'CCStelleri',
      path: 'assets/staffs/CCStelleri.png',
    },
    {
      ign: 'Mozo95',
      path: 'assets/staffs/Mozo95.png',
    },
    {
      ign: 'TheTrulyMad',
      path: 'assets/staffs/TheTrulyMad.png',
    },
    {
      ign: 'Vinaco',
      path: 'assets/staffs/Vinaco.png',
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
      const { ign } = params;

      const staffInfo = this.STAFF_INFO.find(info => info.ign === ign);

      if (!staffInfo) return;

      this.showImg(staffInfo);
    });
  }

  ngAfterViewInit(): void {
    this.STAFF_INFO.forEach(info => this._startSkinView3d(info));
  }

  ngOnDestroy() {
    this.unsubscribe$.complete();
  }

  showImg(staffInfo: StaffInfo) {
    this._triggerQueryParams({ ign: staffInfo.ign });
    this._SimpleModalService
      .addModal(StaffModalComponent, staffInfo)
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

  _startSkinView3d(info: StaffInfo) {
    const canvas = document.getElementById(`${info.ign}-skin-container`);
    const skin = info.path;
    const skinViewer = new skinview3d.SkinViewer({
      canvas,
      width: undefined,
      height: undefined,
      skin,
    });

    // Change viewer size
    // skinViewer.width = 600;
    // skinViewer.height = 800;
    // Load another skin
    // skinViewer.loadSkin("img/skin2.png");
    // Load a cape
    // skinViewer.loadCape("img/cape.png");
    // Load an elytra (from a cape texture)
    // skinViewer.loadCape("img/cape.png", { backEquipment: "elytra" });
    // Unload(hide) the cape / elytra
    // skinViewer.loadCape(null);
    // Set the background color
    // skinViewer.background = 0x5a76f3;
    // Set the background to a normal image
    // skinViewer.loadBackground("img/background.png");
    // Set the background to a panoramic image
    skinViewer.loadPanorama('assets/panorama.png');
    // Change camera FOV
    skinViewer.fov = 70;
    // Zoom out
    skinViewer.zoom = 0.5;
    // Control objects with your mouse!
    const control = skinview3d.createOrbitControls(skinViewer);
    control.enableRotate = false;
    control.enableZoom = false;
    control.enablePan = false;
    // Add an animation
    const walk = skinViewer.animations.add(skinview3d.WalkingAnimation);
    walk.speed = 1;
    // Add another animation
    // const rotate = skinViewer.animations.add(skinview3d.RotatingAnimation);
    // rotate.speed = 1;
    // Remove an animation, stop walking dude
    // walk.remove();
    // Remove the rotating animation, and make the player face forward
    // rotate.resetAndRemove();
    // And run for now!
    // const run = skinViewer.animations.add(skinview3d.RunningAnimation);
    // Set the speed of an animation
    // run.speed = 3;
    // Pause single animation
    // run.paused = true;
    // Pause all animations!
    // skinViewer.animations.paused = true;
  }
}
