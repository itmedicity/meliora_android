//import liraries
import React, { Component, memo, Suspense, lazy, useRef, useMemo, useCallback, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import HearderSecondary from '../../../Components/HearderSecondary';
import { bgColor, colorTheme, fontColor } from '../../../Constant/Colors';
import BottomSheet, {
    BottomSheetModal,
    BottomSheetModalProvider,
    // useBottomSheetModal
} from '@gorhom/bottom-sheet'
import { XCircleIcon } from "react-native-heroicons/solid"

const FlashListNotAssignCmp = lazy(() => import('./Components/FlashListNotAssign'))
import { screenHeight, screenWidth, windowHeight, windowWidth } from '../../../utils/Dimentions'
import OverLayLoading from './Components/OverLayLoading';
import { getNotAssignedList } from '../../../Redux/ReduxSlice/ticketMagmntSlice';
import ApiGetFun from './func/ApiGetFun';

// create a component
const FlashListNotAssigns = ({ navigation }) => {

    const [refresh, setRefresh] = useState(false);
    const [count, setCount] = useState(0);
    const [loding, setLoading] = useState(true)

    const notAssignedList = useSelector(getNotAssignedList)

    return (
        <SafeAreaView style={{ backgroundColor: colorTheme.mainBgColor }} >
            <ApiGetFun count={count} />
            {loding && <OverLayLoading />}
            {/* Header  */}
            <HearderSecondary
                navigation={navigation}
                name="All not assigned tickets"
                goBackButton={false}
            />
            <BottomSheetModalProvider>
                <View style={{ display: 'flex' }} >
                    <View style={{
                        height: (windowHeight * 90 / 100),
                        width: screenWidth
                    }} >
                        <Suspense fallback={<ActivityIndicator />} >
                            <FlashListNotAssignCmp
                                notAssigned={notAssignedList}
                                setCount={setCount}
                                refresh={refresh}
                                count={count}
                                setLoading={setLoading}
                            />
                        </Suspense>
                    </View>

                    {/* Bottom Sheet modal start here */}
                    {/* <BottomSheetModal
                        ref={bottomSheetModalRef}
                        index={1}
                        snapPoints={snapPoints}
                        // onChange={handleSheetChanges}
                        style={{ flex: 1, borderRadius: 10 }}
                        backgroundStyle={{ backgroundColor: 'white', }}
                    >
                        <View className='flex-1 bg-gray-100'>
                            <View className="p-2 border-b border-[#00CCBB] bg-white shadow-xs" >
                                <View>
                                    <Text className='text-lg text-center' style={{ fontFamily: 'Roboto_500Medium' }} >Ticket's Assign</Text>
                                    <Text className='text-center text-gray-400 text-sm font-bold' style={{ fontFamily: 'Roboto_100Thin' }}  >
                                        Detailed Job Assignment
                                    </Text>
                                </View>
                                <TouchableOpacity
                                    onPress={handleSheetChanges}
                                    className='rounded-full bg-gray-100 absolute top-3 right-5'
                                >
                                    <XCircleIcon color='#00CCBB' height={35} width={35} />
                                </TouchableOpacity>
                            </View>
                            <ScrollView className='flex-1 bg-red-100 ' >
                                <View className="h-10 bg-blue-100 p-1 border-b border-zinc-300">
                                    <View className="flex-1 flex-row" >
                                        <Text className="text-gray-500" >Ticket Number :</Text>
                                        <Text className="text-gray-700">19</Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </BottomSheetModal> */}
                    {/* Bottom sheet modal ends here */}
                </View>
                <View style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: colorTheme.mainBgColor,
                    // minHeight: (windowHeight * 5 / 100)
                }} >
                    <Text style={{
                        fontFamily: 'Roboto_500Medium',
                        fontSize: windowWidth > 400 ? 14 : 12,
                        paddingHorizontal: 5,
                        overflow: 'hidden',
                        color: colorTheme.mainColor,
                        fontFamily: 'Roboto_100Thin',
                        fontSize: 10,
                    }} >Pull Down To Refresh</Text>
                </View>
            </BottomSheetModalProvider>
        </SafeAreaView>
    );
};


//make this component available to the app
export default memo(FlashListNotAssigns);
