import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { ChatComponent } from './chat/chat.component';
import { PeopleListHeaderComponent } from './people-list-header/people-list-header.component';
import { ChatHistoryHeaderComponent } from './chat-history-header/chat-history-header.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { PeopleMessageComponent } from './people-message/people-message.component';
import { HttpClientModule }   from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    ChatComponent,
    PeopleListHeaderComponent,
    ChatHistoryHeaderComponent,
    ChatMessageComponent,
    PeopleMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
