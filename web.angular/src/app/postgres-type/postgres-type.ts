import { Component, model } from '@angular/core';
import { Components } from '../../components';

@Component({
  selector: 'app-postgres-type',
  imports: [...Components],
  templateUrl: './postgres-type.html',
  styleUrl: './postgres-type.css',
  standalone: true,
})
export class PostgresType {
  selectedType = model<string>('varchar');

  typeOptions = [
    { label: 'VARCHAR', value: 'varchar' },
    { label: 'INTEGER', value: 'integer' },
    { label: 'BOOLEAN', value: 'boolean' },
    { label: 'DATE', value: 'date' },
    { label: 'TIMESTAMP', value: 'timestamp' },
  ];
}
