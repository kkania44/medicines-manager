import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataHolderService {
  userId: number;

  constructor() { }

  saveId(id: number) {
    this.userId = id;
  }
}
