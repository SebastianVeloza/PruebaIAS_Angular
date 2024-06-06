import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponentsComponent } from "./Components/List/list-components/list-components.component";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, ListComponentsComponent,ReactiveFormsModule]
})
export class AppComponent {
  title = 'PruebaIAS_Angular';
}
