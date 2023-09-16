interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Logistics Manager', 'Admin'],
  tenantName: 'Company',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read tool information', 'Book a tool', 'Read rental information', 'Read outlet information'],
  ownerAbilities: [
    'Manage users',
    'Manage companies',
    'Manage tools',
    'Manage rentals',
    'Manage outlets',
    'Manage stocks',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/474d505e-011b-4fee-8ece-f02c0f4e4b05',
};
