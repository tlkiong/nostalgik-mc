import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { StaffInfo } from '../interfaces/staff-info.interface';
import { StaffModalComponent } from '../staff-modal/staff-modal.component';
import { Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
  providers: [SimpleModalService],
})
export class StaffComponent implements OnInit, OnDestroy {
  STAFF_INFO: StaffInfo[] = [
    {
      ign: 'AlterDimension',
      path: 'AlterDimension.png',
    },
    {
      ign: 'CCStelleri',
      path: 'CCStelleri.png',
    },
    {
      ign: 'Mozo95',
      path: 'Mozo95.png',
    },
    {
      ign: 'TheTrulyMad',
      path: 'TheTrulyMad.png',
    },
    {
      ign: 'Vinaco',
      path: 'Vinaco.png',
    },
  ];

  private unsubscribe$ = new Subject();

  constructor(
    private _SimpleModalService: SimpleModalService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

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

  ngOnInit(): void {
    this._activatedRoute.queryParams.pipe(take(1)).subscribe(params => {
      const { ign } = params;

      const staffInfo = this.STAFF_INFO.find(info => info.ign === ign);

      if (!staffInfo) return;

      this.showImg(staffInfo);
    });
    return;
  }

  ngOnDestroy() {
    this.unsubscribe$.complete();
  }
}
