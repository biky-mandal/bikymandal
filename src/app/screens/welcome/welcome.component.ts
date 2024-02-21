import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit{

  constructor(
    private router: Router
  ){}

  text1: string = 'Hi There!';
  text2: string = 'Developing the portfolio for you...';
  text3: string = 'Just a second please.. ';
  text4: string = 'Welcome to my portfolio. Enjoy your visit!';
  text5: string = 'Thanks! Redirecting..';
  renderedText: string = '';
  renderedText2: string = '';
  renderedText3: string = '';
  renderedText4: string = '';
  renderedText5: string = '';
  active1: boolean = true;
  active2: boolean = false;
  active3: boolean = false;
  active4: boolean = false;
  active5: boolean = false;

  ngOnInit(): void {
    // this.audioService.playAudio();
    this.simulateTyping();
    let visitCount = sessionStorage.getItem('visit');
    if(visitCount){
      sessionStorage.setItem('visit', (Number(visitCount) + 1).toString());
    }else{
      sessionStorage.setItem('visit', '1');
    }
  }

  simulateTyping = () => {
    this.active1 = true;
    let temp = this.text1.split("");
    let length = temp.length;
    for(let i = 0; i<length; i++){
      let friezeTime = i*100;
      setTimeout(() => {
        this.renderedText = this.renderedText + temp[i]

        if(i == length - 1){
          setTimeout(() => {
            this.active1 = false;
            this.active2 = true;
            this.simulateTyping2();
          }, 1000)

        }
      }, friezeTime )
    }
  }

  simulateTyping2 = () => {
    let temp = this.text2.split("");
    let length = temp.length;
    for(let i = 0; i<length; i++){
      let friezeTime = i*100;
      setTimeout(() => {
        this.renderedText2 = this.renderedText2 + temp[i]

        if(i == length - 1){
          setTimeout(() => {
            this.active2 = false;
            this.active3 = true;
            this.simulateTyping3();
          }, 2000)

        }

      }, friezeTime )
    }
  }

  simulateTyping3 = () => {
    let temp = this.text3.split("");
    let length = temp.length;
    for(let i = 0; i<length; i++){
      let friezeTime = i*100;
      setTimeout(() => {
        this.renderedText3 = this.renderedText3 + temp[i]

        if(i == length - 1){
          setTimeout(() => {
            this.active3 = false;
            this.active4 = true;
            this.simulateTyping4();
          }, 5000)

        }

      }, friezeTime )
    }
  }



  simulateTyping4 = () => {
    let temp = this.text4.split("");
    let length = temp.length;
    for(let i = 0; i<length; i++){
      let friezeTime = i*100;
      setTimeout(() => {
        this.renderedText4 = this.renderedText4 + temp[i]

        if(i == length - 1){
          setTimeout(() => {
            this.active4 = false;
            this.active5 = true;
            this.simulateTyping5();
          }, 2000)

        }

      }, friezeTime )
    }
  }

  simulateTyping5 = () => {
    let temp = this.text5.split("");
    let length = temp.length;
    for(let i = 0; i<length; i++){
      let friezeTime = i*100;
      setTimeout(() => {
        this.renderedText5 = this.renderedText5 + temp[i]

        if(i == length - 1){
          setTimeout(() => {
            this.active4 = false;
            this.active5 = false;
            this.router.navigate(['']);
          }, 2000)

        }

      }, friezeTime )
    }
  }
}
