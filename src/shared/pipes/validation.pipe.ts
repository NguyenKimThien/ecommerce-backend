
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */

import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { validate, ValidationError } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { ApiResponse } from '../../common/base/api-response';

@Injectable()
export class ValidationPipe implements PipeTransform<unknown> {
  async transform(value: unknown, { metatype }: ArgumentMetadata) {
    if(!value){
      throw new HttpException(ApiResponse.message('No data provided'), HttpStatus.BAD_REQUEST);
    } 

    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const object = plainToInstance(metatype, value);
    const errors = await validate(object);
 
    const formatedErrors = this.formatErrors(errors);

    if (errors.length > 0) {
      throw new HttpException(ApiResponse.error(value,formatedErrors), HttpStatus.BAD_REQUEST);
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }

  private formatErrors(errors: ValidationError[]): Record<string , unknown> {
    const result = {};
    errors.forEach((element) => {
      if (element.constraints) {
        result[element.property] = Object.values(element.constraints);
      }
    });
    return result;
  }
}
