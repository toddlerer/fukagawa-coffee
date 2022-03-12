import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemListComponent } from './item-list/item-list.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { ItemSelectorModule } from '../components/item-selector/item-selector.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [ItemListComponent, AddItemComponent, ItemDetailComponent],
  imports: [
    CommonModule,
    ItemRoutingModule,
    ItemSelectorModule,
    MatGridListModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatOptionModule,
    MatButtonModule,
    MatTooltipModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class ItemModule {}
