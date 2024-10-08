import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AssignedPart } from '../models/AssignedPart';
import { AssignedPartService } from '../services/assigned-part.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-search-vehicle-part',
  templateUrl: './search-vehicle-part.page.html',
  styleUrls: ['./search-vehicle-part.page.scss'],
})
export class SearchVehiclePartPage implements OnInit {

  assignedParts: AssignedPart;
  assignedPartList = [];
  partForm: FormGroup;
  searchTerm: string;

  constructor(public authService: AuthService, private service: AssignedPartService, public fb: FormBuilder, 
    private firestore: AngularFirestore, public alertCtrl: AlertController, public router: Router, public toastCtrl: ToastController) { 
      this.assignedParts = {} as AssignedPart;
    }

  ngOnInit() {

    if(this.authService.isLoggedIn){
      return true;
    }
    else{
      this.router.navigate(['/tabs/login']);
    }
    this.partForm = this.fb.group({
      partName: ['', [Validators.required]],
      partType: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      partStock: ['', [Validators.required]],
    });

    var coll = document.getElementsByClassName("collapsible");
    var i;
    let up = document.getElementById('up');
    let down = document.getElementById('down');

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
          down.style.display = "none";
          up.style.display = "block";
        } else {
          content.style.display = "block";
          up.style.display = "none";
          down.style.display = "block";
        }
      });
    }

    /*
    this.service.getList().subscribe(data => {
      this.assignedPartList = data.map(e => {
        return {
          id: e.payload.doc.id,
          partName: e.payload.doc.data()['VehicleID'],
          partType: e.payload.doc.data()['VIN_Number'],
          Description: e.payload.doc.data()['VIN_Number'],
          partStock: e.payload.doc.data()['VehicleModel']
        };
      })
      console.log(this.assignedPartList);

    });
    */
  }

  async removePart(id){
    const confirmDeleteAlert = await this.alertCtrl.create({
      header: 'Remove Assigned Part',
      message: 'Are you sure you would like to remove this assigned part from the service?',
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
          this.service.deleteAssignedPart(id);
          this.presentToast();
        }
      }]
    });

    confirmDeleteAlert.present();

  }

  async assignPart(id){
    
  }

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: 'Assigned Part was successfully removed.',
      duration: 3000,
      position: 'top'
    });
  
    toast.present();
    
  }
}
