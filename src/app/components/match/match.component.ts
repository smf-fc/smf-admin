import {Component, OnInit} from '@angular/core';
import {MatchModel} from './match.model';
import {getAll} from '../../common/match.api';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  matches: Array<MatchModel>;
  pageEvent: PageEvent;
  total = 0;
  index = 0;
  size = 10;
  options = [5, 10, 25, 100];

  constructor() {
  }

  ngOnInit(): void {
    this.getMatches(this.index, this.size);
  }

  getDataServer = (event: PageEvent) => {
    this.getMatches(event.pageIndex, event.pageSize);
    return event;
  };

  getMatches = (index: number, size: number) => {
    getAll(index, size).then(response => {
        this.matches = response.content;
        this.total = response.totalElements;
        console.log(response);
      }
    ).catch(err => console.log(err));
  };
}
