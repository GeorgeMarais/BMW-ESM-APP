import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../models/VehicleService';
import { AuthService } from '../services/auth.service';
import { ServiceService } from '../services/service.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-service',
  templateUrl: './search-service.page.html',
  styleUrls: ['./search-service.page.scss'],
})
export class SearchServicePage implements OnInit {
  deleteModal: HTMLElement;
  services: VehicleService;
  serviceList = [];
  serviceForm: FormGroup;
  searchTerm: string;
  serviceID: any;
  data: any;

  constructor(public router: Router, public authService: AuthService, private _service: ServiceService, public fb: FormBuilder, private firestore: AngularFirestore, 
    public alertCtrl: AlertController, public toastCtrl: ToastController) { 
      this.services = {} as VehicleService;
    }

  ngOnInit() {
    if(this.authService.isLoggedIn){
      return true;
    }
    else{
      this.router.navigate(['/tabs/login']);
    }
    // this.serviceForm = this.fb.group({
    //   ServiceID: ['', [Validators.required]],
    //   VINNumber: ['', [Validators.required]],
    //   ServiceType: ['', [Validators.required]],
    //   Date: ['', [Validators.required]]
    // });
    
    // this._service.getServices().subscribe(data => {
    //   this.serviceList = data.map(e => {

    //     return {
    //       id: e.payload.doc.id,
    //       ServiceID: e.payload.doc.data()['ServiceID'],
    //       VINNumber: e.payload.doc.data()['VINNumber'],
    //       ServiceTypeName: e.payload.doc.data()['ServiceTypeName'],
    //       Date: e.payload.doc.data()['Date']

    //     };
    //   })
    //   console.log(this.serviceList);

    // });
  }
  
  async cancelService(serviceID){
    const confirmDeleteAlert = await this.alertCtrl.create({
      header: 'Remove Service',
      message: 'Are you sure you would like to remove this service from the system?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: end => {
          this.alertCtrl.dismiss();
        }
      },
      {
        text: 'Remove',
        role: 'remove',
        handler: () => {
          this._service.deleteService(serviceID);
          this.presentToast();
        }
      }]
    });

    confirmDeleteAlert.present();

  }

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: 'Service has been cancelled successfully.',
      duration: 3000,
      position: 'top'
    });
  
    toast.present();
  }
}