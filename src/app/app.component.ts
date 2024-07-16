import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'piano';

  addSound(num: number): void {
    const audio = new Audio();
    audio.src = `../assets/sounds/${num}.wav`;
    audio.load();
    audio.play();
  }
}
