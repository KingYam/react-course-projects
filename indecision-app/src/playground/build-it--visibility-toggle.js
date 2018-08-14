
// const app = {
// 	title: 'Visibility Toggle',
// 	details: 'These are details.',
// 	showDetails: false
// };

// const appRoot = document.getElementById('app');

// const toggleDetails = () => {
// 	if(app.showDetails){
// 		app.showDetails = false;
// 	}
// 	else{
// 		app.showDetails = true;
// 	}
// 	render();
// };

// const render = () => {
// 	const template = 
// 		<div>
// 			<h1>{app.title}</h1>
// 			<button onClick={toggleDetails}>{app.showDetails ? "Hide Details" : "Show Details"}</button>
// 			{app.showDetails ? <p>{app.details}</p> : <p></p>}
// 		</div>

// 	ReactDOM.render(template, appRoot);
// };

// render();


class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);

		this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

		this.state = {
			visibility: false,
			details: 'These are details.'
		}
	}

	handleToggleVisibility() {
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility
			};
		});
	}

	render() {
		return (<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
				{this.state.visibility ? <p>{this.state.details}</p> : <p></p>}
			
			</div>
		);
	}
} 

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));