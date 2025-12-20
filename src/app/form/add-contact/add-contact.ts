import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-contact.html',
  styleUrls: ['./add-contact.css']
})
export class AddContact {
  @Input() contact: any = null;
  @Output() contactAdded = new EventEmitter<any>();

  name = '';
  phone = '';
  email = '';

  ngOnChanges() {
    if (this.contact) {
      this.name = this.contact.name;
      this.phone = this.contact.phone;
      this.email = this.contact.email;
    } else {
      this.reset();
    }
  }

  addContact() {
    this.contactAdded.emit({
      name: this.name,
      phone: this.phone,
      email: this.email
    });
    this.reset();
  }

  reset() {
    this.name = '';
    this.phone = '';
    this.email = '';
  }
}