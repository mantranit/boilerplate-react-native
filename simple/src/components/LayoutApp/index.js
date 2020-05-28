import React from 'react';
import { SafeAreaView } from 'react-native';

const LayoutAppComponent = (props) => {
    return (
        <SafeAreaView>
            {props.children}
        </SafeAreaView>
    );
}

export default LayoutAppComponent;