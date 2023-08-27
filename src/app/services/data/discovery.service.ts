import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscoveryService {

  constructor(
    private http:HttpClient
  ) { }

  
}
