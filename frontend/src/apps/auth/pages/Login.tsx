import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { LockKeyhole, Mail, ArrowRight } from 'lucide-react'

const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
})

type LoginFormValues = z.infer<typeof loginSchema>

export default function Login() {
  const navigate = useNavigate()
  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  })

  const fillTestCredentials = () => {
    setValue('email', 'admin@cloudshift.com')
    setValue('password', 'password123')
  }

  const onSubmit = async (data: LoginFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    if (data.email.includes('admin')) {
      navigate('/super-admin/dashboard')
    } else {
      navigate('/tenant/dashboard')
    }
  }

  return (
    <div className="min-h-screen w-full flex bg-white dark:bg-slate-950">
      
      {/* Left Panel: Hero / Brand Area */}
      <div className="hidden lg:flex w-1/2 relative bg-slate-900 overflow-hidden items-center justify-center">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-900 to-emerald-900/40 z-0" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] z-0" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] z-0" />
        
        {/* Abstract grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] z-0" />

        <div className="relative z-10 max-w-xl px-12 flex flex-col items-center text-center">
          <div className="mb-8 flex items-center justify-center">
            <span className="text-5xl font-black text-white tracking-tight">
              Cloud<span className="text-blue-400">Shift</span>
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            The intelligent OS for your retail business.
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            Manage multiple locations, track inventory in real-time, and process transactions seamlessly with our enterprise-grade POS platform.
          </p>
          <div className="flex flex-col items-center gap-4 text-sm font-medium text-slate-400 mt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                </div>
              ))}
            </div>
            <p>Trusted by 10,000+ businesses worldwide</p>
          </div>
        </div>
      </div>

      {/* Right Panel: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative">
        <div className="w-full max-w-md space-y-8 relative z-10">
          
          <div className="lg:hidden flex justify-center mb-8">
            <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Cloud<span className="text-blue-600 dark:text-blue-400">Shift</span>
            </span>
          </div>

          <div className="text-center lg:text-left space-y-2 mb-10">
            <h2 
              className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white cursor-pointer hover:text-blue-600 transition-colors"
              onClick={fillTestCredentials}
              title="Click to auto-fill test credentials"
            >
              Welcome back
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Enter your credentials to securely access your account.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-semibold text-slate-700 dark:text-slate-300">
                Email Address
              </Label>
              <div className="relative group">
                <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-400 transition-colors group-focus-within:text-slate-900 dark:group-focus-within:text-white" />
                <Input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  className="pl-10 h-11 bg-slate-50/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 focus-visible:ring-1 focus-visible:ring-slate-400 dark:focus-visible:ring-slate-600 focus-visible:border-slate-400 transition-all rounded-lg"
                  {...register('email')}
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-500 font-medium mt-1">{errors.email.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="font-semibold text-slate-700 dark:text-slate-300">
                  Password
                </Label>
                <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Forgot password?
                </a>
              </div>
              <div className="relative group">
                <LockKeyhole className="absolute left-3.5 top-3 h-4 w-4 text-slate-400 transition-colors group-focus-within:text-slate-900 dark:group-focus-within:text-white" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10 h-11 bg-slate-50/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 focus-visible:ring-1 focus-visible:ring-slate-400 dark:focus-visible:ring-slate-600 focus-visible:border-slate-400 transition-all rounded-lg"
                  {...register('password')}
                />
              </div>
              {errors.password && (
                <p className="text-sm text-red-500 font-medium mt-1">{errors.password.message}</p>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full h-11 bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 rounded-lg shadow-sm transition-all mt-4 text-base font-medium"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing in...' : 'Sign in'}
              {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </form>

          <p className="text-center text-sm text-slate-500 mt-10">
            Don't have an account?{' '}
            <a href="#" className="font-semibold text-slate-900 dark:text-white hover:underline">
              Contact Sales
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
