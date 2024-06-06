import { Component, OnInit } from '@angular/core';
import { CitiesServiceService } from '../../../Services/cities/cities-service.service';
import { IDepartment } from '../../../interfaces/idepartment';
import { CommonModule } from '@angular/common';
import { log } from 'console';
import { Icities } from '../../../interfaces/Icities';

@Component({
  selector: 'app-list-components',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-components.component.html',
  styleUrl: './list-components.component.css'
})
export class ListComponentsComponent implements OnInit {

  items: IDepartment[];
  itemscities: Icities[];

  

  constructor(private department:CitiesServiceService){}

  ngOnInit(): void {
    this.getDepartment();
    console.log(this.items);
    
  }
  
  getDepartment():void{
     this.department.getDepartments().subscribe( x=>this.items = x);
  }

  getcities(idDeparment: number):void{
    this.department.getCities(idDeparment).subscribe( x=>this.itemscities = x);
 }

}
