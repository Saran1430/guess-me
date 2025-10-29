import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule,FormsModule],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css'
})
export class Quiz {
  answers = {
    name: '',
    color: '#ff0000',
    vacation: '',
    drink: 'Coffee',
    vibe: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  // submitQuiz() {
  //   this.http.post('http://localhost/knowme/save.php', this.answers).subscribe({
  //     next: () => {
  //       localStorage.setItem('quizData', JSON.stringify(this.answers));
  //       this.router.navigate(['/result']);
  //     },
  //     error: (err) => console.error('Error saving data', err)
  //   });
  // }
  submitQuiz() {
  this.http.post('http://localhost:3000/save', this.answers).subscribe({
    next: (res) => {
      console.log('Saved successfully:', res);
      localStorage.setItem('quizData', JSON.stringify(this.answers));
      this.router.navigate(['/result']);
    },
    error: (err) => console.error('Error saving data:', err)
  });
}

}
