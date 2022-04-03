export const RulesRoutes = [
  {
    path: 'rules',
    loadChildren: () => import('./rules.module').then(m => m.RulesModule),
  },
];
