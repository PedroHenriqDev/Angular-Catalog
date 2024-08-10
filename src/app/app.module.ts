import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryNewComponent } from './category-new/category-new.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

import { HttpClientModule } from '@angular/common/http';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryDetailsComponent,
    CategoryEditComponent,
    CategoryNewComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
