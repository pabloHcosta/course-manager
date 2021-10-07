import { style } from "@angular/animations";
import { TemplateLiteralElement } from "@angular/compiler";
import { Component, Input, OnChanges } from "@angular/core";


@Component({
  selector: 'app-star',
  templateUrl: '../star/start-component.html',
  styleUrls:['../star/star-component.css']
})

export class StarComponent implements OnChanges {
  @Input()
  rating: number = 0;
  starWidht!: number;
  ngOnChanges(): void {
    this.starWidht = this.rating * 74 / 5;

  }
}
