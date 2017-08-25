import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { routerReducer, RouterStoreModule } from '@ngrx/router-store';

import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';

const client = new ApolloClient();

//export function provideClient(): ApolloClient {
//  return client;
//}


const clientConfig = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj5s931nmiwco01602t6lba5f'
  })
});

export function providerClient(): ApolloClient {
  return clientConfig;
}

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterStoreModule.connectRouter(),
    StoreModule.provideStore({ router: routerReducer }, {
      router: {
        path: window.location.pathname + window.location.search
      }
    }),
    ApolloModule.forRoot(providerClient)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
