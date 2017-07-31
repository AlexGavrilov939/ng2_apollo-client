import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const CurrentUserForProfile = gql`
  query Users {
    users
  }
`;

interface QueryResponse{
  currentUser
  loading
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {

  constructor(private apollo: Apollo) {

  }

  title = 'app';

  ngOnInit():void {
    this.apollo.query({
      query: gql`
      query getAllPosts {
        pokemons: allPokemons {
          name
        }
      }`
    }).subscribe((data) => {
      console.log('->>>>DATA', data);
    });

  }
}
