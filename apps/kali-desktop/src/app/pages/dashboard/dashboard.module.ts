import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { TerminalModule } from '@kali/desktop/terminal';

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        TerminalModule,
        RouterModule.forChild([
            {
                path: '',
                component: DashboardComponent
            }
        ])
    ],
})
export class DashboardModule {}
