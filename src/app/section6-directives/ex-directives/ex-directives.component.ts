import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-directives',
  templateUrl: './ex-directives.component.html',
  styleUrls: ['./ex-directives.component.scss']
})
export class ExDirectivesComponent implements OnInit {
  courses = [1, 2];
  students = ['stu1', 'stu2'];
  viewMode = 'list';
  //  ngStyle example
  canSave = true;
  courseNames;
  constructor() {
    console.log(this.courses);
   }

  ngOnInit() {
  }

  // change detection
  onAdd() {
    this.courseNames.push({id: 4, name: 'course4'});
  }

  onRemove(course) {
    const index = this.courseNames.indexOf(course);
    this.courseNames.splice(index, 1);
  }

  onChange(course) {
    course.name = 'Updated';
  }

  loadCourse() {
    this.courseNames = [{id: 1, name: 'coruse1'}, {id: 2, name: 'coruse2'}, {id: 3, name: 'coruse3'}];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

}
