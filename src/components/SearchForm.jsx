import React from 'react';
 
export default class SearchForm extends React.Component {
 
    constructor() {
        super();
        this.state = {
          searchTerm: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
 
    handleInputChange(e) {
        this.setState({
            searchTerm: e.target.value
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        let searchTerm = this.state.searchTerm.trim(); 
        if (!searchTerm) {
            return;
        }
        this.props.onSearch(searchTerm); 
        this.setState({ searchTerm: '' }); // Reset the search term (this is completely optional, you may not want to do it)
    }
 
    render() {
        return (
            <div className="search-container" >
                <form onSubmit={this.handleSubmit}>
                    <input className="search-container__text" type="text" placeholder="Search for something..." onChange={this.handleInputChange} value={this.state.searchTerm}/>
                </form>
                <p className="random-link">or visit a <a href="http://en.wikipedia.org/wiki/Special:Random" target="_blank">random article</a>.</p>
            </div>
        );
    }
}