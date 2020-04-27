export declare class UserService {
    getUser(id: any): Promise<{
        name: string;
    }>;
    authLogin(id: number, pwd?: string): Promise<boolean>;
}
