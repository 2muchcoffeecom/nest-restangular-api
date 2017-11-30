import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';

@Module({
  modules: [
    CoreModule,
    AuthModule
  ],
  controllers: [],
  components: [],
})
export class ApplicationModule {}
