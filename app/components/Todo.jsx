var React = require('react');

var Todo = React.createClass({
	render: function () {
		var {text, id, completed} = this.props;

		return (
			<div onClick={() => {
				this.props.onToggle(id);
			}}>
				{text}
				<input type="checkbox" checked={completed} />
			</div>
		)
	}
});

module.exports = Todo;