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
import { Search, Plus } from 'lucide-react'

export default function CompanyManagement() {
  const companies = [
    { id: 1, name: 'Acme Retail', users: 12, status: 'Active', plan: 'Enterprise' },
    { id: 2, name: 'Global Tech POS', users: 45, status: 'Active', plan: 'Pro' },
    { id: 3, name: 'Coffee Shop Central', users: 8, status: 'Suspended', plan: 'Starter' },
    { id: 4, name: 'Boutique XYZ', users: 2, status: 'Active', plan: 'Starter' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Companies</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Manage your tenants, their subscriptions, and access.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors shadow-sm">
          <Plus className="h-4 w-4" />
          Add Company
        </button>
      </div>

      <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <CardTitle className="text-lg font-medium">All Companies</CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
            <Input 
              type="text" 
              placeholder="Search companies..." 
              className="pl-9 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800" 
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
                  <TableCell>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      company.status === 'Active' 
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400'
                        : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      {company.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm">
                      Manage
                    </button>
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
