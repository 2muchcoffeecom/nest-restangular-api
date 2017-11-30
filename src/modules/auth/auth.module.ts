import {Module} from '@nestjs/common';
import {AuthController} from './auth.controller';

@Module({
  modules: [],
  controllers: [AuthController],
  components: [
  ],
  exports: [
  ],
})
export class AuthModule {}