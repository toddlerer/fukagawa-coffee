import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberListComponent } from './member-list/member-list.component';

@NgModule({
  declarations: [MemberListComponent],
  imports: [CommonModule, MemberRoutingModule],
})
export class MemberModule {}
