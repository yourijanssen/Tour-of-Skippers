import { Component, OnInit } from '@angular/core';
import { Skipper } from '../../interfaces/skipperInterface';
import { SkipperService } from '../../services/skipper.service';

@Component({
  selector: 'app-skippers',
  templateUrl: './skippers.component.html',
  styleUrls: ['./skippers.component.css']
})
export class SkippersComponent implements OnInit {
  selectedSkipper?: Skipper;

  skippers: Skipper[] = [];

  constructor(private SkipperService: SkipperService) {}

  ngOnInit(): void {
    this.getSkippers();
  }

  getSkippers(): void {
    this.SkipperService.getSkippers().subscribe(
      (skippers) => (this.skippers = skippers)
    );
  }
}
