import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddContact } from './add-contact/add-contact';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, AddContact],
  templateUrl: './form.html',
  styleUrls: ['./form.css']
})
export class Form {

  contacts: any[] = [];
  editingIndex: number | null = null;

  // Add / Edit button click
  openForm(index: number | null = null): void {
    this.editingIndex = index;
  }

  // Child component se data receive
  addContactToParent(contact: any): void {

    if (this.editingIndex !== null) {
      // Edit contact
      this.contacts[this.editingIndex] = contact;
    } else {
      // Add contact
      this.contacts.push(contact);
    }

    this.editingIndex = null;
  }

  // Delete contact
  deleteContact(index: number): void {
    this.contacts.splice(index, 1);
  }
}
