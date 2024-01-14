import { Component } from '@angular/core';
import { ChallengeService } from '../challenge.service';

@Component({
  selector: 'app-add-challenge',
  templateUrl: './add-challenge.component.html',
  styleUrls: ['./add-challenge.component.css']
})
export class AddChallengeComponent {
  newChallenge: any ={ title: '', description: '', tags: '' };
  constructor(private challengeService: ChallengeService) {}
addChallenge() {
  this.challengeService.addChallenge({
    title: this.newChallenge.title,
    description: this.newChallenge.description,
    tags: this.newChallenge.tags,
    votes: 0,
    createdAt: new Date().toDateString() + new Date().toLocaleTimeString(),
  });
}

}
