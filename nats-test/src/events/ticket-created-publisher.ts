import {Message} from "node-nats-streaming";
import { Publisher } from "./base-publisher";
import {TicketCreatedEvent} from "./ticket-created-event";
import {Subjects} from "./subjects";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject: Subjects.TicketCreated = Subjects.TicketCreated; //need the annotation even after declaring, readonly is the final counterpart in Java
}