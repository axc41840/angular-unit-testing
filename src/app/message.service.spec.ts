import { MessageService } from "./message.service"

describe('Message Service',() => {
  let service: MessageService;

  beforeEach(() => {

  })

  it('should have no messages initially', () => {
    service = new MessageService();

    expect(service.messages.length).toBe(0);
  })

  it('should have add message', () => {
    service = new MessageService();

    service.add('test message');

    expect(service.messages.length).toBe(1);
  })

  it('should have clear messages', () => {
    service = new MessageService();
    service.add('test message');

    service.clear();

    expect(service.messages.length).toBe(0);
  })
})
