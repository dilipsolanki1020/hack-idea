import { Component } from '@angular/core';
import { Challenge, ChallengeService } from '../challenge.service';

@Component({
  selector: 'app-add-challenge',
  templateUrl: './add-challenge.component.html',
  styleUrls: ['./add-challenge.component.css']
})
export class AddChallengeComponent {
  newChallenge: Challenge ={ title: '', description: '', tags: ' ',votes: 0,createdAt: ''
  };
  constructor(private challengeService: ChallengeService) {}
addChallenge() {
  this.challengeService.addChallenge({
    title: this.newChallenge.title,
    description: this.newChallenge.description,
    tags: this.newChallenge.tags,
    votes: 0,
    createdAt: new Date().toUTCString(),
  });
}

}
