import {Component, OnInit} from '@angular/core';
import {CheckInModel} from './check-in.model';
import {checkIn, getCheckinByMatchId} from '../../common/check-in.api';
import {ActivatedRoute} from '@angular/router';
import {MatchModel} from '../match/match.model';
import {get} from '../../common/match.api';
import {formatDate} from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  constructor(private route: ActivatedRoute, private snackBar: MatSnackBar) {
    this.matchId = Number(route.snapshot.paramMap.get('id'));
    this.getMatch();
  }

  async ngOnInit(): Promise<void> {
    await this.loadCheckins();
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
      this.openSnackBar('Điểm danh thành công.', '');
    })
      .catch((err) => {
        console.log(err);
        this.openSnackBar('Điểm danh thất bại.', '');
      });
  };

  dateFormat = (value) => {
    return formatDate(value, 'dd-MM-yyy HH:mm', 'en-US', '');
  };

  openSnackBar = (message: string, closeText: string) => {
    this.snackBar.open(message, closeText, {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  };
}
