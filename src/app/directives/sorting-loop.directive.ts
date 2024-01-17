import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Task } from '../app.component';

@Directive({
  selector: '[sortingLoop][sortingLoopOf]'
})
export class SortingLoopDirective {

  @Input() set sortingLoopOf(tasks: Task[]) {
    this.view.clear();
    [...tasks].sort((taskA: Task, taskB: Task) => taskA.id - taskB.id).forEach((task: Task) => {
      const context = { $implicit: task }
      this.view.createEmbeddedView(this.template, context);
    })
  }

  constructor(private template: TemplateRef<any>, private view: ViewContainerRef) { }

}
