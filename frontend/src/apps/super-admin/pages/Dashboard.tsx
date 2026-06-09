import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, Users, CreditCard, Activity } from 'lucide-react'

export default function SuperAdminDashboard() {
  const stats = [
    { title: 'Total Companies', value: '142', icon: Building2, change: '+12%', trend: 'up' },
    { title: 'Active Terminals', value: '845', icon: Activity, change: '+4.5%', trend: 'up' },
    { title: 'Total Users', value: '3,204', icon: Users, change: '+18%', trend: 'up' },
    { title: 'Monthly Revenue', value: '$45,231', icon: CreditCard, change: '+8%', trend: 'up' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Dashboard</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Overview of platform-wide metrics and tenant activity.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-slate-200 dark:border-slate-800 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1">
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add a placeholder for charts */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 border-slate-200 dark:border-slate-800 shadow-sm min-h-[400px]">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center h-[300px] text-slate-400">
            Chart will be rendered here
          </CardContent>
        </Card>
        <Card className="col-span-3 border-slate-200 dark:border-slate-800 shadow-sm min-h-[400px]">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">New tenant registered</p>
                    <p className="text-xs text-slate-500">Retail Corp Ltd.</p>
                  </div>
                  <div className="text-xs text-slate-400">2h ago</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
