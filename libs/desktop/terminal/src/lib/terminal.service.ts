import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { io } from 'socket.io-client';

@Injectable()
export class TerminalService {

    private socket: any;
    private uri = "ws://localhost:1234";

    constructor() {
        this.socket = io(this.uri);
        console.log('Terminal service start...');
    }

    listen(event: string) {
        return new Observable((subscriber) => {
            this.socket.on(event, (data: any) => {
                subscriber.next(data);
            });
        })
    }

    emit(event: string, data: any) {
        this.socket.emit(event, data);
    }

}
