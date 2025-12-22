import { CommonModule } from '@angular/common';  
import { Component } from '@angular/core';  
import { AddContact } from './add-contact/add-contact';  

declare var bootstrap:any;
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
  // Update existing contact  
  this.contacts[this.editingIndex] = contact;  
} else {  
  // Add new contact  
  this.contacts.push(contact);  
}  

// Reset editingIndex → modal hide / table focus  
this.editingIndex = null;  

// Close modal programmatically  
const modalEl = document.getElementById('contactModal');  
if (modalEl) {  
  const modal = bootstrap.Modal.getInstance(modalEl);  
  modal?.hide();  
}

}

deleteContact(index: number) {
this.contacts.splice(index, 1);
}
}