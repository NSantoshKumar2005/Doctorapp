# 🏥 CareLink - Doctor Management & Healthcare Portal

[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Axios](https://img.shields.io/badge/Axios-HTTP-5A29E4?logo=axios&logoColor=white)](https://axios-http.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, responsive healthcare management web application built with **React 19** and **Vite**. **CareLink** allows patients and administrators to browse specialists, search & filter doctors by department, manage doctor records (Add, Edit, Delete), view comprehensive doctor profiles, and check real-time weather conditions with geolocation integration.

---

## 🌟 Key Features

- **🩺 Doctor Directory & Management (CRUD)**:
  - Browse a rich list of verified doctors and specialists.
  - Add new doctors with name, age, gender, specialization, and consultation fees.
  - Edit existing doctor information or remove profiles with real-time UI synchronization.
  - Centralized state management using React Context API (`DoctorContext`).

- **🔍 Search & Filter**:
  - Instant real-time search by doctor name.
  - Filter specialists by medical domain (e.g., *Bones*, *Muscles*, *Heart*, etc.) using optimized `useMemo`.

- **👤 Doctor Detail Profile**:
  - Dynamic routing with `react-router-dom` (`/doctordetails/:id`).
  - View individual doctor details including specialization, age, gender, and consultation fees.

- **🔐 Protected Routes & Authentication**:
  - Protected route guarding (`/adddoctor`) ensuring only authenticated users can access doctor management.
  - Fast one-click toggle simulation for login/logout in the navigation header.

- **🌦️ Live Weather Integration**:
  - Real-time weather dashboard powered by the Open-Meteo API.
  - Automatic geolocation detection for local weather.
  - City search functionality with live temperature, weather code descriptions, humidity, apparent temperature, and wind speed.

- **📱 Clean, Modern UI & Responsive Layout**:
  - Fast, responsive design crafted with custom CSS.
  - Interactive hero banner, modern card components, and intuitive navigation.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend Library** | [React 19](https://react.dev/) |
| **Build Tool & Dev Server** | [Vite](https://vitejs.dev/) |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) |
| **HTTP Client** | [Axios](https://axios-http.com/) & Fetch API |
| **State Management** | React Context API (`DoctorContext`), `useState`, `useEffect`, `useMemo` |
| **Styling** | Custom CSS3 (Flexbox & Grid responsive design) |
| **External APIs** | REST Backend (`doc-back.onrender.com`), Open-Meteo Weather API |

---

## 📂 Project Structure

```text
doctorapp/
├── public/
├── src/
│   ├── assets/             # Static assets and icons
│   ├── components/
│   │   ├── Addnewdoctor.jsx   # Form to create new doctor profiles
│   │   ├── Doctorcard.jsx     # Reusable card component for doctor listing
│   │   ├── Doctordetails.jsx  # Individual doctor profile view
│   │   ├── Doctorprovider.jsx # React Context Provider for global doctor state
│   │   ├── Home.jsx           # Doctor directory with search & filter
│   │   ├── Navbar.jsx         # Header navigation with auth state
│   │   ├── Protectedroute.jsx # Route protection wrapper
│   │   ├── Section.jsx        # Landing hero banner
│   │   ├── Weather.jsx        # Live weather widget with Open-Meteo API
│   │   ├── styles.css         # Component and layout styling
│   │   └── useCounter.js      # Custom React hook example
│   ├── App.css
│   ├── App.jsx             # Main application component & route configuration
│   ├── index.css           # Base styles & variables
│   └── main.jsx            # Application entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to get a local copy up and running:

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/NSantoshKumar2005/Doctorapp.git
cd Doctorapp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

The application will start locally at `http://localhost:5173/` (or the port specified in terminal).

### 4. Build for Production

To create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Routes & Navigation

| Path | Component | Description | Access |
| :--- | :--- | :--- | :--- |
| `/` | `Section` | Landing page / Hero section | Public |
| `/adddoctor` | `Addnewdoctor` & `Home` | Add doctor form & doctor directory | Protected (Requires Login) |
| `/doctordetails/:id` | `Doctordetails` | Detailed profile of selected doctor | Public |
| `/weather` | `Weather` | Live weather forecast & city search | Public |

---

## 📡 API Reference

- **Doctor Backend API**:
  - `GET /doctors`: Fetch list of all doctors.
  - `POST /doctors`: Create a new doctor entry.
  - `PUT /doctors/:id`: Update existing doctor details.
  - `DELETE /doctors/:id`: Delete a doctor record.
  - Hosted at: `https://doc-back.onrender.com/doctors`

- **Weather API**:
  - Open-Meteo Weather Forecast API: `https://api.open-meteo.com/v1/forecast`
  - Open-Meteo Geocoding API: `https://geocoding-api.open-meteo.com/v1/search`

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
