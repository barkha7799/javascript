










/*import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Project from './components/Project';
import Addproject from './components/Addproject';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      project: [],
      todos: []
    }
  }

  getTodos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ todos: data }, function () {
          console.log(this.state);
        })

      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
      }
    });
  }
  getProject() {
    this.setState({
      project: [
        {
          id: uuid.v4(),
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Devlopment'
        },
        {
          id: uuid.v4(),
          title: 'Ecommerce Shopping Cart',
          category: 'Web Devlopment'
        }

      ]
    });
  }

  componentWillMount() {
    this.getProject();

    this.getTodos();
  }

  componentDidMount() {
    this.getTodos();
  }

  handleAddproject(project) {
    // console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({ projects: projects });
  }

  handleDeleteProject(id) {
    let Project = this.state.Project;
    let index = Project.findIndex(x => x.id === id);
    Project.splice(index, 1);
    this.setState({ Project: Project });
  }
  render() {
    return (
      <div className="App">
        < Addproject addProject={this.handleAddproject.bind(this)} categories={this.props}/>
        <Project project={this.state.project} onDelete={this.handleDeleteProject.bind(this)} />
        <hr />
        <Todos todos={this.state.todos} />
      </div>

    );
  }
}

export default App;
*/