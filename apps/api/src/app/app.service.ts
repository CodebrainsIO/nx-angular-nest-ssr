import { Injectable } from '@nestjs/common';
import { Message } from '@ssr-angular/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
