import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DealershipService } from '../services/dealership.service'; 
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Dealership } from '../models/Dealership';
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-dealership',
  templateUrl: './search-dealership.page.html',
  styleUrls: ['./search-dealership.page.scss'],
})
export class SearchDealershipPage implements OnInit {

  dealerships: Dealership;
  dealershipList = [];
  dealershipForm: FormGroup;
  searchTerm: string;
  deleteModal: HTMLElement;

  constructor(public authService: AuthService, private service: DealershipService, public fb: FormBuilder, 
    private firestore: AngularFirestore, public alertCtrl: AlertController, public router: Router) { 
      this.dealerships = {} as Dealership;
    }

  ngOnInit() {
    this.dealershipForm = this.fb.group({
      FleetName: ['', [Validators.required]],
      FleetLocation: ['', [Validators.required]],
      FleetID: ['', [Validators.required]],
      FleetVehicleQty: ['', [Validators.required]],
  });

  this.service.getDealerships().subscribe(data => {
    this.dealershipList = data.map(e => {
      return {
        id: e.payload.doc.id,
        DealershipID: e.payload.doc.data()['DealershipID'],
        DealershipName: e.payload.doc.data()['DealershipName'],
        AddressName: e.payload.doc.data()['AddressName'],
      };
    })
    console.log(this.dealershipList);

  });
  }

  async removeDealership(id){
    const confirmDeleteAlert = await this.alertCtrl.create({
      header: 'Remove Dealership',
      message: 'Are you sure you would like to remove this dealership from the system?',
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
          this.service.deleteDealership(id);
          alert('Dealership was successfully removed');
        }
      }]
    });

    confirmDeleteAlert.present();

  }
}
