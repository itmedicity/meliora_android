//import liraries
import React, { memo } from 'react';
import { RefreshControl, Text } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import CustomActivityIndicator from '../../../../Components/CustomActivityIndicator';
import NoNewTicketCmp from './NoNewTicketCmp';
import { windowWidth } from '../../../../utils/Dimentions';
// import NotAssignedCard from './NotAssignedCard';

// create a component
const FlashListCmp = ({ Assigned, setCount, refresh, count, FlashRenderCmp }) => {
    const legth = Object.keys(Assigned).length;
    return (
        <FlashList
            data={Assigned}
            renderItem={({ item }) => <FlashRenderCmp data={item} />}
            estimatedItemSize={Object.keys(Assigned).length || 5}
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
export default memo(FlashListCmp);
