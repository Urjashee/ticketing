import {ExpirationCompleteEvent, Publisher, Subjects} from "@inquitickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
