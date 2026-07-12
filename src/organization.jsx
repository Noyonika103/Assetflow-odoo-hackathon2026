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
  ChevronLeft,
  ChevronRight,
  User,
  Mail,
  Lock,
  Eye,
  ArrowRight
} from 'lucide-react';

/**
 * ASSETFLOW REDESIGN - ORGANIZATION SETUP REACT IMPLEMENTATION
 * 
 * This implementation reflects the 'Kinetic Enterprise Redesign' light theme.
 * Focus: 'Social Blue' (#0077B5), clean data hierarchy, and interactive registry management.
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
            <p className="text-[#64748B] text-xs truncate">Enterprise Admin</p>
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
        placeholder="Search organization..."
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

// --- Page View ---

const OrganizationSetupView = () => {
  const [activeSubTab, setActiveSubTab] = useState('Departments');

  const subTabs = ['Departments', 'Categories', 'Employee'];

  const stats = [
    { label: 'Total Departments', value: '12', icon: Building2, color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { label: 'Total Heads', value: '08', icon: User, color: 'text-amber-600', bgColor: 'bg-amber-50' },
    { label: 'Active Units', value: '94%', icon: ClipboardCheck, color: 'text-emerald-600', bgColor: 'bg-emerald-50' },
  ];

  const departments = [
    { name: 'Engineering', head: 'Aditi Rao', headImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100', parent: '—', status: 'ACTIVE' },
    { name: 'Facilities', head: 'Rohan Mehta', headImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100', parent: '—', status: 'ACTIVE' },
    { name: 'Field ops (east)', head: 'Sana Iqbal', headImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100', parent: 'Field Ops', status: 'INACTIVE' },
    { name: 'Human Resources', head: 'Mira Kapoor', headImg: null, headInitials: 'MK', parent: '—', status: 'ACTIVE' },
  ];

  return (
    <main className="flex-1 overflow-y-auto p-8 space-y-8">
      {/* Header Section */}
      <div className="space-y-1">
        <h2 className="text-3xl font-bold text-[#1E293B] tracking-tight">Organization Setup</h2>
        <p className="text-[#64748B] text-sm font-medium">Streamline your enterprise structure and departmental hierarchies.</p>
      </div>

      {/* Sub-Navigation & Actions */}
      <div className="flex items-center justify-between border-b border-[#E2E8F0]">
        <div className="flex gap-8">
          {subTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSubTab(tab)}
              className={`pb-4 text-sm font-bold transition-all relative ${
                activeSubTab === tab 
                ? 'text-[#0077B5]' 
                : 'text-[#94A3B8] hover:text-[#64748B]'
              }`}
            >
              {tab}
              {activeSubTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0077B5] rounded-full" />
              )}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-2 border border-[#E2E8F0] bg-white text-[#1E293B] px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#F8FAFC] transition-all mb-4 shadow-sm">
          <Plus size={16} className="text-[#0077B5]" />
          <span>Add Department</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white border border-[#E2E8F0] rounded-2xl p-6 flex items-center gap-5 shadow-sm hover:shadow-md transition-all group">
            <div className={`w-14 h-14 ${stat.bgColor} rounded-xl flex items-center justify-center transition-transform group-hover:scale-105`}>
              <stat.icon className={stat.color} size={28} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">{stat.label}</p>
              <p className="text-3xl font-bold text-[#1E293B] mt-1">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Registry Table Section */}
      <div className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-[#E2E8F0] flex items-center justify-between bg-[#F8FAFC]/50">
          <h3 className="text-lg font-bold text-[#1E293B]">Department Registry</h3>
          <div className="flex gap-2">
            <button className="p-2 text-[#64748B] hover:text-[#1E293B] hover:bg-white rounded-lg transition-all border border-transparent hover:border-[#E2E8F0]">
              <Filter size={18} />
            </button>
            <button className="p-2 text-[#64748B] hover:text-[#1E293B] hover:bg-white rounded-lg transition-all border border-transparent hover:border-[#E2E8F0]">
              <Download size={18} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                <th className="px-6 py-4 text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">Department Name</th>
                <th className="px-6 py-4 text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">Head</th>
                <th className="px-6 py-4 text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">Parent Dept</th>
                <th className="px-6 py-4 text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0]">
              {departments.map((dept, i) => (
                <tr key={i} className="hover:bg-[#F8FAFC] transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${dept.status === 'ACTIVE' ? 'bg-[#0077B5]' : 'bg-[#94A3B8]'}`} />
                      <span className="text-sm font-bold text-[#1E293B]">{dept.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      {dept.headImg ? (
                        <img src={dept.headImg} alt={dept.head} className="w-8 h-8 rounded-full object-cover border border-[#E2E8F0]" />
                      ) : (
                        <div className="w-8 h-8 bg-[#F1F5F9] rounded-full flex items-center justify-center text-[10px] font-bold text-[#64748B] border border-[#E2E8F0]">
                          {dept.headInitials}
                        </div>
                      )}
                      <span className="text-sm font-medium text-[#1E293B]">{dept.head}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm text-[#64748B] font-medium">{dept.parent}</span>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider ${
                      dept.status === 'ACTIVE' 
                      ? 'bg-[#E0F2FE] text-[#0077B5]' 
                      : 'bg-[#F1F5F9] text-[#64748B]'
                    }`}>
                      {dept.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="p-2 text-[#94A3B8] hover:text-[#1E293B] rounded-lg opacity-0 group-hover:opacity-100 transition-all">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer / Pagination */}
        <div className="p-6 bg-[#F8FAFC]/50 flex items-center justify-between border-t border-[#E2E8F0]">
          <p className="text-xs text-[#64748B] font-medium">Showing <span className="font-bold text-[#1E293B]">4</span> of <span className="font-bold text-[#1E293B]">12</span> departments</p>
          <div className="flex gap-2">
            <button className="p-2 border border-[#E2E8F0] rounded-lg text-[#94A3B8] hover:bg-white hover:text-[#1E293B] transition-all disabled:opacity-50" disabled>
              <ChevronLeft size={18} />
            </button>
            <button className="p-2 border border-[#E2E8F0] rounded-lg text-[#94A3B8] hover:bg-white hover:text-[#1E293B] transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* System Notice Section */}
      <div className="bg-[#E0F2FE] border border-[#BAE6FD] rounded-xl p-5 flex items-start gap-4 shadow-sm relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-5 transition-transform group-hover:scale-110">
           <Plus size={100} className="text-[#0077B5]" />
        </div>
        <div className="p-2 bg-white rounded-lg text-[#0077B5] shadow-sm shrink-0">
          <HelpCircle size={20} />
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-bold text-[#0369A1]">System Notice</h4>
          <p className="text-sm text-[#0C4A6E] mt-1 leading-relaxed">
            Changes to department hierarchy will update directory lookups globally. Please audit high-level changes before finalizing.
          </p>
        </div>
        <button className="bg-[#0077B5] text-white p-3 rounded-full shadow-lg shadow-blue-500/20 hover:bg-[#005F91] transition-all self-center active:scale-95">
          <Plus size={24} />
        </button>
      </div>
    </main>
  );
};

// --- App Root ---

export default function AssetFlowApp() {
  const [activeTab, setActiveTab] = useState('org');
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => setIsLoggedIn(false);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#F7FAFC] flex items-center justify-center p-6 relative overflow-hidden font-inter">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="text-center">
           <div className="w-16 h-16 bg-[#0077B5] rounded-2xl flex items-center justify-center font-bold text-3xl text-white mx-auto mb-6 shadow-xl shadow-blue-500/20">AF</div>
           <h2 className="text-2xl font-bold text-[#1E293B]">Session Expired</h2>
           <button 
             onClick={() => setIsLoggedIn(true)} 
             className="mt-6 bg-[#0077B5] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#005F91] transition-all shadow-lg shadow-blue-500/10"
           >
             Return to Workspace
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7FAFC] text-[#1E293B] font-inter selection:bg-[#0077B5]/10">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={handleLogout} />
      <div className="ml-64 flex flex-col min-h-screen">
        <TopBar />
        <OrganizationSetupView />
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
