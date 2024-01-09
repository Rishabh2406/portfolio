import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('audioPlayer') audioPlayerElement!: ElementRef;
  totalPrinciple:any = 0;
  totalInt :  any = 0;
  totalFinal: any = 0;
  date: any;
  number: any;
  interest: any;
  amount: any;
  array = [];
  caseName: any;
  responseData: any;
  file: any;
  blobUrl: any = '';
  transcript: any = '';
  showAudioPlayer: any = false;
  audioLoader: any = false;
  textLoader: any = false;
  showTranscribedBox: any = false;
  showSummaryBox: any = false;
  showSummaryButton: any = false;
  summaryLoader: any = false;
  reasonsToDecline: any = [];
  summText: any = '';

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  async submitData() {
    // this.audioLoader = true;
    // const apiUrl = 'http://localhost:3000/';
    // const headers = { 'Content-Type': 'application/json' };
    // const requestData = { filename: this.caseName + '.mp3' };
    // this.http.post(apiUrl, requestData, { headers }).subscribe(async (response: any) => {
    //   this.responseData = response.data;
    //   let url = this.responseData;
    //   let corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/' + url;
    //   const fetchedData = await fetch(corsAnywhereUrl); //fetching from the url
    //   if (fetchedData.status == 200) {
    //     const arrayBuffer = await fetchedData.arrayBuffer();//fetching in the form of arraybuffe
    //     const blob = new Blob([arrayBuffer]);
    //     const newFile = new File([blob], 'filename.mp3');
    //     const blobabcd = new Blob([newFile], { type: 'audio/mp3' });
    //     this.blobUrl = await URL.createObjectURL(blobabcd);
    //     if(this.blobUrl){
    //       this.audioLoader = false;
    //       this.showAudioPlayer = true;
    //       setTimeout(() => {
    //         this.audioPlayerElement.nativeElement.src = this.blobUrl;
    //       })
    //     }
    //   }
    // }, (error => {
    //   this.audioLoader = false;
    // }));
    this.showAudioPlayer = true;

  }
  add() {
    let selectedDate = new Date(this.date);
    let currentDate = new Date();
    let months = ((currentDate.getFullYear() - selectedDate.getFullYear()) * 12 + (currentDate.getMonth() - selectedDate.getMonth() + (currentDate.getDate() < selectedDate.getDate() ? -1 : 0)));
    let daysDiff = (currentDate.getDate() - selectedDate.getDate());
    if(daysDiff < 0){
      daysDiff += 30;
    }
    daysDiff= daysDiff/30;
    let decimalToCal = 0;
    let total = 0;
    if(months == 0){
      total = 1;
    }else{
      if(daysDiff == 0){
        decimalToCal = 0;
      }else if((7/30) >= daysDiff){
        decimalToCal = 0.25;
      }else if((7/30) < daysDiff && daysDiff <= (15/30)){
        decimalToCal = 0.5;
      }else if((15/30) < daysDiff && daysDiff <= (23/30)){
        decimalToCal = 0.75;
      }else if((24/30) <= daysDiff && daysDiff <= 1){
        decimalToCal = 1;
      }
      total = months + decimalToCal
    }
    let interest = (Number(this.amount) * Number(this.interest) * Number(total))/100;
    let obj = {
      number: this.number,
      amount: this.amount,
      date: this.date,
      interest: interest
    };
    this.array.push(obj);
    this.date = null;
    this.amount = null;
    this.number = null;
    this.interest = null;

  }

  calculate(){
    this.totalFinal = 0;
    this.totalPrinciple = 0;
    this.totalInt = 0;
    this.array.forEach(el => {
      this.totalPrinciple += Number(el?.amount);
      this.totalInt += Number(el?.interest);
      this.totalFinal += Number(el?.amount) + Number(el?.interest);
    })
  }

  async transcribe() {
    // this.textLoader = true;
    this.showTranscribedBox = true;
    // const apiUrl = 'http://localhost:3000/transcribe';
    // const headers = { 'Content-Type': 'application/json' };
    // const requestData = { jobname: this.caseName };
    // this.http.post(apiUrl, requestData, { headers }).subscribe(async (response: any) => {
    //   this.responseData = response.data;
    //   let url = this.responseData;
    //   let corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/' + url;
    //   const fetchedData = (await fetch(corsAnywhereUrl));
    //   if (fetchedData.status == 200) {
    //     const arrayBuffer = await fetchedData.arrayBuffer();//fetching in the form of arraybuffe
    //     const textDecoder = new TextDecoder('utf-8');
    //     const jsonString = textDecoder.decode(arrayBuffer);
    //     const jsonObject = JSON.parse(jsonString);
    //     this.textLoader = false;
    //     this.transcript = jsonObject.results.transcripts[0].transcript;
    //   }
    // });
    this.transcript = `Hello. Any questions? Yeah, I can hear you now, of course, this is Ron. I work as sales manager at business credit at where at business credit you apply for business funding with us. Yeah. Right. So we had an offer, I believe Chris, one of my colleague did tell you about the 50,000 offer, right? So we're not ok with the terms or right? Yeah. No, no, that was a cash advance is what he made it sound like and I'd be paying weekly on it. So yeah, that that's yeah, I'm not good with that, right? You're you wanna apply for a term loan? Uh I may, I'm not sure I wanna do with you guys. You seem like you're playing games with me and I don't appreciate that. So uh so I might go with somebody, somebody else. So I totally understand sir. But you know, this is the first time you're talking and then I got your file from the management to give you a call and just to discuss what you need. So if you want, I can get the file submitted for com low. Well, initially when I put in all my data you know, I got a pop up that said, hey, you're pre approved for $75,000 loan. That's what I thought we were working. That's what I thought we were working towards. And then Chris came back with this uh again, uh cash advance thing for 50 grand. I'm like, that's not what I thought about it all. So, again, that, that's why it seems like your system, whether it be you or your company or whatever is playing games with me. So I can't say that I'm really happy with that. I understand. Sure. I'll, I'll try to, you know, make the changes and try to get you what you're looking for. It's just that, you know, my underwriting was asking for, uh, the recent financials for the business that's all to qualify for a term loan because term loan product does require that. I, well, I sent you, I guess my last three months of, uh, my checking account, my savings account, the business checking account, business savings account. Absolutely. It is there. No, uh, we just have 2021 tax return. We, we don't have, uh, you know, the recent profit loss for 2022. What do you need for 2022? Uh, the profit loss statements? Oh, profit loss. Ok. Well, that's the first time I've heard anybody ask for that. So, I mean, did you apply for t with anyone else? Uh, not really per se. Um, I use the term loan product. It does require that. You know I'm doing this since the last eight years and your file lady looks good to me. Ok, well send me an email with what you need and I'll send it to you and again I'm looking for about 75 grand on a longer term loan. So absolutely make a second issue on that. I really wanna own your business. I I'll send an email out just try to get those documents in me on it should be good. Ok, thank you. Ok, thank you. Appreciate it. It is a wrong deal. So thank you for giving me a call. I might be busy on another call or in the meeting. Please try to send an email and I will definitely respond to you. Thank you so much. Have a great day. Please leave your message after the tone. When done hang up or press the pound key. Hey, I just had a missed call from you. I was calling you back. Call me back. 2023411718. Bye.`
    this.showSummaryButton = true;


  }

  summAndPredict() {
    this.showSummaryBox = true;
    this.summaryLoader = true;
    const apiUrl = 'http://localhost:3000/predict';
    const headers = { 'Content-Type': 'application/json' };
    const requestData = { transcribe: this.transcript };
    this.http.post(apiUrl, requestData, { headers }).subscribe((response: any) => {
      this.responseData = response.data;
      console.log(this.responseData);
      if (response) {
        this.mapData();
      }
    });
  }

  mapData() {
    let caseData;
    let summary = '';
    this.responseData.forEach((el => {
      if (el['case_id'] == this.caseName) {
        caseData = el;
      }
    }));
    for (const key in caseData) {
      if (key.startsWith("('sid', '")) {
        const extractedKey = key.split("('sid', '")[1].split("')")[0];
        const newObj = {};
        newObj['key'] = extractedKey;
        newObj['value'] = caseData[key];
        this.reasonsToDecline.push(newObj);
      } else if (key == 'text') {
        this.summaryLoader = false;
        this.summText = caseData[key];
      }
    }
    let xyz = JSON.parse(this.summText)
    // this.summText = JSON.parse(this.summText)      
    // this.summText = JSON.parse(this.summText)['summary_text'];

    // let statusArray = this.responseData.map(el => el?.status_name).filter(el => consideredTypes.includes(el));
    // statusArray.forEach(el => {
    //   if(el == 'Borrower Not Interested'){
    //     this.notInterestedCount++;
    //   }else{
    //     this.declinedCount++;
    //   }
    // });
    // this.createChart();
  }

}
