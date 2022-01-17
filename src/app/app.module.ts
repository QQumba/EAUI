import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EaCardComponent } from './components/ea-card/ea-card.component';
import { EaDividerComponent } from './components/ea-card/ea-divider/ea-divider.component';
import { UiDemoComponent } from './ui-demo/ui-demo.component';
import { EaCardContentComponent } from './components/ea-card/ea-card-content/ea-card-content.component';

@NgModule({
  declarations: [
    AppComponent,
    EaCardComponent,
    UiDemoComponent,
    EaDividerComponent,
    EaCardContentComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
