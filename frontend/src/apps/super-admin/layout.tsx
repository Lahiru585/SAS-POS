import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Building2, 
  CreditCard, 
  Package, 
  ToggleLeft, 
  Receipt, 
  Activity, 
  FileText, 
  MousePointerClick, 
  Settings, 
  LogOut, 
  Bell 
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function SuperAdminLayout() {
  const location = useLocation()
  const navigate = useNavigate()

  const navigation = [
    { name: 'Dashboard', href: '/super-admin/dashboard', icon: LayoutDashboard },
    { name: 'Companies & Tenants', href: '/super-admin/companies', icon: Building2 },
    { name: 'Subscriptions', href: '/super-admin/subscriptions', icon: CreditCard },
    { name: 'Packages', href: '/super-admin/packages', icon: Package },
    { name: 'Feature Toggles', href: '/super-admin/features', icon: ToggleLeft },
    { name: 'Billing', href: '/super-admin/billing', icon: Receipt },
    { name: 'System Monitoring', href: '/super-admin/monitoring', icon: Activity },
    { name: 'Audit Logs', href: '/super-admin/audit-logs', icon: FileText },
    { name: 'User Activity', href: '/super-admin/user-activity', icon: MousePointerClick },
    { name: 'Settings', href: '/super-admin/settings', icon: Settings },
  ]

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 border-r bg-white dark:bg-slate-900 z-50 flex flex-col">
        <div className="flex h-16 items-center px-6 border-b shrink-0">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900 dark:text-white">
            <div className="h-8 w-8 rounded-lg bg-slate-900 dark:bg-white flex items-center justify-center">
              <span className="text-white dark:text-slate-900 text-lg font-black">C</span>
            </div>
            CloudShift <span className="text-slate-500 font-medium">POS</span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-1">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-2">Super Admin</div>
          {navigation.map((item) => {
            const isActive = location.pathname.startsWith(item.href)
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400 shrink-0',
                  isActive 
                    ? 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-white'
                )}
              >
                <item.icon className={cn('h-4 w-4', isActive ? 'text-slate-900 dark:text-white' : 'text-slate-500')} />
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-slate-100 dark:border-slate-800 shrink-0">
          <button 
            onClick={() => navigate('/login')}
            className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white w-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400"
          >
            <LogOut className="h-4 w-4 text-slate-500" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 pl-64 flex flex-col min-h-screen">
        <header className="h-16 border-b bg-white/50 backdrop-blur-sm dark:bg-slate-900/50 sticky top-0 z-40 px-8 flex items-center justify-end">
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 relative focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400 rounded-full">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-slate-900 dark:bg-white"></span>
            </button>
            <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"></div>
          </div>
        </header>

        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
