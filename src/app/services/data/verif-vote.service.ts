import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VerifVoteService {

  constructor(private http: HttpClient) {

  }
  
  getVerifWorthPrices(awid: number):Observable<any> {
    return this.http.get(`http://localhost:5000/api/demo/artworks/${awid}/get_worth_prices/`)
  }

  vote(voteData:any){
    return this.http.put(`http://localhost:5000/api/demo/artworks/vote`, voteData)
  }
}
