# 🥾 HikeShabab — Full Stack Hiking Reservation System

*HikeShabab* is a full-stack web app built for managing and reserving guided hikes in Jordan.  
It supports both *users* (to explore & reserve hikes) and *admins* (to schedule and manage hikes).

---

## 🌐 Live Stack

| Layer        | Tech Used                     |
|--------------|-------------------------------|
| Frontend     | React (Vite) + React-Bootstrap |
| Backend      | Node.js + Express.js           |
| Database     | PostgreSQL                     |
| Styling      | CSS Modules / Bootstrap        |
| API Requests | Axios                          |
| Weather API  | [WeatherAPI.com](https://weatherapi.com) |

---

## 📁 Project Structure



HikeShabab/
│
├── server/               # Express + PostgreSQL backend
│   ├── routes/           # API route handlers
│   ├── db.js             # DB connection
│   ├── schema.sql        # DB schema (tables)
│   ├── data.sql          # Initial seed data
│   └── index.js          # Main server entry
│
├── client/               # React frontend (Vite)
│   ├── components/       # React components
│   ├── css/              # Component-specific CSS
│   ├── App.jsx           # Main App routing
│   └── main.jsx          # Entry point
│
└── README.md             # You’re here!



---

## 🔐 Authentication & Roles

- Users can sign up, login, view hikes, and reserve.
- Admins can:
  - View dashboard stats.
  - Schedule new hikes.
  - View reservations per hike.
  - Update/delete upcoming hikes.

Auth is stored in *localStorage* for now (JWT optional).

---

## 🧰 Backend Setup

### 1. Navigate to server folder
bash
cd server
`

### 2. Install dependencies

bash
npm install


### 3. Create Database (using pgAdmin or CLI)

bash
CREATE DATABASE hikeshabab;


### 4. Apply Schema & Seed Data

bash
psql -U postgres -d hikeshabab -f schema.sql
psql -U postgres -d hikeshabab -f data.sql


OR use pgAdmin GUI to run both schema.sql and data.sql

### 5. Create .env file
bash
env
DATABASE_URL=postgresql://postgres:0000@localhost:5432/hikeshabab
PORT=3001



### 6. Run the server

bash
npm run dev


Backend runs on:


http://localhost:3001


---

## 💻 Frontend Setup

### 1. Navigate to client folder

bash
cd client


### 2. Install dependencies

bash
npm install


### 3. Add .env file (for weather)

env
VITE_WEATHER_API_KEY=your_weatherapi_key


### 4. Run React App

bash
npm run dev


Runs on:


http://localhost:5173


---

## 🔗 API Endpoints

### 🧍 Auth

| Method | Endpoint         | Description     |
| ------ | ---------------- | --------------- |
| POST   | /api/auth/signup | Create new user |
| POST   | /api/auth/login  | Login user      |

---

### 🥾 Hikes

| Method | Endpoint        | Description                  |
| ------ | --------------- | ---------------------------- |
| GET    | /api/hikes      | All upcoming hikes           |
| GET    | /api/hikes/\:id | Hike details by schedule\_id |

---

### 📆 Reservations

| Method | Endpoint                      | Description                  |
| ------ | ----------------------------- | ---------------------------- |
| POST   | /api/reservations             | Reserve a hike               |
| GET    | /api/reservations/\:userId    | User’s upcoming reservations |
| DELETE | /api/reservations/delete/\:id | Cancel a reservation         |

---

### ⚙ Admin Only

| Method | Endpoint                                   | Description                   |
| ------ | ------------------------------------------ | ----------------------------- |
| GET    | /api/admin/stats                           | View dashboard stats          |
| POST   | /api/admin/                                | Add new hike schedule         |
| GET    | /api/admin/hike-schedule/all               | All scheduled hikes           |
| PUT    | /api/admin/\:id                            | Update hike schedule          |
| DELETE | /api/admin/\:id                            | Delete hike schedule          |
| GET    | /api/admin/hike-schedule/\:id/reservations | Get hike reservations (users) |

> ✅ All admin endpoints use a custom adminAuth middleware with x-role header.

---

## ✅ Features

* Responsive homepage with hero & cards
* Live weather data in Hike Details
* Login required to reserve
* View + cancel your reservations (MyHikes)
* Admin can manage hike schedules
* Conditional navbar with logout
* Uses Vite + React Bootstrap

---

## 🧪 Sample Test Users


Email: user1@example.com
Password: 123456

Email: admin@hikeshabab.com
Password: admin


---



## 📄 License

MIT © 2025 HikeShabab Project


