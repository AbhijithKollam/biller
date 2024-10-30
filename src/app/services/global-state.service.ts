import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {

  private state: { [key: string]: any } = {};

  setState(key: string, value: any): void {
    this.state[key] = value;
  }

  getState(key: string): any {
    return this.state[key];
  }

  clearState(key: string): void {
    delete this.state[key];
  }
}
