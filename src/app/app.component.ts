import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PippoComponent } from './pippo/pippo.component';
import { DataService } from './services/data.service';

export interface Task {
  id: number;
  title: string;
  description: string;
  createdDate: string;
  isUrgent: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {

  @ViewChild(PippoComponent) pippo!: PippoComponent

  ngAfterViewInit(): void {
    console.log('PIPPO COMPONENT', this.pippo);

  }

  tasks: Task[] = [];

  trackaByFn(index: any, taks: Task) {
    return taks.id
  }

  handleClick(index: number) {
    this.tasks[index].title = 'Set by the button';
  }

  ngOnInit() {
    this.tasks = this.data.fetchTasks()
    this.data.fetchPosts().then(posts => console.log(posts))
  }

  constructor(private data: DataService) { }

}
