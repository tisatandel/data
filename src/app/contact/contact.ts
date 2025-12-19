import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  @Input() users: any[] = [];

  @Output() edit = new EventEmitter<{ user: any; index: number }>();
  @Output() delete = new EventEmitter<number>();

  editUser(user: any, index: number) {
    this.edit.emit({ user, index });
  }

  deleteUser(index: number) {
    this.delete.emit(index);
  }
}