import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServerModalComponent } from '../server-modal/server-modal.component';
import { SimpleModalService } from 'ngx-simple-modal';
import { Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();

  constructor(
    private _SimpleModalService: SimpleModalService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activatedRoute.queryParams.pipe(take(1)).subscribe(params => {
      const { server } = params;

      if (!server) return;

      this.showServerInfo(server);
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.complete();
  }

  showServerInfo(serverName: string): void {
    this._triggerQueryParams({ server: serverName });
    this._SimpleModalService
      .addModal(ServerModalComponent, { serverName })
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
