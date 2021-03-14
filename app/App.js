import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import TabMenuNavigator from './navigation/tabNavigation';
import CandleScreen from './views/candle';
import {configureStore} from './views/candle/redux/store';
import 'react-native-gesture-handler';

const {store, persistor} = configureStore();
const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <TabMenuNavigator />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default App;
