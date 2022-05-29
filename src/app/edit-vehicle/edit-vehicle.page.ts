import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { AuthService } from '../services/auth.service';
import { VehicleService } from '../services/vehicle.service';
import { Vehicle } from '../models/Vehicle';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.page.html',
  styleUrls: ['./edit-vehicle.page.scss'],
})

export class EditVehiclePage implements OnInit {

  vehicles: Vehicle;
  vehicle = {};
  editVehicleForm: FormGroup;
  isSubmitted = false;
  data: any;
  
  constructor(private route: ActivatedRoute, public fb: FormBuilder, public authService: AuthService, 
    public service: VehicleService, public firestore: AngularFirestore, public router: Router) {
      this.route.params.subscribe(params => {
          this.data = params.id;
      });
      this.editVehicleForm = new FormGroup({
        Registration: new FormControl('', Validators.required),
        VINNum: new FormControl('', [Validators.required, Validators.min(17), Validators.max(17)]),
        vehicleModel: new FormControl('', Validators.required),
        warrantyPlan: new FormControl('', Validators.required)
      })
     }
     
  submitForm(){
    this.isSubmitted = true;
    if(!this.editVehicleForm.valid){
      return false;
    }
    else{
        const vehicle = {
          VehicleModel: this.editVehicleForm.get('vehicleModel').value,
          Registration: this.editVehicleForm.get('Registration').value,
          VIN_Number: this.editVehicleForm.get('VINNum').value,
          Warranty: this.editVehicleForm.get('warrantyPlan').value
        }
        this.service.updateVehicle(this.data, vehicle)
        alert("Vehicle was successfully updated.");
      }
      this.router.navigate(['/tabs/view/vehicle', this.data]);
  }

  ngOnInit() {
    this.service.getVehicle(this.data).valueChanges()
    .subscribe(res =>{
    console.log(res)
    this.editVehicleForm.setValue({
      vehicleModel: res['VehicleModel'], 
      Registration: res['Registration'],
      VINNum: res['VIN_Number'], 
      warrantyPlan: res['Warranty']
    })
    });
  }
  get errorControl() {
    return this.editVehicleForm.controls;
  }

}