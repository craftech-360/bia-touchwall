import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { GridOneComponent } from './grid-one/grid-one.component';
import { GridTwoComponent } from './grid-two/grid-two.component';
import { GridThreeComponent } from './grid-three/grid-three.component';
import { ThreeComponent } from './three/three.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'one',
    component: GridOneComponent,
  },
  {
    path: 'two',
    component: ThreeComponent,
  },
  {
    path: 'three',
    component: SliderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
