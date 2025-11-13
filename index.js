class Person {
  constructor(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  introduce() {
    return `Hi, I'm ${this.firstName} and I'm ${this.age} years old.`;
  }
}

class Student extends Person {
  courses = [];

  constructor(first, last, age, subject, school) {
    super(first, last, age);
    this.subject = subject;
    this.school = school;
  }

  introduce() {
    return `${super.introduce()}. I am studying ${this.subject} at ${this.school}.`
  }

  enrollInCourse(courseName) {
    this.courses.push(courseName);
  }
}

class MarcyStudent extends Student {
  static validCourses = ['Leadership & Development', 'Technical Interview Prep', 'Technical Lecture'];

  constructor(first, last, age) {
    super(first, last, age, "Software Engineering", "Marcy Lab School");
  }

  enrollInCourse(courseName) {
    if (!MarcyStudent.validCourses.includes(courseName)) {
      return 'Invalid Course Name';
    }
    super.enrollInCourse(courseName);
  }
}

const ada = new MarcyStudent('Ada', 'Lovelace', 24);
const alan = new Student('Alan', 'Turing', 27, 'Mathematics', 'Cambridge University');
const reuben = new Person('Reuben', 'Ogbonna', 36);

const people = [ada, alan, reuben];