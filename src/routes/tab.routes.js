import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Feather} from '@expo/vector-icons';

import Reviews from '../pages/Reviews';
import Salvos from '../pages/Salvos';
import Perfil from '../pages/Perfil';
import HomeStackNavigation from "./HomeStackNavigation";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen 
                name="homestack"
                component={HomeStackNavigation}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="home" color={color} size={size}/>,
                    tabBarLabel: 'Início'
                }}
            />
            <Tab.Screen 
                name="reviews"
                component={Reviews}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="star" color={color} size={size}/>,
                    tabBarLabel: 'Reviews'
                }}
            />
            <Tab.Screen
                name="salvos"
                component={Salvos}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="bookmark" color={color} size={size}/>,
                    tabBarLabel: 'Salvos'
                }}
            />
            <Tab.Screen
                name="perfil"
                component={Perfil}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="user" color={color} size={size}/>,
                    tabBarLabel: 'Perfil'
                }}
            />
        </Tab.Navigator>
    )
}