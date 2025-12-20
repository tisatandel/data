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

  openForm(index: number | null = null) {
    this.editingIndex = index;
  }

  addContactToParent(contact: any) {
    if (this.editingIndex !== null) {
      this.contacts[this.editingIndex] = contact;
    } else {
      this.contacts.push(contact);
    }
    this.editingIndex = null;
    this.closeModal();
  }

  deleteContact(index: number) {
    this.contacts.splice(index, 1);
  }

  closeModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
      const instance = (window as any).bootstrap.Modal.getInstance(modal);
      instance.hide();
    }
  }
}