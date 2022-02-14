import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Input } from 'src/app/services/input';
import { InputService } from 'src/app/services/input.service';

@Component({
  selector: 'app-input-todo-list',
  templateUrl: './input-todo-list.component.html',
  styleUrls: ['./input-todo-list.component.css']
})
export class InputTodoListComponent implements OnInit {

  // list:Input[];
  // firestore: any;
  

  
  // constructor(private service: InputService) { }

  // ngOnInit() {
  //   this.service.getInputs().subscribe(actionArray =>{
  //     this.list =actionArray.map(item=>{
  //       return {
  //         id: item.payload.doc.id,
  //         ...item.payload.doc.data()as{}
  //       } as Input;
  //     })
  //   });
  // }
  // onEdit(todo1: Input) {
  //   this.service.fromData = Object.assign({}, todo1);
  // }

  // onDelete(id: string) {
  //   if (confirm("Are you sure to delete this record?")) {
  //     this.firestore.doc('inputs/' + id).delete();
  //     alert('Deleted successfully');
  //   }
  // }
  
  list: Input[];
  constructor(private service: InputService,
    private firestore: AngularFirestore,
    ) { }

  ngOnInit() {
    this.service.getInputs().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()as{}
        } as Input;
      })
    });
  }

  onEdit(todo1: Input) {
    this.service.fromData = Object.assign({}, todo1);
  }

  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.doc('inputs/' + id).delete();
      alert('Deleted successfully');
    }
  }
}
