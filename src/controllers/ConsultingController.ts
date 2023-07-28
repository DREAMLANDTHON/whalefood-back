import { Service } from "typedi";
import {
    Body,
  Get,
  HttpCode,
  JsonController,
  Param,
  Post,
  Req,
  UseBefore
} from "routing-controllers";
import { CreateUserDto, LoginUserDto } from "../dtos/UserDto";
import { ConsultingService } from "../services/ConsultingService";
import { CreateConsultingDto } from "../dtos/ConsultingDto";
const nickname = "재민";

@JsonController("/consulting")
@Service()
export class ConsultingController {
    constructor(private readonly _consultingService:ConsultingService){}

    @HttpCode(201)
    @Post("/chat")
    public async chatConculting(@Body() createConsultingDto:CreateConsultingDto) {
       try{
        return this._consultingService.chatConsulting(nickname, createConsultingDto);
       }catch(error) {
        console.log(error);
       }
    }

    @HttpCode(201)
    @Post("/list")
    public async consultingList() {
       try{
        return this._consultingService.consultingList(nickname);
       }catch(error) {
        console.log(error);
       }
    }
}