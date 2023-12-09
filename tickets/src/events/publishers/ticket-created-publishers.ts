import {Publisher, Subjects, TicketCreatedEvent} from "@inquitickets/common";

export class TicketCreatedPublishers extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;

}