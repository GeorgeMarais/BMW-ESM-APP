import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './resolver/data-resolver.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'create/account',
    loadChildren: () =>
      import('./create-account/create-account.module').then(
        (m) => m.CreateAccountPageModule
      ),
  },
  {
    path: 'update/client',
    loadChildren: () =>
      import('./update-client/update-client.module').then(
        (m) => m.UpdateClientPageModule
      ),
  },
  {
    path: 'update/client/:id',
    resolve: {
      special: DataResolverService,
    },
    loadChildren: () =>
      import('./update-client/update-client.module').then(
        (m) => m.UpdateClientPageModule
      ),
  },
  {
    path: 'search/account/employee',
    loadChildren: () =>
      import('./searchemployeeaccount/searchemployeeaccount.module').then(
        (m) => m.SearchemployeeaccountPageModule
      ),
  },
  {
    path: 'password/reset',
    loadChildren: () =>
      import('./password-reset/password-reset.module').then(
        (m) => m.PasswordResetPageModule
      ),
  },
  {
    path: 'verify-email',
    loadChildren: () =>
      import('./verify-email/verify-email.module').then(
        (m) => m.VerifyEmailPageModule
      ),
  },
  {
    path: 'dashboard/client',
    loadChildren: () =>
      import('./dashboard-client/dashboard-client.module').then(
        (m) => m.DashboardClientPageModule
      ),
  },
  {
    path: 'dashboard/client/:id',
    resolve: {
      special: DataResolverService,
    },
    loadChildren: () =>
      import('./dashboard-client/dashboard-client.module').then(
        (m) => m.DashboardClientPageModule
      ),
  },
  {
    path: 'search/account/client',
    loadChildren: () =>
      import('./searchclientaccount/searchclientaccount.module').then(
        (m) => m.SearchclientaccountPageModule
      ),
  },
  {
    path: 'dashboard/employee',
    loadChildren: () =>
      import('./dashboard-employee/dashboard-employee.module').then(
        (m) => m.DashboardEmployeePageModule
      ),
  },
  {
    path: 'dashboard/employee/:id',
    resolve: {
      special: DataResolverService,
    },
    loadChildren: () =>
      import('./dashboard-employee/dashboard-employee.module').then(
        (m) => m.DashboardEmployeePageModule
      ),
  },
  {
    path: 'view/client',
    loadChildren: () =>
      import('./view-client-account/view-client-account.module').then(
        (m) => m.ViewClientAccountPageModule
      ),
  },
  {
    path: 'view/client/:id',
    resolve: {
      special: DataResolverService,
    },
    loadChildren: () =>
      import('./view-client-account/view-client-account.module').then(
        (m) => m.ViewClientAccountPageModule
      ),
  },
  {
    path: 'view/employee-account',
    loadChildren: () =>
      import('./view-employee-account/view-employee-account.module').then(
        (m) => m.ViewEmployeeAccountPageModule
      ),
  },
  {
    path: 'view/employee/:id',
    resolve: {
      special: DataResolverService,
    },
    loadChildren: () =>
      import('./view-employee-account/view-employee-account.module').then(
        (m) => m.ViewEmployeeAccountPageModule
      ),
  },
  {
    path: 'update/employee',
    loadChildren: () =>
      import('./update-employee/update-employee.module').then(
        (m) => m.UpdateEmployeePageModule
      ),
  },
  {
    path: 'update/employee/:id',
    resolve: {
      special: DataResolverService,
    },
    loadChildren: () =>
      import('./update-employee/update-employee.module').then(
        (m) => m.UpdateEmployeePageModule
      ),
  },
  {
    path: 'add/vehicle',
    loadChildren: () =>
      import('./add-vehicle/add-vehicle.module').then(
        (m) => m.AddVehiclePageModule
      ),
  },
  {
    path: 'search/vehicle',
    loadChildren: () =>
      import('./search-vehicle/search-vehicle.module').then(
        (m) => m.SearchVehiclePageModule
      ),
  },
  {
    path: 'view/vehicle',
    loadChildren: () =>
      import('./view-vehicle/view-vehicle.module').then(
        (m) => m.ViewVehiclePageModule
      ),
  },
  {
    path: 'view/vehicle/:id',
    resolve: {
      special: DataResolverService,
    },
    loadChildren: () =>
      import('./view-vehicle/view-vehicle.module').then(
        (m) => m.ViewVehiclePageModule
      ),
  },
  {
    path: 'assign/dealership',
    loadChildren: () =>
      import('./assign-dealership/assign-dealership.module').then(
        (m) => m.AssignDealershipPageModule
      ),
  },
  {
    path: 'edit/dealership',
    loadChildren: () =>
      import('./edit-dealership/edit-dealership.module').then(
        (m) => m.EditDealershipPageModule
      ),
  },
  {
    path: 'edit/dealership/:id',
    resolve: {
      special: DataResolverService,
    },
    loadChildren: () =>
      import('./edit-dealership/edit-dealership.module').then(
        (m) => m.EditDealershipPageModule
      ),
  },
  {
    path: 'search/dealership',
    loadChildren: () =>
      import('./search-dealership/search-dealership.module').then(
        (m) => m.SearchDealershipPageModule
      ),
  },
  {
    path: 'search/maintenance-plan',
    loadChildren: () =>
      import('./searchmaintenanceplan/searchmaintenanceplan.module').then(
        (m) => m.SearchmaintenanceplanPageModule
      ),
  },
  {
    path: 'select/maintenanceplan',
    loadChildren: () =>
      import('./select-maintenanceplan/select-maintenanceplan.module').then(
        (m) => m.SelectMaintenanceplanPageModule
      ),
  },
  {
    path: 'upgrade/maintenance-plan',
    loadChildren: () =>
      import('./upgrade-maintenanceplan/upgrade-maintenanceplan.module').then(
        (m) => m.UpgradeMaintenanceplanPageModule
      ),
  },
  {
    path: 'upgrade/maintenance-plan/:id',
    resolve: {
      special: DataResolverService,
    },
    loadChildren: () =>
      import('./upgrade-maintenanceplan/upgrade-maintenanceplan.module').then(
        (m) => m.UpgradeMaintenanceplanPageModule
      ),
  },
  {
    path: 'view/maintenance-plan',
    loadChildren: () =>
      import('./view-maintenanceplan/view-maintenanceplan.module').then(
        (m) => m.ViewMaintenanceplanPageModule
      ),
  },
  {
    path: 'view/maintenance-plan/:id',
    resolve: {
      special: DataResolverService,
    },
    loadChildren: () =>
      import('./view-maintenanceplan/view-maintenanceplan.module').then(
        (m) => m.ViewMaintenanceplanPageModule
      ),
  },
  {
    path: 'initiate-service-procedure',
    loadChildren: () =>
      import(
        './initiate-service-procedure/initiate-service-procedure.module'
      ).then((m) => m.InitiateServiceProcedurePageModule),
  },
  {
    path: 'create/service',
    loadChildren: () =>
      import('./create-service/create-service.module').then(
        (m) => m.CreateServicePageModule
      ),
  },
  {
    path: 'update/service',
    loadChildren: () =>
      import('./update-service/update-service.module').then(
        (m) => m.UpdateServicePageModule
      ),
  },
  {
    path: 'update/service/:id',
    resolve: {
      special: DataResolverService,
    },
    loadChildren: () =>
      import('./update-service/update-service.module').then(
        (m) => m.UpdateServicePageModule
      ),
  },
  {
    path: 'search/service',
    loadChildren: () =>
      import('./search-service/search-service.module').then(
        (m) => m.SearchServicePageModule
      ),
  },
  {
    path: 'view/service',
    loadChildren: () =>
      import('./view-service/view-service.module').then(
        (m) => m.ViewServicePageModule
      ),
  },
  {
    path: 'view/service/:id',
    resolve: {
      special: DataResolverService,
    },
    loadChildren: () =>
      import('./view-service/view-service.module').then(
        (m) => m.ViewServicePageModule
      ),
  },
  {
    path: 'create/fleet',
    loadChildren: () =>
      import('./create-fleet/create-fleet.module').then(
        (m) => m.CreateFleetPageModule
      ),
  },
  {
    path: 'search/fleet',
    loadChildren: () =>
      import('./search-fleet/search-fleet.module').then(
        (m) => m.SearchFleetPageModule
      ),
  },
  {
    path: 'edit/fleet',
    loadChildren: () =>
      import('./edit-fleet/edit-fleet.module').then(
        (m) => m.EditFleetPageModule
      ),
  },
  {
    path: 'edit/fleet/:id',
    resolve: {
      special: DataResolverService,
    },
    loadChildren: () =>
      import('./edit-fleet/edit-fleet.module').then(
        (m) => m.EditFleetPageModule
      ),
  },
  {
    path: 'view/fleet',
    loadChildren: () =>
      import('./view-fleet/view-fleet.module').then(
        (m) => m.ViewFleetPageModule
      ),
  },
  {
    path: 'view/fleet/:id',
    resolve: {
      special: DataResolverService,
    },
    loadChildren: () =>
      import('./view-fleet/view-fleet.module').then(
        (m) => m.ViewFleetPageModule
      ),
  },
  {
    path: 'edit/vehicle',
    loadChildren: () =>
      import('./edit-vehicle/edit-vehicle.module').then(
        (m) => m.EditVehiclePageModule
      ),
  },
  {
    path: 'edit/vehicle/:id',
    resolve: {
      special: DataResolverService,
    },
    loadChildren: () =>
      import('./edit-vehicle/edit-vehicle.module').then(
        (m) => m.EditVehiclePageModule
      ),
  },
  {
    path: 'search/part',
    loadChildren: () => import('./search-part/search-part.module').then( m => m.SearchPartPageModule)
  },
  {
    path: 'view/service-progress',
    loadChildren: () => import('./view-service-progress/view-service-progress.module').then( m => m.ViewServiceProgressPageModule)
  },
  {
    path: 'view/service-progress/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./view-vehicle/view-vehicle.module').then( m => m.ViewVehiclePageModule)
  },
  {
    path: 'capture/initial-inspection-details',
    loadChildren: () => import('./capture-initial-inspection-details/capture-initial-inspection-details.module').then( m => m.CaptureInitialInspectionDetailsPageModule)
  },
  {
    path: 'perform-precheck',
    loadChildren: () => import('./perform-precheck/perform-precheck.module').then( m => m.PerformPrecheckPageModule)
  },
  {
    path: 'create/team',
    loadChildren: () =>
      import('./create-team/create-team.module').then(
        (m) => m.CreateTeamPageModule
      ),
  },
  {
    path: 'create/team-member',
    loadChildren: () =>
      import('./create-team-member/create-team-member.module').then(
        (m) => m.CreateTeamMemberPageModule
      ),
  },
  {
    path: 'edit/team',
    loadChildren: () =>
      import('./edit-team/edit-team.module').then((m) => m.EditTeamPageModule),
  },
  {
    path: 'edit/team/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () =>
      import('./edit-team/edit-team.module').then((m) => m.EditTeamPageModule),
  },
  {
    path: 'edit/team-member',
    loadChildren: () =>
      import('./edit-team-member/edit-team-member.module').then(
        (m) => m.EditTeamMemberPageModule
      ),
  },
  {
    path: 'edit/team-member/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () =>
      import('./edit-team-member/edit-team-member.module').then(
        (m) => m.EditTeamMemberPageModule
      ),
  },
  {
    path: 'search/team',
    loadChildren: () =>
      import('./search-team/search-team.module').then(
        (m) => m.SearchTeamPageModule
      ),
  },
  {
    path: 'search/team-member',
    loadChildren: () =>
      import('./search-team-member/search-team-member.module').then(
        (m) => m.SearchTeamMemberPageModule
      ),
  },
  {
    path: 'add/service-item',
    loadChildren: () =>
      import('./add-service-item/add-service-item.module').then(
        (m) => m.AddServiceItemPageModule
      ),
  },
  {
    path: 'edit/service-item',
    loadChildren: () =>
      import('./edit-service-item/edit-service-item.module').then(
        (m) => m.EditServiceItemPageModule
      ),
  },
  {
    path: 'edit/service-item/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () =>
      import('./edit-service-item/edit-service-item.module').then(
        (m) => m.EditServiceItemPageModule
      ),
  },
  {
    path: 'search/service-item',
    loadChildren: () =>
      import('./search-service-item/search-service-item.module').then(
        (m) => m.SearchServiceItemPageModule
      ),
  },
  {
    path: 'assign/vehicle-part',
    loadChildren: () =>
      import('./assign-vehicle-part/assign-vehicle-part.module').then(
        (m) => m.AssignVehiclePartPageModule
      ),
  },
  {
    path: 'edit/vehicle-part',
    loadChildren: () =>
      import('./edit-assigned-part/edit-vehicle-part.module').then(
        (m) => m.EditVehiclePartPageModule
      ),
  },
  {
    path: 'edit/assigned-part/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () =>
      import('./edit-assigned-part/edit-vehicle-part.module').then(
        (m) => m.EditVehiclePartPageModule
      ),
  },
  {
    path: 'search/assigned-part',
    loadChildren: () =>
      import('./search-vehicle-part/search-vehicle-part.module').then(
        (m) => m.SearchVehiclePartPageModule
      ),
  },
  {
    path: 'perform/postcheck',
    loadChildren: () =>
      import('./perform-postcheck/perform-postcheck.module').then(
        (m) => m.PerformPostcheckPageModule
      ),
  },
  {
    path: 'view/service-invoice',
    loadChildren: () =>
      import('./view-service-invoice/view-service-invoice.module').then(
        (m) => m.ViewServiceInvoicePageModule
      ),
  },
  {
    path: 'view/service-invoice/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () =>
      import('./view-service-invoice/view-service-invoice.module').then(
        (m) => m.ViewServiceInvoicePageModule
      ),
  },
  {
    path: 'search/service-note',
    loadChildren: () =>
      import('./search-service-note/search-service-note.module').then(
        (m) => m.SearchServiceNotePageModule
      ),
  },
  {
    path: 'create/service-note',
    loadChildren: () =>
      import('./create-service-note/create-service-note.module').then(
        (m) => m.CreateServiceNotePageModule
      ),
  },
  {
    path: 'create/quote',
    loadChildren: () =>
      import('./create-quote/create-quote.module').then(
        (m) => m.CreateQuotePageModule
      ),
  },
  {
    path: 'view/quote',
    loadChildren: () => import('./view-quote/view-quote.module').then( m => m.ViewQuotePageModule)
  },
  {
    path: 'view/quote/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./view-quote/view-quote.module').then( m => m.ViewQuotePageModule)
  },
  {
    path: 'update/quote',
    loadChildren: () => import('./update-quote/update-quote.module').then( m => m.UpdateQuotePageModule)
  },
  {
    path: 'update/quote/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./update-quote/update-quote.module').then( m => m.UpdateQuotePageModule)
  },
  {
    path: 'search/quote',
    loadChildren: () => import('./search-quote/search-quote.module').then( m => m.SearchQuotePageModule)
  },
  {
    path: 'vehicle-performance',
    loadChildren: () => import('./vehicle-performance/vehicle-performance.module').then( m => m.VehiclePerformancePageModule)
  },
  {
    path: 'service-feedback',
    loadChildren: () => import('./service-feedback/service-feedback.module').then( m => m.ServiceFeedbackPageModule)
  },
  {
    path: 'service-history',
    loadChildren: () => import('./service-history/service-history.module').then( m => m.ServiceHistoryPageModule)
  },
  {
    path: 'service-data',
    loadChildren: () => import('./service-data/service-data.module').then( m => m.ServiceDataPageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'service-invoice',
    loadChildren: () => import('./service-invoice/service-invoice.module').then( m => m.ServiceInvoicePageModule)
  },





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
