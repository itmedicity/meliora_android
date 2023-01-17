//import liraries
import React, { memo } from 'react';
import { RefreshControl } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import CustomActivityIndicator from '../../../../Components/CustomActivityIndicator';
// import NotAssignedCard from './NotAssignedCard';

// create a component
const FlashListCmp = ({ notAssigned, setCount, refresh, count, FlashRenderCmp }) => {
    return (
        <FlashList
            data={notAssigned}
            renderItem={({ item }) => <FlashRenderCmp data={item} />}
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

//make this component available to the app
export default memo(FlashListCmp);
