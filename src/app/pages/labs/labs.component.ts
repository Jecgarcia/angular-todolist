import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss'
})
export class LabsComponent {
  name = 'Jess';
  age = '27';
  tipo_mascota = 'gato'; 
  nombre_mascota = 'Garfield'; 
  img = 'https://lh3.googleusercontent.com/pw/ABLVV84vBu4KnQC5Ni5arXnuM1CRvJo0y1jlzPN4l7L5AwPzS6xMIx6pDgRQlTVa6DJMV2Np2_NYAKKpqRkLR8P0ThHeBxRJ8AaowhsPKbyy4_VnIm-3buwWsVxqXpXljpuoDtvAXrQXwEUgIisG5I1NXGmOLu9UM8c2qbobwKd21XD3E8jIA8psSDKapl8Fdcm9GGmpEWVrQrc4MA2AoLeVwVWWymqY9oMUbz5Uw2mYd551L_HpTXqhfnwKQ-B-6JMUpNB-dqGEoI0S1aA1_ciAnn6pUqzIPQST-WNI2FjSdJfs7DLK9aa_5ev-ssgTZciSyX1Yj2ev4BXUXWan1zhNgaO-nQD973p0TBm3f0Wmn8CwFhZ7gpRQTCVpH199t0RUlftum4FpYDrZ-bObIxkAs-7qhwv7uzb4ivITgXPtcbpBWM4mKvDboSCQQEdWfQHe0Qj-7noDixUA62o-D8vgZi2FVUpTmTE-fuxZUUZhLG9y4Fw39xHVZhYYhKERSZN_JpnFVdtVY777I9m-DGEaNI0JZg4BfitUeJH2Vir6hN_nymWooXXy7CdYUZnfYZ_sku060Xs7K6C6nBx5cv29UV3dKtrbro4Hz8CwMwcdrtPmlEYqcp2rOiiylplRuKjHawCbAhjcKW8npXCP4YB4P-j0j2MVoiOjbCD3RLdxl0P1jntXT60rNcJrHqde3xn7xQzkGlNMngSTxlQ4tdmY0yCk0oBq672DlA-9LBjs3R6CSA0OcYEGoxeKvW1lHGI6orsHwuCgkYLQkYLYxicqgfulZ39llxlbNeuejlez88bypwrHW6mqIJDhgBMpptoyc07LBJQuWk58rEYqHhOpEm0OmopNmg8OwMjWLiB9lOsN0kVSed9S6iOiQu4H4bGBIhYVqOBNPXlqiP-Qr1ey5zB0HpADlVeGaJVQKNwS=w678-h905-s-no-gm?authuser=1'
}
