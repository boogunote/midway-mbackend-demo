"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_1 = require("@midwayjs/decorator");
const userService_1 = require("../service/userService");
let UserController = class UserController {
    async get() {
        const id = this.ctx.params.id;
        if (!id) {
            throw new Error('id not found');
        }
        this.ctx.body = await this.userService.getUser(id);
    }
    async login() {
        const id = this.ctx.params.id;
        const pwd = this.ctx.request.body;
        if (id) {
            return this.userService.authLogin(id, pwd || '12345');
        }
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], UserController.prototype, "ctx", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", userService_1.UserService)
], UserController.prototype, "userService", void 0);
__decorate([
    decorator_1.Get('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "get", null);
__decorate([
    decorator_1.Post('/login'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
UserController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/user')
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlci91c2VyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1EQUE2RTtBQUM3RSx3REFBcUQ7QUFJckQsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQVN6QixLQUFLLENBQUMsR0FBRztRQUNQLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUM5QixJQUFHLENBQUMsRUFBRSxFQUFFO1lBQ04sTUFBTSxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNqQztRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUdELEtBQUssQ0FBQyxLQUFLO1FBQ1QsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQzlCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUNsQyxJQUFHLEVBQUUsRUFBRTtZQUNMLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxPQUFPLENBQUMsQ0FBQztTQUN2RDtJQUNILENBQUM7Q0FDRixDQUFBO0FBdEJDO0lBREMsa0JBQU0sRUFBRTs7MkNBQ0w7QUFHSjtJQURDLGtCQUFNLEVBQUU7OEJBQ0kseUJBQVc7bURBQUM7QUFHekI7SUFEQyxlQUFHLENBQUMsTUFBTSxDQUFDOzs7O3lDQU9YO0FBR0Q7SUFEQyxnQkFBSSxDQUFDLFFBQVEsQ0FBQzs7OzsyQ0FPZDtBQXhCVSxjQUFjO0lBRjFCLG1CQUFPLEVBQUU7SUFDVCxzQkFBVSxDQUFDLE9BQU8sQ0FBQztHQUNQLGNBQWMsQ0F5QjFCO0FBekJZLHdDQUFjIn0=