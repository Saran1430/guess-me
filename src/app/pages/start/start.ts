import { Component } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';

@Component({
  selector: 'app-start',
  imports: [RouterOutlet],
  templateUrl: './start.html',
  styleUrl: './start.css'
})
export class Start {

  constructor(private router: Router) {}

  goToQuiz() {
    this.router.navigate(['/quiz']);
  }
}
