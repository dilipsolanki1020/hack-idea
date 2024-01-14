import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor() { }

  addChallenge(challenge:any){
console.log(challenge)
  }
}
