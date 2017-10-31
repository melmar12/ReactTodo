var React = require('react');


var TodoSearch = React.createClass({
	handleSearch: function () {
		var showCompleted = this.refs.showCompleted.checked;
		var searchText = this.refs.searchText.value;

		this.props.onSearch(showCompleted, searchText);
	},
	render: function () {
		return (
			<div>
				<div>
					<input type="search" ref="searchText" placeholder="search todos" onChnage={this.handleSearch}/>
				</div>
				<div>
					<label>
						<input type="checkbox" ref="showCompleted" onChnage={this.handleSearch}/>
						Show Completed Todos
					</label>
				</div>
			</div>
		)
	}
});	

module.exports = TodoSearch;