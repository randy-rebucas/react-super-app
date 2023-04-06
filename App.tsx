/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {register, addPortal, PortalView} from '@ionic/portals-react-native';

// const userPage = {
//   name: 'user_page',
//   startDir: 'web',
//   initialContext: {
//     route: '/user',
//     auth: /* Auth Data */
//   }
// };
// import { getInitialContext } from "@ionic/portals";

// type MyPortalContext = { route: string; auth: any };
// const auth = getInitialContext<MyPortalContext>()?.value?.auth;
// // rest of the web app...

function App(): JSX.Element {
  register(
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyY2QyYzExNi02ZTJmLTQ3ZDYtODYxNi1lYjEzZjE4MWI1ZGIiLCJqdGkiOiJYUjRyYkRfMmJhdHM5M1VoVGxKbkQzMC13ME9LY1Rocm5vblpBamh4VlhZIn0.mlLBVTNKLw3RkzlmywW35bKZ7EKP4hKFdL2103zkwXtEi3hLiyxdBSFZkcYw2bpScsqu0wyFT39CSYe9XLgJSzpt0O9YdyOr95h5a_q0_DedVys7CC_3_soP0MHSQeX7VCN65KP0d9AuhoRG-tgANVAcbhsmocQk8Yobyki0ATjqXZdF-E5jEo0QggeXAUjZXXlzSC2KUsN5l0dZNrOyKMs1E6jYR-u78C_AGmcljaANqlqtY0E7h2sP8QhEY0Oe-fTFBUcaghu6RCV-bzb-dvy2Hk1eNzxpKHLPfb72-rD0qgPeAEt4F3x99I-TMUX9ARB6Y_1z51bBfANgq21Gpw',
  );

  const cmsPortal = {
    // A unique name to reference later
    name: 'cms',
    // This is the location of your web bundle relative to the asset directory in Android and Bundle.main in iOS
    // This will default to the name of the portal
    startDir: 'portals/cms',
    // Any initial state to be provided to a Portal if needed
    initialContext: {
      greeting: 'Hello, world!',
      colorScheme: useColorScheme(),
      token: null,
    },
  };

  addPortal(cmsPortal);

  const windowHeight = Dimensions.get('window').height;
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <PortalView
          portal={{
            // The name of the portal to be used in the view
            name: 'cms',
            // Set any initial context you may want to override.
            initialContext: {
              greeting: 'Goodbye!',
            },
          }}
          // Setting a size is required
          // eslint-disable-next-line react-native/no-inline-styles
          style={{flex: 1, height: windowHeight}}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
