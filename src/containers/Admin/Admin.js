import React, {Component} from 'react';
import EditForm from "../../components/EditForm/EditForm";
import axios from "../../axios-pages";

class Admin extends Component {
    state = {
        selected: "home",
        page: {
            title: "",
            content: ""
        }
    };
    getPageContent = () => {
        let page = this.state.selected;
        if (page) {
            axios.get ('pages.json').then (response => {
                let pages = response.data;
                let myPage = pages[page];
                this.setState ({page: myPage});
            });
        }
    };
    titleChanged = (e) => {
       let newTitle = e.target.value;
       let page = {...this.state.page};
       page.title = newTitle;
       this.setState({page});
    };
    contentChanged = (e) => {
        let newContent = e.target.value;
        let page = {...this.state.page};
        page.content = newContent;
        this.setState({page});
    };
    pageSelected = (e) => {
        let page = e.target.value;
        this.setState({selected: page});
    };
    render () {
        this.getPageContent();
        return (
            <EditForm title={this.state.page.title} content={this.state.page.content} selected={this.state.selected}
                            handleTitleChange={this.titleChanged} handleContentChange={this.contentChanged} handleSelect={this.pageSelected}
                            handleClick={this.updatePage}/>
        )
    }
}

export default Admin;