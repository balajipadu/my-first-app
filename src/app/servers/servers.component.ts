import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', // this acts like a css attribute
  //selector: '.app-servers', // this acts like a class 
  selector: 'app-servers', // this is the typicall way of declaring the selector
 /*  template: `
  <app-server></app-server>
  <app-server></app-server>`, */
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus: string="Server is not created! ";
  serverName:string="TestServer";
  username:string="";
  serverCreated=false;
  servers =["MyTestServer","MyTestServer2"]
  constructor() { 
    setTimeout(()=> {
      this.allowNewServer= true;
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer()
  {
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus="Server is created! and the server name is " + this.serverName;
  }

  onServerName(event: Event){
   this.serverName=(<HTMLInputElement>event.target).value; // this Element is type casted accordingly to get the target
  }

  resetUsername()
  {
   this.username=""; 
  }

}
