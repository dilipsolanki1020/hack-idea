import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  private challenges: Challenge[];
  constructor() {
    const storedChallenges = localStorage.getItem('challenges');
    this.challenges = storedChallenges ? JSON.parse(storedChallenges) : [];
   }

addChallenge(challenge:Challenge){
console.log(challenge)
this.challenges.push(challenge);
this.updateLocalStorage()
  }

  getAllChallenges(): Challenge[] {
    return this.challenges;
  }

  upvoteChallenge(challenge: Challenge): void {
    challenge.votes++;
    this.updateLocalStorage();
  }

  updateLocalStorage(): void {
    localStorage.setItem('challenges', JSON.stringify(this.challenges));
  }

  sortChallengesByVotes(): void {

  }
  
  sortChallengesByDate(): void {

  }
  
}
export interface Challenge {
  title: string;
  description: string;
  tags: string;
  votes: number;
  createdAt: string; // or use Date type if applicable
}