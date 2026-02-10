# Janamitra - Centralized Panchayat Management System

> **Note:** This is a student prototype / demonstration project and not an official government website.

**Janamitra** is a comprehensive web-based solution designed to digitize and streamline operations for Grama Panchayats. It acts as a bridge between citizens and local governance, ensuring transparency, accessibility, and efficient service delivery.

## 🚀 Key Features

### For Citizens
*   **Easy Access**: Login using EPIC ID (Voter ID) to access personalized panchayat data.
*   **Schemes & Benefits**: Browse available government schemes, check eligibility, and track applications.
*   **Project Monitoring**: View ongoing infrastructure projects in the ward with real-time progress bars and budget details.
*   **RTI & Complaints**: File Right to Information requests or register complaints directly through the portal.
*   **Digi-Sabha**: Participate in virtual Grama Sabhas and view meeting minutes.
*   **Panchayat Hierarchy**: View contact details of the President, Secretary, and Ward Members.

### For Administrators
*   **Admin Dashboard**: Overview of population stats, active projects, and pending complaints.
*   **Project Management**: Add, update, and manage development projects with budget and timeline tracking.
*   **Constraint Management**: Status updates for RTI requests and citizen complaints.
*   **Data Visualization**: Graphical representation of fund utilization and project completion rates.

## 🛠️ Technology Stack

*   **Frontend**: HTML5, CSS3
*   **Design System**: **UX4G** (User Experience for Government of India) guidelines for a clean, accessible, and official look.
*   **Scripting**: Vanilla JavaScript (ES6+) for logic and DOM manipulation.
*   **Data Storage**: Browser `localStorage` and `sessionStorage` (Simulates a backend database for demonstration).
*   **Responsive Design**: Mobile-first approach ensuring compatibility across Desktops, Tablets, and Mobile devices.

## 📂 Project Structure

```
Janamitra/
├── index.html              # Landing Page (Home)
├── css/
│   └── style.css           # Global styles & UX4G variables
├── js/
│   ├── database.js         # Mock database with sample Panchayat/Citizen data
│   └── app.js              # Core application logic (Auth, Session, UI Rendering)
├── pages/
│   ├── login.html          # Authentication Portal
│   ├── dashboard.html      # Citizen Dashboard
│   ├── hierarchy.html      # Leadership & Members List
│   ├── projects.html       # Development Projects Tracking
│   ├── schemes.html        # Government Schemes List
│   ├── rti_complaints.html # Grievance Redressal
│   ├── digi_sabha.html     # Virtual Meetings
│   ├── admin_dashboard.html # Admin Control Panel
│   └── ...                 # Other Management Pages
└── assets/                 # Images and Icons
```

## ⚡ How to Run

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Shanin-Raj/Janamitra.git
    ```
2.  **Open the Application**
    *   Navigate to the project folder.
    *   Open `index.html` in any modern web browser (Chrome, Edge, Firefox).

## 🔑 Demo Credentials

To explore the application, you can use the following mock credentials included in `js/database.js`:

**Citizen Login:**
*   **EPIC ID**: `KLF9034101` (Belongs to Ward 1, Athiyal Thuruthu Panchayat)

**Admin Login:**
*   **Admin ID**: `ADM001` (Admin for Athiyal Thuruthu Panchayat)

## 📱 Responsive & Mobile Ready
The application is fully responsive. You can test it on your mobile device or by using DevTools to toggle device simulation.

---
*Developed as a college project to demonstrate e-Governance capabilities.*
