import { CommonModule } from '@angular/common';
import { Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { ColTemplate } from './col-template';
import { TableColumn } from './tableColumn';
@Component({
  selector: 'nc-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
  standalone: true,
})
export class Table {
  @Input() columns: TableColumn[] = [];
  @Input() dataList: any[] = [];
  @ContentChildren(ColTemplate) tableTemplates!: QueryList<ColTemplate>;
  cellTemplates = new Map<string, TemplateRef<any>>();

  ngAfterContentInit(): void {
    this.cellTemplates.clear();
    this.tableTemplates.forEach(item => this.cellTemplates.set(item.key, item.tpl));
  }
}
