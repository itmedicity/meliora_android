//import liraries
import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { bgColor, fontColor } from '../../../../Constant/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Button } from 'react-native-paper'
import { styles } from '../Style/Style';

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
        <View style={styles.FLCP_container}>
            <View style={{
                marginHorizontal: 5
            }} >
                {/* name and department section */}
                <View style={{
                    flexDirection: 'row',
                    paddingVertical: 5
                }} >
                    <View style={{
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center'
                    }} >
                        <Text style={styles.FLCP_captionStyle} >{comp_reg_emp}</Text>
                        <Text style={{ color: bgColor.statusbar }}>@</Text>
                        <Text style={{ ...styles.FLCP_captionStyle, fontStyle: 'italic' }} >{empdept}</Text>
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
                            <Text style={styles.FLCP_cardTitle} >{compalint_date}</Text>
                        </View>
                        <View style={{
                            flexGrow: 1,
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            // paddingHorizontal: 5
                        }} >
                            {/* <Text style={styles.cardTitle} >complaint description :</Text> */}
                            <Text style={styles.FLCP_cardTitle} >{`#${complaint_slno}/2023`}</Text>
                        </View>
                    </View>
                </View>
                {/* request type and complaint type */}
                <View>
                    <View style={{
                        flexGrow: 1,
                        flexDirection: 'row',
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
                            <Text style={styles.FLCP_headStyle} >request Type :</Text>
                            <Text style={styles.FLCP_cardTitle} >{req_type_name}</Text>
                        </View>
                        <View style={{
                            flexGrow: 1,
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            // paddingHorizontal: 5
                        }} >
                            {/* <Text style={styles.cardTitle} >complaint description :</Text> */}
                            <Text style={styles.FLCP_cardTitle} >{complaint_type_name}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 5 }} >
                    <View>
                        <Text style={styles.FLCP_headStyle} >complaint description :
                            <Text style={styles.FLCP_cardTitle}> {` ${complaint_desc}`}</Text>
                        </Text>
                    </View>
                </View>
                <View style={{
                    // flex: 1,
                    flexDirection: 'row'
                }} >
                    <Text style={styles.FLCP_headStyle}>Location :</Text>
                    <Text style={styles.FLCP_cardTitle} >{location}</Text>
                </View>
                <View style={{
                    // flex: 1,
                    flexDirection: 'row'
                }} >
                    <Text style={styles.FLCP_headStyle}>ICRA Recommentation :</Text>
                    <Text style={styles.FLCP_cardTitle} >{hic_policy_name}</Text>
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

//make this component available to the app
export default memo(NotAssignedCard);
