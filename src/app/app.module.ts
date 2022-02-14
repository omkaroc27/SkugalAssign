import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { InputsComponent } from './inputs/inputs.component';
import { InputComponent } from './inputs/input/input.component';
import { InputTodoListComponent } from './inputs/input-todo-list/input-todo-list.component';
import { InputService } from './services/input.service';
import{FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    InputComponent,
    InputTodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [InputService],
  bootstrap: [AppComponent]
})
export class AppModule { }
