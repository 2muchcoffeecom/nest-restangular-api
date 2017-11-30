//import { Model } from 'mongoose';
//import * as bcrypt from 'bcrypt-nodejs';
//import * as crypto from 'crypto';
//import * as moment from 'moment';
//import { Component, Inject, HttpStatus, HttpException } from '@nestjs/common';
//import { User } from '../users/interfaces/user.interface';
//import { Token } from './interfaces/token.interface';
//import { Tokens } from '../common/constants/tokens.constants';
////import { CreateUserDto } from '../users/dto/create-user.dto';
//
//@Component()
//export class AuthService {
//  constructor(
//    @Inject('UserModelToken') private readonly userModel: Model<User>,
//    @Inject(Tokens.TOKEN_MODEL) private readonly tokenModel: Model<Token>,
//  ) {}
//
//  async auth(createUserDto: any): Promise<any> {
//    return this.userModel
//    .findOne({email: createUserDto.email.toLowerCase()})
//    .exec()
//    .then((user: any): Promise<any> => {
//      if (!user) {
//        throw new HttpException('wrong email or password', HttpStatus.UNPROCESSABLE_ENTITY);
//      }
//      return new Promise((resolve, reject) => {
//        bcrypt.compare(createUserDto.password, user.password, (err, match) => {
//          if (err || !match) return reject({message: 'wrong email or password', status: 422});
//          return resolve(user);
//        })
//      })
//    });
//  }
//
//  async createToken(userId: string): Promise<Token> {
//    return this.tokenModel
//    .create({
//      id: crypto.randomBytes(64).toString('hex'),
//      expiredAt: moment().add(process.env.SESSION_EXPIRY, 's').toDate(),
//      userId: userId,
//    })
//  }
//
//  async findToken(id: string): Promise<Token> {
//    const date = new Date();
//    return this.tokenModel
//    .findOne({
//      id,
//      expiredAt: {
//        $gt: date.toISOString()
//      }
//    })
//    .lean()
//    .then((token: Token): any => {
//      if (!token) {
//        throw new HttpException('token expired', HttpStatus.UNAUTHORIZED);
//      }
//      return token;
//    });
//  }
//
//  async removeToken(id: string): Promise<any> {
//    return this.tokenModel
//    .findOne({id})
//    .remove();
//  }
//
//}