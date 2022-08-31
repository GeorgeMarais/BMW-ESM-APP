import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-perform-precheck',
  templateUrl: './perform-precheck.page.html',
  styleUrls: ['./perform-precheck.page.scss'],
})
export class PerformPrecheckPage implements OnInit {

  selectChecksForm: FormGroup;
  isSubmitted = false;
  data: any;

  constructor(private route: ActivatedRoute, public fb: FormBuilder, public authService: AuthService, public firestore: AngularFirestore, 
    public service: VehicleService, public router: Router, public toastCtrl: ToastController) { 
    this.route.params.subscribe(params => {
      this.data = params['id'];
    });
    this.selectChecksForm = new FormGroup({
      safetySystemsCheck: new FormControl(),
      interiorLightsCheck: new FormControl(),
      exteriorLightsCheck: new FormControl(),
      windscreenCheck: new FormControl(),
      tyreCheck: new FormControl(),
      mobilityCheck: new FormControl(),
      coolantCheck: new FormControl(),
      headlampCheck: new FormControl(),
      steeringFluidCheck: new FormControl(),
      brakeCheck: new FormControl(),
      underBodyCheck: new FormControl(),
      steeringSystemCheck: new FormControl(),
      sparkPlugsCheck: new FormControl(),
      otherCheck: new FormControl()
    })
  }

  ngOnInit() {
  }

  submitForm(){
    this.isSubmitted = true;
    if(!this.selectChecksForm.valid){
      return false;
    }
    else{
      sessionStorage.setItem('checkList', '');
        const checkList = {
          safetySystemsCheck: this.selectChecksForm.get('safetySystemsCheck').value,
          interiorLightsCheck: this.selectChecksForm.get('interiorLightsCheck').value,
          exteriorLightsCheck: this.selectChecksForm.get('exteriorLightsCheck').value,
          windscreenCheck: this.selectChecksForm.get('windscreenCheck').value,
          tyreCheck: this.selectChecksForm.get('tyreCheck').value,
          mobilityCheck: this.selectChecksForm.get('mobilityCheck').value,
          coolantCheck: this.selectChecksForm.get('coolantCheck').value,
          headlampCheck: this.selectChecksForm.get('headlampCheck').value,
          steeringFluidCheck: this.selectChecksForm.get('steeringFluidCheck').value,
          brakeCheck: this.selectChecksForm.get('brakeCheck').value,
          underBodyCheck: this.selectChecksForm.get('underBodyCheck').value,
          steeringSystemCheck: this.selectChecksForm.get('steeringSystemCheck').value,
          sparkPlugsCheck: this.selectChecksForm.get('sparkPlugsCheck').value,
          otherCheck: this.selectChecksForm.get('otherCheck').value
        }
        sessionStorage.setItem('checkList', JSON.stringify(checkList));
        this.presentToast();
      }
      this.router.navigate(['/tabs/capture/initial-inspection-details']);
  }

  get errorControl() {
    return this.selectChecksForm.controls;
  }

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: 'Checks have been selected.',
      duration: 3000,
      position: 'top'
    });
  
    toast.present();
  }
}
