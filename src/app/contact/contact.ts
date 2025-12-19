import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactForm } from './contact-form/contact-form';



@Component({
  selector: 'app-contact',
  imports: [FormsModule,ContactForm],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  standalone: true,
})
export class Contact{
  users: any[] = [];

  name = '';
  email = '';
  address = '';

  isEditMode = false;
  editIndex: number | null = null;

  addOrUpdate() {
    if (!this.name || !this.email || !this.address) return;

    if (this.isEditMode && this.editIndex !== null) {
      this.users[this.editIndex] = {
        name: this.name,
        email: this.email,
        address: this.address
      };
    } else {
      this.users.push({
        name: this.name,
        email: this.email,
        address: this.address
      });
    }

    this.reset();
  }

  editUser(data: { user: any; index: number }) {
    this.isEditMode = true;
    this.editIndex = data.index;

    this.name = data.user.name;
    this.email = data.user.email;
    this.address = data.user.address;
  }
deleteUser(index: number) {
  this.users.splice(index, 1);
}


  reset() {
    this.name = '';
    this.email = '';
    this.address = '';
    this.isEditMode = false;
    this.editIndex = null;
  }
}