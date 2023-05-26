import { Component, Input, OnInit } from '@angular/core';
import { Skipper } from '../../interfaces/skipperInterface';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SkipperService } from '../../services/skipper.service';

@Component({
  selector: 'app-skipper-detail',
  templateUrl: './skipper-detail.component.html',
  styleUrls: ['./skipper-detail.component.css']
})
export class SkipperDetailComponent implements OnInit {
  skipper: Skipper | undefined;

  constructor(
    private route: ActivatedRoute,
    private skipperService: SkipperService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getSkipper();
  }

  /**
   * @author Youri Janssen
   * @description This function gets a skipper from the skipperService and subscribes to it.
   */
  getSkipper(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.skipperService
      .getSkipper(id)
      .subscribe((skipper) => (this.skipper = skipper));
  }

  /**
   * @author Youri Janssen
   * @description This function goes back to the previous page when the back button is clicked.
   */
  goBack(): void {
    this.location.back();
  }

  /**
   * @author Youri Janssen
   * @description This function updates a skipper in the skipperService when the save button is clicked.
   */
  save(): void {
    if (this.skipper) {
      this.skipperService
        .updateSkipper(this.skipper)
        .subscribe(() => this.goBack());
    }
  }
}
