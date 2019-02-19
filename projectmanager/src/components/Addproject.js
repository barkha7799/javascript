












/*import React from 'react';
import uuid from 'uuid';

class Addproject extends React.Component {
    constructor() {
        super();
        this.state = {
            newProject: {}
        }
    }
    static defaultprops = {
        category: ['Web Design', 'Web Development', 'Mobile Development']
    }

    handleSubmit(e) {
        //console.log(this.refs.title.value);
       // newProject:{}
        if (this.refs.title.value === '') {
            alert('Title is required');
        }
        else {
            this.setState({
                newProject: {
                    id: uuid.v4(),
                    title: this.refs.title.value,
                    category: this.refs.category.value
                }
            }, function () {
                // console.log(this.state);
               // this.props.addProject(this.state.newProject);
               
                this.props.addProject(this.state.newProject);
            });
        }
        e.preventDefault();
    }
    render() {
        const categoryOption = this.props.categories.map(category => {
            return <option key={category} value="category" > {category} </option>
        });

        return (

            <div >
                <h3>Addproject</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <lable>Title</lable><br />
                        <input type="text" ref="title" />
                    </div>
                    <div>
                        <lable>Category</lable><br />
                        <select ref="category">
                            {categoryOption}
                        </select>
                    </div>
                    <br />
                    <input type="submit" value="submit" />
                    <br />
                </form>
            </div>
        );
    }
}

export default Addproject;*/
