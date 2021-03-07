import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { ItemService } from 'src/app/services/item.service';
import { Customer } from 'src/models/customer.model';
import { Item } from 'src/models/item.model';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss'],
})
export class NewOrderComponent implements OnInit {
  customer: Customer | undefined;
  items: Partial<Item & { orderedCount: string }>[] = [];

  constructor(
    private route: ActivatedRoute,
    private cs: CustomerService,
    private is: ItemService
  ) {
    this.cs
      .load(this.route.snapshot.paramMap.get('id') || '_')
      .subscribe((customer) => {
        this.customer = customer;

        const items = Object.keys(customer?.items || {});
        if (customer && items.length) {
          this.is
            .list((ref) => ref.where('id', 'in', items))
            .subscribe((items) => {
              this.items = items;
            });
        }
      });
  }

  ngOnInit(): void {}
}
