import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-capture-initial-inspection-details',
  templateUrl: './capture-initial-inspection-details.page.html',
  styleUrls: ['./capture-initial-inspection-details.page.scss'],
})
export class CaptureInitialInspectionDetailsPage implements OnInit {

  addVehicleForm: FormGroup;
  isSubmitted = false;
  data: any;

  constructor(private route: ActivatedRoute, public fb: FormBuilder, public authService: AuthService, public firestore: AngularFirestore, 
    public service: VehicleService, public router: Router) { 
    this.route.params.subscribe(params => {
      this.data = params['id'];
    });
    this.addVehicleForm = new FormGroup({
      VINNum: new FormControl('', [Validators.required, Validators.min(17), Validators.max(17)]),
      vehicleModel: new FormControl('', Validators.required),
      Registration: new FormControl('', Validators.required),
      warrantyPlan: new FormControl('', Validators.required)
    })
  }

  submitForm(){
    this.isSubmitted = true;
    if(!this.addVehicleForm.valid){
      return false;
    }
    else{
      const vehicle = {
        VIN_Number: this.addVehicleForm.get('VINNum').value,
        VehicleModel: this.addVehicleForm.get('vehicleModel').value,
        Registration: this.addVehicleForm.get('Registration').value,
        Warranty: this.addVehicleForm.get('warrantyPlan').value,
        FleetID: ''
      }

      if(this.data != null || this.data != undefined){
        vehicle.FleetID = this.data;
      }
      else{
        vehicle.FleetID = '';
      }

      this.firestore.collection('Vehicle').add(vehicle).then(function(){
        alert("New vehicle created successfully");
      });
    }
     
    this.router.navigate(['/tabs/view/fleet'], this.data);

  }

  ngOnInit() {
    this.addVehicleForm.setValue({VINNum: '', vehicleModel: '', Registration: '', warrantyPlan: ''});
  }

  get errorControl() {
    return this.addVehicleForm.controls;
  }
}
