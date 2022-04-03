export const HomeRoutes = [
  {
    path: '',
    loadChildren: () => import('./home.module').then(m => m.HomeModule),
  },
];
