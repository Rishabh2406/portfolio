import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('audioPlayer') audioPlayerElement!: ElementRef;
  totalPrinciple = 0;
  totalInt  = 0;
  totalFinal = 0;
  date: Date;
  number: any = '';
  interest: any = '';
  amount: any = '';
  array = [];
  
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
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
      this.totalPrinciple += Number(el['amount']);
      this.totalInt += Number(el['interest']);
      this.totalFinal += Number(el['amount']) + Number(el['interest']);
    })
  }

}
