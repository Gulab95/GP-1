import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { AntdMaterialModule } from './antd-material/antd-material.module';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';



@NgModule({

  imports: 
  [
    CommonModule,
    AntdMaterialModule,
    //ComponentsModule,
    //DirectivesModule,
    //PipesModule
  ],
  declarations:[],
  exports: 
  [
    AntdMaterialModule,
    // ComponentsModule,
    // DirectivesModule,
    // PipesModule
  ]
  
})
export class SharedModule { }
