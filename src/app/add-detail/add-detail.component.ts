import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-detail',
  templateUrl: './add-detail.component.html',
  styleUrls: ['./add-detail.component.css']
})

export class AddClientComponent implements OnInit {
  Name:string='';
  Email:string='';
  Address:string='';
  Password:string='';
  RepeatPassword:string='';
  message1:string='';
  MeetingTopic:string='';
  Noofpeople:number=0;
  Meetingdate:string='';
  Meetingtime:string='';
  message2:string='';
    constructor(private http:HttpClient) { }
  
    ngOnInit(): void {
    }


    addClient(){
      const Client={
        Name:this.Name,
        Email:this.Email,
        Address:this.Address,
        Password:this.Password,
        RepeatPassword:this.RepeatPassword
      };

      this.http.post('http://localhost:3000/addClient',Client)
      .subscribe((response:any)=>
      {this.message1=response.message},
      (error)=>{console.error('Error adding the Client',error);}
    );
  }

  addMeeting(){
    const Meeting={
      MeetingTopic:this.MeetingTopic,
      Noofpeople:this.Noofpeople,
      Meetingdate:this.Meetingdate,
      Meetingtime:this.Meetingtime
    };  

    this.http.post('http://localhost:3000/addMeeting',Meeting)
    .subscribe((response:any)=>
    {this.message2=response.message},
    (error)=>{console.error('Error adding the Meeting',error);}
  );
  }
  }
   