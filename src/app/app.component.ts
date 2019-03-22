import { Component, OnInit, Input } from '@angular/core';
import {FormDataService} from './form-data.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LogIn';
  @Input() FormData;

  constructor(private formDataService: FormDataService, private router: Router){}

  ngOnInit(){
    this.FormData = this.formDataService.getFormData();
    console.log(this.title + 'loaded!');
  }

}
