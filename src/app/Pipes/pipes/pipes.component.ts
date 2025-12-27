import {
  CommonModule,
  AsyncPipe,
  JsonPipe,
  KeyValuePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { CustomPipe } from '../Custom Pipe/custom-pipe.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, AsyncPipe, JsonPipe, KeyValuePipe, CustomPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  name = 'menna omran';
  salary = 25000;
  user = {
    id: 1,
    name: 'Menna',
    role: 'Frontend Developer',
    active: true,
  };
  createdAt = new Date('2024-06-15');
  lastLogin = new Date();
  price = 12500;
  discount = 0.15;
  rating = 4.6789;
  users$ = of([
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Sara' },
    { id: 3, name: 'Omar' },
  ]);

  settings = {
    theme: 'dark',
    language: 'en',
    notifications: true,
  };
  messagesCount = 3;

  messagesMap = {
    '=0': 'No messages',
    '=1': 'One message',
    other: '# messages',
  };
  userStatus = 'online';
  statusMap = {
    online: 'User is online',
    offline: 'User is offline',
    busy: 'User is busy',
    other: 'Unknown status',
  };
}
