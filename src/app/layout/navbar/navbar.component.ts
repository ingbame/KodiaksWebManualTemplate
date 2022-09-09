import { Component, OnInit, Input, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() sidenav?: any;
  public isCollapsed = true;

  lblAnuncios: string = "";
  anunciosLst: any[] = [
    { anuncio: "Esta es la leyenda del primer anuncio." },
    { anuncio: "Esta es la leyenda del segundo anuncio." },
    { anuncio: "Esta es la leyenda del tercero anuncio." },
    { anuncio: "Esta es la leyenda del cuarto anuncio." },
    { anuncio: "Esta es la leyenda del quinto anuncio." },
    { anuncio: "Esta es la leyenda del sexto anuncio." },
    { anuncio: "Esta es la leyenda del séptimo anuncio." }
  ];

  constructor() { }

  ngOnInit(): void {
    this.anunciosLst.forEach(element => {
      this.lblAnuncios += element.anuncio + " ";
    });
  }
}
