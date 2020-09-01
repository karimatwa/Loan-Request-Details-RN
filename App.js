/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';
import LoanRequestDetails from './Pages/LoanRequestDetails';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {icons} from './Components/icons';
const RootStack = createStackNavigator();
/*
Creating a Stack Navigator for our Loan Request Details screen inside a Navigation Container.
screen is loaded in folder Pages
I also use some custom items in the Components folder to standardize the design, keep it organized and 
make it more readable and easily editable.
*/
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <NavigationContainer>
          <RootStack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#F8F8F8',
                shadowRadius: 0,
                shadowOffset: {
                  height: 0,
                },
              },
              headerTintColor: '#000000',
              headerTitleAlign: 'center',
              headerTitleStyle: {fontSize: 17},
            }}>
            <RootStack.Screen
              name={' '}
              component={LoanRequestDetails}
              options={{
                headerLeft: () => (
                  <TouchableWithoutFeedback onPress={() => {}}>
                    <View style={{justifyContent: 'center'}}>
                      <Image style={styles.icon} source={icons.back.uri} />
                    </View>
                  </TouchableWithoutFeedback>
                ),
              }}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: 10,
    height: 20,
    marginLeft: 25,
  },
});

export default App;
