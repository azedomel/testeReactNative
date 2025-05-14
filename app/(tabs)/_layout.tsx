import { Text } from '@react-navigation/elements';
import { Tabs } from 'expo-router';
import { Header } from '@/components/header'
import React from 'react';

export default function TabLayout() {

  return (
    <>
   
    <Tabs>
     <Tabs.Screen name='index' options={{headerShown: false, tabBarIcon: () =>(<Text>bi</Text>)}}></Tabs.Screen>
     <Tabs.Screen name='explore' options={{headerShown: false, tabBarIcon: () =>(<Text>oii</Text>)}}></Tabs.Screen>
     <Tabs.Screen name='list' options={{headerShown: false, tabBarIcon: () => (<Text>tchau</Text>)}}></Tabs.Screen>
    </Tabs>
    </>
  );
}
