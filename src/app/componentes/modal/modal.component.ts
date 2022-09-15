import { ApostasElement } from './../../bet/bet';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DateAdapter } from '@angular/material/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  competicoes: any[] = [
    {value: 'Campeonato Brasileiro'},
    {value: 'Premiere League'},
    {value: 'Bundesliga'},
    {value: 'La Liga'},
    {value: 'Campeonato Italiano'},
    {value: 'Campeonato Francês'},
  ]

  esportes: any[] = [
    {value: 'Futebol'},
    {value: 'Tênis'},
    {value: 'Futebol Americano'},
    {value: 'Corridas de cavalos'},
    {value: 'Basquetebol'},
    {value: 'Handebol'},
    {value: 'Golfe'},
    {value: 'Críquete'},
    {value: 'Rugby'},
    {value: 'Boxe'},
    {value: 'Hóquei no Gelo'},
    {value: 'Poker'},
    {value: 'Corridas de cavalos'},
  ];

  mercados: any[] = [
    {value: 'Winner'},
    {value: 'Empate'},
    {value: 'Próximo Gol'},
    {value: 'Handicap Asiático'},
  ];

  element!: ApostasElement;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: ApostasElement,
    public dialogRef: MatDialogRef<ModalComponent>,
    private dateAdapter: DateAdapter<Date>
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {

  }

}
