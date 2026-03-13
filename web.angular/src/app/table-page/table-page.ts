import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Components } from '../../components';
import { TableColumn } from '../../components/table/tableColumn';

@Component({
  selector: 'app-table-page',
  imports: [CommonModule, ...Components],
  templateUrl: './table-page.html',
  styleUrl: './table-page.css',
  standalone: true,
})
export class TablePage {
  // count = 5;

  columns: TableColumn[] = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status' },
  ];

  dataList = [
    { id: 1, name: 'Alice Nguyen', email: 'alice@acme.io', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Bruno Silva', email: 'bruno@acme.io', role: 'Engineer', status: 'Active' },
    { id: 3, name: 'Celine Dubois', email: 'celine@acme.io', role: 'Designer', status: 'Inactive' },
    { id: 4, name: 'Daniel Park', email: 'dpark@acme.io', role: 'Engineer', status: 'Active' },
    { id: 5, name: 'Elif Yilmaz', email: 'elif@acme.io', role: 'Manager', status: 'Active' },
    { id: 6, name: 'Felix Okoye', email: 'felix@acme.io', role: 'Engineer', status: 'Active' },
    { id: 7, name: 'Grace Kim', email: 'grace@acme.io', role: 'Designer', status: 'Inactive' },
  ]

}
