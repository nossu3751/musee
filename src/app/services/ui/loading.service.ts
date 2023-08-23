import { Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  dataLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  pageLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(
    
  ) { }

  showLoading(mode="data"):void {
    if(mode == "data"){
      this.dataLoading.next(true);
      setTimeout(()=>{
        this.dataLoading.next(false);
      }, 2000)
    }else if(mode == "page"){
      this.pageLoading.next(true);
      setTimeout(()=>{
        this.pageLoading.next(false);
      }, 2000)
    }
  }
}
