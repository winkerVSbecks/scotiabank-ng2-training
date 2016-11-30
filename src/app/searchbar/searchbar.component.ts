import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  @Output()
  search: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
  }

  submit(searchForm) {
    this.search.emit(searchForm.value.query);
  }

}
