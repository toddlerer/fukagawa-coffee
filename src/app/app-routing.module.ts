import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AuthGuard,
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
import { OrderListComponent } from './orders/order-list/order-list.component';
import { OrderDetailComponent } from './orders/order-detail/order-detail.component';
import { MemberListComponent } from './members/member-list/member-list.component';

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
      {
        path: 'order',
        component: OrderListComponent,
      },
      {
        path: 'order/:id',
        component: OrderDetailComponent,
      },
      {
        path: 'member',
        component: MemberListComponent,
      },
    ],
    canActivate: [AuthGuard],
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
    canActivate: [AuthGuard],
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
