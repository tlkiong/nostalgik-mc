export const StaffRoutes = [
  {
    path: 'staff',
    loadChildren: () => import('./staff.module').then(m => m.StaffModule),
  },
];
