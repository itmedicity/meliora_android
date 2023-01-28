//import liraries
import React, { memo } from 'react';
import { RefreshControl } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import NotAssignedCard from './NotAssignedCard';
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
            // estimatedListSize={
            //     {
            //         height: 300,
            //         width: windowWidth - 30
            //     }
            // }
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
