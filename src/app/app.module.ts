import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { ProductCreateComponent } from './pages/products/product-create/product-create.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './partials/loader/loader.component';
import { ProductPageComponent } from './pages/products/product-page/product-page.component';
import { ProductEditComponent } from './pages/products/product-edit/product-edit.component';
import { CustomerPageComponent } from './pages/customers/customer-page/customer-page.component';
import { CustomerCreateComponent } from './pages/customers/customer-create/customer-create.component';
import { CustomerEditComponent } from './pages/customers/customer-edit/customer-edit.component';
import { OrderCreateComponent } from './pages/orders/order-create/order-create.component';
import { OrderPageComponent } from './pages/orders/order-page/order-page.component';
import { TransactionPageComponent } from './pages/transactions/transaction-page/transaction-page.component';
import { TransactionCreateComponent } from './pages/transactions/transaction-create/transaction-create.component';
import { BodyComponent } from './pages/body/body.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { StocksComponent } from './pages/stocks/stocks.component';
import { HeaderComponent } from './pages/header/header.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {CdkMenuModule} from '@angular/cdk/menu';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    ProductCreateComponent,
    LoaderComponent,
    ProductPageComponent,
    ProductEditComponent,
    CustomerPageComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    OrderCreateComponent,
    OrderPageComponent,
    TransactionPageComponent,
    TransactionCreateComponent,
    BodyComponent,
    SettingsComponent,
    ReportsComponent,
    StocksComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    OverlayModule,
    CdkMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
