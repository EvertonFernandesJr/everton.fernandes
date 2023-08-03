import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="flex flex-column">
    <div class="flex flex-column m-4">
      <div class="flex align-items-center">
        <i class="pi pi-user text-primary" style="font-size: 2.2rem"></i>
        <span class="text-3xl text-base font-bold ml-4">Perfil</span>
      </div>
      <div class="mt-4 ml-4">
        <p
          class="text-color text-xl"
          *ngFor="let paragraph of profileParagraphs"
        >
          {{ paragraph }}
        </p>
      </div>
    </div>

    <div class="flex flex-column m-4">
      <div class="flex align-items-center">
        <i class="pi pi-briefcase text-primary" style="font-size: 2.2rem"></i>
        <span class="text-3xl text-base font-bold ml-4">Experiências</span>
      </div>
      <section class="mt-4 ml-4" *ngFor="let experience of experiences">
        <div
          class="flex justify-content-between align-items-center text-center mt-3"
        >
          <span class="text-2xl text-base text-blue-300">{{
            experience.title
          }}</span>
          <span class="text-1xl text-base font-bold"
            >{{ experience.date.month }} - {{ experience.date.year }}</span
          >
        </div>
        <div class="flex justify-content-start mt-3">
          <span class="text-sm">{{ experience.company }}</span>
        </div>
        <p class="text-color text-xl mt-2 font-italic">
          {{ experience.description }}
        </p>
      </section>
    </div>

    <div class="flex flex-column m-4">
      <div class="flex align-items-center">
        <i class="pi pi-book text-primary" style="font-size: 2.2rem"></i>
        <span class="text-3xl text-base font-bold ml-4">Artigos</span>
      </div>

      <section class="mt-4 ml-4" *ngFor="let article of articles">
        <div
          class="flex justify-content-between align-items-center text-center mt-3"
        >
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
  </div> `,
  styles: [``],
})
export class ContentComponent {
  public profileParagraphs = [
    `Formado em Engenharia Agrícola pela Universidade Estadual de Campinas
    (Unicamp), com mestrado em Modelagem Estrutural de Vigas de Madeira
    Laminada Colada Armada (MLCA).`,
    `O primeiro contato com programação veio em 2015, com a linguagem Python.`,
    ` Já em 2020 iniciando a carreira na área de programação, foram
    desenvolvidas diversas rotinas de automatização para equipes, com foco
    em otimização de tempo e redução de mão de obra para envio de e-mails,
    tratamento de dados e RPAs.`,
    `Durante esta experiência como trainee iniciei uma especialização no
    desenvolvimento web, com foco no frontEnd.`,
    `Atualmente sigo me especializando no desenvolvimento Web com foco em
    Spring Boot, Quarkus e NextJs.`,
  ];

  public experiences = [
    {
      title: 'Desenvolvedor de Aplicações',
      company: 'IBM',
      date: {
        year: '2022',
        month: 'Jun',
      },
      toDate: 'Presente',
      description:
        'Atuação como desenvolvedor web, onde trabalho com Angular, NgRx e microfrontend. Atuo também na gestão técnica dos projetos desenvolvidos e na mentoria de desenvolvedores/estagiários em início de carreira',
    },
    {
      title: 'Desenvolvedor FullStack',
      company: 'Freelancer',
      date: {
        year: '2020',
        month: 'Jun',
      },
      toDate: 'Presente',
      description:
        'Atuação como desenvolvedor fullStack em desenvolvimento de sistemas (desktop/web) para automatização de tarefas.',
    },
    {
      title: 'Analista de Sistemas Pl',
      company: 'Stefanini Brasil',
      date: {
        year: '2021',
        month: 'Nov',
      },
      toDate: 'Mai 2022',
      description:
        'Atuação como desenvolvedor frontend (Angular + PrimeNg), (React + Material UI) em projetos para melhoria de processos internos na Stefanini. Participação em diversos processos de estudo e implementação de novas estruturas e arquiteturasde código para aumentar escalabilidade de projetos e qualidade de código. Os projetos são direcionados para as equipes de recrutamento e seleção,departamento pessoal e comercial.',
    },
    {
      title: 'Analista de Sistemas Jr',
      company: 'Stefanini Brasil',
      date: {
        year: '2021',
        month: 'Fev',
      },
      toDate: 'Nov 2021',
      description:
        'Atuação como desenvolvedor frontend (Angular + PrimeNg) em projetos para melhoria de processos internos na Stefanini. Os projetos eram direcionados para equipes de recrutamento e seleção, departamento pessoal e comercial.',
    },
    {
      title: 'Trainee',
      company: 'Stefanini Brasil',
      date: {
        year: '2020',
        month: 'Jan',
      },
      toDate: 'Fev 2021',
      description:
        ' Desenvolvimento de rotinas para automatização de tarefas das equipes do departamento pessoal da empresa. Essas rotinas envolviam disparos em massa de comunicados via e-mail, geração de relatórios, RPAs entre outros.',
    },
  ];

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
