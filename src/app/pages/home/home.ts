import { Component } from '@angular/core';
import { Carousal } from '../../carousal/carousal';

@Component({
  selector: 'app-home',
  imports: [Carousal],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
