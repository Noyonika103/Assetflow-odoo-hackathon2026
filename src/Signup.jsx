import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Building2, 
  Package, 
  ArrowUpRight, 
  CalendarClock, 
  Wrench, 
  ClipboardCheck, 
  BarChart3, 
  Notifications,
  Search,
  Settings,
  HelpCircle,
  Plus,
  Filter,
  Download,
  AlertTriangle,
  MoreVertical,
  LogOut,
  MapPin,
  Clock,
  User,
  Mail,
  Lock,
  Eye,
  ArrowRight
} from 'lucide-react';

/**
 * ASSETFLOW ENTERPRISE - REACT ARCHITECTURE (Redesign Light Theme)
 * 
 * This implementation reflects the 'Kinetic Enterprise Redesign' light theme.
 * Focus: High-trust 'Social Blue' (#0077B5), airy whitespace, and clean component hierarchy.
 */

// --- Shared Components ---

const Sidebar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'org', label: 'Organization Setup', icon: Building2 },
    { id: 'assets', label: 'Assets', icon: Package },
    { id: 'allocation', label: 'Allocation & Transfer', icon: ArrowUpRight },
    { id: 'booking', label: 'Resource Booking', icon: CalendarClock },
    { id: 'maintenance', label: 'Maintenance', icon: Wrench },
    { id: 'audit', label: 'Audit', icon: ClipboardCheck },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
    { id: 'notifications', label: 'Notifications', icon: Notifications },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-[#E2E8F0] flex flex-col z-50">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-[#0077B5] rounded-lg flex items-center justify-center font-bold text-white">AF</div>
          <div>
            <h1 className="text-[#1E293B] font-bold text-lg leading-none">AssetFlow</h1>
            <p className="text-[#64748B] text-[10px] uppercase tracking-wider mt-1">Enterprise Management</p>
          </div>
        </div>
        
        <nav className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id 
                ? 'bg-[#0077B5]/10 text-[#0077B5] font-semibold' 
                : 'text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#1E293B]'
              }`}
            >
              <item.icon size={20} />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-[#E2E8F0]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#0077B5] rounded-full flex items-center justify-center text-white font-bold">JD</div>
          <div className="flex-1 min-w-0">
            <p className="text-[#1E293B] text-sm font-semibold truncate">John Doe</p>
            <p className="text-[#64748B] text-xs truncate">Fleet Manager</p>
          </div>
          <button className="text-[#64748B] hover:text-[#1E293B]">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
};

const TopBar = ({ title }) => (
  <header className="sticky top-0 ml-64 h-16 bg-white/80 backdrop-blur-md border-b border-[#E2E8F0] flex items-center justify-between px-8 z-40">
    <div className="relative w-96">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={18} />
      <input 
        type="text" 
        placeholder="Search assets, resources, or transfers..."
        className="w-full bg-[#F1F5F9] border border-transparent rounded-lg py-2 pl-10 pr-4 text-[#1E293B] text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0077B5]/20 focus:border-[#0077B5]"
      />
    </div>
    <div className="flex items-center gap-4">
      <button className="p-2 text-[#64748B] hover:text-[#1E293B] rounded-lg hover:bg-[#F1F5F9]">
        <HelpCircle size={20} />
      </button>
      <button className="p-2 text-[#64748B] hover:text-[#1E293B] rounded-lg hover:bg-[#F1F5F9] relative">
        <Notifications size={20} />
        <span className="absolute top-2 right-2 w-2 h-2 bg-[#EF4444] rounded-full border-2 border-white"></span>
      </button>
      <button className="flex items-center gap-2 bg-[#0077B5] text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#005F91] transition-colors">
        <Plus size={18} />
        <span>Global Add</span>
      </button>
    </div>
  </header>
);

// --- Auth Components ---

const SignUpForm = ({ onToggleAuth, onAuthSuccess }) => (
  <div className="w-full max-w-md bg-white border border-[#E2E8F0] rounded-2xl p-10 shadow-xl shadow-blue-900/5">
    <div className="flex justify-center mb-8">
       <div className="w-12 h-12 bg-[#0077B5] rounded-xl flex items-center justify-center font-bold text-2xl text-white">AF</div>
    </div>
    <h2 className="text-2xl font-bold text-[#1E293B] text-center mb-2">Create your account</h2>
    <p className="text-[#64748B] text-center mb-8 text-sm">Start managing your global assets with precision.</p>
    
    <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onAuthSuccess(); }}>
      <div className="space-y-2">
        <label className="text-xs font-bold text-[#64748B] uppercase tracking-widest">Full Name</label>
        <div className="relative group">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8] group-focus-within:text-[#0077B5]" size={18} />
          <input 
            type="text" 
            placeholder="John Doe"
            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg pl-10 pr-4 py-3 text-[#1E293B] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0077B5]/20 focus:border-[#0077B5] transition-all" 
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold text-[#64748B] uppercase tracking-widest">Work Email</label>
        <div className="relative group">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8] group-focus-within:text-[#0077B5]" size={18} />
          <input 
            type="email" 
            placeholder="j.doe@enterprise.com"
            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg pl-10 pr-4 py-3 text-[#1E293B] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0077B5]/20 focus:border-[#0077B5] transition-all" 
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold text-[#64748B] uppercase tracking-widest">Create Password</label>
        <div className="relative group">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8] group-focus-within:text-[#0077B5]" size={18} />
          <input 
            type="password" 
            placeholder="••••••••"
            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg pl-10 pr-10 py-3 text-[#1E293B] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0077B5]/20 focus:border-[#0077B5] transition-all" 
          />
          <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#64748B]">
            <Eye size={18} />
          </button>
        </div>
        <p className="text-[10px] text-[#64748B] flex items-center gap-1.5 mt-1 font-medium">
          <HelpCircle size={12} />
          Minimum 12 characters, including numbers and symbols
        </p>
      </div>
      <button className="w-full bg-[#0077B5] text-white font-bold py-3.5 rounded-lg hover:bg-[#005F91] transition-colors flex items-center justify-center gap-2 uppercase tracking-widest text-sm shadow-lg shadow-blue-500/20">
        <span>Create Account</span>
        <ArrowRight size={18} />
      </button>
    </form>
    
    <div className="mt-8 pt-8 border-t border-[#E2E8F0] text-center">
      <p className="text-[#64748B] text-sm">
        Already have an account? {' '}
        <button onClick={onToggleAuth} className="text-[#0077B5] font-bold hover:underline">Sign In</button>
      </p>
      <div className="flex justify-center gap-4 mt-6 text-[10px] uppercase tracking-widest font-bold text-[#94A3B8]">
        <a href="#" className="hover:text-[#0077B5] transition-colors">Terms of Service</a>
        <span className="text-[#E2E8F0]">|</span>
        <a href="#" className="hover:text-[#0077B5] transition-colors">Privacy Policy</a>
      </div>
    </div>
  </div>
);

// --- App Component ---

export default function AssetFlowApp() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [authState, setAuthState] = useState('signup'); // 'login', 'signup', 'authenticated'

  if (authState !== 'authenticated') {
    return (
      <div className="min-h-screen bg-[#F7FAFC] flex items-center justify-center p-6 relative overflow-hidden">
        {/* Background Decorative Elements - Light Blue Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/80 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        
        {/* Subtle dot grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0077B5 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

        {authState === 'signup' ? (
          <SignUpForm 
            onToggleAuth={() => setAuthState('login')} 
            onAuthSuccess={() => setAuthState('authenticated')} 
          />
        ) : (
          <div className="w-full max-w-md bg-white border border-[#E2E8F0] rounded-2xl p-10 z-10 shadow-xl shadow-blue-900/5">
            <div className="flex justify-center mb-8">
               <div className="w-12 h-12 bg-[#0077B5] rounded-xl flex items-center justify-center font-bold text-2xl text-white">AF</div>
            </div>
            <h2 className="text-2xl font-bold text-[#1E293B] text-center mb-2">Login</h2>
            <p className="text-[#64748B] text-center mb-8 text-sm">Sign in to manage your corporate assets</p>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setAuthState('authenticated'); }}>
              <div className="space-y-2 text-left">
                <label className="text-xs font-bold text-[#64748B] uppercase tracking-widest">Email address</label>
                <input 
                  type="email" 
                  defaultValue="name@company.com"
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg px-4 py-3 text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#0077B5]/20 focus:border-[#0077B5]" 
                />
              </div>
              <button className="w-full bg-[#0077B5] text-white font-bold py-3.5 rounded-lg hover:bg-[#005F91] transition-colors uppercase tracking-widest text-sm shadow-lg shadow-blue-500/20">
                Sign In
              </button>
            </form>
            <div className="mt-8 pt-8 border-t border-[#E2E8F0] text-center">
              <p className="text-[#64748B] text-sm mb-4">New here?</p>
              <button onClick={() => setAuthState('signup')} className="w-full border-2 border-[#E2E8F0] text-[#1E293B] font-bold py-3 rounded-lg hover:bg-[#F8FAFC] transition-colors uppercase tracking-widest text-xs">
                Create Account
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7FAFC] text-[#1E293B] selection:bg-[#0077B5]/10">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="ml-64 flex flex-col min-h-screen">
        <TopBar title={activeTab} />
        <main className="flex-1 overflow-y-auto">
          {/* Dashboard View (Redesign) */}
          <div className="p-8 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#1E293B]">Dashboard Overview</h2>
                <p className="text-[#64748B] text-sm mt-1">Real-time status of enterprise assets and operations.</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 bg-white border border-[#E2E8F0] text-[#64748B] px-4 py-2 rounded-lg text-sm font-semibold hover:text-[#1E293B] transition-colors shadow-sm">
                  <Filter size={18} />
                  <span>Filter</span>
                </button>
                <button className="flex items-center gap-2 bg-white border border-[#E2E8F0] text-[#64748B] px-4 py-2 rounded-lg text-sm font-semibold hover:text-[#1E293B] transition-colors shadow-sm">
                  <Download size={18} />
                  <span>Export</span>
                </button>
              </div>
            </div>

            {/* Alert Banner */}
            <div className="bg-[#FEF2F2] border border-[#FEE2E2] rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#FEE2E2] rounded-lg text-[#EF4444]">
                  <AlertTriangle size={20} />
                </div>
                <p className="text-[#991B1B] font-semibold text-sm">3 assets overdue for return - flagged for follow-up</p>
              </div>
              <button className="text-[#B91C1C] text-sm font-bold underline hover:no-underline transition-all">Review Now</button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { label: 'Available Assets', value: '128', trend: '+ 12% from last month', icon: Package, color: '#0077B5' },
                { label: 'Allocated', value: '76', trend: '64% utilization rate', icon: ArrowUpRight, color: '#F59E0B' },
                { label: 'Under Maintenance', value: '4', trend: '2 units ready by EOD', icon: Wrench, color: '#64748B' },
              ].map((stat, i) => (
                <div key={i} className="bg-white border border-[#E2E8F0] rounded-2xl p-6 relative overflow-hidden shadow-sm group hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-[11px] font-bold text-[#64748B] uppercase tracking-widest">{stat.label}</p>
                    <div className="p-2.5 bg-[#F1F5F9] rounded-xl text-[#0077B5] group-hover:bg-[#0077B5] group-hover:text-white transition-colors">
                      <stat.icon size={20} />
                    </div>
                  </div>
                  <p className="text-4xl font-bold text-[#1E293B] tracking-tight">{stat.value}</p>
                  <p className="text-[#0077B5] text-xs mt-2 font-bold flex items-center gap-1">
                    {stat.trend}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="h-[400px] flex items-center justify-center border-2 border-dashed border-[#E2E8F0] rounded-2xl text-[#94A3B8] font-medium italic">
              Module views being migrated to light theme architecture...
            </div>
          </div>
        </main>
        <footer className="px-8 py-6 text-[#94A3B8] text-[10px] uppercase tracking-widest font-bold border-t border-[#E2E8F0] flex justify-between items-center bg-white">
          <span>© 2024 AssetFlow Technologies Inc. All rights reserved.</span>
          <div className="flex gap-6 lowercase">
             <a href="#" className="hover:text-[#0077B5] transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-[#0077B5] transition-colors">Terms of Service</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
