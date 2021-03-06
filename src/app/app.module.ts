import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiComponent } from './ui/ui.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './ui/top-bar/top-bar.component';
import { EngineComponent } from './engine/engine.component';
import { MaterialModule } from './material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TutorialDialogComponent } from './ui/top-bar/tutorial-dialog/tutorial-dialog.component';
import { FabComponent } from './ui/fab/fab.component';
import {GlobalService} from './global-service';

@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    TopBarComponent,
    EngineComponent,
    TutorialDialogComponent,
    FabComponent
  ],
  entryComponents: [TutorialDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
