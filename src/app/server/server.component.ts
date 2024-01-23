import {Component} from '@angular/core';

@Component({
    selector:'app-server', // this should be as unique as possible typically we add app as a prefix
    templateUrl:'./server.component.html', //here it shoudld be relative path and '.' stands for the current folder
    styles:[`
    .online{
        color:white
    }`]
})
export class ServerComponent // export allows this class to be instatiated by Angular 
{
    serverId:number = 10;
    serverStatus: string ="Offline";
    constructor() { 
       this.serverStatus=Math.random()>0.5 ?"Online" : "Offline";
      }
getStatus()
{
    return this.serverStatus;
}
getColor()
{
    return this.serverStatus==="Online" ? "green" : "red";
}
}