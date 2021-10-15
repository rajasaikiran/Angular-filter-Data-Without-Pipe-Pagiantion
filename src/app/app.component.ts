import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  config: any;
  title: 'Pratice';

  searchTerm: string;

  MyData: any[] = [];
  filterData: any[] = [];

  constructor(public ts: TestService) {}
  ngOnInit(): void {
    //  getting the data from url
    this.ts.getData().subscribe(
      (data) => {
        this.MyData = data;
        this.filterData = data;
      },
      (err) => {
        console.log(err);
      }
    );
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
    };
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }

  SearchFeature() {
    this.filterData = this.MyData.filter((obj) =>
      obj.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
