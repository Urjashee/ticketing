import {Message} from "node-nats-streaming";
import { Listener } from "./base-listener";
import {TicketCreatedEvent} from "./ticket-created-event";
import {Subjects} from "./subjects";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
    readonly subject: Subjects.TicketCreated = Subjects.TicketCreated; //need the annotation even after declaring, readonly is the final counterpart in Java
    queueGroupName = 'payment-service';

    onMessage(data: TicketCreatedEvent['data'], msg: Message): void {
        console.log('Event data!', data)
        console.log(data.id)
        console.log(data.title)
        console.log(data.price)
        msg.ack();
    }

}