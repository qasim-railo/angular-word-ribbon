import { Component } from '@angular/core';
import { HomeTabComponent } from "../home-tab/home-tab.component";
import { InsertTabComponent } from "../insert-tab/insert-tab.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ribbon',
  standalone: true,
  imports: [HomeTabComponent,CommonModule, InsertTabComponent],
  templateUrl: './ribbon.component.html',
  styleUrl: './ribbon.component.scss'
})
export class RibbonComponent {
  tabs = [
    { id: 'home', name: 'Home' },
    { id: 'insert', name: 'Insert' }
  ];

}
