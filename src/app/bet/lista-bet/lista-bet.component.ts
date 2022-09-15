import { ApostasElement } from './../bet';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { ListaBetService } from './lista-bet.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ModalComponent } from 'src/app/componentes/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-lista-bet',
  templateUrl: './lista-bet.component.html',
  styleUrls: ['./lista-bet.component.css'],
})
export class ListaBetComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  displayedColumns: string[] = [
    'id',
    'evento',
    'data',
    'esporte',
    'competicao',
    'mercado',
    'aposta',
    'lucro',
    'odd',
    'actions',
  ];

  // dataSource = new MatTableDataSource<RegisterBetElement>(MOCK_DATA);
  dataSource!: MatTableDataSource<any>;
  userId: number = 0;

  constructor(
    public dialog: MatDialog,
    private listaBetService: ListaBetService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.listaBetService.getUsuario().subscribe((res) => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].email == this.usuarioService.getUserName()) {
          this.userId = res[i].id;
          this.getBet();
        }
      }
    });

  }

  getBet() {
    this.listaBetService.getBetByUsarioId(this.userId).subscribe((res) => {
      this.dataSource = new MatTableDataSource<ApostasElement>(res);
      this.dataSource.paginator = this.paginator;
    });
  }

  createElement(element: ApostasElement | null): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '290px',
      data:
        element === null
          ? {
              id: null,
              evento: '',
              data: '',
              esporte: '',
              competicao: '',
              mercado: '',
              aposta: null,
              lucro: null,
              odd: null,
              usuario: {
                id: this.userId,
              },
            }
          : {
              id: null,
              evento: element.evento,
              data: element.data,
              esporte: element.esporte,
              competicao: element.competicao,
              mercado: element.mercado,
              aposta: element.aposta,
              lucro: element.lucro,
              odd: element.odd,
            },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.listaBetService.post(result).subscribe((data: any) => {
          this.dataSource.data = data;
          this.getBet();
        });
        console.log(result);
      }
    });
  }
}
