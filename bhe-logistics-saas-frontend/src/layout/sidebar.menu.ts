// sidebar.menu.ts

export interface SidebarMenuItem {
  label: string;
  icon?: string;
  path?: string;
  children?: SidebarMenuItem[];
}

export const franchiseMenu: SidebarMenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    path: '/franchise/dashboard',
  },
  {
  label: 'Shipments',
  icon: 'shipment',
  children: [
    { label: 'Create Shipment', icon: 'createShipment', path: '/franchise/shipments/create' },
    { label: 'All Shipments', icon: 'allShipments', path: '/franchise/shipments' },
    { label: 'Tracking', icon: 'tracking', path: '/franchise/shipments/tracking' },
  ],
},
 {
  label: 'Wallet',
  icon: 'wallet',
  children: [
    { label: 'Balance', icon: 'balance', path: '/franchise/wallet' },
    { label: 'Transactions', icon: 'transactions', path: '/franchise/wallet/transactions' },
  ],
},
  {
    label: 'Settings',
    icon: 'settings',
    path: '/franchise/settings',
  },
];

export const superAdminMenu: SidebarMenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    path: '/admin/dashboard',
  },
  {
    label: 'Franchises',
    icon: 'franchise',
    children: [
      { label: 'All Franchises', path: '/admin/franchises' },
      { label: 'Add Franchise', path: '/admin/franchises/create' },
    ],
  },
  {
    label: 'Reports',
    icon: 'reports',
    children: [
      { label: 'Revenue', path: '/admin/reports/revenue' },
      { label: 'Shipments', path: '/admin/reports/shipments' },
    ],
  },
  {
    label: 'Settings',
    icon: 'settings',
    path: '/admin/settings',
  },
];
