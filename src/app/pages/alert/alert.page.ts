import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(
    private alertController: AlertController
  ){}

  ngOnInit(){}

  onClick()
  {

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert!',
      subHeader: 'Subtitle',
      message:'This is an alert message',
      backdropDismiss: false,
      buttons:['OK']
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Alert!',
      subHeader: 'Subtitle',
      message:'This is an alert message',
      backdropDismiss: false,
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Alert confirmed');
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          },
        },
      ],
    });

    await alert.present();
  }

  async presentAlertForm() {
    const alert = await this.alertController.create({
      header: 'Please enter your info',
      buttons:[
        {
          text: 'OK',
          role: 'confirm',
          handler: (data) => {
            console.log(data);
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          },
        },
      ],

      inputs: [
        {
          name:'nombre',
          placeholder: 'Name',
        },
        {
          name:'nickname',
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          name:'edad',
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          name:'comment',
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
    });

    await alert.present();
  }
}
