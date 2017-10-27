import React from 'react';
 
export default class Results extends React.Component {
    render() {
        var results = this.props.results[1].map((result, index) => {
            return (
                <div>
                    <h3>{this.props.results[1][index]}</h3>
                    <p>{this.props.results[2][index]}</p>
                    <a href={this.props.results[3][index]}>Link</a>
                </div>
            );
        });
 
        return (<div>{results}</div>);
    }
}