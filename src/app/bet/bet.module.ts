import { ModalModule } from './../componentes/modal/modal.module';
import { SidebarModule } from './../componentes/sidebar/sidebar.module';
import { BetRoutingModule } from './bet-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaBetComponent } from './lista-bet/lista-bet.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ListaBetComponent
  ],
  imports: [
    CommonModule,
    BetRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    SidebarModule,
    MatSidenavModule,
    ModalModule

  ]
})
export class BetModule { }
