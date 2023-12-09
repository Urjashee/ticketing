import { Publisher, OrderCreatedEvent, Subjects } from '@inquitickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
