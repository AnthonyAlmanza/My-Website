import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  scrollTo(target: string) {
    let el = document.getElementById(target);
    if (el !== null) {
      el.scrollIntoView();
    }
  }
}
