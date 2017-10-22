import { NgModule }      from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './components/product/product.component';
import {CartComponent} from './components/cart/cart.component';

const routes: Routes = [
     {path:'', component: ProductComponent},
     {path:'product', component: ProductComponent},
     {path:'cart', component: CartComponent},
     {path:'**', redirectTo: ''}    
]

export const routing = RouterModule.forRoot(routes);