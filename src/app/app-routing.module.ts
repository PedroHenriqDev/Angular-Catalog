import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryNewComponent } from './category-new/category-new.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';

const routes: Routes = [
    { 
      path: 'login', 
      component: LoginComponent, 
      data: { title: 'Login' }
    },
    { 
      path: 'logout', 
      component: LogoutComponent, 
      data: { title: 'Logout' }
    },
    { 
      path: 'categories', 
      component: CategoriesComponent, 
      data: { title: 'Categories' }
    },
    { 
      path: 'category-new', 
      component: CategoryNewComponent, 
      data: { title: 'New Category' }
    },
    { 
      path: 'category-edit/:id',  
      component: CategoryEditComponent, 
      data: { title: 'Edit Category' }
    },
    {
      path: 'category-details/:id',
      component: CategoryDetailsComponent,
      data: { title: 'Category Details' }  
    },
    {
      path: '',
      redirectTo: '/categories',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
