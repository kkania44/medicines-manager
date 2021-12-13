import { User } from './../registration/user';
import { DataHolderService } from './../data-holder.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private http: HttpClient,
              private dataHolder: DataHolderService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    let params = new HttpParams();
    params = params.append('email', this.form.get('email').value);
    params = params.append('password', this.form.get('password').value);
    this.http.get('http://localhost:8100/user/login', { params: params })
      .subscribe((data: User) => {
        this.dataHolder.saveId(data.id);
        this.router.navigateByUrl('/lekarstwa');
      });
  }

  goToRegister() {
    this.router.navigateByUrl('rejestracja');
  }

}
