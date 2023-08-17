//import liraries
import React, { memo, Suspense, useMemo, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useSelector } from 'react-redux';
import _ from 'underscore';
import HearderSecondary from '../../../Components/HearderSecondary';
import { bgColor } from '../../../Constant/Colors';
import { windowHeight, windowWidth } from '../../../utils/Dimentions';
import AssignedListCmp from './Components/AssignedListCmp';
import FlashListCmp from './Components/FlashListCmp';
import { styles } from './Style/Style';

// create a component
const FlashListCompleted = ({ navigation }) => {
    /*****
     * THIS COMPONENT CHANGED FOR PROGRESS TICKETS
     * FROM COMPLETED TOICKETS LIST
     */
    const [count, setCount] = useState(0)
    const [refresh, setRefresh] = useState(false)

    const onProgressList = useSelector((state) => state.complaint.totalOnProgressTicket.onProgressTotal, _.isEqual);
    const onProgressTicket = useMemo(() => onProgressList, [onProgressList])

    return (
        <SafeAreaView style={styles.container}>
            {/* Header  */}
            <HearderSecondary
                navigation={navigation}
                name="On Progress / Pending Tickets"
                goBackButton={false}
            />
            <View style={styles.card} >
                <View style={styles.cardHeader} >
                    <Text style={styles.cardTitle} >On Progress / Pending Tickets</Text>
                </View>
                <View style={{
                    flex: 1,
                    maxWidth: windowWidth,
                    height: (windowHeight * 70 / 100)
                }} >
                    <Suspense fallback={<ActivityIndicator />} >
                        <FlashListCmp
                            FlashRenderCmp={AssignedListCmp}
                            Assigned={onProgressTicket}
                            setCount={setCount}
                            refresh={refresh}
                            count={count}
                        />
                    </Suspense>
                </View>
            </View>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: bgColor.cardBg,
                minHeight: (windowHeight * 5 / 100)
            }} >
                <Text style={{
                    ...styles.cardTitle,
                    fontFamily: 'Roboto_100Thin',
                    fontSize: 10,

                }} >Pull Down To Refresh</Text>
            </View>
        </SafeAreaView>
    )
};

//make this component available to the app
export default memo(FlashListCompleted);
