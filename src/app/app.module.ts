import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatDividerModule, MatCardModule, MatSnackBarModule, MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatGridListModule, MatNativeDateModule } from '@angular/material';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { MikkelComponent } from './mikkel/mikkel.component';
import { NikeComponent } from './nike/nike.component';
import { PortalComponent } from './portal/portal.component';
import { CreateAuctionComponent } from './portal/create-auction/create-auction.component';
import { DisplayAuctionsComponent } from './portal/display-auctions/display-auctions.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ProductDetailsComponent } from './portal/product-details/product-details.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ProductComponent } from './portal/product/product.component';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { AppState } from './store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { rootReducer } from './store';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    HomeComponent,
    MikkelComponent,
    NikeComponent,
    PortalComponent,
    CreateAuctionComponent,
    DisplayAuctionsComponent,
    ProductDetailsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgReduxModule, NgReduxRouterModule.forRoot(),
    MatGridListModule, MatMenuModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatCardModule, MatDividerModule, MatTooltipModule, MatNativeDateModule, MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private ngRedux: NgRedux<AppState>,
    private devTool: DevToolsExtension,
    private ngReduxRouter: NgReduxRouter,) {
   
      // this.ngRedux.configureStore(
      //   rootReducer,
      //   {},[ devTool.isEnabled() ? devTool.enhancer() : f => f]);

        
    // this.ngRedux.configureStore(rootReducer, {});
    this.ngRedux.configureStore(rootReducer, {}, [],[ devTool.isEnabled() ? devTool.enhancer() : f => f]);
 
      ngReduxRouter.initialize(/* args */);   
  }
 
}
