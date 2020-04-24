import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen
  }, 
  {
    initalRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'YelpHelp'
    }
  }
); 

export default createAppContainer(navigator);