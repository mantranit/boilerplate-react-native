import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import { Button, Input, Avatar } from 'react-native-elements';
import LayoutAuthComponent from '../../components/LayoutAuth';

class SignInScreen extends Component {
    static navigationOptions = {
        title: 'Sign In',
    };
    render() {
        return (
            <LayoutAuthComponent>
                <View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Avatar size={200} rounded={true} icon={{ name: 'home' }} />
                    </View>
                    <Input
                        placeholder='Email'
                    />
                    <Input
                        secureTextEntry={true}
                        placeholder='Password'
                    />
                    <Button
                        title="Login"
                        onPress={() => this.props.navigation.navigate('Profile', {name: 'Jane'})}
                    />
                    <Button
                        title="Create an account"
                        type="clear"
                        onPress={() => this.props.navigation.navigate('SignUp', {})}
                    />
                </View>
            </LayoutAuthComponent>
        );
    }
}

export default SignInScreen;