import { Outlet, Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Building2, Settings, LogOut, Bell } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function SuperAdminLayout() {
  const location = useLocation()

  const navigation = [
    { name: 'Dashboard', href: '/super-admin/dashboard', icon: LayoutDashboard },
    { name: 'Companies', href: '/super-admin/companies', icon: Building2 },
    { name: 'Settings', href: '/super-admin/settings', icon: Settings },
  ]

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 border-r bg-white dark:bg-slate-900 z-50">
        <div className="flex h-16 items-center px-6 border-b">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900 dark:text-white">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <span className="text-white text-lg font-black">C</span>
            </div>
            CloudShift <span className="text-blue-600">POS</span>
          </div>
        </div>

        <nav className="flex flex-col gap-1 p-4">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-2">Super Admin</div>
          {navigation.map((item) => {
            const isActive = location.pathname.startsWith(item.href)
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm font-medium',
                  isActive 
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300' 
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                )}
              >
                <item.icon className={cn('h-4 w-4', isActive ? 'text-blue-600 dark:text-blue-400' : '')} />
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-100 dark:border-slate-800">
          <button className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 w-full">
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 pl-64 flex flex-col min-h-screen">
        <header className="h-16 border-b bg-white/50 backdrop-blur-sm dark:bg-slate-900/50 sticky top-0 z-40 px-8 flex items-center justify-end">
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500"></span>
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
