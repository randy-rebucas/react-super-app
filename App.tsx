/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {register, addPortal, PortalView} from '@ionic/portals-react-native';

register(
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyY2QyYzExNi02ZTJmLTQ3ZDYtODYxNi1lYjEzZjE4MWI1ZGIiLCJqdGkiOiJYUjRyYkRfMmJhdHM5M1VoVGxKbkQzMC13ME9LY1Rocm5vblpBamh4VlhZIn0.mlLBVTNKLw3RkzlmywW35bKZ7EKP4hKFdL2103zkwXtEi3hLiyxdBSFZkcYw2bpScsqu0wyFT39CSYe9XLgJSzpt0O9YdyOr95h5a_q0_DedVys7CC_3_soP0MHSQeX7VCN65KP0d9AuhoRG-tgANVAcbhsmocQk8Yobyki0ATjqXZdF-E5jEo0QggeXAUjZXXlzSC2KUsN5l0dZNrOyKMs1E6jYR-u78C_AGmcljaANqlqtY0E7h2sP8QhEY0Oe-fTFBUcaghu6RCV-bzb-dvy2Hk1eNzxpKHLPfb72-rD0qgPeAEt4F3x99I-TMUX9ARB6Y_1z51bBfANgq21Gpw',
);

const helloPortal = {
  // A unique name to reference later
  name: 'hello',
  // This is the location of your web bundle relative to the asset directory in Android and Bundle.main in iOS
  // This will default to the name of the portal
  startDir: 'portals/hello',
  // Any initial state to be provided to a Portal if needed
  initialContext: {
    greeting: 'Hello, world!',
  },
};

addPortal(helloPortal);

function App(): JSX.Element {
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
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text style={styles.highlight}>App.tsx</Text>
        </View>
        <PortalView
          portal={{
            // The name of the portal to be used in the view
            name: 'hello',
            // Set any initial context you may want to override.
            initialContext: {
              greeting: 'Goodbye!',
            },
          }}
          // Setting a size is required
          // eslint-disable-next-line react-native/no-inline-styles
          style={{flex: 1, height: 300}}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

export default App;
