import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {
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