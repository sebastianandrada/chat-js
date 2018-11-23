import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatSidenavModule } from "@angular/material";
import {MatListModule} from '@angular/material/list';



const modules = [MatMenuModule, MatSidenavModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, MatMenuModule, MatSidenavModule, MatListModule],
  exports: [MatMenuModule, MatSidenavModule, MatListModule]
})
export class MaterialModule { }
