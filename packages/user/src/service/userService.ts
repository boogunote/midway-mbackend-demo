import { Provide } from '@midwayjs/decorator';

@Provide()
export class UserService {

  async getUser(id) {
    return {
      name: 'zhangting'
    }
  }

  async authLogin(id: number, pwd?: string) {
    return true;
  }
}
