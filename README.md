#  QuickHire – Job Portal (MERN Stack)

QuickHire is a modern full-stack Job Portal web application where companies or HR managers can post jobs and candidates can explore available opportunities.

This project was built using the **MERN Stack (MongoDB, Express.js, React, Node.js)** with a pixel-perfect frontend UI created from Figma design.

---

##  Project Features

###  Job Seeker

* View featured jobs
* Browse latest job listings
* View job details
* Explore jobs by category
* Responsive modern UI

###  Admin / HR Panel

* Create new job postings
* Delete jobs
* Manage available job listings

---

##  Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* DaisyUI
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* REST API Architecture

---

##  Project Structure

```
QuickHire/
│
├── frontend/        → React + Vite Client
└── backend/         → Express API Server
```

---

##  Environment Variables

Backend uses environment variables stored inside a `.env` file.

Create a `.env` file inside the **backend** folder:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Example:

```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name
```

Never share your real database credentials publicly.

---

##  How to Run Locally

### 1️⃣ Clone the Repository

```
git clone <your-repository-link>
cd QuickHire
```

---

### 2️⃣ Setup Backend

```
cd backend
npm install
```

Create `.env` file (see above).

Run backend server:

```
npm run dev
```

Backend will run on:

```
http://localhost:5000
```

---

### 3️⃣ Setup Frontend

Open another terminal:

```
cd frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 🔌 API Endpoints

### Jobs

```
GET    /api/jobs
GET    /api/jobs/:id
POST   /api/jobs
DELETE /api/jobs/:id
```

---

##  Testing API

You can test backend APIs using:

* Postman
* Thunder Client
* Browser (GET requests)

Example:

```
http://localhost:5000/api/jobs
```

---

##  Project Goal

The goal of this project is to demonstrate:

* REST API development
* Full-stack integration
* Database design
* Clean UI implementation from Figma
* Real-world MERN workflow

---

##  Author

Developed by **Md Tayyab**

---

##  Future Improvements

* Authentication system (JWT)
* Admin role protection
* Job application system
* Search & filtering
* Deployment (Render / Vercel)

---

If you like this project, feel free to give it a star!
