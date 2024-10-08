import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder,Validators,FormGroup, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/Employee.service';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-view-employee-account',
  templateUrl: './view-employee-account.page.html',
  styleUrls: ['./view-employee-account.page.scss'],
})
export class ViewEmployeeAccountPage implements OnInit {

  //private FirebaseApp = getApp();
  //private db = getFirestore(this.FirebaseApp);
  //private Clientid: String;
  //private currentClient;
  employeeList = [];
  viewEmployeeForm: FormGroup;
  employee: Employee;
  data: any;
  //public eventList: Clients[] = [];
  //ClientList: any;   //[]

  constructor(public employeeService: EmployeeService , private zone: NgZone,private toastCtrl: ToastController,private service: PostService, 
    public fb: FormBuilder,private router: Router, private route: ActivatedRoute, public authService: AuthService, private firestore: AngularFirestore) { 
      this.route.params.subscribe(params => {
        this.data = params.id;
      });
      this.employee = {} as Employee;

      this.viewEmployeeForm = new FormGroup({
        qNum: new FormControl('', Validators.required),
        fName: new FormControl('', Validators.required),
        lName: new FormControl('', Validators.required),
        PhoneNumber: new FormControl('', Validators.required),
        Email: new FormControl('', Validators.required),
        teamName: new FormControl('', Validators.required)
      });
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

      console.log(this.employeeList);

   
  }

  navToUpdate() {
    this.router.navigate(['tabs/edit/account/employee', this.data]);
  }

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: 'Employee has been removed successfully.',
      duration: 3000,
      position: 'top'
    });
  
    toast.present();
  }
}