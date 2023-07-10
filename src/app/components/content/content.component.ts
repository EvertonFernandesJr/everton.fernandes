import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Date = {
  year: string;
  month: string;
};

type Experience = {
  title: string;
  company: string;
  date: Date;
  toDate: string;
  description: string;
};

type Article = {
  title: string;
  date: string;
  link: string;
  imageLink: string;
  stack: string;
};

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  public experiences: Experience[];

  public articles: Article[];

  constructor() {


    this.experiences = [
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

    this.articles = [
      {
        title: 'Fluxo de dados via rota no Angular',
        date: 'Jul 2023',
        link: 'https://medium.com/@lspeixotodev/fluxo-de-dados-via-rota-no-angular-58631d598ce5',
        imageLink: 'https://miro.medium.com/v2/resize:fit:640/format:webp/1*9cFbPGzi10c_IZmI6H01Ug.png',
        stack: 'Angular',
      },
      {
        title: 'Criando um CRUD com Angular: Observables + Signals',
        date: 'Jul 2023',
        link: 'https://medium.com/@lspeixotodev/criando-um-crud-com-angular-observables-signals-75008ff4671c',
        imageLink: 'https://miro.medium.com/v2/resize:fit:640/format:webp/1*yE2437HSGKKx5RNSmn5c5g.png',
        stack: 'Angular',
      },
      {
        title: 'Controle de Erros customizados no Angular com Control Container',
        date: 'Jun 2023',
        link: 'https://medium.com/@lspeixotodev/otimiza%C3%A7%C3%A3o-das-valida%C3%A7%C3%B5es-de-formul%C3%A1rios-no-angular-com-control-container-cc49b73305d3',
        imageLink: 'https://miro.medium.com/v2/resize:fit:640/format:webp/1*Qfb1zqpNX4kNg7d2hoW6Bw.png',
        stack: 'Angular',
      }
    ];
  }
}
