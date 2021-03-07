import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { LoginComponent } from './login/login.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';
import { OrderSheetComponent } from './customers/order-sheet/order-sheet.component';
import { NewOrderComponent } from './orders/new-order/new-order.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ItemListComponent,
      },
      {
        path: 'item/:id',
        component: ItemDetailComponent,
      },
      {
        path: 'customer',
        children: [
          {
            path: '',
            component: CustomerListComponent,
          },
          {
            path: ':id',
            component: CustomerDetailComponent,
          },
          {
            path: ':id/order-sheet',
            component: OrderSheetComponent,
          },
        ],
      },
    ],
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: () => redirectUnauthorizedTo('/login'),
    },
  },

  {
    path: 'order/:id/new',
    component: NewOrderComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: () => redirectLoggedInTo('/'),
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
