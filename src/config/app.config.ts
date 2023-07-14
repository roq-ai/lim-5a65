interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Organisation Admin'],
  customerRoles: [],
  tenantRoles: ['Doctor', 'Lab User', 'Organisation Admin'],
  tenantName: 'Organization',
  applicationName: 'LIM',
  addOns: ['file', 'notifications'],
};
