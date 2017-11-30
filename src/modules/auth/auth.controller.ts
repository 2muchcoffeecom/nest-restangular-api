import { Controller, Post, Body } from '@nestjs/common';

@Controller()
export class AuthController {
  
  constructor() {
  }

  @Post('signup')
  async signup(@Body() body: any) {
    console.log(body);
    return body;
  }

}