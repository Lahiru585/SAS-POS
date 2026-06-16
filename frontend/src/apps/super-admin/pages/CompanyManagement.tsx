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
import { Search, Plus, MoreHorizontal } from 'lucide-react'

export default function CompanyManagement() {
  const companies = [
    { id: 1, name: 'Acme Retail', users: 12, status: 'Active', plan: 'Enterprise', joined: '2025-01-12' },
    { id: 2, name: 'Global Tech POS', users: 45, status: 'Active', plan: 'Pro', joined: '2025-02-05' },
    { id: 3, name: 'Coffee Shop Central', users: 8, status: 'Suspended', plan: 'Starter', joined: '2025-03-22' },
    { id: 4, name: 'Boutique XYZ', users: 2, status: 'Active', plan: 'Starter', joined: '2025-04-10' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Companies & Tenants</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Manage your tenants, their subscriptions, and system access.
          </p>
        </div>
        <Button className="bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100">
          <Plus className="h-4 w-4 mr-2" />
          Add Company
        </Button>
      </div>

      <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <CardTitle className="text-lg font-medium">All Companies</CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
            <Input 
              type="text" 
              placeholder="Search companies..." 
              className="pl-9 bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 focus-visible:ring-slate-400" 
            />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50/50 dark:bg-slate-900/50 hover:bg-slate-50/50">
                <TableHead>Company Name</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Users</TableHead>
                <TableHead>Joined Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {companies.map((company) => (
                <TableRow key={company.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors">
                  <TableCell className="font-medium text-slate-900 dark:text-slate-100">
                    {company.name}
                  </TableCell>
                  <TableCell>{company.plan}</TableCell>
                  <TableCell>{company.users}</TableCell>
                  <TableCell className="text-slate-500">{company.joined}</TableCell>
                  <TableCell>
                    <Badge variant={company.status === 'Active' ? 'default' : 'destructive'} 
                           className={company.status === 'Active' ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400' : ''}>
                      {company.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="text-slate-500 hover:text-slate-900 dark:hover:text-white">
                      <MoreHorizontal className="h-4 w-4" />
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
