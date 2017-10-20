var React = require('react');
var TodoList = require('TodoList');
var TodoApp = React.createClass({
	getInitialState: function () {
		return {
			todos: [
			 	{ 
					id: 1,
					text: 'Walk the dog'
				}, 
				{
					id: 2,
					text: 'study for test'
				},
				{
					id: 3,
					text: 'cook lunch'
				},
				{
					id: 4,
					text: 'watch movie'
				}
			]
		}
	},
	render: function () {
		var {todos} = this.state;


		return (
			<div>
				<TodoList todos={todos}/>
			</div>
		)
	}
});

module.exports = TodoApp;