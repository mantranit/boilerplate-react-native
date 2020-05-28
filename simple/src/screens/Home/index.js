import React, { Component } from 'react';
import { Button, Text } from 'react-native';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Jane's profile"
                    onPress={() => navigate('Profile', {name: 'Jane'})}
                />
            </>
        );
    }
}

export default HomeScreen;