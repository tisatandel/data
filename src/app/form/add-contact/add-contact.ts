import { Component, input, output, effect, signal, computed } from '@angular/core';
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
export class AddContact {

// Parent → Child
contact = input<Contact | null>();

// Child → Parent
contactChange = output<Contact>();

// Signals
name = signal('');
phone = signal('');
email = signal('');

// Computed → edit mode
isEdit = computed(() => !!this.contact());

// Old values to compare
private oldName = '';
private oldPhone = '';
private oldEmail = '';

constructor() {

// Initialize form with input contact  
effect(() => {  
  if (this.contact()) {  
    this.name.set(this.contact()!.name);  
    this.phone.set(this.contact()!.phone);  
    this.email.set(this.contact()!.email);  

    // Store old values  
    this.oldName = this.contact()!.name;  
    this.oldPhone = this.contact()!.phone;  
    this.oldEmail = this.contact()!.email;  
  } else {  
    this.resetForm();  
  }  
});  

// Effect → only edit changes  
effect(() => {  
  if (this.isEdit() && this.contact()) {  
    if (this.name() !== this.oldName) console.log('name changed');  
    if (this.phone() !== this.oldPhone) console.log('phone changed');  
    if (this.email() !== this.oldEmail) console.log('email changed');  
  }  
});

}

addContact() {
// Emit to parent
this.contactChange.emit({
name: this.name(),
phone: this.phone(),
email: this.email()
});

// Reset form only if Add  
if (!this.contact()) this.resetForm();

}

resetForm() {
this.name.set('');
this.phone.set('');
this.email.set('');
}
}