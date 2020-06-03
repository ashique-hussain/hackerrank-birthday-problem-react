import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Table extends Component {
	constructor(props) {
		super(props)
		this.people = [
			{
				name: "John Sina",
				birth: "11/30/2011"
			}, {
				name: "Barcy Washington",
				birth: "09/16/1992"
			}, {
				name: "Peter Parker",
				birth: "01/16/1992"
			}, {
				name: "Jimmy Shergil",
				birth: "12/12/2001"
			}, {
				name: "Alexander Alfred",
				birth: "02/09/1891"
			}, {
				name: "Krishna Gupta",
				birth: "12/01/1982"
			}, {
				name: "Sania Mirza",
				birth: "11/30/2011"
			}, {
				name: "Lata Pathak",
				birth: "10/31/1999"
			}
		];
		this.state = {
			people: this.people
		};
		this.compareDates = this.compareDates.bind(this);
		this.compareNames = this.compareNames.bind(this);
	}
	compareDates(person1, person2) {
		// complete this date comparator which enables sort by age
		let a = new Date(person1.birth);
		let b = new Date(person2.birth);
		return a - b;

	}

	compareNames(person1, person2) {
		// complete this string comparator with enables sort by name
		if (person1.name < person2.name) {
			return -1;

		} else if (person1.name > person2.name) {
			return 1;

		} else {
			return 0;
		}
	}

	componentDidUpdate(prevProps, prevState) {

		if (prevProps.sortParameter !== this.props.sortParameter) {
			if (this.props.sortParameter === 'name') {
				let sortByName = this.people.sort(this.compareNames);
				this.setState({ people: sortByName });
			} else {
				let sortByAge = this.people.sort(this.compareDates);
				this.setState({ people: sortByAge });
			}
		}
	}

	render() {
		return (
			<div className='table-div'>
				<table className='table table-striped table-bordered table-hover full-width'>
					<thead>
						<tr>
							<th className='course-name'>Person Name</th>
							<th className='duration'>Date of Birth</th>
						</tr>
					</thead>
					<tbody>
						{this.state.people.map((obj, index) => (
							<tr key={index}>
								<td>{obj.name} </td>
								<td>{obj.birth} </td>
							</tr>
						)
						)}
					</tbody>
				</table>
			</div>
		);

	}
}

// Uncomment the snippet below
Table.propTypes = {
	sortParameter: PropTypes.string
}

export default Table;
