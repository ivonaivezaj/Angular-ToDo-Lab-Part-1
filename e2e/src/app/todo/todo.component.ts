import { Component, OnInit } from "@angular/core";
import { Todo } from "../interfaces/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: "Fold clothes",
      completed: false
    },
    {
      task: "Put clothes in dresser",
      completed: false
    },
    {
      task: "Relax",
      completed: false
    },
    {
      task: "Try to pet cat",
      completed: true
    },
    {
      task: "Pet dog",
      completed: false
    },
    {
      task: "Be Awesome",
      completed: false
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
