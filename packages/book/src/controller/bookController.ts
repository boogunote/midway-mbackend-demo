import { Provide, Controller, Get, Inject } from '@midwayjs/decorator';

@Provide()
@Controller('/book')
export class BookController {

  @Inject()
  ctx;

  @Inject()
  bookService;

  @Get('/')
  async get() {
    this.ctx.body = await this.bookService.getBook();
  }

  @Get('/:id')
  async getBook() {
    const id = this.ctx.params.id;
    this.ctx.body = await this.bookService.getBook(id);
  }
}
