import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TeamService } from '../services/team.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Team } from '../models/team';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.page.html',
  styleUrls: ['./create-team.page.scss'],
})
export class CreateTeamPage implements OnInit {

  isSubmitted = false;
  teamTypes = [];
  TeamList = [];
  dealerships = [];
  TeamList$!:Observable<any[]>;
  createTeamForm: FormGroup;
  AddressID: string;
  data: Team;
  information= null;

  constructor(public authService: AuthService, public fb: FormBuilder, private teamService: TeamService, 
    public alertCtrl: AlertController, public router: Router,public ActivatedRoute: ActivatedRoute) { 
      teamService = {} as TeamService;
      this.data = new Team();

      this.createTeamForm = new FormGroup({
        teamName: new FormControl('', Validators.required),
        dealershipName: new FormControl('', Validators.required),
        teamType: new FormControl('', Validators.required)
      })
    }

  ngOnInit() {
    if(this.authService.isLoggedIn){
      return true;
    }
    else{
      this.router.navigate(['/tabs/login']);
    }
  }

  create(){  
    this.teamService.createTeam(this.data).
    subscribe((response) => {
      console.log(response);
      //this.router.navigate(['team-list']);
    });
  }

  get errorControl() {
    return this.createTeamForm.controls;
  }
}