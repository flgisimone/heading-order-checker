# Heading Order Checker

An accessibility tool to detect incorrect heading structure in your React or Vue apps.  
Ensures your headings follow a proper hierarchy (H1 → H2 → H3, etc.), improving SEO and accessibility.

[![npm version](https://img.shields.io/npm/v/heading-order-checker.svg)](https://www.npmjs.com/package/heading-order-checker)
[![License](https://img.shields.io/npm/l/heading-order-checker.svg)](LICENSE)

---

## 🚀 Features
✅ Detect heading hierarchy issues (`h1` to `h6`)  
✅ Framework support: **React** & **Vue 3**  
✅ Easy to integrate  
✅ Custom callback support  
✅ Zero dependencies (core)

---

## 📦 Installation

```bash
npm install heading-order-checker
# or
yarn add heading-order-checker
```
---
## ⚙️ Options

| Option     | Type       | Description                                                                      |
|------------|------------|----------------------------------------------------------------------------------|
| `callback` | `Function` | Custom function to handle warnings or errors.                                    |
| `delay`    | `Number`   | Delay (in ms) for the second check after mount (default: `100ms`). *(React/Vue)* |


## ❗ Example Warning Message

| Type       | Message                                                                                   |
|------------|-------------------------------------------------------------------------------------------|
| ⚠️ Warning | Heading order issue: Found a H4 (`"Subheading"`) after a heading of lower level (H1). |

## 🔨 Usage

### React (with useHeadingOrder)
```bash
import { useHeadingOrder } from 'heading-order-checker/react';

export default function App() {
  useHeadingOrder();

  return (
    <div>
      <h1>Main Heading</h1>
      <h3>This will trigger a warning!</h3>
    </div>
  );
}

Optional: Custom callback

useHeadingOrder({
  callback: (message, context) => {
    console.log('Custom handler:', message, context);
  }
});
```
---
### Vue 3
Use the useHeadingOrder composable to check heading levels in your Vue components.
```bash
<template>
  <h1>Main Heading</h1>
  <h4>This will trigger a warning!</h4>
</template>

<script setup>
import { useHeadingOrder } from 'heading-order-checker/vue';

useHeadingOrder();
</script>

Optional: Custom callback

<script setup>
import { useHeadingOrder } from 'heading-order-checker/vue';

useHeadingOrder({
  callback: (message, context) => {
    console.log('Custom handler:', message, context);
  }
});
</script>
```
---
### Core Function (Vanilla JS)
If you want to run the checker manually in any environment:
```bash
import { checkHeadingOrder } from 'heading-order-checker/core';

checkHeadingOrder(); // logs warnings in the console

Optional: Custom callback

import { checkHeadingOrder } from 'heading-order-checker/core';

checkHeadingOrder({
  callback: (message, context) => {
    console.log('Custom handler:', message, context);
  }
});
```
---
## 📄 License
```bash
MIT ©Giulio Simone Floresta
```