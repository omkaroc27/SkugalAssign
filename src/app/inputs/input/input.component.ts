
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { InputService } from 'src/app/services/input.service';



@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  success: any;
  
  constructor(public service: InputService, private firestore: AngularFirestore,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.fromData = {
      id: "null",
      todo: '',
    }
  }

  
  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null)
      this.firestore.collection('inputs').add(data);
    else
      this.firestore.doc('inputs/' + form.value.id).update(data);
    this.resetForm(form);
   alert( 'Submitted successfully');
  }

  
}
