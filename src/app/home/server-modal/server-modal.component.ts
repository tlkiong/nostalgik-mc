import { Component } from '@angular/core';
import { ServerInfo } from '../interfaces/server-info.interface';
import { SimpleModalComponent } from 'ngx-simple-modal';

@Component({
  selector: 'app-server-modal',
  templateUrl: './server-modal.component.html',
  styleUrls: ['./server-modal.component.scss'],
})
export class ServerModalComponent
  extends SimpleModalComponent<ServerInfo, undefined>
  implements ServerInfo
{
  serverName = '';

  constructor() {
    super();
  }
}
