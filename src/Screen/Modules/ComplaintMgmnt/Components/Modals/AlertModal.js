import { Modal, Pressable, Text, View } from 'react-native'
import React, { memo } from 'react'
import { colorTheme } from '../../../../../Constant/Colors';
import { HandThumbUpIcon } from 'react-native-heroicons/outline'

const AlertModal = ({ modalVisible, setModalVisible }) => {

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }} >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                // presentationStyle='overFullScreen'
                // statusBarTranslucent={true}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 22,
                }} >
                    <View style={{
                        height: '20%',
                        width: '80%',
                        margin: 20,
                        backgroundColor: colorTheme.mainBgColor,
                        borderRadius: 20,
                        padding: 5,
                        alignItems: 'center',
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5,
                        overflow: 'hidden'
                    }}>
                        <View className='flex-1 w-full p-1' >
                            <View className='flex-1 justify-center items-center' >
                                <Text
                                    style={{ fontFamily: 'Roboto_400Regular', fontSize: 16, color: colorTheme.greenVarient }}
                                >This ticket was assigned to you !!</Text>
                                <Text style={{ fontFamily: 'Roboto_300Light', color: colorTheme.SecondfontColor }} >Check Your Assigned List</Text>
                            </View>
                            <View className='flex-1 items-center' >
                                <Pressable
                                    className='w-20 items-center h-10 justify-center rounded-lg border-2'
                                    style={{ borderColor: colorTheme.greenVarient }}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    {/* <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 18 }}>Ok</Text> */}
                                    <HandThumbUpIcon width={30} height={30} color={colorTheme.iconColor} />
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default memo(AlertModal)
