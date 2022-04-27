import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { StaffInfo } from '../interfaces/staff-info.interface';

declare const skinview3d: any;
declare const window: any;
@Component({
  selector: 'app-staff-modal',
  templateUrl: './staff-modal.component.html',
  styleUrls: ['./staff-modal.component.scss'],
})
export class StaffModalComponent
  extends SimpleModalComponent<StaffInfo, undefined>
  implements StaffInfo, OnInit
{
  path = '';
  ign = '';

  constructor() {
    super();
  }

  ngOnInit(): void {
    this._startSkinView3d();
  }

  _startSkinView3d() {
    const canvas = document.getElementById('skin-container');
    const skin = `assets/staffs/${this.path}`;
    const skinViewer = new skinview3d.SkinViewer({
      canvas,
      width: undefined,
      height: undefined,
      skin,
    });
    window.xx = skinViewer;
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
    control.enableRotate = true;
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
