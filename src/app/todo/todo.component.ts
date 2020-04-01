import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
   todos: Todo [] = [
     {
    task: 'fold clothes',
    completed: true
   },
   {
     task: 'put clothes in drawer',
     completed: false
   },
   {
     task: 'relax',
     completed: false
   },
   {
     task: 'try to pet cat',
     completed: true
   },
   {
     task: 'pet dog',
     completed: true
   },
   {
     task: 'be awesome',
     completed: true
   }
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
