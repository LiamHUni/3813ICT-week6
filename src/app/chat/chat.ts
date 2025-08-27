import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chat.html',
  styleUrl: './chat.css'
})
export class Chat implements OnInit{

  messagecontent:string="";
  message:string[] = [];
  ioConnection:any;

  constructor(private socketService:SocketService){}

  ngOnInit(){
    this.initIoConnection();
  }

  private initIoConnection(){
    this.socketService.initSocket();
    this.ioConnection = this.socketService.getMessage()
      .subscribe((message:any)=>{
        this.message.push(message);
      });
  }

  chat(){
    if(this.messagecontent){
      this.socketService.send(this.messagecontent);
      this.messagecontent = "";
    }else{
      console.log("No Message");
    }
  }

}
