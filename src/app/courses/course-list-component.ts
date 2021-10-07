import { Component } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./courser-service";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list-component.html'
})

export class CourseListComponet {
  _courses: Course[] = [];
  filteredCourses: Course [] =[ ]
  _filterBy!: string;

  constructor(private courseService: CourseService) {

  }
  ngOnInit(): void {
    this._courses = this.courseService.retriViewAll();
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filteredCourses = this._courses.filter((course: Course)=> course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase())>-1)

  }

  get filter() {
    return this._filterBy;
  }

}

