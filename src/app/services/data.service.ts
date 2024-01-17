import { Injectable } from "@angular/core";
import { Task } from "../app.component";
import { LoggerService } from "./logger.service";

/* Un service in Angular è una classe Typescript.
 Questa per essere utilizzata come tale deve essere
aggiunta alla lista dei providers dell' AppModule(livello Applicazione).
Qualora avessi il bisogno di utilizzare Dependency Injection all'interno del service,
Angular di default non è in grado di farla su classi che non hanno un Decorator.
Per questa evenienza si decora la classe del Service con @Injectable().
Inoltre utilizzando tale decorator è possibile definire la classe decorata 
un provider dell'applicazione aggiungendo la proprietà 'providedIn' con valore 'root',
così facendo nons arà necessario configurarlo nell'AppModule
*/
@Injectable(/* {providedIn:'root'} */)
export class DataService {

    constructor(private logger: LoggerService) {

        logger.logger(this.tasks)
    }
    private tasks: Task[] = [
        {
            "id": 3,
            "title": "Task 1",
            "description": "Complete assignment",
            "createdDate": "2024-01-17",
            "isUrgent": true
        },
        {
            "id": 2,
            "title": "Meeting",
            "description": "Attend team meeting",
            "createdDate": "2024-01-18",
            "isUrgent": false
        },
        {
            "id": 1,
            "title": "Shopping",
            "description": "Buy groceries",
            "createdDate": "2024-01-19",
            "isUrgent": true
        },
        {
            "id": 4,
            "title": "Exercise",
            "description": "Go for a run",
            "createdDate": "2024-01-20",
            "isUrgent": false
        },
        {
            "id": 5,
            "title": "Project",
            "description": "Work on project tasks",
            "createdDate": "2024-01-21",
            "isUrgent": true
        }
    ];

    fetchTasks() {
        return this.tasks;
    }

    fetchPosts() {
        return fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json())
    }
}