import { Provide, Controller, Get, Inject, Post } from '@midwayjs/decorator';
import { UserService } from '../service/userService';

@Provide()
@Controller('/user')
export class UserController {

  @Inject()
  ctx;

  @Inject()
  userService: UserService;

  @Get('/:id')
  async get() {
    const id = this.ctx.params.id;
    if(!id) {
      throw new Error('id not found');
    }
    this.ctx.body = await this.userService.getUser(id);
  }

  @Post('/login')
  async login() {
    const id = this.ctx.params.id;
    const pwd = this.ctx.request.body;
    if(id) {
     this.ctx.body = this.userService.authLogin(id, pwd || '12345');
    }
  }
}
