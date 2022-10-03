import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { AssignVehiclePartHelpComponent } from 'app/components/assign-vehicle-part-help/assign-vehicle-part-help.component';
import { Part } from '../models/Part';
import { AuthService } from '../services/auth.service';
import { PartInfoService } from '../services/part-info.service';

@Component({
  selector: 'app-assign-vehicle-part',
  templateUrl: './assign-vehicle-part.page.html',
  styleUrls: ['./assign-vehicle-part.page.scss'],
})
export class AssignVehiclePartPage implements OnInit {

  part: Part;
  types: [];
  parts = {};
  assignPartForm: FormGroup;
  isSubmitted = false;
  data: any;

  constructor(private route: ActivatedRoute,
    public fb: FormBuilder, 
    public authService: AuthService, 
    public service: PartInfoService, 
    public router: Router, 
    public toastCtrl: ToastController,
    public helpModal: ModalController) {

      this.route.params.subscribe(params => {
          this.data = params.id;
      });
      this.assignPartForm = new FormGroup({
        partName: new FormControl('', Validators.required),
        partType: new FormControl('', Validators.required),
        Description: new FormControl('', Validators.required),
        partStock: new FormControl('', Validators.required)
      });

  }

  submitForm(){
    this.isSubmitted = true;
    if(!this.assignPartForm.valid){
      return false;
    }
    else{
        const vehicleParts = {
          partName: this.assignPartForm.get('partName').value,
          partType: this.assignPartForm.get('partType').value,
          Description: this.assignPartForm.get('description').value
        }
        this.service.getPart(vehicleParts)
        this.presentToast()
      }
      this.router.navigate(['/tabs/search/vehicle-part']);
  }

  async showHelp(){
    const modal = await this.helpModal.create({
      component: AssignVehiclePartHelpComponent});
      return await modal.present();
  }

  ngOnInit() {
    if(this.authService.isLoggedIn) {
      return true;
    }
    else {
      this.router.navigate(['/tabs/login']);
    }
  }

  get errorControl() {
    return this.assignPartForm.controls;
  }

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: 'Part has been successfully assigned.',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}