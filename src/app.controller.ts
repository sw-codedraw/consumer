import {Controller} from '@nestjs/common';
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor() {
  }

  @MessagePattern('TestTopic')
  readMessage(@Payload() message: any, @Ctx() context: KafkaContext) {
    const originalMessage = context.getMessage();
    const response =
      `TestTopic의 메시지: ` +
      JSON.stringify(originalMessage.value);
    console.log(response);
    return response;
  }
}