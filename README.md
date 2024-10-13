# eStore 

## Project Overview

This project is a React-based e-commerce website that connects to the Noroff API to display products, manage a shopping cart, and handle user interactions such as searching for items, adding products to the cart, and checking out. The application is responsive and uses React Router for page navigation.
### Pages Built
1. Homepage:
   - Displays a list of all products from the API.
   - Includes a look-ahead search bar to filter products as the user types.
   - Each product card links to its individual product page.

2. Individual Product Page:
   - Shows detailed information about a selected product (title, description, image, price).
   - Displays any available reviews.
   - Shows discounted price (if applicable) and the calculated discount percentage.
   - Includes an "Add to Cart" button to add the product to the shopping cart.

3. Cart Page:
   - Displays a list of items added to the cart along with their prices.
   - Includes a "Checkout" button that directs the user to the checkout success page.

4. Checkout Success Page:
   - Displays a confirmation message when an order is completed.
   - Provides a link to return to the store.
   - Clears the shopping cart after a successful order.

5. Contact Page:
 
   - Full Name (minimum 3 characters, required)
   - Subject (minimum 3 characters, required)
   - Email (valid email format, required)
   - Message Body (minimum 3 characters, required)
   - Logs form data to the console once validation is successful.

## Key Features

   - Product Search: Look-ahead search bar on the homepage that filters products in real-time.
   - Dynamic Product Page: Each product has its own page, fetched dynamically from the API using React Router.
   - Cart Functionality: Add products to a cart, view the cart, and complete the checkout process.
   - Responsive Design: The website is fully responsive, providing a smooth experience on both desktop and mobile devices.

## Technologies Used
   - Vite.
   - CSS Framework: Bootstrap.
   - Noroff API v2.
   -Netlify for deployment

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MusaabAbdalla/eStore.git
   ```

2. Install the dependencies:
   ```bash
   npm i 
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
