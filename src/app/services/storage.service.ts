import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  getItem(name: string) {
    return JSON.parse(localStorage.getItem(name))
  }

  setItem(name: string, data: any) {
    return localStorage.setItem(name,  JSON.stringify(data))
  }

  removeItem(name: string) {
    localStorage.removeItem(name)
  }


}
