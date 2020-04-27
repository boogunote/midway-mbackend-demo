import { UserService } from '../service/userService';
export declare class UserController {
    ctx: any;
    userService: UserService;
    get(): Promise<void>;
    login(): Promise<boolean>;
}
