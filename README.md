## Add tailwindcss
[how-to-install-tailwindcss-in-react/](https://www.freecodecamp.org/news/how-to-install-tailwindcss-in-react/)

### Install dependencies
```bash
yarn add tailwindcss postcss autoprefixer
```
### Initialize tailwindcss
```bash
npx tailwindcss init -p
```
### Configure Source
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // add line
    "./src/**/*.{js,ts,jsx,tsx}",  // add line
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
### Add Tailwind Directives to Your CSS
Add lines in ./src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```