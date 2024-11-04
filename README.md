# Workout Marketplace

## 🏋️ Overview
This project is a full-stack application built to manage a marketplace for gym and workout-related products. Users can browse the store, add/remove products to their cart, and complete purchases using Stripe for payment integration. Additionally, users can add and remove workouts, all powered by MongoDB and Node.js on the backend, with React.js and TailwindCSS on the frontend for a sleek and responsive UI.

## 🛠️ Features
- **Marketplace:** Users can view and purchase gym/workout products.
- **Payment Integration:** Stripe.js is integrated to handle payments securely.
- **Workouts Management:** Add, edit, and remove workouts using MongoDB and Express.js.
- **State Management:** Context API is used for global state management in the frontend.
- **Modern UI/UX:** Styled with TailwindCSS for a responsive and minimalistic design.

---
## 📷 Tutorial
### Screenshots
![image](https://github.com/user-attachments/assets/2f128981-1e5a-4cd2-a65a-22a5e912ffdd)
![image](https://github.com/user-attachments/assets/51a4595d-8826-42f0-8ee0-ef263f59c7d2)
![image](https://github.com/user-attachments/assets/98adb02f-6f2d-4239-872a-c0c7accb4217)
(Check for incorrect input(s))
![image](https://github.com/user-attachments/assets/ec8a01cc-5fd8-4e29-b166-869c3fe437a4)
![image](https://github.com/user-attachments/assets/129af930-1c61-4be6-9c7b-e06dd3a7551e)
![image](https://github.com/user-attachments/assets/3d2d730a-92e5-4647-ab06-226305a70df0)
![image](https://github.com/user-attachments/assets/927a2e14-241c-4f30-9ef1-9a8f9931999a)


### Video Tutorial
[![Watch the video]](https://youtu.be/-6vHfLjCO4g)


## 🚀 Tech Stack

| **Technology**      | **Purpose**                |
|---------------------|----------------------------|
| Node.js             | Backend runtime            |
| Express.js          | Web framework for backend  |
| MongoDB             | NoSQL database             |
| React.js            | Frontend library           |
| Tailwind CSS        | Styling framework          |
| Context API         | State management           |
| Stripe.js           | Payment processing         |

---

## 📂 Project Structure
1. backend/ (Node.js + Express + MongoDB + StripeJS)
2. frontend/ (React + TailwindCSS + Context API)
   
---

## 🚀 Getting Started - Installation and Setup

### Prerequisites

- Node.js
- MongoDB (local or cloud instance)

### Installation

Follow these steps to set up the project on your local machine.

#### 1. Clone the repository
```bash
git clone https://github.com/AkshatSharma5/workout.git
cd workout
```
#### 2. Set up the Backend
```bash
cd backend
npm install
npm start
```
> [!NOTE]
> The backend will start at http://localhost:3500 (or your configured port).

#### 3. Set up the Frontend
```bash
cd frontend
npm install
npm start
```
> [!NOTE]
> The frontend will start at http://localhost:3000 (or your configured port).

## API Endpoints
### Workouts
* GET: /api/workouts - Fetch all workouts.
* POST: /api/workouts - Add a new workout.
* DELETE: /api/workouts/:id - Remove a workout by ID.
### Products
* GET: /api/products - Fetch all products.
* POST: /api/products - Add a new product (for admin).
* DELETE: /api/products/:id - Remove a product by ID (for admin).
### Stripe Payments
* POST: /api/checkout - Process payment using Stripe.

## ⚙️ Configuration
Generate your own Stripe API Keys
- **Backend Environment Variables:** Create a `.env` file in the `backend/` folder and add the following:
    ```bash
    PORT=3500
    MONGODB_URI=your_mongodb_uri
    STRIPE_SECRET_KEY=your_stripe_secret_key
    ```

- **Frontend Environment Variables:** Create a `.env` file in the `frontend/` folder and add the following:
    ```bash
    REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
    ```

---

## 📝 Future Enhancements

- **User Authentication:** Allow users to create accounts and manage their workout history.
- **Order History:** Display past purchases and transaction details.
- **Enhanced Product Search:** Implement search and filter options for easier browsing.
- **Product Reviews:** Enable users to review and rate products.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/workout-marketplace/issues) if you want to contribute.

---

## 📬 Contact

- Created by Akshat Sharma [LinkedIn](https://www.linkedin.com/in/akshat-sharma-7914a7250/) - feel free to reach out!
- Github: [AkshatSharma5](github.com/AkshatSharma5)
- Email me [here](akshatgopal70@gmail.com)


