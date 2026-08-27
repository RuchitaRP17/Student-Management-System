# Student Management System

A full-stack web application built with Next.js (Frontend) and Node.js + Express + MongoDB (Backend) for managing student records with complete CRUD operations.

## 🚀 Features

- **Add Students**: Create new student records with comprehensive information
- **View Students**: Display all students in a clean, responsive table
- **Edit Students**: Update existing student information
- **Delete Students**: Remove student records with confirmation
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, subtle design with smooth animations

## 🛠️ Tech Stack

### Backend
- **Node.js** with **Express.js**
- **MongoDB** with **Mongoose**
- RESTful API design
- Input validation and error handling

### Frontend
- **Next.js 15** (App Router)
- **TailwindCSS** for styling
- **Axios** for API calls
- **JavaScript** (no TypeScript)
- Responsive design with subtle animations

## 📋 Prerequisites

- Node.js (v18 or higher)
- MongoDB (running locally on port 27017)
- npm or yarn

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd MiniPro_DBMS
```

### 2. Backend Setup

```bash
cd Backend
npm install
npm run dev
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:3000`

### 4. Database Setup

Make sure MongoDB is running locally. The application will automatically connect to:
- Database: `student_management`
- Connection: `mongodb://localhost:27017/student_management`

## 📁 Project Structure

```
MiniPro_DBMS/
├── Backend/
│   ├── config/
│   │   └── db.js              # Database connection
│   ├── models/
│   │   └── Student.js         # Student schema
│   ├── routes/
│   │   └── studentRoutes.js   # API routes
│   ├── app.js                 # Express app configuration
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── students/
│   │   │   │   ├── page.jsx           # View all students
│   │   │   │   ├── add/
│   │   │   │   │   └── page.jsx       # Add student form
│   │   │   │   └── edit/
│   │   │   │       └── [id]/
│   │   │   │           └── page.jsx   # Edit student form
│   │   │   ├── page.jsx               # Home page
│   │   │   └── layout.jsx             # Root layout
│   │   └── components/
│   │       ├── StudentTable.jsx       # Student table component
│   │       └── StudentForm.jsx        # Student form component
│   └── next.config.js                 # Next.js configuration
└── README.md
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/students` | Get all students |
| GET | `/api/students/:id` | Get student by ID |
| POST | `/api/students` | Create new student |
| PUT | `/api/students/:id` | Update student |
| DELETE | `/api/students/:id` | Delete student |

## 📊 Student Schema

```javascript
{
  name: String (required, max 100 chars)
  rollNo: Number (required, unique, positive)
  course: String (required, max 100 chars)
  email: String (required, unique, valid email)
  phone: String (required, 10 digits)
  createdAt: Date (auto-generated)
  updatedAt: Date (auto-generated)
}
```

## 🎨 Design Features

- **Subtle Colors**: Uses slate color palette for a professional look
- **Smooth Animations**: Hover effects, transitions, and loading states
- **Responsive Layout**: Mobile-first design that works on all screen sizes
- **Clean Typography**: Modern font stack with proper hierarchy
- **Interactive Elements**: Buttons with hover states and form validation

## 🚀 Usage

1. **Home Page**: Navigate to `http://localhost:3000` to see the welcome page
2. **View Students**: Click "View Students" to see all student records
3. **Add Student**: Click "Add Student" to create a new student record
4. **Edit Student**: Click "Edit" in the student table to modify a record
5. **Delete Student**: Click "Delete" in the student table to remove a record

## 🔧 Development

### Backend Development
```bash
cd Backend
npm run dev  # Uses nodemon for auto-restart
```

### Frontend Development
```bash
cd frontend
npm run dev  # Uses Next.js dev server with hot reload
```

## 📝 Notes

- The frontend uses proxy configuration to communicate with the backend
- No CORS setup required due to proxy configuration
- All form inputs include validation
- Error handling is implemented throughout the application
- The design is fully responsive and accessible

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
