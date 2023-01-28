import React, { memo, Suspense, useMemo, useState, lazy } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useSelector } from 'react-redux';
import _ from 'underscore';
import HearderSecondary from '../../../Components/HearderSecondary';
import { bgColor } from '../../../Constant/Colors';
import { windowHeight, windowWidth } from '../../../utils/Dimentions';
import { styles } from './Style/Style';

const FlashListCmp = lazy(() => import('./Components/FlashListCmp'))
const OnHoldCmp = lazy(() => import('./Components/OnHoldCmp'))

// create a component
const FlashListOnHold = ({ navigation }) => {

    const [count, setCount] = useState(0)
    const [refresh, setRefresh] = useState(false)

    const onHoldTicketList = useSelector((state) => state.getOnholdComplaintList.onHoldTicked, _.isEqual);
    const onHoldTickt = useMemo(() => onHoldTicketList, [onHoldTicketList]);

    return (
        <ScrollView style={styles.container}>
            {/* Header  */}
            <HearderSecondary
                navigation={navigation}
                name="On Hold"
                goBackButton={false}
            />
            <View style={styles.card} >
                <View style={styles.cardHeader} >
                    <Text style={styles.cardTitle} >OnHold Tickets</Text>
                </View>
                <View style={{
                    flex: 1,
                    maxWidth: windowWidth,
                    height: windowHeight >= 1200 ? windowHeight - 146 : windowHeight - 120
                }} >
                    <Suspense fallback={<ActivityIndicator />} >
                        <FlashListCmp
                            FlashRenderCmp={OnHoldCmp}
                            Assigned={onHoldTickt}
                            setCount={setCount}
                            refresh={refresh}
                            count={count}
                        />
                    </Suspense>
                </View>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: bgColor.cardBg,
                    minHeight: 20
                }} >
                    <Text style={{
                        ...styles.cardTitle,
                        fontFamily: 'Roboto_100Thin',
                        fontSize: 10,

                    }} >Pull Down To Refresh</Text>
                </View>
            </View>
        </ScrollView>
    );
};

//make this component available to the app
export default memo(FlashListOnHold);
