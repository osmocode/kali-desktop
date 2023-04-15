import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalComponent } from './terminal.component';
import { TerminalService } from './terminal.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TerminalComponent
    ],
    exports: [
        TerminalComponent
    ],
    providers: [
        TerminalService
    ]
})
export class TerminalModule {}
