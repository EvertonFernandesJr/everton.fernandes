import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { CardModule } from 'primeng/card';

type Experience = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslocoModule, CardModule],
  template: `<div class="flex flex-column gap-4">
    <p-card>
      <div class="flex flex-column m-4">
        <div class="flex align-items-center">
          <i class="pi pi-user text-primary" style="font-size: 1.5rem"></i>
          <span class="lg:text-3xl text-2xl text-base font-bold ml-4">{{
            'profile.title' | transloco
          }}</span>
        </div>
        <div class="mt-4 ml-4">
          <p class="text-color lg:text-xl text-lg text-justify">
            {{ 'profile.description' | transloco }}
          </p>
        </div>
      </div>
    </p-card>

    <p-card>
      <div class="flex flex-column m-4">
        <div class="flex align-items-center">
          <i class="pi pi-briefcase text-primary" style="font-size: 1.5rem"></i>
          <span class="lg:text-3xl text-2xl text-base font-bold ml-4">{{
            'experiences.title' | transloco
          }}</span>
        </div>
        <section class="mt-4 ml-4" *ngFor="let experience of experiences">
          <div
            class="flex flex-wrap justify-content-between align-items-center text-center mt-3 gap-1">
            <span class="lg:text-2xl sm:text-xl text-lg text-blue-300">{{
              experience.title | transloco
            }}</span>
            <span class="lg:text-xl sm:text-lg text-base font-bold"
              >{{ experience.startDate | transloco }} -
              {{ experience.endDate | transloco }}</span
            >
          </div>
          <div class="flex justify-content-start mt-3">
            <span class="text-sm">{{ experience.company | transloco }}</span>
          </div>
          <p class="text-color lg:text-xl text-lg mt-2 text-justify font-italic">
            {{ experience.description | transloco }}
          </p>
        </section>
      </div>
    </p-card>

    <!-- <p-card>
      <div class="flex flex-column m-4">
        <div class="flex align-items-center">
          <i class="pi pi-book text-primary" style="font-size: 1.5rem"></i>
          <span class="text-3xl text-base font-bold ml-4">Artigos</span>
        </div>

        <section class="mt-4 ml-4" *ngFor="let article of articles">
          <div class="flex justify-content-between align-items-center text-center mt-3">
            <a
              [href]="article.link"
              target="_blank"
              class="hover:underline text-base md:text-2xl text-blue-300"
              >{{ article.title }}</a
            >
            <span class="text-1xl text-base font-bold">{{ article.stack }}</span>
          </div>
          <div class="mt-2">
            <img class="w-4 h-4" [src]="article.imageLink" />
          </div>
        </section>
      </div>
    </p-card> -->
  </div> `,
  styles: [``],
})
export class HomeComponent {
  public experiences: Experience[] = Object.keys(new Array(6).fill(0)).map(x => {
    return {
      title: `experiences.xp${(Number(x) + 1).toString()}.title`,
      company: `experiences.xp${(Number(x) + 1).toString()}.company`,
      startDate: `experiences.xp${(Number(x) + 1).toString()}.startDate`,
      endDate: `experiences.xp${(Number(x) + 1).toString()}.endDate`,
      description: `experiences.xp${(Number(x) + 1).toString()}.description`,
    };
  });

  public articles = [
    {
      title: 'Fluxo de dados via rota no Angular',
      date: 'Jul 2023',
      link: 'https://medium.com/@lspeixotodev/fluxo-de-dados-via-rota-no-angular-58631d598ce5',
      imageLink:
        'https://miro.medium.com/v2/resize:fit:640/format:webp/1*9XHJF8y8WgtjGQjHSplcNg.png',
      stack: 'Angular',
    },
    {
      title: 'Criando um CRUD com Angular: Observables + Signals',
      date: 'Jul 2023',
      link: 'https://medium.com/@lspeixotodev/criando-um-crud-com-angular-observables-signals-75008ff4671c',
      imageLink:
        'https://miro.medium.com/v2/resize:fit:640/format:webp/1*d35wbwxf1dp25qHvuTt_2w.png',
      stack: 'Angular',
    },
    {
      title: 'Controle de Erros customizados no Angular com Control Container',
      date: 'Jun 2023',
      link: 'https://medium.com/@lspeixotodev/otimiza%C3%A7%C3%A3o-das-valida%C3%A7%C3%B5es-de-formul%C3%A1rios-no-angular-com-control-container-cc49b73305d3',
      imageLink:
        'https://miro.medium.com/v2/resize:fit:640/format:webp/1*y0kse8hUG9v4r6m9amoLFg.png',
      stack: 'Angular',
    },
  ];
}
