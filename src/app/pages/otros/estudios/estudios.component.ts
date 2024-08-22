import { EstudiosService } from './../../../core/services/estudios.service';
import { CommonModule, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject, Inject, OnInit } from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-estudios',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    NgIf, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './estudios.component.html',
  styleUrl: './estudios.component.css'
})
export class EstudiosComponent implements OnInit{

  private estudiosService = inject(EstudiosService);

  estudios: any[] = [];
  paginatedEstudios: any[] = [];
  isLoading = true;
  currentPage=1;
  itemsPerPage = 10;
  totalItems= 0;
  filterValue: string = '';


  ngOnInit() {
    this.loadEstudios();
  }
  loadEstudios() {
    this.estudiosService.getEstudios().subscribe(response => {
      const estudios = response.data.filter((d: any) => d.tag === 'Agrometeorologia').map((d: any) => {
        const hrefMatch = d.link.match(/href="(.*?)"/);
        const titleMatch = d.link.match(/title="(.*?)"/);

        if (hrefMatch && hrefMatch[1] && titleMatch && titleMatch[1]) {
          d.link = hrefMatch[1].replace('..', 'https://www.senamhi.gob.pe');
          d.linkTitle = titleMatch[1];
        } else {
          d.link = '';
          d.linkTitle = 'Ver Estudio';
        }
        return d;
      });
      this.estudios = estudios;
      this.totalItems = estudios.length;
      this.updatePagination();
      this.isLoading = false;
    });
  }

  updatePagination() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    const filteredEstudios = this.applyLocalFilter(this.estudios);
    this.paginatedEstudios = filteredEstudios.slice(start, end);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = filterValue.trim().toLowerCase();
    this.currentPage = 1; // Reset to first page when filter changes
    this.updatePagination();
  }
  applyLocalFilter(data: any[]) {
    return data.filter(item => {
      return Object.keys(item).some(key => {
        return item[key].toString().toLowerCase().includes(this.filterValue);
      });
    });
  }
  prevPage() {
    if (this.hasPrevPage()) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  nextPage() {
    if (this.hasNextPage()) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  hasPrevPage() {
    return this.currentPage > 1;
  }

  hasNextPage() {
    const filteredEstudios = this.applyLocalFilter(this.estudios);
    return this.currentPage < Math.ceil(filteredEstudios.length / this.itemsPerPage);
  }
}
