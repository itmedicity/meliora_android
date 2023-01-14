//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { bgColor, fontColor } from '../../../Constant/Colors';
import { windowWidth } from '../../../utils/Dimentions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Button } from 'react-native-paper'

// create a component
const NotAssignedCard = ({ data }) => {

    const {
        complaint_slno, //complaint slno
        compalint_date, //complaint date
        complaint_dept_name, //complaint register department
        req_type_name, // request complaint type - complaint,new requirement , modification
        complaint_type_name, // comolaint type name hardware ,software ,etc
        sec_name, // complaint register user section name
        location, // location name in detail
        comp_reg_emp, //  register employee name-complaint
        empdept, // registerd department 
        hic_policy_name,
        priority,
        complaint_desc,
        compalint_priority
    } = data;

    return (
        <View style={styles.container}>
            <View style={{
                marginHorizontal: 5
                // borderWidth: 0.340,
                // borderRadius: 2,
            }} >
                {/* name and department section */}
                <View style={{
                    // flex: 1,
                    flexDirection: 'row',
                    paddingVertical: 5
                }} >
                    <View style={{
                        // flexGrow: 1,
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center'
                    }} >
                        <Text style={styles.captionStyle} >{comp_reg_emp}</Text>
                        <Text style={{ color: bgColor.statusbar }}>@</Text>
                        <Text style={{ ...styles.captionStyle, fontStyle: 'italic' }} >{empdept}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center'
                    }} >
                        {/* <Text style={{ ...styles.cardTitle, fontStyle: 'italic' }} >{priority}</Text> */}
                        <MaterialCommunityIcons
                            name='alarm-light'
                            color={
                                compalint_priority === 0 ? 'green' :
                                    compalint_priority === 1 ? 'red' : 'orange'
                            }
                            size={15}
                        />
                    </View>
                </View>
                {/* register time and numeber section */}
                <View>
                    <View style={{
                        flexGrow: 1,
                        flexDirection: 'row',
                        // borderWidth: 0.340,
                        // borderRadius: 2,
                        // minHeight: '50%',
                        borderColor: fontColor.inActiveFont,
                        justifyContent: 'space-between'
                    }} >
                        <View style={{
                            flexGrow: 1,
                            flexDirection: 'row',
                            alignContent: 'center',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            // textTransform: 'capitalize'
                        }} >
                            {/* <Text style={styles.cardTitle} >Register Time :</Text> */}
                            <Text style={styles.cardTitle} >{compalint_date}</Text>
                        </View>
                        <View style={{
                            flexGrow: 1,
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            // paddingHorizontal: 5
                        }} >
                            {/* <Text style={styles.cardTitle} >complaint description :</Text> */}
                            <Text style={styles.cardTitle} >{`#${complaint_slno}/2023`}</Text>
                        </View>
                    </View>
                </View>
                {/* request type and complaint type */}
                <View>
                    <View style={{
                        flexGrow: 1,
                        flexDirection: 'row',
                        // borderWidth: 0.340,
                        // borderRadius: 2,
                        // minHeight: '50%',
                        borderColor: fontColor.inActiveFont,
                        justifyContent: 'space-between'
                    }} >
                        <View style={{
                            flexGrow: 1,
                            flexDirection: 'row',
                            alignContent: 'center',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            // textTransform: 'capitalize'
                        }} >
                            <Text style={styles.headStyle} >request Type :</Text>
                            <Text style={styles.cardTitle} >{req_type_name}</Text>
                        </View>
                        <View style={{
                            flexGrow: 1,
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            // paddingHorizontal: 5
                        }} >
                            {/* <Text style={styles.cardTitle} >complaint description :</Text> */}
                            <Text style={styles.cardTitle} >{complaint_type_name}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 5 }} >
                    <View>
                        <Text style={styles.headStyle} >complaint description :
                            <Text style={styles.cardTitle}> {` ${complaint_desc}`}</Text>
                        </Text>
                    </View>
                </View>
                <View style={{
                    // flex: 1,
                    flexDirection: 'row'
                }} >
                    <Text style={styles.headStyle}>Location :</Text>
                    <Text style={styles.cardTitle} >{location}</Text>
                </View>
                <View style={{
                    // flex: 1,
                    flexDirection: 'row'
                }} >
                    <Text style={styles.headStyle}>ICRA Recommentation :</Text>
                    <Text style={styles.cardTitle} >{hic_policy_name}</Text>
                </View>
            </View>
            <View style={{
                flexGrow: 1,
                flexDirection: 'row',
                paddingHorizontal: 6,
                justifyContent: 'space-between',
                marginVertical: 5
            }} >
                <View style={{ flex: 1 }} >
                    <Button
                        icon={() => <AntDesign
                            name='rightcircle'
                            color='#40a629'
                            size={20}
                        />
                        }
                        mode='elevated'
                        style={{
                            borderRadius: 0,
                            borderTopLeftRadius: 10,
                            borderBottomLeftRadius: 10,
                        }}
                        labelStyle={{ color: '#40a629' }}
                    >
                        Quick
                    </Button>
                </View>
                <View style={{ flex: 1, }}>
                    <Button
                        icon={() => <MaterialIcons
                            name='assignment-ind'
                            size={21}
                            style={{ color: '#40a629' }}
                        />
                        }
                        // loading={true}
                        mode='elevated'
                        style={{ borderRadius: 0 }}
                        labelStyle={{ color: '#40a629' }}
                    >
                        Assign
                    </Button>
                </View>
                <View style={{ flex: 1, }}>
                    <Button
                        icon={() => <Ionicons
                            name='arrow-redo-sharp'
                            color='#40a629'
                            size={21}
                        />
                        }
                        elevation={10}
                        mode='elevated'
                        style={{
                            borderRadius: 0,
                            borderTopEndRadius: 10,
                            borderBottomRightRadius: 10
                        }}
                        labelStyle={{ color: '#40a629' }}
                    >
                        Transfer
                    </Button>
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffdff',
        minHeight: 130,
        padding: 3,
        borderColor: bgColor.mainBgColor,
        borderTopWidth: 0.5
    },
    cardTitle: {
        fontFamily: 'Roboto_500Medium',
        fontSize: windowWidth > 400 ? 12 : 12,
        paddingHorizontal: 2,
        // color: fontColor.inActiveFont,
        color: '#444655',
        textTransform: 'capitalize'
    },
    headStyle: {
        fontFamily: 'Roboto_500Medium',
        fontSize: windowWidth > 400 ? 12 : 12,
        paddingHorizontal: 2,
        color: fontColor.inActiveFont,
        textTransform: 'capitalize'
    },
    captionStyle: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 14,
        paddingHorizontal: 2,
        color: '#0c111b',
        textTransform: 'capitalize'
    }
});

//make this component available to the app
export default NotAssignedCard;
