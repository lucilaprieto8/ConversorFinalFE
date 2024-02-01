import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private conversionEvent = new Subject<void>();

  conversionOccurred$ = this.conversionEvent.asObservable();

  triggerConversionEvent() {
    this.conversionEvent.next();
  }
}
