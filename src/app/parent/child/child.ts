import { Component, computed, effect, input, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  name=input.required<string>();
    age=input.required<number>();

    changeName = output<string>();

    updateName(newName: string) {
    this.changeName.emit(newName);
  }

    detail=computed(()=>
    {
        return this.age() + ' ' + this.name();
    });
    constructor()
    {
      effect(() =>{
        console.log('effect increseage',this.age());
      });
      effect(() =>{
        console.log('effect decreseage',this.age());
      });
      effect(() =>{
        console.log('effect name',this.name());
      });
      effect(() =>{
        console.log('effect Detail',this.detail());
      });
    }
  
}
