import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService<StorageItemType> {
  public setStorageItem(key: string, value: StorageItemType): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public removeStoragedItem(key: string): void {
    localStorage.removeItem(key);
  }

  public getStoragedItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  public cleanStorage(): void {
    localStorage.clear();
  }
}
