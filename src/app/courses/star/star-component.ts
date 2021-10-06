import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: 'app-star'
})

export class StarComponent implements OnChanges {
  @Input()
  rating: number = 0;
  starWidht!: number;
  ngOnChanges(): void {
    this.starWidht = this.rating * 94/5;

  }
}
