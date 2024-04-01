import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Feather} from '@expo/vector-icons';
import Reviews from '../pages/Reviews';
import Salvos from '../pages/Salvos';
import Perfil from '../pages/Perfil';
import HomeStackNavigation from "./HomeStackNavigation";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="homestack"
                component={HomeStackNavigation}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="home" color={color} size={size}/>,
                    tabBarLabel: 'Início',
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name="Reviews Populares"
                component={Reviews}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="star" color={color} size={size}/>,
                    tabBarLabel: 'Reviews',
                    headerTintColor: 'orange'
                }}
            />
            <Tab.Screen
                name="Salvos"
                component={Salvos}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="bookmark" color={color} size={size}/>,
                    tabBarLabel: 'Salvos',
                    headerTintColor: 'orange'
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="user" color={color} size={size}/>,
                    tabBarLabel: 'Perfil',
                    headerTintColor: 'orange'
                }}
            />
        </Tab.Navigator>
    )
}