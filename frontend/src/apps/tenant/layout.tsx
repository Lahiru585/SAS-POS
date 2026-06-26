import { Outlet, Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, ShoppingCart, Package, Users, Settings, LogOut, Search } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function TenantLayout() {
  const location = useLocation()

  const navigation = [
    { name: 'Dashboard', href: '/tenant/dashboard', icon: LayoutDashboard },
    { name: 'Resturent', href: '/tenant/resturent', icon: ShoppingCart },
    { name: 'Subscription', href: '/tenant/Subscription', icon: ShoppingCart },
    { name: 'Settings', href: '/tenant/settings', icon: Settings },
  ]

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 border-r bg-white dark:bg-slate-900 z-50">
        <div className="flex h-16 items-center px-6 border-b">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900 dark:text-white">
            <div className="h-8 w-8 rounded-md bg-emerald-600 flex items-center justify-center">
              <span className="text-white text-lg font-bold">A</span>
            </div>
            Acme Retail
          </div>
        </div>

        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Quick search..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-100 dark:bg-slate-800 border-transparent focus:border-emerald-500 focus:bg-white dark:focus:bg-slate-900 rounded-md outline-none transition-all"
            />
          </div>
        </div>

        <nav className="flex flex-col gap-1 px-4">
          {navigation.map((item) => {
            const isActive = location.pathname.startsWith(item.href)
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm font-medium',
                  isActive 
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300' 
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                )}
              >
                <item.icon className={cn('h-4 w-4', isActive ? 'text-emerald-600 dark:text-emerald-400' : '')} />
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 flex-shrink-0"></div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-medium text-slate-900 dark:text-white truncate">Jane Doe</span>
              <span className="text-xs text-slate-500 truncate">jane@acmeretail.com</span>
            </div>
          </div>
          <button className="flex items-center gap-3 px-3 py-2 mt-2 rounded-md transition-colors text-sm font-medium text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/30 w-full">
            <LogOut className="h-4 w-4" />
            Sign outs
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 pl-64 flex flex-col min-h-screen">
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
