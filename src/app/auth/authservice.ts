import * as firebase from 'firebase';
import {ActivatedRoute, Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class Authservice {

  token: string;

  constructor(private  router: Router, private  route: ActivatedRoute ){}

  signUpUser(email: string, password: string)
  {
    firebase.auth().createUserWithEmailAndPassword(email, password).
    catch(error => console.log(error));
  }

  signInUser(email: string, password: string)
  {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        this.router.navigate(['/recipes'],{relativeTo: this.route});
        console.log(response);
        firebase.auth().currentUser.getToken().then(
          (token: string) =>
          {
            this.token = token;
          }
        );
      })
      .catch(error => console.log(error));
  }

  getToken()
  {
     firebase.auth().currentUser.getToken().then(
      (token: string) =>
      {
        this.token = token;
      }
    );

    return this.token;
  }

  logOut()
  {
    firebase.auth().signOut();
    this.token = null;
  }

  isAuthenticated()
  {
    return this.token != null && this.token != '';
  }
}
