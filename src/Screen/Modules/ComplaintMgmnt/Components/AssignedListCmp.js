//import liraries
import React, { memo, useState, lazy, Suspense, useCallback, useMemo, useEffect } from 'react';
import { View, Text } from 'react-native';
import { bgColor, fontColor } from '../../../../Constant/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Button } from 'react-native-paper'
import { styles } from '../Style/Style';
import { useDispatch } from 'react-redux'
import { getTheActualEmployee } from '../../../../Redux/Actions/complaintMagmt.action';
import _ from 'underscore';

const RectifyModal = lazy(() => import('./RectifyModal'))
// create a component
const AssignedListCmp = ({ data }) => {

    const dispatch = useDispatch();
    const compDetlData = useMemo(() => data, [data])
    const {
        complaint_slno, //complaint slno
        compalint_date, //complaint date
        req_type_name, // request complaint type - complaint,new requirement , modification
        complaint_type_name, // comolaint type name hardware ,software ,etc
        location, // location name in detail
        comp_reg_emp, //  register employee name-complaint
        empdept, // registerd department 
        hic_policy_name,
        complaint_desc,
        compalint_priority,
        assigned_date
    } = compDetlData;

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        return () => {
            dispatch(getTheActualEmployee(0))
        }
    }, [getTheActualEmployee, dispatch])

    const onRectifyModal = useCallback(async () => {
        dispatch(getTheActualEmployee(complaint_slno))
        setVisible(true)
        // console.log(compalint_status)
    }, [])

    return (
        <View style={styles.FLCP_container}>
            <Suspense>
                <RectifyModal
                    visible={visible}
                    setVisible={setVisible}
                    data={compDetlData}
                    onProgress={1}
                />
            </Suspense>
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
                <View style={{
                    // flex: 1,
                    flexDirection: 'row'
                }} >
                    <Text style={styles.FLCP_headStyle}>Assigned Date :</Text>
                    <Text style={styles.FLCP_cardTitle} >{assigned_date}</Text>
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
                            borderRadius: 10,
                            backgroundColor: '#F9FFF6'
                        }}
                        labelStyle={{ color: '#40a629' }}
                        onPress={() => onRectifyModal()}
                    >
                        Rectify
                    </Button>
                </View>
            </View>
        </View>
    );
};

//make this component available to the app
export default memo(AssignedListCmp);
