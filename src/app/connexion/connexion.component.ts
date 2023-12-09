import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm(): void {
    this.loginForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['']
    });
  }
  onLogin(): void {
    this.authService.login(this.loginForm.value).subscribe(
      (data: any) => {
        this.handleRoleNavigation(data.role);
        localStorage.setItem('role', data.role);
      },
      error => {
        console.error(error);
        this.errorMessage = 'Veuillez vérifier vos identifiants';
        alert(this.errorMessage);
      }
    );
  }
  private handleRoleNavigation(role: string): void {
    switch (role) {
      case 'admin':
        this.router.navigate(['/listadmin']);
        break;
      case 'enseignant':
        this.router.navigate(['/List']);
        break;
      case 'etudiant':
        this.router.navigate(['/listetud']);
        break;
      // Ajoutez d'autres cas selon vos besoins
      default:
        // Fallback vers une page par défaut ou gestion d'erreur
        break;
    }
  }
}  
