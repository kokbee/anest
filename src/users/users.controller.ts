import {
  Body,
  Controller,
  Get, Post, Req, Res
} from '@nestjs/common'
import {ApiOperation} from '@nestjs/swagger'
import { JoinRequestDTO } from './dto/join.request.dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {
  }

  @Get()
  getUsers(@Req() req) {
    return req.user
  }

  @ApiOperation({summary: '회원가입'})
  @Post()
  postUsers(@Body() data: JoinRequestDTO, ) {
    this.userService.postUsers(data.email, data.nickname, data.password)
  }

  @ApiOperation({summary: '로그인'})
  @Post('login')
  logIn() {

  }

  @ApiOperation({summary: '로그아웃'})
  @Post('logout')
  logOut(@Req() req, @Res() res) {
    req.logout()
    res.clearCookie('connect.sid', { httpOnly: true })
    res.send('ok')
  }
}
