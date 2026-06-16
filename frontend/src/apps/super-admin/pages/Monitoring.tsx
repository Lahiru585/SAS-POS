import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Activity, Server, Cpu, HardDrive, Wifi, AlertTriangle } from 'lucide-react'

export default function Monitoring() {
  const alerts = [
    { id: 1, type: 'Warning', message: 'High CPU usage detected on Database Node 2', time: '10 mins ago' },
    { id: 2, type: 'Info', message: 'Automated backup completed successfully', time: '2 hours ago' },
    { id: 3, type: 'Critical', message: 'API rate limit exceeded for tenant "Acme Retail"', time: '3 hours ago' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">System Monitoring</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Real-time infrastructure health, uptime, and performance metrics.
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full text-sm font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          All Systems Operational
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
        <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Global Uptime</CardTitle>
            <Server className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">99.99%</div>
            <p className="text-xs text-slate-500 mt-1">Last 30 days</p>
          </CardContent>
        </Card>
        <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">API Latency</CardTitle>
            <Wifi className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">42ms</div>
            <p className="text-xs text-slate-500 mt-1">Global average</p>
          </CardContent>
        </Card>
        <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">CPU Usage</CardTitle>
            <Cpu className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">68%</div>
            <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">Peak load detected</p>
          </CardContent>
        </Card>
        <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Storage Used</CardTitle>
            <HardDrive className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">4.2 TB</div>
            <p className="text-xs text-slate-500 mt-1">Out of 10 TB allocated</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 border-slate-200 dark:border-slate-800 shadow-sm min-h-[300px]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-slate-400" />
              Traffic Volume (24h)
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center h-[200px] text-slate-400 bg-slate-50 dark:bg-slate-900/20 m-6 rounded-lg border border-dashed border-slate-200 dark:border-slate-800">
            [ Recharts Line Graph Placeholder ]
          </CardContent>
        </Card>
        <Card className="col-span-3 border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-slate-400" />
              System Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className="flex items-start gap-4 p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                  <div className={`h-2 w-2 mt-1.5 rounded-full shrink-0 ${
                    alert.type === 'Critical' ? 'bg-red-500' : 
                    alert.type === 'Warning' ? 'bg-amber-500' : 'bg-blue-500'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">{alert.message}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-slate-500">{alert.type}</span>
                      <span className="text-xs text-slate-400">{alert.time}</span>
                    </div>
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
