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
import { ConsultingService } from "../services/ConsultingService";
import { CreateConsultingDto } from "../dtos/ConsultingDto";
import { logger } from "../utils/Logger";
import { createResponseForm } from "../interceptors/transformer";
const nickname = "재민";

@JsonController("/consulting")
@Service()
export class ConsultingController {
    constructor(private readonly _consultingService:ConsultingService){}

    @HttpCode(201)
    @Post("/chat")
    public async chatConculting(@Body() createConsultingDto:CreateConsultingDto) {
       try{
        const data = this._consultingService.chatConsulting(nickname, createConsultingDto);
        return createResponseForm(data);
       }catch(error) {
        logger.error(error);
       }
    }

    @HttpCode(201)
    @Post("/list")
    public async consultingList() {
       try{
         const data = this._consultingService.consultingList(nickname);
         return createResponseForm(data);
       }catch(error) {
        console.log(error);
       }
    }
}