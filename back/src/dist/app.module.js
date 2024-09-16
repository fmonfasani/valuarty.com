"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./modules/reports/users/users.module");
const users_controller_1 = require("./modules/reports/users/users.controller");
const users_service_1 = require("./modules/reports/users/users.service");
const companies_module_1 = require("./modules/companies/companies.module");
const companies_controller_1 = require("./modules/companies/companies.controller");
const companies_service_1 = require("./modules/companies/companies.service");
const valuation_module_1 = require("./modules/valuation/valuation.module");
const valuation_controller_1 = require("./modules/valuation/valuation.controller");
const valuation_service_1 = require("./modules/valuation/valuation.service");
const finance_module_1 = require("./modules/finance/finance.module");
const finance_controller_1 = require("./modules/finance/finance.controller");
const finance_service_1 = require("./modules/finance/finance.service");
const valuation_projects_module_1 = require("./modules/valuation-projects/valuation-projects.module");
const valuation_projects_controller_1 = require("./modules/valuation-projects/valuation-projects.controller");
const valuation_projects_service_1 = require("./modules/valuation-projects/valuation-projects.service");
const reports_module_1 = require("./modules/reports/reports.module");
const reports_controller_1 = require("./modules/reports/reports.controller");
const reports_service_1 = require("./modules/reports/reports.service");
const financial_apis_module_1 = require("./modules/financial-apis/financial-apis.module");
const financial_apis_controller_1 = require("./modules/financial-apis/financial-apis.controller");
const financial_apis_service_1 = require("./modules/financial-apis/financial-apis.service");
const payments_module_1 = require("./modules/payments/payments.module");
const payments_controller_1 = require("./modules/payments/payments.controller");
const payments_service_1 = require("./modules/payments/payments.service");
const security_module_1 = require("./modules/security/security.module");
const security_controller_1 = require("./modules/security/security.controller");
const security_service_1 = require("./modules/security/security.service");
const notifications_module_1 = require("./modules/notifications/notifications.module");
const notifications_controller_1 = require("./modules/notifications/notifications.controller");
const notifications_service_1 = require("./modules/notifications/notifications.service");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("./config/typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [typeorm_1.default],
            }),
            typeorm_2.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (config) => config.get('typeorm'),
            }),
            users_module_1.UsersModule,
            companies_module_1.CompaniesModule,
            valuation_module_1.ValuationModule,
            finance_module_1.FinanceModule,
            reports_module_1.ReportsModule,
            valuation_projects_module_1.ValuationProjectsModule,
            financial_apis_module_1.FinancialApisModule,
            payments_module_1.PaymentsModule,
            security_module_1.SecurityModule,
            notifications_module_1.NotificationsModule,
        ],
        controllers: [
            app_controller_1.AppController,
            users_controller_1.UsersController,
            companies_controller_1.CompaniesController,
            valuation_controller_1.ValuationController,
            finance_controller_1.FinanceController,
            reports_controller_1.ReportsController,
            valuation_projects_controller_1.ValuationProjectsController,
            financial_apis_controller_1.FinancialApisController,
            payments_controller_1.PaymentsController,
            security_controller_1.SecurityController,
            notifications_controller_1.NotificationsController,
        ],
        providers: [
            app_service_1.AppService,
            users_service_1.UsersService,
            companies_service_1.CompaniesService,
            valuation_service_1.ValuationService,
            finance_service_1.FinanceService,
            reports_service_1.ReportsService,
            valuation_projects_service_1.ValuationProjectsService,
            financial_apis_service_1.FinancialApisService,
            payments_service_1.PaymentsService,
            security_service_1.SecurityService,
            notifications_service_1.NotificationsService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map