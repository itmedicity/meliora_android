//import liraries
import React, { memo, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { fontColor } from '../../../Constant/Colors';
import { windowWidth } from '../../../utils/Dimentions';
import { ActionType } from '../../../Redux/Constants/action.type';
import { useDispatch } from 'react-redux'

// create a component
const DashCountTile = ({ navigation, name, count, id }) => {

    const dispatch = useDispatch();
    const { GET_DASHBOARD_ACTION } = ActionType;

    const [state, setState] = useState(id)

    //dashboard api call count    
    const dashCountUpdation = (state) => {
        // dispatch({ type: GET_DASHBOARD_ACTION, payload: state })
        if (id === 2) {
            navigation.navigate('AssignList')
        } else if (id === 3) {
            navigation.navigate('Assistance')
        } else if (id === 4) {
            navigation.navigate('OnHold')
        } else if (id === 5) {
            navigation.navigate('Verify')
        } else if (id === 6) {
            navigation.navigate('Completed')
        }
    }

    return (
        <TouchableNativeFeedback
            onPress={() => dashCountUpdation()}
        >
            <View style={styles.mainTile} >
                <View style={styles.innerCountTile}>
                    <Text style={styles.innerCountTileFont}>{count}</Text>
                </View>
                <View style={styles.innerTextTile}>
                    <Text style={styles.innerTextTileFont} >{name}</Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    );
};

// define your styles
const styles = StyleSheet.create({
    mainTile: {
        flex: 1,
        minHeight: windowWidth < 400 ? 80 : 110,
        minWidth: windowWidth < 400 ? 80 : 124,
        maxWidth: windowWidth < 400 ? 80 : 124,
        borderWidth: 0.1,
        borderRadius: 10,
        borderColor: '#5392f7',
        overflow: 'hidden',
        backgroundColor: '#5392f7',
        elevation: 3,
        shadowOpacity: 10,
        shadowRadius: 30,
        marginBottom: 10,
        marginHorizontal: 3,
        overflow: 'scroll'
    },
    innerCountTile: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerCountTileFont: {
        fontFamily: 'Roboto_100Thin',
        fontSize: 30,
        color: 'white'
    },
    innerTextTile: {
        flex: 3,
        paddingHorizontal: 6,
        backgroundColor: '#d9e2e6',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomEndRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3
    },
    innerTextTileFont: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 10,
        color: fontColor.mainBlue,
    }
});

//make this component available to the app
export default memo(DashCountTile);
