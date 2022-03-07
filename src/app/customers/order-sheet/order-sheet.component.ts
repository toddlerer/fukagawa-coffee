import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { ItemService } from 'src/app/services/item.service';
import { Customer } from 'src/models/customer.model';
import { Item } from 'src/models/item.model';

@Component({
  selector: 'app-order-sheet',
  templateUrl: './order-sheet.component.html',
  styleUrls: ['./order-sheet.component.scss'],
})
export class OrderSheetComponent implements OnInit {
  customer: Customer | undefined;
  items: Partial<Item & { price: string }>[] = [];

  orderAddress = '';

  qrCodeAddress = '';
  isNotReady = true;

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
          this.orderAdress = `${location.origin}/order/${customer.id}/new`;
          this.qrCodeAddress =
            'https://api.qrserver.com/v1/create-qr-code/?format=svg&qzone=1&data=' +
            encodeURIComponent(this.orderAddress);
          this.is
            .list((ref) => ref.where('id', 'in', items))
            .subscribe((items) => {
              this.items = items;
              this.items.push(...Array(10 - items.length).fill({}));
            });
        }
      });
  }

  ngOnInit(): void {
    document.getElementById('qrcode')?.addEventListener('load', () => {
      this.isNotReady = false;
    });
  }

  print() {
    window.print();
  }
}
