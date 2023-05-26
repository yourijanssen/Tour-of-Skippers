import { Component, OnInit } from '@angular/core';
import { SkipperService } from '../../services/skipper.service';
import { Skipper } from '../../interfaces/skipperInterface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  skippers: Skipper[] = [];

  constructor(private skipperService: SkipperService) {}

  ngOnInit(): void {
    this.getSkippers();
  }

  /**
   * @author Youri Janssen
   * @description This function gets the skippers from the skipperService and subscribes to it.
   * When a response is received, the skippers array is filled with the first 4 skippers.
   */
  getSkippers(): void {
    this.skipperService
      .getSkippers()
      .subscribe((skippers) => (this.skippers = skippers.slice(1, 5)));
  }
}
