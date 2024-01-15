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
    this.challenges.sort((a, b) => b.votes - a.votes);
    this.updateLocalStorage();
  }
  
  sortChallengesByDate(): void {
    this.challenges.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    this.updateLocalStorage();
  }
  
}
export interface Challenge {
  title: string;
  description: string;
  tags: string[];
  votes: number;
  createdAt: string; 
}