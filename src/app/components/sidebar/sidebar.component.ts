import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public myName = 'Lucas Peixoto Fernandes';

  public myJob = 'Desenvolvedor Full Stack';

  public contactDetails = {
    email: 'lspeixotodev@gmail.com',
    phone: '(19)9 8262 1117',
    linkedin: 'https://www.linkedin.com/in/lucassacramoni/',
    github: 'https://github.com/lucasspeixoto',
    facebook: 'https://www.facebook.com/lucassacramoni/',
    instagram: 'https://www.instagram.com/lspeixotof/',
    medium: 'https://medium.com/@lspeixotodev',
  };
}
