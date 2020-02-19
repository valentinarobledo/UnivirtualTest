import React from 'react';
import ReactDOM from 'react-dom';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	title: '',
		description: '',
		file: '../exercise.ng',
		src: '../empty.png'
	};

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeFile (e) {
  	this.setState({src: URL.createObjectURL(e.target.files[0])})
  }
  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value });

  }

  handleSubmit(e) {
    e.preventDefault();
    const ex = new FormEx(e.target);
    this.props.onAddTodo(this.state);
    this.setState({
      title: '',
      description: '',
      file: ''
    });

  }

  render() {
    return (
    <div className="row mt-5">
    	<div className="col-md-8">
    		<div className="container">
    			<div className="circles">
    				<div className="row">
            			<div className="col-md-6 text-center mt-5">       				
	                		<h4>{this.state.title}</h4>
	                		<label>{this.state.description}</label>
            			</div>
            		</div>
    				
    			</div>
    		</div>
    	</div>
    	<div className="col-md-4">
    		<form onSubmit={this.handleSubmit}>
    			<div className="form-group">
		          	<input placeholder="title" 
                    className="form-control"
                    type="text" 
                    name="title"  
                    onChange={this.handleChange} />
    			</div>

    			<div className="form-group">
		          	<input placeholder="description" 
                    className="form-control"
                     type="text" name="description"  
                     onChange={this.handleChange} />
    			</div>

    			<div className="form-group">
		          	<input className="form-control" 
                    type="file" name="file"
                      onChange={this.handleChangeFile} />
    			</div>
    			<div className="form-group row">
					<div className="col-md-12">
						<button type="submit" className="btn btn-primary">
							Save
						</button>
					</div>
				</div>
	      </form>
    	</div>
    </div>
    );
  }
}
export default Form;