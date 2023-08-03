import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchComponent } from '../switch/switch.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, SwitchComponent],
  template: `
    <div class="border-round-md">
      <div class="flex flex-column align-items-center surface-100 h-auto pb-4">
        <!-- <div class="w-full p-2 flex flex-column align-items-end">
          <app-switch />
        </div> -->
        <img
          class="mt-2 w-6 h-6 select-none"
          src="assets/photo.png"
          alt="Lucas Peixoto"
        />
        <span
          class="select-none align-items-center text-center text-4xl w-10 mt-4 mb-1 font-bold"
          >{{ name }}</span
        >
        <span
          class="text-center text-3xl align-items-center text-center w-12"
          >{{ job }}</span
        >
      </div>

      <div class="flex flex-column align-items-start p-1 mt-4">
        <div
          class="flex align-items-center mt-1 ml-6 mb-3"
          *ngFor="let contact of contacts"
        >
          <div class="mr-2">
            <i [class]="contact.icon" style="font-size: 1.5rem"></i>
          </div>
          <a
            [href]="contact.value"
            target="_blank"
            class="text-base cursor-pointer hover:underline text-primary m-1"
            >{{ contact.name }}</a
          >
        </div>
      </div>

      <div class="mb-4">
        <span class="text-3xl font-bold mt-4 ml-4">Educação</span>
        <div
          class="flex flex-column mt-1 mb-2"
          *ngFor="let education of educations"
        >
          <span class="text-blue-300 text-xl ml-6 mt-2 text-secondary">{{
            education.title
          }}</span>
          <span class="text-color text-base ml-6 mt-1">{{
            education.institution
          }}</span>
          <span class="text-color text-base align-items-end ml-6 mt-1">{{
            education.period
          }}</span>
        </div>
      </div>

      <div class="mb-4">
        <span class="text-3xl font-bold mt-4 ml-4">Idiomas</span>
        <div
          class="flex flex-column mt-1 mb-2"
          *ngFor="let language of languages"
        >
          <span class="text-blue-300 text-xl ml-6 mt-2 text-secondary">{{
            language.title
          }}</span>
          <span class="text-color text-base ml-6 mt-1">{{
            language.level
          }}</span>
        </div>
      </div>

      <div class="mb-4">
        <span class="text-3xl font-bold mt-4 ml-4">Competências</span>
        <div class="flex flex-column mt-1 mb-2" *ngFor="let skill of skills">
          <span class="text-blue-300 text-xl ml-6 mt-2 text-secondary">{{
            skill
          }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [``],
})
export class SidebarComponent {
  public name = 'Lucas Peixoto Fernandes';

  public job = 'Desenvolvedor Fullstack';

  public contacts = [
    {
      name: 'lspeixotodev@gmail.com',
      value: 'lspeixotodev@gmail.com',
      icon: 'pi pi-google',
    },
    {
      name: '(19)9 8262 1117',
      value:
        'https://api.whatsapp.com/send?phone=5519982621117&text=Ol%C3%A1%21+Lucas, tudo bem ?&lang=pt_pt',
      icon: 'pi pi-whatsapp',
    },
    {
      name: 'Linkedin',
      value: 'https://www.linkedin.com/in/lucassacramoni/',
      icon: 'pi pi-linkedin',
    },
    {
      name: 'Facebook',
      value: 'https://www.facebook.com/lucassacramoni/',
      icon: 'pi pi-facebook',
    },
    {
      name: 'Instagram',
      value: 'https://www.instagram.com/lspeixotof/',
      icon: 'pi pi-instagram',
    },
    {
      name: 'Github',
      value: 'https://github.com/lucasspeixoto',
      icon: 'pi pi-github',
    },
    {
      name: 'Medium',
      value: 'https://medium.com/@lspeixotodev',
      icon: 'pi pi-envelope',
    },
  ];

  public educations = [
    {
      title: 'Mestrado Engenharia Agrícola',
      institution: 'Universidade Estadual de Campinas (Unicamp)',
      period: '2018 - 2020',
    },
    {
      title: 'Graduação Engenharia Agrícola',
      institution: 'Universidade Estadual de Campinas (Unicamp)',
      period: '2012 - 2017',
    },
  ];

  public languages = [
    {
      title: 'Português',
      level: 'Nativo',
    },
    {
      title: 'Inglês',
      level: 'Avançado',
    },
  ];

  public skills = [
    'HTML, CSS (LESS, SCSS )',
    'Javascript/Typescript',
    'Angular',
    'React',
    'Java',
    'Spring Boot',
    'Python',
  ];
}
