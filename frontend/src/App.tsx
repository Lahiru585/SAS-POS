import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './apps/auth/pages/Login'
import SuperAdminLayout from './apps/super-admin/layout'
import SuperAdminDashboard from './apps/super-admin/pages/Dashboard'
import CompanyManagement from './apps/super-admin/pages/CompanyManagement'

import TenantLayout from './apps/tenant/layout'
import TenantDashboard from './apps/tenant/pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Route */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Navigate to="/" replace />} />

        {/* Super Admin Routes */}
        <Route path="/super-admin" element={<SuperAdminLayout />}>
          <Route path="dashboard" element={<SuperAdminDashboard />} />
          <Route path="companies" element={<CompanyManagement />} />
          <Route index element={<Navigate to="dashboard" replace />} />
        </Route>

        {/* Tenant Routes */}
        <Route path="/tenant" element={<TenantLayout />}>
          <Route path="dashboard" element={<TenantDashboard />} />
          <Route index element={<Navigate to="dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
 
