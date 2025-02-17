import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Chat } from './entities/chat.entity';

@Injectable()
export class ChatService {
  messages: Chat[] = [
    { name: 'Muhammed Ali', text: 'Welcome to the chat.' },
    { name: 'Lebron James', text: 'Thanks bro.' },
  ];

  clientToUser = {};

  identify(name: string, clientId: string) {
    this.clientToUser[clientId] = name;
    return Object.values(this.clientToUser);
  }

  getClientName(clientId: string) {
    return this.clientToUser[clientId];
  }

  create(createChatDto: CreateChatDto, clientId: string) {
    const message = {
      name: this.clientToUser[clientId],
      text: createChatDto.text,
    };
    this.messages.push(message);
    return message;
  }

  findAll() {
    return this.messages;
  }
}
