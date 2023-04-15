import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NmapComponent } from './nmap.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [NmapComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: NmapComponent
            }
        ])
    ],
})
export class NmapModule {}
