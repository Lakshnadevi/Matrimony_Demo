import { keyframes, style } from '@angular/animations';

export const swiperight = [
  style({ transform: 'translateX(0)', offset: 0 }),
  style({ transform: 'translateX(100%)', offset: 1 })
];

export const swipeleft = [
  style({ transform: 'translateX(0)', offset: 0 }),
  style({ transform: 'translateX(-100%)', offset: 1 })
];
