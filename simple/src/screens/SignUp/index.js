import React, { Component } from 'react';
import { View, Linking } from 'react-native';

import { Button, Input, Avatar } from 'react-native-elements';
import LayoutAuthComponent from '../../components/LayoutAuth';

class SignUpScreen extends Component {
    static navigationOptions = {
        title: 'Sign Up',
    };
    render() {
        return (
            <LayoutAuthComponent>
                <View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Avatar size={200} rounded={true} icon={{ name: 'home' }} />
                    </View>
                    <Input
                        placeholder='First Name'
                    />
                    <Input
                        placeholder='Last Name'
                    />
                    <Input
                        placeholder='Email'
                    />
                    <Input
                        secureTextEntry={true}
                        placeholder='Password'
                    />
                    <Button
                        title="Create"
                    />
                    <Button
                        title="Already have an account?"
                        type="clear"
                        onPress={() => this.props.navigation.navigate('SignIn', {})}
                    />
                </View>
            </LayoutAuthComponent>
        );
    }
}

export default SignUpScreen;