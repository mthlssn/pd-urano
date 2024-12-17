import { NgClass } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index',
  imports: [NgClass, FooterComponent, RouterLink],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent implements AfterViewInit {
  @ViewChild('selection') selection!: ElementRef;
  @ViewChild('manchete') manchete!: ElementRef;
  @ViewChild('servicos') servicos!: ElementRef;
  @ViewChild('carreiras') carreiras!: ElementRef;
  @ViewChild('clientes') clientes!: ElementRef;
  @ViewChild('logo') logo!: ElementRef;
  @ViewChild('barrinha') barrinha!: ElementRef;
  @ViewChild('nav') nav!: ElementRef;
  @ViewChild('hr') hr!: ElementRef;
  @ViewChild('navButton') navButton!: ElementRef;
  @ViewChild('span1') span1!: ElementRef;
  @ViewChild('span2') span2!: ElementRef;
  @ViewChild('span3') span3!: ElementRef;

  elementoSelecionado!: ElementRef;

  scrollPosition: number = 0;
  tamanhoSelection = 3;

  alturaSelection: number = 0;
  larguraSelection: number = 0;
  porcentagem: number = 0.85;

  ngAfterViewInit() {
    this.elementoSelecionado = this.manchete;
    this.manchete.nativeElement.classList.add('selecionada');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.alturaSelection = this.selection.nativeElement.offsetHeight;
    this.larguraSelection = this.selection.nativeElement.offsetWidth;
    this.scrollPosition = window.scrollY;

    if (this.larguraSelection > 1000) {
      if (
        this.scrollPosition >= 0 &&
        this.scrollPosition < this.alturaSelection * this.porcentagem
      ) {
        // selection 1
        this.manchete.nativeElement.classList.add('selecionada');
        if (this.elementoSelecionado != this.manchete) {
          this.elementoSelecionado.nativeElement.classList.remove(
            'selecionada'
          );
          this.elementoSelecionado = this.manchete;
        }

        this.logo.nativeElement.classList.remove('logo2');
        this.barrinha.nativeElement.classList.remove('barrinha2');
        this.nav.nativeElement.classList.remove('nav2');
        this.hr.nativeElement.classList.remove('hr2');
      } else if (
        this.scrollPosition >= this.alturaSelection * this.porcentagem &&
        this.scrollPosition <
          this.alturaSelection * this.porcentagem + this.alturaSelection
      ) {
        // selection 2
        this.servicos.nativeElement.classList.add('selecionada');

        if (this.elementoSelecionado != this.servicos) {
          this.elementoSelecionado.nativeElement.classList.remove(
            'selecionada'
          );
          this.elementoSelecionado = this.servicos;
        }

        this.logo.nativeElement.classList.add('logo2');
        this.barrinha.nativeElement.classList.add('barrinha2');
        this.nav.nativeElement.classList.add('nav2');
        this.hr.nativeElement.classList.add('hr2');
      } else if (
        this.scrollPosition >=
          this.alturaSelection * this.porcentagem + this.alturaSelection &&
        this.scrollPosition <
          this.alturaSelection * this.porcentagem + this.alturaSelection * 2
      ) {
        // selection 3
        this.carreiras.nativeElement.classList.add('selecionada');
        if (this.elementoSelecionado != this.carreiras) {
          this.elementoSelecionado.nativeElement.classList.remove(
            'selecionada'
          );
          this.elementoSelecionado = this.carreiras;
        }

        this.logo.nativeElement.classList.add('logo2');
        this.barrinha.nativeElement.classList.add('barrinha2');
        this.nav.nativeElement.classList.add('nav2');
        this.hr.nativeElement.classList.add('hr2');
      } else if (
        this.scrollPosition >=
          this.alturaSelection * this.porcentagem + this.alturaSelection * 2 &&
        this.scrollPosition <
          this.alturaSelection * this.porcentagem + this.alturaSelection * 3
      ) {
        // selection 4
        this.clientes.nativeElement.classList.add('selecionada');
        if (this.elementoSelecionado != this.clientes) {
          this.elementoSelecionado.nativeElement.classList.remove(
            'selecionada'
          );
          this.elementoSelecionado = this.clientes;
        }

        this.logo.nativeElement.classList.remove('logo2');
        this.barrinha.nativeElement.classList.remove('barrinha2');
        this.nav.nativeElement.classList.remove('nav2');
        this.hr.nativeElement.classList.remove('hr2');
      }
    }
  }

  menu() {
    if (this.nav.nativeElement.classList[1]) {
      this.nav.nativeElement.classList.remove('menu-nav');
      this.navButton.nativeElement.classList.remove('menu-navButton');

      this.span1.nativeElement.classList.remove('span1');
      this.span2.nativeElement.classList.remove('span2');
      this.span3.nativeElement.classList.remove('span3');
    } else {
      this.nav.nativeElement.classList.add('menu-nav');
      this.navButton.nativeElement.classList.add('menu-navButton');

      this.span1.nativeElement.classList.add('span1');
      this.span2.nativeElement.classList.add('span2');
      this.span3.nativeElement.classList.add('span3');
    }
  }
}
