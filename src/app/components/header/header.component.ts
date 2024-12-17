import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [RouterLink]
})
export class HeaderComponent {
  scrolled = false;

  // Detectar rolagem da página
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
    const logo = document.querySelector(".logo") as HTMLElement; 
    if(this.scrolled){
      logo.classList.add('logo2');
      console.log(logo)
    }else{
      logo.classList.remove('logo2');
    }
  }


  toggleMenu() {
    const links = document.querySelector('.links') as HTMLElement;
    links.classList.toggle('active');
  }
}
