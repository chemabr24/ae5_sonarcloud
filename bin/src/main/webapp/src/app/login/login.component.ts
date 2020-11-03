import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string;
  success: string;
  username: string;
  password: string;
  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private UsuarioService: AuthService
      
  ){

  }
  ngOnInit(): void { 
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  // getter para obtener los controles del form
  get f() { 
    return this.loginForm.controls;
  }


 public login(){
    this.submitted = true;
    console.log("nombre"+this.username)
    this.UsuarioService.login(this.username, this.password)
    .subscribe(
        data => {
           this.router.navigate(['/reuniones']);
        },
            
        error => {
            this.error = "Error: No se ha encontrado ningún usuario con esos datos.";
            
        });
  }
