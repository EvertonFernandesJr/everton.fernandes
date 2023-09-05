import { inject, Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Injectable()
export class LanguageService {
  public activeLanguage!: string;

  private readonly translocoService = inject(TranslocoService);

  public getActualSelectedLanguage(): string {
    const actualLanguage = JSON.parse(
      localStorage.getItem('LUCAS_P_PROFILE_LANGUAGE')!
    );
    if (actualLanguage !== null) {
      this.activeLanguage = actualLanguage;
    } else {
      this.activeLanguage = this.translocoService.getActiveLang();
    }
    this.translocoService.setActiveLang(actualLanguage);

    return this.activeLanguage;
  }
}
