import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Check, Pencil, Trash2, Plus } from 'lucide-react'

export default function Subscription() {
  const plans = [
    {
      name: 'Basic',
      price: '29.99',
      status: 'Active',
      features: ['Unlimited Orders', '24/7 Support', 'Basic Analytics'],
    },
    {
      name: 'Pro',
      price: '99.99',
      status: 'Active',
      features: ['Unlimited Orders', 'Priority Support', 'Advanced Analytics', 'API Access'],
    },
    {
      name: 'Enterprise',
      price: '299.99',
      status: 'Active',
      features: ['Unlimited Orders', 'Dedicated Account Manager', 'Custom Development', 'SLA Guarantee'],
    },
  ]

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header Row */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Subscription Plans</h1>
          <p className="text-sm text-gray-500 mt-1">Create and manage billing plans for restaurants</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors">
          <Plus className="h-4 w-4" />
          New Plan
        </button>
      </div>

      {/* Plan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
          >
            <CardHeader className="px-6 pt-6 pb-0">
              {/* Plan Name + Price Row */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-bold text-gray-900">{plan.name}</span>
                <span className="text-lg font-bold text-orange-500">
                  LKR {plan.price}
                  <span className="text-sm font-normal text-gray-400">/mo</span>
                </span>
              </div>

              {/* Status Badge */}
              <div className="mb-5">
                <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                  {plan.status}
                </span>
              </div>
            </CardHeader>

            <CardContent className="px-6 pb-6">
              {/* Features Label */}
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
                Features Included
              </p>

              {/* Feature List */}
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="border-t border-gray-100 mb-4" />

              {/* Action Icons */}
              <div className="flex items-center justify-end gap-3">
                <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors">
                  <Pencil className="h-4 w-4" />
                </button>
                <button className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}