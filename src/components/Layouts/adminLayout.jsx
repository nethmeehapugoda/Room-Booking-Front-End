"use client";

import Sidebar from "@/components/ui/Sidebar.jsx";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        {/* Topbar could go here later */}
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;