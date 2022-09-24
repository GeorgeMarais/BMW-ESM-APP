import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import{FleetService} from '../services/fleet.service';
import { VehicleService } from '../services/vehicle.service';
import { AlertController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Fleet } from '../models/fleet';



interface FleetData {
  FleetID: number;
  FleetName: string;
  FleetLocation: string;
  FleetVehicleQty: number;
}

interface FleetVehicles{
  VehicleID: number;
  VinNumber: string;
  ModelName: string;
  Year: string;
}

@Component({
  selector: 'app-view-fleet',
  templateUrl: './view-fleet.page.html',
  styleUrls: ['./view-fleet.page.scss'],
})
export class ViewFleetPage implements OnInit {

   vehicleList = [];
   VehicleData: FleetVehicles;
   fleetForm: FormGroup;
   searchTerm: string;
   fleetID: string;
   data: any;
   id: any;
   dat: any;
   combinedArray: { dat: any, data: any }[] = [];

  constructor(public authService: AuthService, public fb: FormBuilder, private fleetservice: FleetService, private vehiclesService: VehicleService,
    public alertCtrl: AlertController, public router: Router, public vehicleservice: VehicleService, public toastCtrl: ToastController,
    public activatedRoute: ActivatedRoute) { 

    vehicleservice = {} as VehicleService;
    fleetservice = {} as FleetService;

   // this.id = this.activatedRoute.snapshot.paramMap.get('fleetID');

    this.activatedRoute.params.subscribe(params => {
      this.data = params.id;
  });



    //this.dat = new Fleets();
    
  }

  ngOnInit() {

    //this.id = this.activatedRoute.snapshot.params["fleetID"];

    //this.feedbacks.forEach((fb, index)
    //=> this.combinedArray.push({ feedback: fb, result: this.results[index] }));

   
//this.getFleetDetails();

      //this.Get(this.id);
    //this.getVin();

    


    this.fleetservice.getFleet(this.data).subscribe(response => {
      console.log(response);
      this.dat = response;
    })

    //this.getModelAndYear();

  }

  async deleteVehicles(item){



    

      //Delete item in Student data
      this.vehicleservice.deleteVehicle(item.vehicleID).subscribe(Response => {
        //Update list after delete is successful
        console.log(Response);
        //this.getallFleets()

      });
    }


async getFleetDetails(){

  this.fleetservice.getFleetList().subscribe(response => {
    console.log(response);
    this.data = response;
  })



}
  


  async getVin(){

    this.vehicleservice.getVehicleList().subscribe(response => {
      console.log(response);
      this.data = response;
    
    })

    // this.vehicleservice.getListModelAndYear().subscribe(res => {
    //   console.log(res);
    //   this.dat = res;
    // })
  


    
  }

  // async getModelAndYear(){

  //   this.vehicleservice.getListModelAndYear().subscribe(response => {
  //     console.log(response);
  //     this.dat = response;
  //   })
  // }



  async Get(item){
    this.fleetservice.getFleet(item.FleetID).subscribe(response => {
      console.log(response);
      this.dat = response;

    })



  }

  async checkIn(){


    let toast = await this.toastCtrl.create({
      message: 'Fleet has been successfully checked in.',
      duration: 3000,
      position: 'top'
    });
  
    toast.present();
  }


  


  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: 'Fleet has been removed successfully.',
      duration: 3000,
      position: 'top'
    });
  
    toast.present();
  }

  select(){

  }


}






















/*
 this.fleetForm = this.fb.group({
      VehicleID: ['', [Validators.required]],
      VinNumber: ['', [Validators.required]],
      ModelName: ['', [Validators.required]],
      Year: ['', [Validators.required]],
    });

    this.vehiclesService.getVehicles().subscribe(data => {
      this.vehicleList = data.map(e => {
        let yearCode: string;
        yearCode = e.payload.doc.data()['VIN_Number'];
        return {
          id: e.payload.doc.id,
          isEdit: false,
          VehicleID: e.payload.doc.data()['VehicleID'],
          VinNumber: e.payload.doc.data()['VIN_Number'],
          ModelName: e.payload.doc.data()['VehicleModel'],
          Year: this.vehicleService.getYear(yearCode.substring(9, 10))
        };
      });

      console.log(this.vehicleList);

    });
  }

  RemoveFleet(ID) {
    if (window.confirm('Do you really want to Remove This Fleet?')) {
      this.vehiclesService.deleteVehicle(ID);
    }

    console.log(ID)
  }

  async Deletefleet(id){
    const confirmDeleteAlert = await this.alertCtrl.create({
      header: 'Remove Fleet',
      message: 'Are you sure you would like to remove this Fleet from the system?',
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
          this.fleetservice.delete_Fleet(id);
          this.presentToast();
        }
      }]
    });

    confirmDeleteAlert.present();

  }

  navToUpdate() {
    this.router.navigate(['/tabs/edit/fleet', this.data]);
  }

  select(){
    if(window.confirm('Fleet selected')){
      
    }
  }

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: 'Fleet has been removed successfully.',
      duration: 3000,
      position: 'top'
    });
  
    toast.present();
  }
}





*/