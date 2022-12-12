import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // exercise
  //https://angular.io/guide/inputs-outputs
  
  // How to install boostrap.
  //https://www.freecodecamp.org/news/how-to-add-bootstrap-css-framework-to-an-angular-application/

  currentItem: string = "Television";
  title = 'share-data-v2';

  items: string[] = ["Item 1", "Item 2"];

  addNewItem(event: string){
    this.items.push(event);
  }

  deleteItem(item: string){
    console.warn(`Parent says: crossing off ${item}.`);
  }
}
