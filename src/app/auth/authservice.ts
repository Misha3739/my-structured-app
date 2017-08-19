import * as firebase from 'firebase';

export class Authservice {
  signUpUser(email: string, password: string)
  {
    firebase.auth().createUserWithEmailAndPassword(email, password).
    catch(error => console.log(error));
  }
}
