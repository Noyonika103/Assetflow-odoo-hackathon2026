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
  MoreVertical,
  LogOut,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  ScanLine
} from 'lucide-react';

/**
 * ASSETFLOW REDESIGN - ASSET DIRECTORY REACT IMPLEMENTATION
 * 
 * This implementation reflects the 'Kinetic Enterprise Redesign' light theme.
 * Focus: 'Social Blue' (#0077B5), clean data hierarchy, and comprehensive asset management.
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
            <p className="text-[#64748B] text-xs truncate">Fleet Manager</p>
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
        placeholder="Search by tag, serial, or QR code..."
        className="w-full bg-[#F1F5F9] border border-transparent rounded-lg py-2 pl-10 pr-4 text-[#1E293B] text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0077B5]/20 focus:border-[#0077B5] transition-all"
      />
    </div>
    <div className="flex items-center gap-4">
      <button className="p-2 text-[#64748B] hover:text-[#1E293B] rounded-lg hover:bg-[#F1F5F9]">
        <HelpCircle size={20} />
      </button>
      <button className="p-2 text-[#64748B] hover:text-[#1E293B] rounded-lg hover:bg-[#F1F5F9]">
        <Settings size={20} />
      </button>
      <button className="flex items-center gap-2 bg-[#0077B5] text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#005F91] transition-colors shadow-sm active:scale-[0.98]">
        <Plus size={18} />
        <span>Register Asset</span>
      </button>
    </div>
  </header>
);

// --- Page View ---

const AssetDirectoryView = () => {
  const [activeFilter, setActiveFilter] = useState('All Assets');

  const assets = [
    { tag: 'AF-0012', name: 'Dell Latitude 5420', sn: '5XJ9K12', category: 'Electronics', status: 'ALLOCATED', location: 'HQ Floor 2 - IT' },
    { tag: 'AF-0062', name: 'Epson Pro Projector', sn: 'EPS-9981-L', category: 'AV Equipment', status: 'AVAILABLE', location: 'Meeting Room B2' },
    { tag: 'AF-0201', name: 'Ergonomic Office Chair', sn: 'CH-A1-04', category: 'Furniture', status: 'INACTIVE', location: 'Main Warehouse' },
    { tag: 'AF-0814', name: 'MacBook Pro 16"', sn: 'C02F5...X0', category: 'Electronics', status: 'MAINTENANCE', location: 'Service Center' },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'ALLOCATED': return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'AVAILABLE': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'INACTIVE': return 'bg-slate-50 text-slate-500 border-slate-100';
      case 'MAINTENANCE': return 'bg-rose-50 text-rose-600 border-rose-100';
      default: return 'bg-slate-50 text-slate-600';
    }
  };

  return (
    <main className="flex-1 overflow-y-auto p-8 space-y-8 bg-[#F7FAFC]">
      {/* Header Section */}
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold text-[#1E293B] tracking-tight">Asset Registrations & Directory</h2>
          <p className="text-[#64748B] text-sm font-medium">Streamlined asset management and tracking for enterprise-grade resources across global locations.</p>
        </div>
        <div className="flex flex-col items-end gap-4">
           <div className="bg-white border border-[#E2E8F0] p-1 rounded-xl flex gap-1 shadow-sm">
             {['All Assets', 'Categories', 'Status'].map((tab) => (
               <button 
                 key={tab}
                 onClick={() => setActiveFilter(tab)}
                 className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                   activeFilter === tab ? 'bg-[#0077B5]/10 text-[#0077B5]' : 'text-[#94A3B8] hover:text-[#64748B]'
                 }`}
               >
                 {tab}
               </button>
             ))}
           </div>
           <button className="flex items-center gap-2 border border-[#E2E8F0] bg-white text-[#1E293B] px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#F8FAFC] transition-all shadow-sm">
             <Filter size={16} className="text-[#0077B5]" />
             <span>Filters</span>
           </button>
        </div>
      </div>

      {/* Main Table Section */}
      <div className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC]/50 border-b border-[#E2E8F0]">
              <th className="px-6 py-4 text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">Asset Tag</th>
              <th className="px-6 py-4 text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">Asset Name</th>
              <th className="px-6 py-4 text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">Category</th>
              <th className="px-6 py-4 text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">Status</th>
              <th className="px-6 py-4 text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">Location</th>
              <th className="px-6 py-4 text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2E8F0]">
            {assets.map((asset, i) => (
              <tr key={i} className="hover:bg-[#F8FAFC]/30 transition-colors group">
                <td className="px-6 py-5">
                  <div className="bg-blue-50 text-[#0077B5] text-[10px] font-bold px-2 py-1 rounded w-fit border border-blue-100">
                    {asset.tag}
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div>
                    <p className="text-sm font-bold text-[#1E293B]">{asset.name}</p>
                    <p className="text-[10px] text-[#94A3B8] mt-0.5 font-medium">S/N: {asset.sn}</p>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm text-[#64748B] font-medium">{asset.category}</span>
                </td>
                <td className="px-6 py-5">
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider border ${getStatusStyle(asset.status)}`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-current" />
                    {asset.status}
                  </div>
                </td>
                <td className="px-6 py-5">
                   <div className="flex items-center gap-2 text-[#64748B]">
                      {asset.status === 'MAINTENANCE' ? <Wrench size={14} className="text-[#0077B5]" /> : <MapPin size={14} className="text-[#0077B5]" />}
                      <span className="text-sm font-medium">{asset.location}</span>
                   </div>
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
        <div className="p-6 bg-[#F8FAFC]/50 flex items-center justify-between border-t border-[#E2E8F0]">
          <p className="text-xs text-[#64748B] font-medium">Showing <span className="font-bold text-[#1E293B]">4</span> of <span className="font-bold text-[#1E293B]">248</span> assets</p>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center border border-[#E2E8F0] rounded-lg text-[#94A3B8] hover:bg-white transition-all disabled:opacity-30" disabled>
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-1">
               <button className="w-8 h-8 flex items-center justify-center bg-[#0077B5] text-white text-xs font-bold rounded-lg">1</button>
               <button className="w-8 h-8 flex items-center justify-center text-[#94A3B8] text-xs font-bold hover:bg-white rounded-lg transition-all">2</button>
               <button className="w-8 h-8 flex items-center justify-center text-[#94A3B8] text-xs font-bold hover:bg-white rounded-lg transition-all">3</button>
            </div>
            <button className="w-8 h-8 flex items-center justify-center border border-[#E2E8F0] rounded-lg text-[#94A3B8] hover:bg-white transition-all">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Modules Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Utilization Card */}
        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group">
           <div className="flex justify-between items-start mb-6">
             <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Current Storage Utilization</p>
             <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
               <ArrowUpRight size={12} />
               <span>4.2%</span>
             </div>
           </div>
           <div className="flex items-baseline gap-2 mb-4">
             <span className="text-4xl font-bold text-[#1E293B]">82</span>
             <span className="text-lg font-bold text-[#64748B]">%</span>
           </div>
           <div className="h-2 w-full bg-[#F1F5F9] rounded-full overflow-hidden">
             <div className="h-full bg-[#0077B5] rounded-full group-hover:opacity-80 transition-all" style={{ width: '82%' }} />
           </div>
        </div>

        {/* Bulk Registration Card */}
        <button className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex items-center gap-5 text-left group">
           <div className="w-14 h-14 bg-blue-50 text-[#0077B5] rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
             <ScanLine size={28} />
           </div>
           <div className="flex-1 min-w-0">
             <h4 className="text-base font-bold text-[#1E293B]">Bulk Registration</h4>
             <p className="text-[#64748B] text-xs mt-1 leading-relaxed">Import CSV or batch scan assets in real-time.</p>
           </div>
           <ArrowRight className="text-[#94A3B8] group-hover:text-[#0077B5] transition-colors" size={20} />
        </button>

        {/* Alert Card */}
        <div className="bg-[#FEF2F2] border border-[#FEE2E2] rounded-2xl p-6 shadow-sm flex items-center gap-5 group">
           <div className="w-14 h-14 bg-white text-[#EF4444] rounded-xl flex items-center justify-center shadow-sm shrink-0 transition-transform group-hover:rotate-12">
             <AlertTriangle size={28} />
           </div>
           <div className="flex-1 min-w-0">
             <h4 className="text-base font-bold text-[#991B1B]">Overdue Returns</h4>
             <p className="text-[#991B1B] text-xs mt-1 leading-relaxed"><span className="font-bold">3 items</span> flagged for immediate follow-up.</p>
           </div>
           <button className="p-2 text-[#94A3B8] hover:text-[#EF4444] rounded-lg">
             <MoreVertical size={18} />
           </button>
        </div>
      </div>
    </main>
  );
};

// --- App Root ---

export default function AssetFlowApp() {
  const [activeTab, setActiveTab] = useState('assets');
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
        <AssetDirectoryView />
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
