import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AddContact } from './add-contact/add-contact';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, AddContact],
  templateUrl: './form.html',
  styleUrls: ['./form.css']
})
export class Form implements OnInit {

  contacts: any[] = [];
  editingIndex: number | null = null;

  // 🔹 Load data on page open
  ngOnInit() {
    const data = localStorage.getItem('contacts');
    if (data) {
      this.contacts = JSON.parse(data);
    }
  }

  openForm(index: number | null = null) {
    this.editingIndex = index;
  }

  addContactToParent(contact: any) {
    if (this.editingIndex !== null) {
      this.contacts[this.editingIndex] = contact; // EDIT
    } else {
      this.contacts.push(contact); // ADD
    }

    localStorage.setItem('contacts', JSON.stringify(this.contacts));
    this.editingIndex = null;
    this.closeModal();
  }

  deleteContact(index: number) {
    this.contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  closeModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
      const instance = (window as any).bootstrap.Modal.getInstance(modal);
      instance.hide();
    }
  }
}
