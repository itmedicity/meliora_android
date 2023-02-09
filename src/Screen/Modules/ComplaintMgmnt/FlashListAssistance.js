//import liraries
import React, { lazy, memo, Suspense, useMemo, useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useSelector } from 'react-redux';
import _ from 'underscore';
import HearderSecondary from '../../../Components/HearderSecondary';
import { bgColor } from '../../../Constant/Colors';
import { windowHeight, windowWidth, screenHeight, screenWidth } from '../../../utils/Dimentions';
import { styles } from './Style/Style';

const FlashListCmp = lazy(() => import('./Components/FlashListCmp'));
const AssistanceCmp = lazy(() => import('./Components/AssistanceCmp'))

// create a component
const FlashListAssistance = ({ navigation }) => {

    const [count, setCount] = useState(0)
    const [refresh, setRefresh] = useState(false)

    const assitanceTicket = useSelector((state) => state.getAssitanceListUserWise.assistanceList, _.isEqual);
    const assitanceTickList = useMemo(() => assitanceTicket, [assitanceTicket]);

    return (
        <SafeAreaView>
            {/* <ScrollView style={styles.container}> */}
            <ScrollView>
                <View style={{}} >

                    <Text>{windowHeight}</Text>
                    <Text>{windowWidth}</Text>
                    <Text>{screenHeight}</Text>
                    <Text>{screenWidth}</Text>
                </View>
                {/* Header  */}
                {/* <HearderSecondary
                navigation={navigation}
                name="Assitance Needed"
                goBackButton={false}
            /> */}
                {/* <View style={styles.card} >
                <View style={styles.cardHeader} >
                    <Text style={styles.cardTitle} >Assistance Needed Tickets</Text>
                </View>
                <View style={{
                    flex: 1,
                    maxWidth: windowWidth,
                    height: windowHeight >= 1200 ? windowHeight - 146 : windowHeight - 120
                }} >
                    <Suspense fallback={<ActivityIndicator />} >
                        <FlashListCmp
                            FlashRenderCmp={AssistanceCmp}
                            Assigned={assitanceTickList}
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
            </View> */}
            </ScrollView>
        </SafeAreaView>
    );
};

//make this component available to the app
export default memo(FlashListAssistance);
