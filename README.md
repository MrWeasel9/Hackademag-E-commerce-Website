

# Hackademag E-commerce React Project

This is a React-based e-commerce application for a shoe store. The application features a product listing page with search and filter functionality, a cart system, and various interactive UI elements.

## Screenshot

![image](https://github.com/MrWeasel9/Hackademag-E-commerce-Website/assets/47690910/d6ba130e-cba7-47e9-a24e-ed72b01a6a18)

## Features

- Product listing with search and filter capabilities.
- Add products to the cart with quantity tracking.
- Clear the cart functionality.
- Responsive navigation bar with search input and cart display.
- Interactive UI components.

## Technologies Used

- React
- TypeScript
- CSS


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/shoe-store.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Hackademag
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Components

### App.tsx

The main component that manages the state and renders other components such as `Sidebar`, `Navigation`, `Recommended`, and `Products`.

### Nav.tsx

The navigation bar component that includes the logo, search input, profile icons, and cart icon with a tooltip displaying the cart items.

### Card.tsx

A component that displays individual product details including image, title, rating, reviews, and prices. It also includes an `onClick` event to add items to the cart.

### Product.tsx

A component that renders the list of products passed as props.

### ProductInterface.tsx

Defines the `Product` interface which specifies the structure of a product object.

### Sidebar.tsx

A component that handles category selection for filtering products.

### Recommended.tsx

A component that displays recommended products.

## Data

### data.tsx

Contains the mock data for the products listed in the store.

## Usage

- **Search Products**: Use the search input in the navigation bar to find products by title.
- **Filter Products**: Select categories from the sidebar to filter products.
- **Add to Cart**: Click on a product card to add it to the cart. The cart counter will update accordingly.
- **View Cart**: Hover over the cart icon to see the list of added items and their quantities.
- **Clear Cart**: Use the "Clear Cart" button to remove all items from the cart.

