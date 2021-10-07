import { Injectable } from '@angular/core';
import {Course} from './course';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  retriViewAll(): Course[] {
    return COURSES;
  }

}

var COURSES: Course[] = [
  {
    id: 1,
    name: 'Angular: CLI',
    imgUrl: '/src/assets/imagens/cli.png',
    price: 99.99,
    code: 'CLI-8756',
    duration: 120,
    raiting: 4.5,
    releaseDate:'December,2,2021'
  },

  {
    id: 2,
    name: 'Angular: Forms',
    imgUrl: '/src/assets/imagens/forms.png',
    price: 45.99,
    code: 'FOR-7685',
    duration: 80,
    raiting: 4,
    releaseDate:'December,01,2021'
  },
  {
    id: 3,
    name: 'Angular: HTTP',
    imgUrl: '/src/assets/imagens/http.png',
    price: 45.99,
    code: 'HTP-7685',
    duration: 80,
    raiting: 3,
    releaseDate:'December,01,2021'
  },
  {
    id: 4,
    name: 'Angular: Animations',
    imgUrl: '/src/assets/imagens/animations.png',
    price: 45.99,
    code: 'ANT-7685',
    duration: 80,
    raiting: 4,
    releaseDate:'December,01,2021'
  },
  {
    id: 5,
    name: 'Angular: Router',
    imgUrl: '/src/assets/imagens/router.png',
    price: 45.99,
    code: 'RTR-7685',
    duration: 80,
    raiting: 2,
    releaseDate:'December,01,2021'
  }
]
