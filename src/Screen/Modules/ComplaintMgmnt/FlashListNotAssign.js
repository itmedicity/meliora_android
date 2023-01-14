//import liraries
import React, { Component, memo } from 'react';
import { View, Text, StyleSheet, RefreshControl } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import CustomActivityIndicator from '../../../Components/CustomActivityIndicator';
import NotAssignedCard from './NotAssignedCard';

// create a component
const FlashListNotAssign = ({ notAssigned, setCount, refresh, count }) => {
    return (
        <FlashList
            data={notAssigned}
            renderItem={({ item }) => <NotAssignedCard data={item} />}
            estimatedItemSize={Object.keys(notAssigned).length || 5}
            ListEmptyComponent={<CustomActivityIndicator />}
            showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl
                    refreshing={refresh}
                    onRefresh={() => setCount(count + 1)}
                />
            }
        />
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default memo(FlashListNotAssign);
