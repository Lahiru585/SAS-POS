import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FlaskConical, Save } from 'lucide-react'

export default function FeatureToggles() {
  const [features, setFeatures] = useState([
    { id: 'feat_multicurrency', name: 'Multi-currency Support', description: 'Allow tenants to process transactions in multiple currencies.', enabled: true, isBeta: false },
    { id: 'feat_advanced_analytics', name: 'Advanced AI Analytics', description: 'Enable the new machine-learning powered sales forecasting dashboard.', enabled: false, isBeta: true },
    { id: 'feat_offline_mode', name: 'Offline POS Mode', description: 'Allow terminals to continue processing sales without internet connectivity.', enabled: true, isBeta: false },
    { id: 'feat_custom_receipts', name: 'Custom Receipt Builder', description: 'Drag and drop builder for tenant receipt customization.', enabled: true, isBeta: false },
    { id: 'feat_api_v2', name: 'Developer API v2', description: 'Enable the new GraphQL API for third-party integrations.', enabled: false, isBeta: true },
  ])

  const toggleFeature = (id: string) => {
    setFeatures(features.map(f => f.id === id ? { ...f, enabled: !f.enabled } : f))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Feature Toggles</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Manage global feature flags and early-access beta rollouts.
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <div className="grid gap-6 mt-8">
        <Card className="border-slate-200 dark:border-slate-800 shadow-sm max-w-4xl">
          <CardHeader className="pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <FlaskConical className="h-5 w-5 text-blue-500" />
              <CardTitle className="text-lg font-medium">Global Features</CardTitle>
            </div>
            <CardDescription>
              Changes applied here will immediately affect all tenants globally based on their package limits.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-center justify-between space-x-4 border border-slate-100 dark:border-slate-800/50 p-4 rounded-lg bg-slate-50/50 dark:bg-slate-900/20">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-base font-semibold leading-none text-slate-900 dark:text-white">
                      {feature.name}
                    </p>
                    {feature.isBeta && (
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-300 border-none text-[10px] px-2 py-0 h-4">
                        BETA
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {feature.description}
                  </p>
                  <p className="text-xs text-slate-400 mt-2 font-mono">
                    ID: {feature.id}
                  </p>
                </div>
                <Switch
                  checked={feature.enabled}
                  onCheckedChange={() => toggleFeature(feature.id)}
                  className="data-[state=checked]:bg-blue-600"
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
