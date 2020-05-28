import React, { Component } from 'react';
import { View, Text, Button, LogoTitle } from 'react-native';

class ProfileScreen extends Component {
	static navigationOptions = {
		headerBackTitle: null,
		headerRight: () => (
		  <Button
			onPress={() => alert('This is a button!')}
			title="Info"
			color="#000"
		  />
		),
	  };
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>ProfileScreen</Text>
				<Button
					title="Go back"
					onPress={() => this.props.navigation.goBack()}
				/>
			</View>
		);
	}
}

export default ProfileScreen;