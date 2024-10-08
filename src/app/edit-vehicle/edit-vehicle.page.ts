import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { AuthService } from '../services/auth.service';
import { VehicleService } from '../services/vehicle.service';
import { VehicleModel } from '../models/VehicleModel';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'app/models/Vehicle';
import { ModalController, ToastController } from '@ionic/angular';
import { EditVehicleHelpComponent } from 'app/components/edit-vehicle-help/edit-vehicle-help.component';


@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.page.html',
  styleUrls: ['./edit-vehicle.page.scss'],
})

export class EditVehiclePage implements OnInit {

  vehicle: Vehicle;
  vehicles = {};
  plans = [];
  models = [];
  editVehicleForm: FormGroup;
  isSubmitted = false;
  data: any;
  id: any;

  constructor(private activatedRoute: ActivatedRoute, 
    public fb: FormBuilder, 
    public authService: AuthService, 
    public _service: VehicleService, 
    public router: Router, 
    public toastCtrl: ToastController,
    public helpModal: ModalController) {
      
    // this.route.params.subscribe(params => {
    //       this.data = params.id;
    //   });
    // this.editVehicleForm = new FormGroup({
    //   VINNum: new FormControl('', [Validators.required, Validators.min(17), Validators.max(17)]),
    //   vehicleModel: new FormControl('', Validators.required),
    //   Registration: new FormControl('', Validators.required),
    //   warrantyPlan: new FormControl('', Validators.required)
    // })
    _service = {} as VehicleService;
    this.vehicle = new Vehicle();

    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
  });

  }

  submitForm(){
    
    this.router.navigate(['/tabs/view/vehicle', this.data]);
  }

  async showHelp(){
    const modal = await this.helpModal.create({
      component: EditVehicleHelpComponent});
      return await modal.present();
  }

  ngOnInit() {
    if(this.authService.isLoggedIn){
      return true;
    }
    else{
      this.router.navigate(['/tabs/login']);
    }

    

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
  }

  get errorControl() {
    return this.editVehicleForm.controls;
  }
  async updateVehicle(id, data){

    this._service.updateVehicle(this.id,this.data).subscribe(response => {
      console.log(response);
      //this.data = response;
      //this.router.navigate(['student-list']);
      
    })
  }
  back(){
    this.router.navigate(['tabs/view/vehicle', this.data]);
  }

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: 'Vehicle has been updated successfully.',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}