import {Component, OnInit} from '@angular/core';
import {CheckInModel} from './check-in.model';
import {checkIn, getCheckinByMatchId} from '../../common/check-in.api';
import {ActivatedRoute} from '@angular/router';
import {MatchModel} from '../match/match.model';
import {get} from '../../common/match.api';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {
  checkins: Array<CheckInModel>;
  countJoin: number;
  countReject: number;
  match: MatchModel;
  matchId: number;

  constructor(private route: ActivatedRoute) {
    this.matchId = Number(route.snapshot.paramMap.get('id'));
  }

  async ngOnInit(): Promise<void> {
    await this.loadCheckins();
    this.getMatch();
  }

  getMatch = () => {
    get(this.matchId).then(response => {
      this.match = response;
    }).catch(error => {
      console.log(error);
    });
  };

  loadCheckins = async () => {
    this.checkins = await getCheckinByMatchId(this.matchId);
    this.countJoin = this.checkins.filter(item => true === item.wasJoin).length;
    this.countReject = this.checkins.length - this.countJoin;
    console.log(this.checkins);
  };

  checkIn = (wasJoin: boolean) => {
    checkIn(1, this.match.id, wasJoin).then(async () => {
      await this.loadCheckins();
    })
      .catch((err) => {
        console.log(err);
      });
  };
}
