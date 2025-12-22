import { Component, effect, input } from '@angular/core';
import { Child } from "./child/child";

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
    names='xyz';
    ages = 20;
}
