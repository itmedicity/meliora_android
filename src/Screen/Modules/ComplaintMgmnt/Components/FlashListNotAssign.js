//import liraries
import React, { memo } from 'react';
import { RefreshControl, Text, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import CustomActivityIndicator from '../../../../Components/CustomActivityIndicator';
import NotAssignedCard from './NotAssignedCard';
import { windowHeight, windowWidth } from '../../../../utils/Dimentions';
import NoNewTicketCmp from './NoNewTicketCmp';

// create a component
const FlashListNotAssign = ({ notAssigned, setCount, refresh, count }) => {
    const legth = Object.keys(notAssigned).length;
    return (
        <FlashList
            data={notAssigned}
            renderItem={({ item }) => <NotAssignedCard data={item} setCount={setCount} />}
            estimatedItemSize={legth || 5}
            ListEmptyComponent={<NoNewTicketCmp legth={legth} />}
            showsVerticalScrollIndicator={false}
            keyExtractor={Assigned => Assigned.complaint_slno}
            estimatedListSize={
                {
                    height: 300,
                    width: windowWidth
                }
            }
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
