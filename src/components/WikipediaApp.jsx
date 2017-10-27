import React from 'react';
import SearchForm from './SearchForm';

import superagent from 'superagent';
import jsonp from 'superagent-jsonp'
 
export default class WikipediaViewer extends React.Component {
    constructor() {
        super();
        this.state = { results: [] };
        this.handleSearch = this.handleSearch.bind(this);
    }
 
    handleSearch(searchTerm) {
      superagent.get('https://en.wikipedia.org/w/api.php') // Wikipedia API call
        .query({
          search: searchTerm,   // The search keyword passed by SearchForm
          action: 'opensearch', // You can use any kind of search here, they are all documented in the Wikipedia API docs
          format: 'json'        // We want JSON data back
        })
        .use(jsonp) // Use the jsonp plugin
        .end((error, response) => {
          if (error) {
              console.error(error);
          } else {
              this.setState({ results: response.body }); // Set the state once results are back
          }
        });
    }         
 
    render() {
        return(
            <div className="wrapper">
                <SearchForm onSearch={this.handleSearch}/>
                <ul>
                    <li>Result 1</li>
                    <li>Result 2</li>
                    <li>Result 3</li>
                    <li>...</li>
                </ul>
            </div>
        );
    }
}