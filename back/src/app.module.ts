import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Módulo de Usuarios
import { UsersModule } from './modules/reports/users/users.module';
import { UsersController } from './modules/reports/users/users.controller';
import { UsersService } from './modules/reports/users/users.service';

// Módulo de Empresas
import { CompaniesModule } from './modules/companies/companies.module';
import { CompaniesController } from './modules/companies/companies.controller';
import { CompaniesService } from './modules/companies/companies.service';

// Módulo de Valuación
import { ValuationModule } from './modules/valuation/valuation.module';
import { ValuationController } from './modules/valuation/valuation.controller';
import { ValuationService } from './modules/valuation/valuation.service';

// Módulo de Finanzas
import { FinanceModule } from './modules/finance/finance.module';
import { FinanceController } from './modules/finance/finance.controller';
import { FinanceService } from './modules/finance/finance.service';

// Módulo de Proyectos de Valuación
import { ValuationProjectsModule } from './modules/valuation-projects/valuation-projects.module';
import { ValuationProjectsController } from './modules/valuation-projects/valuation-projects.controller';
import { ValuationProjectsService } from './modules/valuation-projects/valuation-projects.service';

// Módulo de Reportes
import { ReportsModule } from './modules/reports/reports.module';
import { ReportsController } from './modules/reports/reports.controller';
import { ReportsService } from './modules/reports/reports.service';

// Módulo de APIs Financieras
import { FinancialApisModule } from './modules/financial-apis/financial-apis.module';
import { FinancialApisController } from './modules/financial-apis/financial-apis.controller';
import { FinancialApisService } from './modules/financial-apis/financial-apis.service';

// Módulo de Pagos
import { PaymentsModule } from './modules/payments/payments.module';
import { PaymentsController } from './modules/payments/payments.controller';
import { PaymentsService } from './modules/payments/payments.service';

// Módulo de Seguridad
import { SecurityModule } from './modules/security/security.module';
import { SecurityController } from './modules/security/security.controller';
import { SecurityService } from './modules/security/security.service';

// Módulo de Notificaciones
import { NotificationsModule } from './modules/notifications/notifications.module';
import { NotificationsController } from './modules/notifications/notifications.controller';
import { NotificationsService } from './modules/notifications/notifications.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeOrmConfig from './config/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrmConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.get('typeorm'),
    }),
    UsersModule,
    CompaniesModule,
    ValuationModule,
    FinanceModule,
    ReportsModule,
    ValuationProjectsModule,
    FinancialApisModule,
    PaymentsModule,
    SecurityModule,
    NotificationsModule,
  ],
  controllers: [
    AppController,
    UsersController,
    CompaniesController,
    ValuationController,
    FinanceController,
    ReportsController,
    ValuationProjectsController,
    FinancialApisController,
    PaymentsController,
    SecurityController,
    NotificationsController,
  ],
  providers: [
    AppService,
    UsersService,
    CompaniesService,
    ValuationService,
    FinanceService,
    ReportsService,
    ValuationProjectsService,
    FinancialApisService,
    PaymentsService,
    SecurityService,
    NotificationsService,
  ],
})
export class AppModule {}
