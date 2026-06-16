import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Save, AlertCircle } from 'lucide-react'

export default function Settings() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Global Settings</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Configure platform-wide preferences, security rules, and maintenance modes.
          </p>
        </div>
      </div>

      <Card className="border-slate-200 dark:border-slate-800 shadow-sm mt-8">
        <CardHeader>
          <CardTitle>Platform Configuration</CardTitle>
          <CardDescription>Basic details about your SaaS platform.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="platform-name">Platform Name</Label>
            <Input id="platform-name" defaultValue="CloudShift POS" className="max-w-md bg-slate-50 dark:bg-slate-900/50" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="support-email">Global Support Email</Label>
            <Input id="support-email" defaultValue="support@cloudshift.com" className="max-w-md bg-slate-50 dark:bg-slate-900/50" />
          </div>
        </CardContent>
        <CardFooter className="border-t border-slate-100 dark:border-slate-800 pt-4">
          <Button className="bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100">
            <Save className="h-4 w-4 mr-2" />
            Save Details
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
        <CardHeader>
          <CardTitle>Security Defaults</CardTitle>
          <CardDescription>Default security policies enforced on all tenants.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Require Two-Factor Authentication (2FA)</Label>
              <p className="text-sm text-slate-500">Forces all newly registered tenant admins to setup 2FA.</p>
            </div>
            <Switch defaultChecked className="data-[state=checked]:bg-blue-600" />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Enforce Password Expiry</Label>
              <p className="text-sm text-slate-500">Require password changes every 90 days globally.</p>
            </div>
            <Switch className="data-[state=checked]:bg-blue-600" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-red-200 dark:border-red-900/50 shadow-sm">
        <CardHeader>
          <CardTitle className="text-red-600 dark:text-red-400 flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            Danger Zone
          </CardTitle>
          <CardDescription>Critical actions that will disrupt platform usage.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-lg">
            <div className="space-y-0.5">
              <Label className="text-red-700 dark:text-red-300 font-semibold">Enable Global Maintenance Mode</Label>
              <p className="text-sm text-red-600 dark:text-red-400">Suspends all tenant access and displays a maintenance page. Use only during major database migrations.</p>
            </div>
            <Switch className="data-[state=checked]:bg-red-600" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
