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

@JsonController("/auth")
@Service()
export class UserController {
    constructor(private readonly _userService:UserService){}
    @HttpCode(201)
    @Post("/register")
    public async register(@Body() createUserDto : CreateUserDto) {
       try{
        return this._userService.register(createUserDto);
       }catch(error) {
        console.log(error);
       }
    }
    @HttpCode(201)
    @Post("/login")
    public async login(@Body() loginUserDto: LoginUserDto) {
      try{
        return this,this._userService.login(loginUserDto);
      }catch(error){
        console.log(error);
      }
    }
}