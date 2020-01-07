import React, { Component } from 'react';
import { View, Text, Button, LogoTitle } from 'react-native';

class ProfileScreen extends Component {
    static navigationOptions = {
        headerBackTitle: null,
      };
    render() {
        // const {navigate} = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
            </View>
        );
    }
}

export default ProfileScreen;