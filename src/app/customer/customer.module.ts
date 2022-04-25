import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { AssociateItemComponent } from './associate-item/associate-item.component';
import { OrderSheetComponent } from './order-sheet/order-sheet.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ItemSelectorModule } from '../components/item-selector/item-selector.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    CustomerListComponent,
    AddCustomerComponent,
    CustomerDetailComponent,
    AssociateItemComponent,
    OrderSheetComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ItemSelectorModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
})
export class CustomerModule {}
