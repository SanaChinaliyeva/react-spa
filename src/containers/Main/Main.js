import React, {Component} from 'react';

import axios from '../../axios-pages';

class Main extends Component{
    state = {
       currentPage: null
    };
    componentDidMount () {
        this.getPageContent();
    }
    getPageContent = () => {
       let page = this.props.page;
       axios.get('pages.json').then(response => {
           let pages = response.data;
           let myPage = pages[page];
           this.setState({currentPage: myPage});
       });
    };
    render () {
        return  this.state.currentPage ? (
            <div className="App Page">
                <h1>{this.state.currentPage.title}</h1>
                <p>{this.state.currentPage.content}</p>
            </div>
        ) : null
    }
}

export default Main;