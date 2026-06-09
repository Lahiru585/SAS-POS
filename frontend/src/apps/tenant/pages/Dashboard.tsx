import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign, ShoppingBag, TrendingUp, Package } from 'lucide-react'

export default function TenantDashboard() {
  const stats = [
    { title: 'Today\'s Sales', value: '$1,245.00', icon: DollarSign, change: '+15%', trend: 'up' },
    { title: 'Orders', value: '42', icon: ShoppingBag, change: '+5%', trend: 'up' },
    { title: 'Average Order Value', value: '$29.64', icon: TrendingUp, change: '+2%', trend: 'up' },
    { title: 'Low Stock Items', value: '8', icon: Package, change: '-2', trend: 'down' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Store Overview</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Here's what's happening at Acme Retail today.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="flex flex-row items-center justify-between pb-2 relative">
              <CardTitle className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {stat.title}
              </CardTitle>
              <div className="h-8 w-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <stat.icon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
              <p className={`text-xs font-medium mt-1 ${stat.trend === 'up' ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                {stat.change} from yesterday
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 border-slate-200 dark:border-slate-800 shadow-sm min-h-[400px]">
          <CardHeader>
            <CardTitle>Sales Over Time</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center h-[300px] text-slate-400">
            Chart component goes here
          </CardContent>
        </Card>
        <Card className="col-span-3 border-slate-200 dark:border-slate-800 shadow-sm min-h-[400px]">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { id: '#TRX-001', time: '10:42 AM', amount: '$45.00', status: 'Completed' },
                { id: '#TRX-002', time: '10:15 AM', amount: '$120.50', status: 'Completed' },
                { id: '#TRX-003', time: '09:30 AM', amount: '$12.00', status: 'Refunded' },
                { id: '#TRX-004', time: '09:05 AM', amount: '$65.20', status: 'Completed' },
              ].map((trx) => (
                <div key={trx.id} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">{trx.id}</p>
                    <p className="text-xs text-slate-500">{trx.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-900 dark:text-white">{trx.amount}</p>
                    <p className={`text-xs font-medium ${trx.status === 'Completed' ? 'text-emerald-600' : 'text-amber-600'}`}>
                      {trx.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
