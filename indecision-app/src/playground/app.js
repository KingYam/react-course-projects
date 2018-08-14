class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);

		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);

		this.state = {
			options: []
		};
	}

	// Event trigger (lifecycle methog) - only avaiable in class-based components
	componentDidMount() {
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);

			if (options) {
				this.setState(() => ({ options }));
			}
		}
		catch (e) {
			// Likely invalid JSON
			// Do nothing
		}
	}
	// Triggers after state or prop values change
	componentDidUpdate(prevProps, prevState) {
		if(prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}
	// Triggers just before component goes away
	componentWillUnmount() {
		console.log('component will unmount');
	}

	handleDeleteOptions() {
		this.setState(() => ({ options: []}));
	}

	handleDeleteOption(optionToRemove) {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option)
		}));
	}


	handlePick() {
		const randomNum = Math.floor(Math.random() * this.state.options.length);

		alert(this.state.options[randomNum]);
	}

	handleAddOption(option) {

		if(!option){
			return 'Enter valid value to add item.';
		}
		else if(this.state.options.indexOf(option) > -1) {
			return 'This option already exists.';
		}

		this.setState((prevState) => ({ options: prevState.options.concat(option)}));
	}

	render() {

		const subtitle = 'Put your life in the hands of a computer';

		return (
			<div>
				<Header subtitle={subtitle} />
				<Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
				<Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
				<AddOption handleAddOption={this.handleAddOption} />
			</div>
		);
	}
}

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
		</div>
	);
};

Header.defaultProps = {
	title: 'Indecision'
};

const Action = (props) => {
	return (
		<div>
			<button onClick={props.handlePick} disabled={!props.hasOptions}>What Should I Do?</button>
		</div>
	);
};

const Options = (props) => {
	return (
		<div>
			<button onClick={props.handleDeleteOptions}>Remove All</button>
			{props.options.length === 0 && <p>Please add an option to get started.</p>}
			<ol>
				{
					props.options.map((option, index) => <Option optionValue={option} key={index} handleDeleteOption={props.handleDeleteOption} />)
				}
			</ol>
		</div>
	);
};

const Option = (props) => {
	return (
		<li>{props.optionValue} <button onClick={(e) => {
			props.handleDeleteOption(props.optionValue)
		}}>Remove</button></li>
	);
};

class AddOption extends React.Component {
	constructor(props) {
		super(props);
	
		this.handleAddOption = this.handleAddOption.bind(this);

		this.state = {
			error: undefined
		};
	}

	handleAddOption(e) {
		e.preventDefault();

		//e.target = the form
		//.elements = form elements
		//.optione = the name of the element
		//.value = the value of the selected element
		const option = e.target.elements.option.value.trim();

		const error = this.props.handleAddOption(option);
		
		this.setState(() => ({ error }));

		if (!error) {
			e.target.elements.option.value = '';
		}
	}

	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" />
					<button>Add Option</button>
				</form>
			</div>
		);
	}

}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));