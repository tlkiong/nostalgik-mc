export const GalleryRoutes = [
  {
    path: 'gallery',
    loadChildren: () => import('./gallery.module').then(m => m.GalleryModule),
  },
];
