//import {Connection} from 'mongoose';
//import {TokenSchema} from './schemas/token.schema';
//import { AuthService } from './auth.service';
//import { Tokens } from '../common/constants/tokens.constants';
//
//export const authProviders = [
//  {
//    provide: Tokens.TOKEN_MODEL,
//    useFactory: (connection: Connection) => connection.model('Token', TokenSchema),
//    inject: [Tokens.DB_CONNECTION],
//  },
//  {
//    provide: 'AuthServiceToken',
//    useClass: AuthService,
//  }
//];