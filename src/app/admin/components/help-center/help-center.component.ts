import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.css']
})
export class HelpCenterComponent {
  constructor(private fb:FormBuilder,private toast:ToastrService){}
  form:FormGroup=this.fb.group({

   
  
    from_name: "thinkalllearning@gmail.com",
 
    subject: "",
    });

   
    async sendEmail() {
      
      emailjs.init('gYX22ZNNakHxguQlU')
      let response= await emailjs.send("service_kkb5i4s","template_ldx7reu",{
   
      to_name: this.form.value.to_name,
      from_name: this.form.value.from_name,
     
      subject: this.form.value.subject,
      });
     this.toast.success(" We will be in touch with you shortly.","Thanks for contacting us!")
      this.form.reset()
    }
}
