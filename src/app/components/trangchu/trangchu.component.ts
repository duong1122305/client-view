import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trangchu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trangchu.component.html',
  styleUrl: './trangchu.component.css',
})
export class TrangchuComponent implements OnInit {
  constructor(private http: HttpClient) {}

  public products: any[] = [];

  ngOnInit(): void {
    this.http.get('http://localhost:5029/api/Product').subscribe((data) => {
      this.products = (data as any[]).slice(0, 5);
    });
  }
}
