import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-list';

  todos = [{
    Number: 1,
    Product: 'Cake',
    Quality: 'good'
  },
  {
    Number: 2,
    Product: 'Milk',
    Quality: 'good'
  }
  ];

  // tslint:disable-next-line: typedef
  addTodo(newProduct) {
    const num = this.todos.length + 1;
    const newTodo = {
      Number : num,
      Product: newProduct,
      Quality: 'good'
    };
    this.todos.push(newTodo);
  }


  // tslint:disable-next-line: typedef
  deleteTodo(todo) {
    this.todos = this.todos.filter( t => t.Product !== todo.Product );
  }

}
