import { Component, OnInit ,NgZone} from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { QuoteService } from '../services/quote.service';
import { Quotes } from '../models/Quote';
import { ToastController } from '@ionic/angular';


interface QuoteData {

  ClientName: String;
  Date: String;
  Description: String;
  Accepted: String;

}

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.page.html',
  styleUrls: ['./create-quote.page.scss'],
})

export class CreateQuotePage implements OnInit {

  QuoteData: QuoteData;
  createQuoteForm: FormGroup;
  isSubmitted = false;
  data:Quotes;

  constructor(public route : ActivatedRoute,
    public authService: AuthService, 
    public fb: FormBuilder, 
    public router: Router, 
    private quoteservice: QuoteService,
    private zone: NgZone, 
    public toastCtrl: ToastController) { 
   
      this.route.params.subscribe(params => {
        this.data = params.id;
      });
      this.createQuoteForm = this.fb.group({
        ClientName: ['', [Validators.required]],
        Date: ['', [Validators.required]],
        Description: ['', [Validators.required]],
        Accepted: ['', [Validators.required]],
      });

    }

  submitForm(){
    this.isSubmitted = true;
    if(!this.createQuoteForm.valid){
      return false;
    }
    else{
        const dealership = {
          ClientName: this.createQuoteForm.get('ClientName').value,
          Date: this.createQuoteForm.get('Date').value,
          Description: this.createQuoteForm.get('Description').value,
          Accepted: this.createQuoteForm.get('Accepted').value
        }
        //this.quoteservice.updateQuote(this.data, QuoteData)
        this.presentToast()
      }
      this.router.navigate(['/tabs/view/dealership', this.data]);
  }

  ngOnInit() {
    if(this.authService.isLoggedIn){
      return true;
    }
    else{
      this.router.navigate(['/tabs/login']);
    }

  }

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: 'A new quote has been created successfully',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  get errorControl() {
    return this.createQuoteForm.controls;
  }
}