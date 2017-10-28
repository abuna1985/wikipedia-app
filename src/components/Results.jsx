import React from 'react';
import FirstResult from './FirstResult'; 

export default class Results extends React.Component {
    render() {
      var results = this.props.results[1].map((result, index) => {
        return (
            <FirstResult key={index} title={this.props.results[1][index]} description={this.props.results[2][index]} url={this.props.results[3][index]}/>
        );
    });
 
        return (<div className="result-list">{results}</div>);
    }
}