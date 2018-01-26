import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { RecipesComponent } from './layouts/recipes/recipes.component';
import { RecipeListComponent } from './layouts/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './layouts/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './layouts/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './layouts/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './layouts/shopping-list/shopping-edit/shopping-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
