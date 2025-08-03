# Comfort Store - E-commerce App

_Live Demo: [Comfort Store](https://comfort-ecomm.netlify.app/)_

## 📌 Overview

A full-featured e-commerce platform with modern React architecture, featuring:

- Product catalog with filters
- Shopping cart functionality
- User authentication flow
- Order management system
- Responsive UI with dark/light mode

## 🛠 Tech Stack

### Frontend

| Technology             | Purpose          |
| ---------------------- | ---------------- |
| React 18               | UI Components    |
| Vite                   | Build Tool       |
| Tailwind CSS + DaisyUI | Styling          |
| Redux Toolkit          | State Management |
| React Router 6         | Navigation       |
| React Query            | Data Fetching    |
| Axios                  | HTTP Client      |

### Backend

- Strapi Headless CMS (REST API)

## 🔌 API Integration

### Endpoints

#### Products

| Endpoint            | Method | Description        | Parameters                                             |
| ------------------- | ------ | ------------------ | ------------------------------------------------------ |
| `/api/products`     | GET    | Get all products   | `featured`, `category`, `company`, `price`, `shipping` |
| `/api/products/:id` | GET    | Get single product | -                                                      |

#### Authentication

| Endpoint               | Method | Description       | Body                            |
| ---------------------- | ------ | ----------------- | ------------------------------- |
| `/auth/local/register` | POST   | User registration | `username`, `email`, `password` |
| `/auth/local`          | POST   | User login        | `identifier`, `password`        |

#### Orders

| Endpoint  | Method | Description      | Headers                         |
| --------- | ------ | ---------------- | ------------------------------- |
| `/orders` | GET    | Get user orders  | `Authorization: Bearer <token>` |
| `/orders` | POST   | Create new order | `Authorization: Bearer <token>` |

### Project Structure

- src/
  ├── components/ # Reusable UI components
  │  
  ├── features/ # Redux slices
  │ ├── cart/
  │ └── user/
  ├── pages/ # Route components
  │ ├── About/
  │ ├── Cart/
  │ ├── Checkout/
  | ├── Error/
  | ├── Home/
  | ├── Landing/
  | ├── Login/
  | ├── Register/
  | ├── Register/
  | ├── Orders/
  | ├── Products/
  | ├── Product/:id/

├── utils/ # Helper functions # Formatting utils
└── store.js # Redux store
