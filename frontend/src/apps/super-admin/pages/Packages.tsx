import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, Plus } from 'lucide-react'

export default function Packages() {
  const packages = [
    {
      id: 1,
      name: 'Starter',
      description: 'Perfect for single-location small businesses.',
      price: 'LKR 4,900',
      features: ['1 Location', '2 Terminals', 'Basic Reporting', 'Email Support'],
      highlighted: false,
    },
    {
      id: 2,
      name: 'Pro',
      description: 'For growing businesses with multiple locations.',
      price: 'LKR 19,900',
      features: ['Up to 5 Locations', '10 Terminals', 'Advanced Analytics', 'Priority Support', 'Inventory Sync'],
      highlighted: true,
    },
    {
      id: 3,
      name: 'Enterprise',
      description: 'Unlimited scale for large retail chains.',
      price: 'LKR 49,900',
      features: ['Unlimited Locations', 'Unlimited Terminals', 'Custom Integrations', '24/7 Phone Support', 'Dedicated Account Manager'],
      highlighted: false,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Packages & Pricing</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Configure the subscription tiers and feature limits available to tenants.
          </p>
        </div>
        <Button className="bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100">
          <Plus className="h-4 w-4 mr-2" />
          Create New Package
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mt-8">
        {packages.map((pkg) => (
          <Card key={pkg.id} className={`relative border-slate-200 dark:border-slate-800 shadow-sm flex flex-col ${pkg.highlighted ? 'border-blue-500 dark:border-blue-500 shadow-md ring-1 ring-blue-500' : ''}`}>
            {pkg.highlighted && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">{pkg.name}</CardTitle>
              <CardDescription className="text-sm mt-2 h-10">{pkg.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-6">
              <div className="text-center mb-6">
                <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{pkg.price}</span>
                <span className="text-slate-500 font-medium">/month</span>
              </div>
              <ul className="space-y-3">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 focus-visible:ring-slate-400">
                Edit Package
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
