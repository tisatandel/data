import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

interface Contact {
  name: string;
  phone: string;
  email: string;
}

@Component({
  selector: 'app-add-contact',
  standalone:true,
   imports: [FormsModule],
  templateUrl: './add-contact.html',
  styleUrls: ['./add-contact.css']
})
export class AddContact implements OnInit {

  @Input() contact: Contact | null = null; // Edit mode contact
  @Output() contactAdded = new EventEmitter<Contact>();

  name: string = '';
  phone: string = '';
  email: string = '';

  ngOnInit(): void {
    // If editing, populate form
    if (this.contact) {
      this.name = this.contact.name;
      this.phone = this.contact.phone;
      this.email = this.contact.email;
    }
  }

  addContact() {
    if (!this.name || !this.phone || !this.email) {
      alert('All fields are required!');
      return;
    }

    const newContact: Contact = {
      name: this.name,
      phone: this.phone,
      email: this.email
    };

    this.contactAdded.emit(newContact);

    // Reset form
    this.name = '';
    this.phone = '';
    this.email = '';
  }
}