import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { RegistrationService } from '../services/registration.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modulo',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class ModuloComponent implements OnInit {

  items: MenuItem[] = [];

  subscription: Subscription = new Subscription();

  constructor(
/*     public messageService: MessageService, */
    public RegistrationService: RegistrationService
  ) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Personal',
        routerLink: 'personal',
      },
      {
        label: 'Seat',
        routerLink: 'seat',
      },
      {
        label: 'Payment',
        routerLink: 'payment',
      },
      /* {
        label: 'Confirmation',
        routerLink: 'confirmation',
      }, */
    ];
  }

  ngOnDestroy() {
    if (this.subscription) {
        this.subscription.unsubscribe();
    }
}

}
