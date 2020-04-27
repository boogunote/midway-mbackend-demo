"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_1 = require("@midwayjs/decorator");
let UserService = class UserService {
    async getUser(id) {
        return {
            name: 'zhangting'
        };
    }
    async authLogin(id, pwd) {
        return true;
    }
};
UserService = __decorate([
    decorator_1.Provide()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZS91c2VyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLG1EQUE4QztBQUc5QyxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0lBRXRCLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNkLE9BQU87WUFDTCxJQUFJLEVBQUUsV0FBVztTQUNsQixDQUFBO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBVSxFQUFFLEdBQVk7UUFDdEMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0YsQ0FBQTtBQVhZLFdBQVc7SUFEdkIsbUJBQU8sRUFBRTtHQUNHLFdBQVcsQ0FXdkI7QUFYWSxrQ0FBVyJ9