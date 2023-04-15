import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PreloadAllModules, Route, RouterModule } from "@angular/router";

const routes: Route[] = [
    {
        path: 'dashboard',
        loadChildren: () => import(
            /* webpackChunkName: "dashboard" */
            './pages/dashboard/dashboard.module'
        ).then(m => m.DashboardModule)
    },
    {
        path: 'nmap',
        loadChildren: () => import(
            /* webpackChunkName: "nmap" */
            './pages/nmap/nmap.module'
        ).then(m => m.NmapModule)
    },
    { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {
            enableTracing: false,
            preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
