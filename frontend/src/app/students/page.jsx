import Link from 'next/link';
import StudentTable from '../../components/StudentTable';

export default function StudentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-semibold text-slate-800 hover:text-slate-600 transition-colors duration-200">
                Student Management System
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/students"
                className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 bg-slate-100"
              >
                View Students
              </Link>
              <Link
                href="/students/add"
                className="bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Add Student
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Students</h1>
          <p className="text-slate-600">Manage all student records in one place</p>
        </div>
        
        <StudentTable />
      </main>
    </div>
  );
}
