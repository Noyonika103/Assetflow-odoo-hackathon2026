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
 * ASSETFLOW REDESIGN - DASHBOARD REACT IMPLEMENTATION
 * 
 * This implementation reflects the 'Kinetic Enterprise Redesign' light theme.
 * Focus: High-trust 'Social Blue' (#0077B5), airy whitespace, and modern SaaS aesthetics.
 */

// --- Shared Components ---

const Sidebar = ({ activeTab, setActiveTab, onLogout }) => {
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
            <p className="text-[#64748B] text-xs truncate">Admin Account</p>
          </div>
          <button onClick={onLogout} className="text-[#64748B] hover:text-[#EF4444] transition-colors">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
};

const TopBar = () => (
  <header className="sticky top-0 ml-64 h-16 bg-white/80 backdrop-blur-md border-b border-[#E2E8F0] flex items-center justify-between px-8 z-40">
    <div className="relative w-96">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={18} />
      <input 
        type="text" 
        placeholder="Search assets, resources, or transfers..."
        className="w-full bg-[#F1F5F9] border border-transparent rounded-lg py-2 pl-10 pr-4 text-[#1E293B] text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0077B5]/20 focus:border-[#0077B5] transition-all"
      />
    </div>
    <div className="flex items-center gap-4">
      <button className="p-2 text-[#64748B] hover:text-[#1E293B] rounded-lg hover:bg-[#F1F5F9]">
        <HelpCircle size={20} />
      </button>
      <button className="p-2 text-[#64748B] hover:text-[#1E293B] rounded-lg hover:bg-[#F1F5F9] relative">
        <Notifications size={20} />
        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#EF4444] rounded-full border-2 border-white"></span>
      </button>
      <button className="flex items-center gap-2 bg-[#0077B5] text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#005F91] transition-colors shadow-sm active:scale-[0.98]">
        <Plus size={18} />
        <span>Global Add</span>
      </button>
    </div>
  </header>
);

// --- Page Views ---

const DashboardView = () => {
  const stats = [
    { label: 'Available Assets', value: '128', trend: '↑ 12% from last month', icon: Package, color: 'border-blue-500' },
    { label: 'Allocated', value: '76', trend: '64% utilization rate', icon: ArrowUpRight, color: 'border-amber-500' },
    { label: 'Under Maintenance', value: '4', trend: '2 units ready by EOD', icon: Wrench, color: 'border-slate-400' },
  ];

  return (
    <main className="flex-1 overflow-y-auto p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#1E293B] tracking-tight">Dashboard Overview</h2>
          <p className="text-[#64748B] text-sm mt-1 font-medium">Real-time status of enterprise assets and operations.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-[#E2E8F0] text-[#64748B] px-4 py-2 rounded-lg text-sm font-semibold hover:text-[#1E293B] transition-all shadow-sm">
            <Filter size={18} />
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-2 bg-white border border-[#E2E8F0] text-[#64748B] px-4 py-2 rounded-lg text-sm font-semibold hover:text-[#1E293B] transition-all shadow-sm">
            <Download size={18} />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="bg-[#FEF2F2] border border-[#FEE2E2] rounded-xl p-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white rounded-lg text-[#EF4444] shadow-sm">
            <AlertTriangle size={20} />
          </div>
          <p className="text-[#991B1B] font-bold text-sm">3 assets overdue for return - flagged for follow-up</p>
        </div>
        <button className="bg-[#EF4444] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#B91C1C] transition-colors uppercase tracking-wider">
          Review Now
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className={`bg-white border border-[#E2E8F0] border-l-4 ${stat.color} rounded-2xl p-6 relative overflow-hidden shadow-sm group hover:shadow-md transition-all`}>
            <div className="flex justify-between items-start mb-4">
              <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">{stat.label}</p>
              <div className="p-2.5 bg-[#F8FAFC] rounded-xl text-[#0077B5] group-hover:bg-[#0077B5] group-hover:text-white transition-colors shadow-sm">
                <stat.icon size={20} />
              </div>
            </div>
            <p className="text-4xl font-bold text-[#1E293B] tracking-tight">{stat.value}</p>
            <p className="text-[#0077B5] text-xs mt-3 font-bold flex items-center gap-1">
              {stat.trend}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Recent Activity Section */}
        <div className="col-span-2 bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-[#1E293B]">Recent Activity</h3>
            <button className="text-[#0077B5] text-sm font-bold hover:underline">View All</button>
          </div>
          <div className="space-y-6">
            {[
              { item: 'Laptop AF-0119', action: 'allocated to', target: 'Priya Shah', meta: 'IT Dept • 10 mins ago', icon: Package, color: 'bg-blue-50 text-blue-600' },
              { item: 'Room B2', action: 'booking confirmed', target: '', meta: '2:00 PM to 3:00 PM • 45 mins ago', icon: CalendarClock, color: 'bg-amber-50 text-amber-600' },
              { item: 'Projector AF-0062', action: 'maintenance resolved', target: '', meta: 'Facilities Team • 2 hours ago', icon: Wrench, color: 'bg-slate-100 text-slate-600' },
            ].map((activity, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className={`w-12 h-12 ${activity.color} rounded-xl flex items-center justify-center transition-transform group-hover:scale-105`}>
                  <activity.icon size={22} />
                </div>
                <div className="flex-1">
                  <p className="text-[#1E293B] text-sm font-medium">
                    <span className="font-bold">{activity.item}</span> — {activity.action} {activity.target && <span className="text-[#0077B5] font-bold cursor-pointer hover:underline">{activity.target}</span>}
                  </p>
                  <p className="text-[#64748B] text-xs mt-1 font-medium">{activity.meta}</p>
                </div>
                <button className="text-[#94A3B8] hover:text-[#1E293B] p-2 rounded-lg hover:bg-slate-50 transition-colors">
                  <MoreVertical size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar Modules */}
        <div className="space-y-6">
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm">
            <h3 className="text-[10px] font-bold text-[#64748B] uppercase tracking-[0.2em] mb-6">System Orchestration</h3>
            <div className="space-y-4">
              {[
                { title: 'Register Asset', desc: 'Onboard new enterprise hardware', icon: Plus, color: 'bg-blue-50 text-blue-600' },
                { title: 'Book Resource', desc: 'Reserve rooms, vehicles or tools', icon: Building2, color: 'bg-amber-50 text-amber-600' },
                { title: 'Raise Request', desc: 'Report issues or maintenance needs', icon: AlertTriangle, color: 'bg-rose-50 text-rose-600' },
              ].map((action, i) => (
                <button key={i} className="w-full flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-[#E2E8F0] hover:bg-slate-50 transition-all text-left group">
                  <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center shrink-0`}>
                    <action.icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-[#1E293B] truncate">{action.title}</h4>
                    <p className="text-[#64748B] text-[11px] truncate mt-0.5">{action.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Featured Module / Audit Promo */}
          <div className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm">
             <div className="aspect-[16/9] bg-slate-100 relative overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600" 
                 alt="Audit" 
                 className="w-full h-full object-cover opacity-80"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/80 to-transparent" />
               <div className="absolute bottom-4 left-4 right-4">
                 <div className="flex items-center gap-2 text-white/90 text-[10px] font-bold uppercase tracking-widest mb-1">
                   <Clock size={12} />
                   <span>Next Tuesday</span>
                 </div>
               </div>
             </div>
             <div className="p-6">
               <p className="text-[#1E293B] text-sm font-medium leading-relaxed">
                 Inventory Audit is scheduled for <span className="text-[#0077B5] font-bold">Next Tuesday</span>. Please ensure all remote hardware is checked-in digitally by EOD.
               </p>
               <button className="flex items-center gap-2 text-[#0077B5] text-xs font-bold mt-4 group">
                 <span>View Audit Checklist</span>
                 <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
               </button>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
};

// --- App Root ---

export default function AssetFlowApp() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#F7FAFC] flex items-center justify-center p-6 relative overflow-hidden font-inter">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="text-[#1E293B] text-center">
          <p className="italic">Auth views are available in the dedicated Login/Signup implementations.</p>
          <button onClick={() => setIsLoggedIn(true)} className="mt-4 bg-[#0077B5] text-white px-6 py-2 rounded-lg font-bold">Enter Dashboard</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7FAFC] text-[#1E293B] font-inter selection:bg-[#0077B5]/10">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={() => setIsLoggedIn(false)} />
      <div className="ml-64 flex flex-col min-h-screen">
        <TopBar />
        <DashboardView />
        <footer className="px-8 py-6 text-[#94A3B8] text-[10px] uppercase tracking-[0.2em] font-bold border-t border-[#E2E8F0] flex justify-between items-center bg-white">
          <span>© 2024 AssetFlow Technologies Inc. All rights reserved.</span>
          <div className="flex gap-6 lowercase tracking-normal">
             <a href="#" className="hover:text-[#0077B5] transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-[#0077B5] transition-colors">Terms of Service</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
