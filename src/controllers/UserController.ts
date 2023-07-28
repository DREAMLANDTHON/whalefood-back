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
import {UserService} from "../services/UserService"
import { createResponseForm } from "../interceptors/transformer";

@JsonController("/auth")
@Service()
export class UserController {
    constructor(private readonly _userService:UserService){}
    @HttpCode(201)
    @Post("/register")
    public async register(@Body() createUserDto : CreateUserDto) {
       try{
        await this._userService.register(createUserDto);
        return createResponseForm(undefined);
       }catch(error) {
        console.log(error);
       }
    }
    @HttpCode(201)
    @Post("/login")
    public async login(@Body() loginUserDto: LoginUserDto) {
      try{
        await this,this._userService.login(loginUserDto);
        return createResponseForm(undefined);
      }catch(error){
        console.log(error);
      }
    }
}