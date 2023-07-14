import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/shared/components/header/header.component';
import { RecipesComponent } from './core/shared/components/recipes/recipes.component';
import { RecipeListComponent } from './core/shared/components/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './core/shared/components/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './core/shared/components/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './core/shared/components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './core/shared/components/shopping-list/shopping-edit/shopping-edit.component';
import { FooterComponent } from './core/shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
