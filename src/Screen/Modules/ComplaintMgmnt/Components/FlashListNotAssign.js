//import liraries
import React, { memo } from 'react';
import { RefreshControl, Text, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import CustomActivityIndicator from '../../../../Components/CustomActivityIndicator';
import NotAssignedCard from './NotAssignedCard';
import { windowHeight } from '../../../../utils/Dimentions';

const emptyContainer = () => {
    return (<View style={{
        height: windowHeight >= 1200 ? windowHeight - 280 : windowHeight - 220,
        alignItems: 'center',
        justifyContent: 'center'
    }} >
        <Text>No new Tickets</Text>
    </View>
    );
}

// create a component
const FlashListNotAssign = ({ notAssigned, setCount, refresh, count }) => {
    return (
        <FlashList
            data={notAssigned}
            renderItem={({ item }) => <NotAssignedCard data={item} />}
            estimatedItemSize={Object.keys(notAssigned).length || 5}
            // ListEmptyComponent={<CustomActivityIndicator />}
            ListEmptyComponent={emptyContainer}
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

//make this component available to the app
export default memo(FlashListNotAssign);
