import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importe o CommonModule
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

class EmailService {
  async sendEmail(data: any) {
    return emailjs.send("service_3ds45ev", "template_emd95dh", data);
  }
}

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [EmailService], 
  imports: [CommonModule, ReactiveFormsModule] // Use o CommonModule aqui
})
export class ContactComponent { 
  
  form: FormGroup = this.fg.group({
    from_name: '',
    message: '',
    email: '',
  });

  loading = false;

  constructor(private fg: FormBuilder, private emailService: EmailService) { }

  async sendEmail() {
    this.loading = true;
  
    if (this.form.value.from_name === '' || this.form.value.message === '' || this.form.value.email === '') {
      Swal.fire({
        title: "Please fill in all fields",        
        icon: "error",
        confirmButtonText: "Ok",
      });
      this.loading = false;
      return;      
    }
  
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(this.form.value.email)) {
      Swal.fire({
        title: "Please enter a valid email address",        
        icon: "error",
        confirmButtonText: "Ok",
      });
      this.loading = false;
      return;   
    }  
    
    try {
      emailjs.init("ztijiZqAUQ0WFVbLe");
      await this.emailService.sendEmail({
        from_name: this.form.value.from_name,
        message: this.form.value.message,
        email: this.form.value.email,
      });          
  
      Swal.fire({
        title: "Email sent!",
        icon: "success",
        confirmButtonText: "Ok",
      
      });
      this.form.reset();
    } catch (error) {
      Swal.fire({
        title: "Sucess",
        text: "Please fill in all fields.",
        icon: "error",
        confirmButtonText: "Ok",
      });
      console.error("Error sending email:", error);
    } finally {
      this.loading = false;
    }
  }
  

  isLoading(){
    return this.loading;
  }
}
