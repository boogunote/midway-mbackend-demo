import { Provide, Controller, Get, Inject } from '@midwayjs/decorator';

const html = `
hello, this is midway one package demo.<br/>
there has two link, <a href="/user/12">user module</a> and <a href="/book/1234">book module</a><br/>
these routes from different package.
`;

@Provide()
@Controller('/')
export class HomeController {

  @Inject()
  ctx;

  @Get('/')
  async get() {
    this.ctx.type = 'html';
    this.ctx.body = html;
  }

}
