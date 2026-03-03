# 📘 `nc-text` Angular Component

`nc-text` is a **standalone** Angular input component built using **Angular 17+ signal-based APIs**. It provides a flexible text input with support for labels, hints, validation messages, icons, and reactive two-way binding.

***

## 🚀 Features

- ✅ **Signal-based Inputs/Outputs** (Angular 17+ syntax)
- 🔁 **Two-way data binding** using `model()`
- 💡 **Customizable label, hint, and error message**
- 🔒 **Disabled state support**
- 🧹 **Clearable input with optional clear icon**
- 🖼️ **Prefix icon support** (`search`, `user`, `mail`, or custom)
- ⚡ **Events for focus, blur, and value changes**
- 📏 **Optional maxLength constraint**

***

## 🧩 Usage

### 1. Import the Component

Since `nc-text` is standalone, you can directly import it into your component:

```ts
import { Component } from '@angular/core';
import { Text } from './text'; // Adjust path as necessary

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [Text],
  template: `
    <nc-text
      [label]="'Username'"
      [placeholder]="'Enter your name'"
      [required]="true"
      [clearable]="true"
      [prefixIcon]="'user'"
      [(value)]="username"
      (focused)="onFocus()"
      (blurred)="onBlur()"
      (valueChange)="onValueChange($event)"
    ></nc-text>
    <p>Current value: {{ username }}</p>
  `
})
export class ExampleComponent {
  username = '';

  onFocus() {
    console.log('Input focused');
  }

  onBlur() {
    console.log('Input blurred');
  }

  onValueChange(value: string) {
    console.log('Value changed:', value);
  }
}
```


***

## ⚙️ API Reference

### Inputs

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| `label` | `string` | `'Label'` | Text label for the input field. |
| `placeholder` | `string` | `''` | Placeholder text inside the input. |
| `hint` | `string` | `''` | Displayed helper text below the input. |
| `errorMessage` | `string` | `''` | Shown when validation fails. |
| `disabled` | `boolean` | `false` | Disables user interaction. |
| `clearable` | `boolean` | `true` | Shows a clear button when input has value. |
| `prefixIcon` | `string` | `''` | Optional icon name before input (`'search'`, `'user'`, `'mail'`, etc.). |
| `maxLength` | `number \| null` | `null` | Limits number of characters allowed. |
| `inputId` | `string` | Auto-generated | Unique identifier for the input element. |
| `required` | `boolean` | `false` | Marks input as required. |


***

### Model (Two-way Binding)

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| `value` | `string` | `''` | The input’s bound value; can be two-way bound via `[(value)]`. |


***

### Outputs

| Name | Type | Description |
| :-- | :-- | :-- |
| `valueChange` | `EventEmitter<string>` | Emits when the user types or clears input. |
| `focused` | `EventEmitter<void>` | Emits when the input gains focus. |
| `blurred` | `EventEmitter<void>` | Emits when the input loses focus. |


***

## 🎨 Template and Styling

- **Template:** `text.html`
- **Styles:** `text.css`

You can customize layout, colors, and spacing via the CSS file. For consistency, align styles with your design system or component library.

***

## 🧠 Internal Logic

- Uses **Angular’s `signal`, `input`, `model`, `output`, and `computed` APIs** for reactive data flow.
- Tracks internal states:
    - `isFocused`: when input is active
    - `hasValue`: dynamically computed based on `value()`

Example logic snippet:

```ts
hasValue = computed(() => !!this.value() && this.value().length > 0);
```


***

## 💡 Example Use Case

Use `nc-text` in forms, search bars, or user input fields where clearable and dynamic behavior is desired.

***

