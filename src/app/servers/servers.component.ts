import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl :'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverName2 ='';
  serverCreationStatus='No server created';

  constructor() { 

    setTimeout(()=>{
         this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }


  onCreateServer()
  {
    this.serverCreationStatus ='server was created';
  }

  onUpdateServerName(event: Event)
  {
    console.log(event);
    this.serverName2=(<HTMLInputElement>event.target).value;
  }

}
