import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';
import { OrderService } from 'src/app/services/order.service';
import { Customer } from 'src/models/customer.model';
import { Order } from 'src/models/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  orders: Observable<Order[]>;

  constructor(private os: OrderService, private cs: CustomerService) {
    this.orders = this.os.list((ref) => ref.where('isDone', '==', false));
  }

  ngOnInit(): void {}
}
