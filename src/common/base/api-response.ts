import { HttpStatus, Injectable } from "@nestjs/common";
import { ApiResponseKey } from "src/enum/api-response-key.enum";
@Injectable()
export class ApiResponse {

    private static getTimeStamp() : string {
        return new Date().toISOString();
    }

    static ok<T>(
        data : T,
        message : string ,
        httpStatus : HttpStatus = HttpStatus.OK
    ) : Record<string, unknown> {
        return {
            [ApiResponseKey.STATUS] : true,
            [ApiResponseKey.MESSAGE] : message,
            [ApiResponseKey.DATA] : data,
            [ApiResponseKey.CODE] : httpStatus,
            [ApiResponseKey.TIMESTAMP] : this.getTimeStamp()
        }
    }

    static error<T>(
        data : T,
        message : object,
        httpStatus : HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR,
    ) : Record<string, unknown> {
        return {
            [ApiResponseKey.STATUS] : false,
            [ApiResponseKey.MESSAGE] : message,
            [ApiResponseKey.DATA] : data,
            [ApiResponseKey.CODE] : httpStatus,
            [ApiResponseKey.TIMESTAMP] : this.getTimeStamp()
        }
    }
    static message (
        message : string, 
        httpStatus : HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR
    ) : Record<string, unknown> {
        return {
            [ApiResponseKey.STATUS] : HttpStatus.OK === httpStatus || HttpStatus.CREATED === httpStatus,
            [ApiResponseKey.MESSAGE] : message,
            [ApiResponseKey.TIMESTAMP] : this.getTimeStamp()
        }
    }
}