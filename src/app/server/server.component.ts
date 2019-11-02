import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  serverId: number = 94949;
  serverName: string = 'Apache';
  serverStatus: string = 'Offline';


  getServerStatus() {
    return this.serverStatus;
  }
}