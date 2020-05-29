import Firebase from './Firebase'

// What is the difference between onStateChange -> send state to firebase

class Controller {
  static fireb = new Firebase();

  static setUpOnValue = (onValueFunc) => {
    Controller.fireb.db.ref('root/school-data/classes/').on('value',
    (snapshot) => {
      onValueFunc("classes", snapshot.val());
    },
    (err) => console.log(err));
    Controller.fireb.db.ref('root/school-data/teachers/').on('value',
    (snapshot) => {
      onValueFunc("teachers", snapshot.val());
    },
    (err) => console.log(err));
    Controller.fireb.db.ref('root/school-data/students/').on('value',
    (snapshot) => {
      onValueFunc("students", snapshot.val());
    },
    (err) => console.log(err));
  }
  
  static registerClass = (className) => {
    console.log(`registering class: ${className} ...`);
    Controller.fireb.db.ref("root/school-data/classes/").push({name: className});
  }

  static registerTeacher = (lastName, firstName) => {
    console.log(`registering teacher: ${lastName} ${firstName} ...`);
    const teacher = {
      lastName: lastName,
      firstName: firstName
    }
    Controller.fireb.db.ref("root/school-data/teachers/").push(teacher);
  }

  static registerStudent = (lastName, firstName) => {
    console.log(`registering student: ${lastName} ${firstName} ...`);
    const student = {
      lastName: lastName,
      firstName: firstName
    }
    Controller.fireb.db.ref("root/school-data/students/").push(student);
  }

  // user account handling for email & password user
  static signUpUserEP = (email, password) => {
    Controller.fireb.registerUserWithEmailAndPassword(email, password);
  }

  static loginUserEP = (email, password) => {
    Controller.fireb.registerUserWithEmailAndPassword(email, password);
  }

  static signOutUserEP = () => {
    Controller.fireb.registerUserWithEmailAndPassword();
  }
}

export default Controller;