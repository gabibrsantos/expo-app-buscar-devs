import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions:{
                title: 'Buscar Dev'
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil Github'
            }
        },

    }, {
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: '#FF7B19',
            }
        },
    }
    
    )
);

export default Routes;