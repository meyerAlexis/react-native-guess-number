import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ToggleLangs from './components/toggleLangs/ToggleLangs';
import ContextProvider from './context/langContext';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ContextProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
          <ToggleLangs/>
        </ContextProvider>
      </SafeAreaProvider>
    );
  }
}
