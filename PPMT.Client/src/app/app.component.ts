import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PPMT.Client';
  readonly APIUrl = "https://localhost:7167/api/task/";

  constructor(private http: HttpClient)
  {

  }
  notes: any = "";

  refreshNotes() {
    this.http.get(this.APIUrl + 'GetTasks').subscribe(data => {this.notes = data})
  }

  ngOnInit() {
    this.refreshNotes();
  }
}
