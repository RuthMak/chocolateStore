# React-ive Chocolate Candy Boxes

## How components are wired together

- **App**: The top-level component. It imports the candy data and renders a header plus the `CandyContainer`.
- **CandyContainer**: Receives the full candy array as a prop, loops over it, and renders a `CandyCard` for each candy.
- **CandyCard**: Displays the candy image, name, and a "View Calories" button. When clicked, it opens a `CandyModal` (by lifting the selected candy up via state passed from `CandyContainer` or by local state per card, this project uses **local state per card** for simplicity and independence).
- **CandyModal**: A reusable modal component that shows calories, description, and ingredients for a given candy. It receives `open`, `onClose`, and `candy` props from `CandyCard`.

### Data flow
`App` → `CandyContainer` (prop: candies) → `CandyCard` (prop: candy) → `CandyModal` (props: open, onClose, candy)

### Styling
- Basic responsive grid in `App.css`
- Modal is pure CSS + React (no external libraries)

### Images
Place the supplied images in `public/images/` with these filenames:
- plain.jpg, plaindark.jpg, darkmilk.jpg, nutbutter.jpg, baileys.jpg, rum.jpg, orange.jpg, coffeecup.jpg, pistachio.jpg, toffee.jpg

