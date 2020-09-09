import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';

import FloatingButton from '../components/FindingYourVoiceFloatingButton';

import Ohs from './SubSections/Ohs';
import HumanRights from './SubSections/HumanRights';
import EmploymentStandards from './SubSections/EmploymentStandards';
import colors from '../config/colors';

const Tab = createMaterialTopTabNavigator();

const KnowYourRightsTabs = () => {
  const navigation = useNavigation();

  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
          activeTintColor: colors.primary,
          inactiveTintColor: '#a6a8ab',
          indicatorStyle: {
            backgroundColor: colors.primary,
          },
          style: {
            backgroundColor: colors.white,
          },
        }}
      >
        <Tab.Screen name="Human Rights" component={HumanRights} />
        <Tab.Screen name="OHS" component={Ohs} />
        <Tab.Screen
          name="Employment Standards"
          component={EmploymentStandards}
        />
      </Tab.Navigator>
      <FloatingButton
        onPress={() => navigation.navigate('Finding Your Voice')}
      />
    </>
  );
};

export default KnowYourRightsTabs;
