import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { TerminalService } from "./terminal.service";
import { Terminal } from "xterm";


@Component({
    selector: 'kali-terminal',
    template: `<div #shell></div>`
})
export class TerminalComponent implements AfterViewInit {

    private term!: Terminal;
    @ViewChild('shell', { static: true }) shell!: ElementRef;

    constructor(
        private readonly service: TerminalService
    ) {}

    ngAfterViewInit(): void {
        this.term = new Terminal();
        this.term.open(this.shell.nativeElement);
        this.service.listen("terminal.incomingData").subscribe((data: any) => {
            this.term.write(data);
        });
        this.term.onData((data) => {
            this.service.emit("terminal.keystroke", data);
        });
    }

}
