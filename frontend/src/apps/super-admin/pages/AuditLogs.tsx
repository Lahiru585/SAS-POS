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
import { Search, Filter, Download } from 'lucide-react'

export default function AuditLogs() {
  const logs = [
    { id: 'AL-9021', user: 'admin@cloudshift.com', action: 'Modified Package Limits', target: 'Enterprise Package', time: '2024-03-10 14:32:01', ip: '192.168.1.42' },
    { id: 'AL-9020', user: 'system_worker', action: 'Automated Backup Created', target: 'Database', time: '2024-03-10 12:00:00', ip: 'internal' },
    { id: 'AL-9019', user: 'jdoe@acmeretail.com', action: 'Failed Login Attempt', target: 'Authentication', time: '2024-03-10 10:15:22', ip: '203.0.113.1' },
    { id: 'AL-9018', user: 'admin@cloudshift.com', action: 'Enabled Feature Toggle', target: 'Multi-currency Support', time: '2024-03-09 16:45:11', ip: '192.168.1.42' },
    { id: 'AL-9017', user: 'support@cloudshift.com', action: 'Reset Tenant Password', target: 'Boutique XYZ User', time: '2024-03-09 09:12:05', ip: '10.0.0.15' },
    { id: 'AL-9016', user: 'system_billing', action: 'Invoice Generated', target: 'INV-2024-001', time: '2024-03-01 00:00:01', ip: 'internal' },
    { id: 'AL-9015', user: 'admin@cloudshift.com', action: 'Created New Tenant', target: 'Global Tech POS', time: '2024-02-05 11:22:33', ip: '192.168.1.42' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Audit Logs</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Immutable system event trail for security and compliance.
          </p>
        </div>
        <Button className="bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100">
          <Download className="h-4 w-4 mr-2" />
          Export to CSV
        </Button>
      </div>

      <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 gap-4">
          <CardTitle className="text-lg font-medium">System Events</CardTitle>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
              <Input 
                type="text" 
                placeholder="Search logs by user or action..." 
                className="pl-9 bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 focus-visible:ring-slate-400" 
              />
            </div>
            <Button variant="outline" className="border-slate-200 dark:border-slate-700 shrink-0">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50/50 dark:bg-slate-900/50 hover:bg-slate-50/50">
                <TableHead className="w-[100px]">Log ID</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>Actor / User</TableHead>
                <TableHead>Action Details</TableHead>
                <TableHead>Target Resource</TableHead>
                <TableHead className="text-right">IP Address</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs.map((log) => (
                <TableRow key={log.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <TableCell className="font-mono text-xs text-slate-500">{log.id}</TableCell>
                  <TableCell className="text-slate-600 dark:text-slate-400 text-sm whitespace-nowrap">{log.time}</TableCell>
                  <TableCell className="font-medium text-slate-900 dark:text-slate-100">{log.user}</TableCell>
                  <TableCell>
                    <span className="font-medium text-slate-700 dark:text-slate-300">{log.action}</span>
                  </TableCell>
                  <TableCell className="text-slate-500 text-sm">{log.target}</TableCell>
                  <TableCell className="text-right font-mono text-xs text-slate-400">{log.ip}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
