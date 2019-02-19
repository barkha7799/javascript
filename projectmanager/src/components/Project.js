






/*import React, { Component } from 'react';
import Projectitem from './Projectitem';

class Project extends Component {
    deleteProject(id) {
        this.props.onDelete(id);
    }

    render() {
        let projectitem;
        if (this.props.projects) {
            projectitem = this.props.projects.map(project => {
                //console.log(project);
                return (
                   // <Projectitem  key={project.title} project={project}/>
                    <projectitem onDelete={this.deleteproject.bind(this)} key={Project.title} Project={Project} />
                );
            });
        }
        return (
           
            <div className="Project">
                <h3>Latest projects</h3>
                {projectitem}
            </div>
        );
    }
}
export default Project;
*/