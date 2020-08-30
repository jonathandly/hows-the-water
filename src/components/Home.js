import React from 'react';
import { connect } from 'react-redux';
import SearchResult from './SearchResult';

import { View } from 'react-native';

class Home extends React.Component {
	render() {
		return (
			<View>
			  <SearchResult />
			</View>
		);
	}
}

const mapStateToProps = state => {
	console.log(`APP :: STATE TO PROPS :: STATE VALUE IS ${JSON.stringify}`);

	return {
		isAuthenticated: state.isAuthenticated,
		user: state.user
	};
}

export default connect(mapStateToProps, {})(Home);

