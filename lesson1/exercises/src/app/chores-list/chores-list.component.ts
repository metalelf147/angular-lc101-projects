import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores-list',
   templateUrl: './chores-list.component.html',
   styleUrls: ['./chores-list.component.css']
})
export class ChoresListComponent implements OnInit {
   chores = ['Clean kitchen', 'Complete LaunchCode prep work', 'Self-administer IV of strong coffee'];

   constructor() { }

   ngOnInit() {
   }

}