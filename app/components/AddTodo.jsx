var React = require('react');

var AddTodo = React.createClass({
	handleSubmit: function (e) {
		e.preventDefault();
		var todoText = this.refs.todoText.value;

		if (todoText.length > 0) {
			this.refs.todoText.value = '';
			this.props.onAddTodo(todoText);
		} else {
			this.refs.todoText.focus();
		}
	},
	render: function () {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="test" ref="todoText" placeholder="would do you need todo?"/>
					<input type="submit" className="button expanded" text="submit"/>
				</form>
			</div>
		)
	}
});

module.exports = AddTodo;