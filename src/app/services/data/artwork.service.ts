import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  constructor(private http:HttpClient) { }

  getArtworks(): Observable<any> {
    return this.http.get("http://localhost:5000/api/demo/artworks/")
  }

  getRandomArtworks(uid:number, count:number = 5): Observable<any>{
    return this.http.get(`http://localhost:5000/api/demo/random_artworks/?count=${count}&uid=${uid}`)
  }

  getUserArtworks(uid:number):Observable<any> {
    return this.http.get(`http://localhost:5000/api/demo/artworks/?uid=${uid}`)
  }

  getArtworkDetails(awid: number): Observable<any>{
    return this.http.get(`http://localhost:5000/api/demo/artwork_details/?awid=${awid}`)
  }
}
