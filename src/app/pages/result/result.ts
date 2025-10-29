import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  imports: [],
  templateUrl: './result.html',
  styleUrl: './result.css'
})
export class Result implements OnInit{

    data: any;

    ngOnInit() {
      this.data = JSON.parse(localStorage.getItem('quizData') || '{}');
    }
}
