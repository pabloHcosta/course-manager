import { Component } from "@angular/core";
import { Course } from "./course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list-component.html'
})

export class CourseListComponet {
  courses: Course[] = [];
  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imgUrl: '',
        price: 99.99,
        code: 'XPS-8756',
        duration: 120,
        raiting: 5.4,
        releaseDate:'December,2,2021'
      },

      {
        id: 2,
        name: 'Angular: HTTP',
        imgUrl: '',
        price: 45.99,
        code: 'HTP-7685',
        duration: 80,
        raiting: 4,
        releaseDate:'December,01,2021'
      }
    ]
  }
}
