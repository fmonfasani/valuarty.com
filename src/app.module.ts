import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Módulo de Usuarios
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

// Módulo de Empresas
import { CompaniesModule } from './companies/companies.module';
import { CompaniesController } from './companies/companies.controller';
import { CompaniesService } from './companies/companies.service';

// Módulo de Valuación
import { ValuationModule } from './valuation/valuation.module';
import { ValuationController } from './valuation/valuation.controller';
import { ValuationService } from './valuation/valuation.service';

// Módulo de Finanzas
import { FinanceModule } from './finance/finance.module';
import { FinanceController } from './finance/finance.controller';
import { FinanceService } from './finance/finance.service';

// Módulo de Proyectos de Valuación
import { ValuationProjectsModule } from './valuation-projects/valuation-projects.module';
import { ValuationProjectsController } from './valuation-projects/valuation-projects.controller';
import { ValuationProjectsService } from './valuation-projects/valuation-projects.service';

// Módulo de Reportes
import { ReportsModule } from './reports/reports.module';
import { ReportsController } from './reports/reports.controller';
import { ReportsService } from './reports/reports.service';

// Módulo de APIs Financieras
import { FinancialApisModule } from './financial-apis/financial-apis.module';
import { FinancialApisController } from './financial-apis/financial-apis.controller';
import { FinancialApisService } from './financial-apis/financial-apis.service';

// Módulo de Pagos
import { PaymentsModule } from './payments/payments.module';
import { PaymentsController } from './payments/payments.controller';
import { PaymentsService } from './payments/payments.service';

// Módulo de Seguridad
import { SecurityModule } from './security/security.module';
import { SecurityController } from './security/security.controller';
import { SecurityService } from './security/security.service';

// Módulo de Notificaciones
import { NotificationsModule } from './notifications/notifications.module';
import { NotificationsController } from './notifications/notifications.controller';
import { NotificationsService } from './notifications/notifications.service';

@Module({
  imports: [
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
