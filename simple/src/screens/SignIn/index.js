import React, { Component } from 'react';
import { SafeAreaView, View, Button, TextInput } from 'react-native';

class SignInScreen extends Component {
    static navigationOptions = {
        title: 'Sign In',
    };
    render() {
        return (
            <SafeAreaView>
                <View>
                    <TextInput name="email" />
                    <TextInput name="password" />
                    <Button
                        title="Sign In"
                        onPress={() => navigate('Profile', {name: 'Jane'})}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

export default SignInScreen;