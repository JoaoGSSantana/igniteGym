import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { Home } from '@screens/Home';
import { History } from '@screens/History';
import { Profile } from '@screens/Profile';
import { Exercise } from '@screens/Exercise';


type AppRoutes = {
    home: undefined;
    exercise: undefined;
    profile: undefined;
    history: undefined;
}

export type AppNavigatorRoutesProps = BottomTabBarProps & AppRoutes;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
            <Screen name='home' component={Home} />
            <Screen name='history' component={History} />
            <Screen name='profile' component={Profile} />
            <Screen name='exercise' component={Exercise} />
        </Navigator>
    );
}