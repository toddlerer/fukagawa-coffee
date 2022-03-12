import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemSelectorComponent } from './item-selector.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [ItemSelectorComponent],
  imports: [CommonModule, MatGridListModule],
  exports: [ItemSelectorComponent],
})
export class ItemSelectorModule {}
