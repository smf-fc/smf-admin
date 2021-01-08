import {Component, OnInit} from '@angular/core';
import {CheckInModel} from './check-in.model';
import {checkIn, getCheckinByMatchId} from '../../common/api';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {
  checkins: Array<CheckInModel>;
  countJoin: number;
  countReject: number;
  matchId: number;

  constructor(private route: ActivatedRoute) {
    this.matchId = Number(route.snapshot.paramMap.get('id'));
  }

  async ngOnInit(): Promise<void> {
    await this.loadCheckins();
  }

  loadCheckins = async () => {
    this.checkins = await getCheckinByMatchId(this.matchId);
    this.countJoin = this.checkins.filter(item => true === item.wasJoin).length;
    this.countReject = this.checkins.length - this.countJoin;
    console.log(this.checkins);
  };

  checkIn = (value) => {
    checkIn(value).then(async () => {
      await this.loadCheckins();
    })
      .catch((err) => {
        console.log(err);
      });
  };
}
