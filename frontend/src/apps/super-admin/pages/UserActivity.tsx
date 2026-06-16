import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, MousePointerClick, MapPin, Clock } from 'lucide-react'

export default function UserActivity() {
  const sessions = [
    { id: 1, user: 'manager@acme.com', location: 'New York, USA', duration: '2h 15m', active: true, browser: 'Chrome / macOS' },
    { id: 2, user: 'cashier1@acme.com', location: 'New York, USA', duration: '4h 30m', active: true, browser: 'Firefox / Windows' },
    { id: 3, user: 'admin@globaltech.com', location: 'London, UK', duration: '12m', active: false, browser: 'Safari / iOS' },
    { id: 4, user: 'barista@coffee.com', location: 'Seattle, USA', duration: '6h 45m', active: true, browser: 'Chrome / ChromeOS' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">User Activity</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Real-time insights into tenant sessions, demographics, and platform engagement.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
        <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Active Sessions</CardTitle>
            <Users className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">1,482</div>
            <p className="text-xs text-emerald-600 mt-1">+12% vs average</p>
          </CardContent>
        </Card>
        <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Interactions / Min</CardTitle>
            <MousePointerClick className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">4,291</div>
            <p className="text-xs text-slate-500 mt-1">API requests & UI clicks</p>
          </CardContent>
        </Card>
        <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Avg Session Length</CardTitle>
            <Clock className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">4h 12m</div>
            <p className="text-xs text-slate-500 mt-1">Typical POS terminal shift</p>
          </CardContent>
        </Card>
        <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Top Region</CardTitle>
            <MapPin className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">North America</div>
            <p className="text-xs text-slate-500 mt-1">68% of active traffic</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 border-slate-200 dark:border-slate-800 shadow-sm min-h-[300px]">
          <CardHeader>
            <CardTitle>Global Heatmap</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center h-[300px] text-slate-400 bg-slate-50 dark:bg-slate-900/20 m-6 rounded-lg border border-dashed border-slate-200 dark:border-slate-800">
            <MapPin className="h-10 w-10 text-slate-300 mb-2" />
            <p>[ Map Visualization Placeholder ]</p>
          </CardContent>
        </Card>
        <Card className="col-span-3 border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader>
            <CardTitle>Live Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sessions.map((session) => (
                <div key={session.id} className="flex flex-col gap-1 p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">{session.user}</p>
                    {session.active ? (
                      <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    ) : (
                      <span className="flex h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                    <MapPin className="h-3 w-3" /> {session.location}
                  </div>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                    <span className="text-xs text-slate-400">{session.browser}</span>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-300">{session.duration}</span>
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
