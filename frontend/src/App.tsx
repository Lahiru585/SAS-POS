import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './apps/auth/pages/Login'
import SuperAdminLayout from './apps/super-admin/layout'
import SuperAdminDashboard from './apps/super-admin/pages/Dashboard'
import CompanyManagement from './apps/super-admin/pages/CompanyManagement'
import Subscriptions from './apps/super-admin/pages/Subscriptions'
import Packages from './apps/super-admin/pages/Packages'
import FeatureToggles from './apps/super-admin/pages/FeatureToggles'
import Billing from './apps/super-admin/pages/Billing'
import Monitoring from './apps/super-admin/pages/Monitoring'
import AuditLogs from './apps/super-admin/pages/AuditLogs'
import UserActivity from './apps/super-admin/pages/UserActivity'
import Settings from './apps/super-admin/pages/Settings'

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
          <Route path="subscriptions" element={<Subscriptions />} />
          <Route path="packages" element={<Packages />} />
          <Route path="features" element={<FeatureToggles />} />
          <Route path="billing" element={<Billing />} />
          <Route path="monitoring" element={<Monitoring />} />
          <Route path="audit-logs" element={<AuditLogs />} />
          <Route path="user-activity" element={<UserActivity />} />
          <Route path="settings" element={<Settings />} />
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
 
