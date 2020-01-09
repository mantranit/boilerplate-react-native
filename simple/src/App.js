import 'react-native-gesture-handler';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import AuthLoadingScreen from './screens/AuthLoading';
import SignInScreen from './screens/SignIn';

const AppStack = createStackNavigator({ 
    Home: HomeScreen,
    Profile: ProfileScreen,
});
const AuthStack = createStackNavigator({ 
    SignIn: SignInScreen 
});

const App = createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));

export default App;