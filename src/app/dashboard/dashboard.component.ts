import { Component } from '@angular/core';
import { ChallengeService } from './challenge.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
upvote() {
throw new Error('Method not implemented.');
}


constructor(private challengeService: ChallengeService,) {}
get challenges(): any[] {
  return this.challengeService.getAllChallenges();
}
}
