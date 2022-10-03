import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ServiceService } from '../services/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { VehicleService } from 'app/models/VehicleService';
import { UpdateServiceHelpComponent } from 'app/components/update-service-help/update-service-help.component';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.page.html',
  styleUrls: ['./update-service.page.scss'],
})

export class UpdateServicePage implements OnInit {

  dealerships = [];
  teams = [];
  serviceTypes = [];
  service: VehicleService;
  editserviceForm: FormGroup;
  isSubmitted = false;
  data: any;
  id: any;

  constructor(private activatedRoute: ActivatedRoute, 
    public fb: FormBuilder, 
    public authService: AuthService, 
    public _service: ServiceService,
    public router: Router, 
    public toastCtrl: ToastController,
    public helpModal: ModalController) {
      
      // this.route.params.subscribe(params => {
      //     this.data = params.id;
      // });
      // this.editserviceForm = new FormGroup({
      //   DealershipName: new FormControl('', Validators.required),
      //   TeamName: new FormControl('', Validators.required),
      //   ServiceTypeName: new FormControl('', Validators.required)
      // });
      _service = {} as ServiceService;
      this.service = new VehicleService();
  
      this.activatedRoute.params.subscribe(params => {
        this.id = params.id;
    });

  }

  submitForm(){
    // this.isSubmitted = true;
    // if(!this.editserviceForm.valid){
    //   return false;
    // }
    // else{
    //   const service = {
    //     DealershipName: this.editserviceForm.get('DealershipName').value,
    //     TeamName: this.editserviceForm.get('TeamName').value,
    //     ServiceTypeName: this.editserviceForm.get('ServiceTypeName').value
    //   }
    //   this._service.updateService(this.data, service)
    //   this.presentToast();
    // }
    
  }

  async showHelp(){
    const modal = await this.helpModal.create({
      component: UpdateServiceHelpComponent});
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

    /*this.service.getItem(this.data)
    .subscribe(res =>{
    console.log(res)
    this.editserviceForm.setValue({
      partName: res['PartName'],
      partType: res['PartType'], 
      Description: res['Description'], 
      partStock: res['PartInStock']
    })
    });*/
  }
  async updateService(id, data){

    this._service.updateService(this.id,this.data).subscribe(response => {
      console.log(response);
    })
    this.router.navigate(['/tabs/view/service', this.data]);
    await this.presentToast();
  }
  back(){
    this.router.navigate(['tabs/view/service', this.data]);
  }

  get errorControl() {
    return this.editserviceForm.controls;
  }

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: 'Service has been updated successfully.',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
