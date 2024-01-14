import { Component } from '@angular/core';

@Component({
  selector: 'app-add-challenge',
  templateUrl: './add-challenge.component.html',
  styleUrls: ['./add-challenge.component.css']
})
export class AddChallengeComponent {
  newChallenge: any;
  
addChallenge() {
console.log("Add challenge")
}

}
