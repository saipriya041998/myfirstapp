import { Component, OnInit } from '@angular/core';

import { Task } from './task';



@Component({

  selector: 'app-arrdemo',

  templateUrl: './arrdemo.component.html',

  styleUrls: ['./arrdemo.component.css']

})

export class ArrdemoComponent implements OnInit {
  flag:boolean=true;

  no:number=1.24543;

  dt:Date=new Date(2019,6,30);

  dept_id:number=1;

  id:string='';

  title:string='';

  status:string='';

  arrtask:Task[]=[

    new Task('1','push your code to github','done'),

    new Task('2','learn angular','pending')

  ];

  constructor() { }



  ngOnInit() {

  }

  deleteTask(item:Task){

    //console.log(item);



    this.arrtask.splice(this.arrtask.indexOf(item),1);

  }

  onAddTaskClick(){



      this.arrtask.push(new Task(this.id,this.title,this.status));

  }

  onEditTaskClick(item:Task){



      if(item.status=='done'){

        item.status='pending';

      }

      else{

        item.status='done';

      }

  }

}
