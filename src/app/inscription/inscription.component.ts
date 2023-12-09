import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})

export class InscriptionComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService:AuthService,private router:Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role:['']
    });
  }
  onRegister(): void {
    this.authService.register(this.registerForm.value).subscribe(data => console.log(data));
    this.router.navigate(['/Connexion']);

  }

}
