import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-components',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule ],
  templateUrl: './filter-components.component.html',
  styleUrl: './filter-components.component.css'
})
export class FilterComponentsComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
   this.myForm= this.formBuilder.group({
    id: ['',Validators.required]
   });
  }

  get f() { return this.myForm.controls; }

 onsubmit(){
  if(this.myForm.valid){
    console.log(this.myForm.value);
    
  }
 }
 

}
