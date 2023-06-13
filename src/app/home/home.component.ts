import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppServiceService } from '../app-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  displayBasic: boolean=false;
 
  openModel(){
    const modelDiv =  document.getElementById('myModal');
    if(modelDiv!= null) {
      modelDiv.style.display = 'block';
    }
   
  }


  closeModel(){
    const modelDiv =  document.getElementById('myModal');
    if(modelDiv!= null) {
      modelDiv.style.display = 'none';
    }
   
  }



  registerForm: any = FormGroup;
  submitted = false;

  constructor(private auth: AppServiceService, private fb: FormBuilder, private http: HttpClient,private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required]
  });
    
  }


  registerProcess() {
    this.submitted = true;
    this.postData();
   
    if (this.registerForm.invalid) {
        return;
    }
}


postData() {
  this.auth.postData(this.registerForm.value).subscribe((result: any) => {
    const data = result;
    this.registerForm.reset();
    // alert("Data Register Successfully");
    this.router.navigate(['/thanks']);
    
  })
}


}







