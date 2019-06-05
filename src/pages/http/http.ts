import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http/ngx';


/**
 * Generated class for the HttpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-http',
  templateUrl: 'http.html',
})
export class HttpPage {
  requestObject: any = null;

  constructor(private http: HTTP, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HttpPage');
    this.getRequest();
  }

  getRequest(){
    this.http.get('https://jsonplaceholder.typicode.com/todos/1', {}, {})
      .then(res  => this.requestObject = res.data)
      .catch(err => this.requestObject = err );

        console.log('thing');

  }/*
  this.http.get('https://jsonplaceholder.typicode.com/todos/1', {}, {})
  .then(data => {

    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);

  })
  .catch(error => {

    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });*/

}


