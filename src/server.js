//dependencies
const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const mysql=require('mysql')


//define the express operation
const app=express();
const port=3000;


//defining the cors -cross origin by reciving the data in json format
app.use(cors());
app.use(bodyParser.json())

//establish the connection with the dB
const db=mysql.createConnection({
host:'localhost',
user:'root',
password:'Zevy$7403',
database:'db2'    
});

//verifying whether db is connected or not
db.connect(err=>{
if(err){
    console.error('connection is not established with the dB',err);
}
else{
    console.log('Connected to db')
}

});

app.listen(port,()=>{console.log('server port estbalished on 3000')})

//to insert client into db
app.post('/addClient',(req,res)=>{
    const {Name,Email,Address,Password,RepeatPassword}=req.body;
    const sql='insert into Client values(?,?,?,?,?)';
    db.query(sql,[Name,Email,Address,Password,RepeatPassword],(err,result)=>{
        if(err){
            console.error('Error in adding the Client',err);
            res.status(500).json({error:'An error occured'});
        }else{
            res.status(200).json({message:'Client added successfully'});
        }
    });
    });

    app.post('/addMeeting',(req,res)=>{
        const {MeetingTopic,Noofpeople,Meetingdate,Meetingtime}=req.body;
        const sql='insert into Meeting values(?,?,?,?)';
        db.query(sql,[MeetingTopic,Noofpeople,Meetingdate,Meetingtime],(err,result)=>{
            if(err){
                console.error('Error in adding the Meeting',err);
                res.status(500).json({error:'An error occured'});
            }else{
                res.status(200).json({message:'Meeting added successfully'});
            }
        });
        });
    