import React, {useEffect} from 'react';
import {LogBox, StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import GlobalStyles from './src/components/GlobalStyles/GlobalStyles';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import Routes from './src/Routes';
import {getAppLogo} from './src/Services/AuthServices/AuthServices';
import {useAppDispatch, useTypedSelector} from './src/Store/MainStore';
import {setAuthToken, setUserProfile} from './src/Store/Slices/AuthSlice';
import {selectIsLoading} from './src/Store/Slices/LoaderSlice';
import Loader from './src/components/Loader';
import {COLOR, COLOR_DARK, LocalStorage} from './src/utils/Resource';

LogBox.ignoreAllLogs();

const App = () => {
  let isDark = false;
  let theme = isDark ? COLOR_DARK : COLOR;
  const loader = useTypedSelector(selectIsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const init = async () => {
      await getAppLogo();
      const LocalData = await LocalStorage.getUser();
      const LocalToken = await LocalStorage.getToken();
      if (LocalData) {
        dispatch(setAuthToken(LocalToken));
        dispatch(setUserProfile(LocalData));
      }
    };
    init();
  }, []);
  return (
    <GestureHandlerRootView style={GlobalStyles.flexOne}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle={'dark-content'}
      />

      {loader && <Loader />}

      <NavigationContainer
        theme={{...DefaultTheme, colors: {...theme}, dark: isDark}}
        headerMode={false}
        animationEnabled={true}
        screenOptions={{
          headerShown: false,
        }}>
        <Routes />
        <FlashMessage duration={8000} floating animated style={{top: 50}} />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
