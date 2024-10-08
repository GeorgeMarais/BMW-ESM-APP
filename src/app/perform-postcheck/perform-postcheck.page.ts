import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { PostCheckHelpComponent } from 'app/components/post-check-help/post-check-help.component';
import { AssignedPartService } from '../services/assigned-part.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-perform-postcheck',
  templateUrl: './perform-postcheck.page.html',
  styleUrls: ['./perform-postcheck.page.scss'],
})
export class PerformPostcheckPage implements OnInit {

  assignedPart = {};
  checks = [];
  postServiceForm: FormGroup;
  isSubmitted = false;
  data: any;

  constructor(private route: ActivatedRoute, public fb: FormBuilder, public authService: AuthService, public helpModal: ModalController,
    public service: AssignedPartService, public firestore: AngularFirestore, public router: Router, private toastCtrl: ToastController) {
      this.route.params.subscribe(params => {
          this.data = params.id;
      });
    this.postServiceForm = new FormGroup({
      check: new FormControl('', [Validators.required])
    })
  }

  submitForm(){
    this.isSubmitted = true;
    if(!this.postServiceForm.valid){
      return false;
    }
    else{
        const assignedPart = {
          check: this.postServiceForm.get('check').value
        }
        this.service.updateAssignedPart(this.data, assignedPart)
        this.presentToast();
      }
      this.router.navigate(['/tabs/view/assigned-part', this.data]);
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

  async showHelp(){
    const modal = await this.helpModal.create({
      component: PostCheckHelpComponent});
      return await modal.present();
  }

  get errorControl() {
    return this.postServiceForm.controls;
  }

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: 'Assigned Part has been updated successfully.',
      duration: 3000,
      position: 'top'
    });
  
    toast.present();
  }
}
