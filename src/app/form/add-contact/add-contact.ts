import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Contact {
  name: string;
  phone: string;
  email: string;
}

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-contact.html',
  styleUrls: ['./add-contact.css']
})
export class AddContact implements OnChanges {

  @Input() contact: Contact | null = null;
  @Output() contactAdded = new EventEmitter<Contact>();

  name: string = '';
  phone: string = '';
  email: string = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['contact'] && this.contact) {
      this.name = this.contact.name;
      this.phone = this.contact.phone;
      this.email = this.contact.email;
   
        
    }
    

    if (changes['contact'] && this.contact === null) {
      this.resetForm();
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
    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.phone = '';
    this.email = '';
  }
}
