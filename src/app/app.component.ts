import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { filter } from 'rxjs';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    NgIf
], 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mostrarcomponente = true;

  rotaAtual: string = '';
    
  constructor(private router: Router) {}
  
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.rotaAtual = event.urlAfterRedirects; 
        
        if (this.rotaAtual === "/" || this.rotaAtual[1] === "#" || this.rotaAtual === "/gerencial-iformativos-carteira") {
          this.mostrarcomponente = false;
        } else {
          this.mostrarcomponente = true;
        }
        
      });
  }
}
