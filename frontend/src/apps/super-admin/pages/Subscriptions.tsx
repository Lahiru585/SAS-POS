import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Search, CreditCard, Download } from 'lucide-react'

export default function Subscriptions() {
  const subscriptions = [
    { id: 'SUB-1029', company: 'Acme Retail', plan: 'Enterprise', amount: 'LKR 49,900.00', status: 'Active', renewal: '2026-01-12' },
    { id: 'SUB-1030', company: 'Global Tech POS', plan: 'Pro', amount: 'LKR 19,900.00', status: 'Active', renewal: '2025-07-05' },
    { id: 'SUB-1031', company: 'Coffee Shop Central', plan: 'Starter', amount: 'LKR 4,900.00', status: 'Past Due', renewal: '2025-06-01' },
    { id: 'SUB-1032', company: 'Boutique XYZ', plan: 'Starter', amount: 'LKR 4,900.00', status: 'Active', renewal: '2025-08-10' },
    { id: 'SUB-1033', company: 'Metro Supermarket', plan: 'Enterprise', amount: 'LKR 89,900.00', status: 'Canceled', renewal: '-' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Subscriptions</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Monitor and manage active tenant subscriptions and recurring revenue.
          </p>
        </div>
        <Button className="bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100">
          <Download className="h-4 w-4 mr-2" />
          Export CSV
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-6">
        <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Active Subscriptions</CardTitle>
            <CreditCard className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">1,245</div>
            <p className="text-xs text-emerald-600 font-medium mt-1">+12 this week</p>
          </CardContent>
        </Card>
        <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Monthly Recurring (MRR)</CardTitle>
            <CreditCard className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">LKR 8,423,000</div>
            <p className="text-xs text-emerald-600 font-medium mt-1">+8.2% from last month</p>
          </CardContent>
        </Card>
        <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Churn Rate</CardTitle>
            <CreditCard className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">1.2%</div>
            <p className="text-xs text-slate-500 mt-1">-0.4% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <CardTitle className="text-lg font-medium">Recent Subscriptions</CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
            <Input 
              type="text" 
              placeholder="Search ID or Company..." 
              className="pl-9 bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 focus-visible:ring-slate-400" 
            />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50/50 dark:bg-slate-900/50 hover:bg-slate-50/50">
                <TableHead>Sub ID</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Amount/Mo</TableHead>
                <TableHead>Renewal Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subscriptions.map((sub) => (
                <TableRow key={sub.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <TableCell className="font-medium text-slate-500">{sub.id}</TableCell>
                  <TableCell className="font-medium text-slate-900 dark:text-slate-100">{sub.company}</TableCell>
                  <TableCell>{sub.plan}</TableCell>
                  <TableCell>{sub.amount}</TableCell>
                  <TableCell className="text-slate-500">{sub.renewal}</TableCell>
                  <TableCell>
                    <Badge variant={sub.status === 'Active' ? 'default' : sub.status === 'Past Due' ? 'destructive' : 'secondary'} 
                           className={
                             sub.status === 'Active' ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400' : 
                             sub.status === 'Past Due' ? 'bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-400' : ''
                           }>
                      {sub.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
