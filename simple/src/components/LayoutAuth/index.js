import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'react-native-elements';

const LayoutAuthComponent = (props) => {
    return (
        <ThemeProvider>
            <SafeAreaView>
                {props.children}
            </SafeAreaView>
        </ThemeProvider>
    );
}

export default LayoutAuthComponent;