import { Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loading:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    
  ) { }

  showLoading():void {
    this.loading.next(true);
    setTimeout(()=>{
      this.loading.next(false);
    }, 2000)
  }
}
