import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { Tab1Page } from './tab1/tab1.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'tabs',
        component: TabsPage,
        children: [
          {
            path: 'tab1',
            component: Tab1Page
          },
          {
            path: 'tab2',
            children: [
              {
                path: '',
                loadChildren: './tab2/tab2.module#Tab2PageModule'
              }
            ]
          },
          {
            path: 'tab3',
            children: [
              {
                path: '',
                loadChildren: './tab3/tab3.module#Tab3PageModule'
              }
            ]
          },
          {
            path: '',
            redirectTo: '/tabs/tab1',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
