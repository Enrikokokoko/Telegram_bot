import { Injectable, Logger } from '@nestjs/common';
// import { TELEGRAM_TOKEN, Test_USER_ID } from 'src/config';

const Bot = require('node-telegram-bot-api')


const Test_USER_ID = '744225651'
const TELEGRAM_TOKEN = '6080185918:AAGWcu5dv8SSevLaylUtrto__RYWZshVZ18'


@Injectable()
export class TelegramBot {
    private readonly bot:any
    private logger = new Logger(TelegramBot.name)
    
    // constructor() {
    //     this.bot = new Bot(TELEGRAM_TOKEN, {polling: true});

    //     this.bot.on("message", this.onReceiveMessage)

    //     this.sendMessageToUser(Test_USER_ID, `Server started at ${new Date()}`)
    // }

    static instance: any;

    constructor() {
    if (!TelegramBot.instance) {
      this.bot = new Bot(TELEGRAM_TOKEN, { polling: true });
      this.bot.on('message', this.onReceiveMessage);
      this.sendMessageToUser(Test_USER_ID, `Server started at ${new Date()}`);
      TelegramBot.instance = this;
    }
    return TelegramBot.instance;
  }

    onReceiveMessage = (msg:any) => {
        this.logger.debug(msg)
    }

    sendMessageToUser = (userId:string, message: string) => {
        this.bot.sendMessage(userId, message);
    }
}
