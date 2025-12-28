import { CommonModule } from '@angular/common';
import { Component, computed, signal, effect, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signals',
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
})
export class SignalsComponent {
  router = inject(Router);
  constructor() {
    effect(() => {
      console.log(`${this.isLoggedIn()} it works!`);
    });
  }

  first = signal('First var');
  count = signal(0);
  isEven = computed(() => this.count() % 2 === 0);

  // state
  user = signal<{ name: string } | null>(null);

  // derived
  loggedIn = computed(() => (this.user() !== null ? 'Menna' : 'User'));
  isLoggedIn = computed(() => this.user() !== null);

  // actions
  login() {
    this.user.set({ name: 'Menna' });
  }

  logout() {
    this.user.set(null);
  }
}
