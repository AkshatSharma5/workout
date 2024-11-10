# 🏋️ Workout Marketplace

A comprehensive workout platform where users can browse and purchase gym/workout products, manage workouts, and make secure payments through Stripe.<br/>
The platform's backend is powered by **Node.js**, **Express.js**, and **MongoDB**, while the frontend is built using **React.js**, **TailwindCSS**, and **ContextAPI**.<br/>
> [!IMPORTANT]
> Since, I don't have StripeJS Subscription, so payments can't be done in prod-mode, while the dev-mode supports it fine! ✨
> <b>The site is live [here](https://mern-workout-app.netlify.app/)!</b>

## ✨ Key Features

- **🏋️‍♂️ Workout Management**: 
  - Create, update, and delete workout routines.
  - Workouts are stored in MongoDB for persistent data storage.
  
- **🛍️ Marketplace**:
  - Explore a wide range of fitness products.
  - Complete purchases via Stripe integration.
  
- **💳 Stripe Payment Gateway**:
  - Integrated for smooth and secure payment processing.
  - Supports real-time payment verification and error handling.

- **⚡ Fast and Responsive UI**:
  - The frontend, built with **React.js** and **TailwindCSS**, offers a mobile-first, responsive, and modern user interface.
  
- **🌐 RESTful API**:
  - A robust API built with **Node.js** and **Express.js** to handle all workout and payment-related requests.
  
- **💾 State Management**:
  - ContextAPI is used for global state management, providing a seamless and unified experience across the app.

## 🛠️ Tech Stack

### Backend
- **Node.js**: Fast and scalable JavaScript runtime for building the API.
- **Express.js**: Web framework for handling routes, requests, and responses.
- **MongoDB**: NoSQL database for flexible data storage of workout routines and marketplace products.

### Frontend
- **React.js**: JavaScript library for building dynamic, component-based UIs.
- **TailwindCSS**: Utility-first CSS framework for responsive design.
- **ContextAPI**: For state management across the app's components.
- **Stripe.js**: Payment processing library integrated for seamless transactions.

---

## 📸 Project Mutimedia

### Screenshots:
<img src="https://github.com/user-attachments/assets/25fe89b5-5f34-4dc9-b583-d5044a579bd8" width="85%"/>
<img src="https://github.com/user-attachments/assets/fa371742-d32d-476b-920c-0a6ec8613941" width="85%"/>
<img src="https://github.com/user-attachments/assets/6f0c472c-9a97-4a0a-ade0-f02e4c371a5a" width="85%"/>
<img src="https://github.com/user-attachments/assets/a2906c55-92ed-4197-87dc-2560db3dba9f" width="87%"/>
<img src="https://github.com/user-attachments/assets/bbf00d9b-261c-4950-a99f-74d8709855f4" width="80%"/>


### Video Tutorial:
<a href="https://youtu.be/-6vHfLjCO4g" target="_blank"><img src="https://github.com/user-attachments/assets/1ec7ffb8-8875-4a42-b292-4c414d2d10da" width="50px" height="50px"/></a>

---


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
* backend/ (Node.js + Express + MongoDB)
* frontend/ (React + TailwindCSS + Context API)
  
---

## 🚀 Getting Started

### Prerequisites

- Node.js
- MongoDB (local or cloud instance)

### Installation

Follow these steps to set up the project on your local machine.

#### 1. Clone the repository
```bash
git clone [https://github.com/AkshatSharma5/workout-marketplace.git](https://github.com/AkshatSharma5/workout/)
cd workout
```
#### 2. Set up the Backend
```bash
cd backend
npm install
npm start
```
> [!NOTE]
> One may start backend at http://localhost:3500 (or your configured port in .env file)
#### 3. Set up the Frontend
```bash
cd frontend
npm install
npm start
```
> [!NOTE]
> One may start frontend at http://localhost:3000 (or your configured port in .env file)

## ⚙️ Configuration
### Backend Environment Variables: 
Create a .env file in the backend/ folder and add the following:
```bash
PORT=3500
MONGODB_URI=your_mongodb_uri
STRIPE_SECRET_KEY=your_stripe_secret_key
```
> [!TIP]
> To test locally, one needs to have the API Keys of MongoDB and Stripe
---
## 🔨 Deployment
The site is successfully hosted at Netlify where the backend server is deployed on <i>Render</i> and frontend on <i>Netlify</i> <b>offering secure HTTPS connection</b>
🔗The site is live [here](https://mern-workout-app.netlify.app/)!


## 📝 Future Enhancements

- **User Authentication:** Allow users to create accounts and manage their workout history.
- **Order History:** Display past purchases and transaction details.
- **Enhanced Product Search:** Implement search and filter options for easier browsing.
- **Product Reviews:** Enable users to review and rate products.

---

## 🤝 Contributing

- Contributions, issues, and feature requests are welcome!
- Feel free to check the [issues page](https://github.com/your-username/workout-marketplace/issues) if you want to contribute.

---

## 📬 Contact
If anyone has any issues regarding my project, they can contact me here.
- [My LinkedIn🌐](https://www.linkedin.com/in/akshat-sharma-7914a7250/)
- [My Github :octocat:](https://github.com/AkshatSharma5/)
- [Mail📧](akshatgopal70@gmail.com)
