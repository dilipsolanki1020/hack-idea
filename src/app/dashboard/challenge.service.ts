import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  private challenges: any[];
  constructor() {
    const storedChallenges = localStorage.getItem('challenges');
    this.challenges = storedChallenges ? JSON.parse(storedChallenges) : [];
   }

addChallenge(challenge:any){
console.log(challenge)
this.challenges.push(challenge);
localStorage.setItem('challenges',JSON.stringify(this.challenges))
  }

  getAllChallenges(): any[] {
    return this.challenges;
  }
}
