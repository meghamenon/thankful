import React, {Component} from 'react';
import '../index.css';

class Home extends Component{
	render(){
		return(
			<div className="home">
			<button type="button" class="btn btn-primary button">Login</button>
				<div className="title-div">
					<h1 className="title"> Hello There! </h1>
					<h1 className="title"> What are you thankful for today?</h1>
				</div> <br/>
				<form>
					<div className="form">
		  					Name {''}
		  					<input className="field"/> {''}
		  					Email {''}
		  					<input className="field"/> {''}
		  					<button type="button" className="btn btn-primary btn-sm">Go</button>
	  				</div>
				</form>
			</div>
		)
	}
}


export default Home;