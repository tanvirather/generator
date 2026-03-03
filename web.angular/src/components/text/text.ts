import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  input,
  model,
  output,
  signal
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'nc-text',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './text.html',
  styleUrl: './text.css'
})
export class Text {
  // Inputs (Angular 17+ signal-based)
  label = input<string>('Label');
  placeholder = input<string>('');
  hint = input<string>('');
  errorMessage = input<string>('');
  disabled = input<boolean>(false);
  clearable = input<boolean>(true);
  prefixIcon = input<string>('');  // 'search' | 'user' | 'mail' | ''
  maxLength = input<number | null>(null);
  inputId = input<string>('text-input-' + Math.random().toString(36).slice(2, 7));
  required = input<boolean>(false);

  // Two-way binding via model()
  value = model<string>('');

  // Outputs
  valueChange = output<string>();
  focused = output<void>();
  blurred = output<void>();

  // Internal state
  isFocused = signal(false);
  hasValue = computed(() => !!this.value() && this.value().length > 0);

  onFocus() {
    this.isFocused.set(true);
    this.focused.emit();
  }

  onBlur() {
    this.isFocused.set(false);
    this.blurred.emit();
  }

  onInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.value.set(val);
    this.valueChange.emit(val);
  }

  clearValue() {
    this.value.set('');
    this.valueChange.emit('');
  }
}
