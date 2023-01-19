//import liraries
import React, { memo, useState, lazy, Suspense, useCallback, useMemo } from 'react';
import { View, Text } from 'react-native';
import { bgColor, fontColor } from '../../../../Constant/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Button } from 'react-native-paper'
import { styles } from '../Style/Style';
import _ from 'underscore';
import { useSelector } from 'react-redux'
import { format } from 'date-fns'
import { axiosApi } from '../../../../config/Axiox';

const CustmDIalog = lazy(() => import('./CustmDIalog'));

// create a component
const NotAssignedCard = ({ data, setCount }) => {

    console.log(setCount)
    const loggedEmpDetl = useSelector((state) => state.loginFuntion.loginDetl, _.isEqual);
    const loggedDetl = useMemo(() => loggedEmpDetl, [loggedEmpDetl]);
    const { emp_id, emp_dept } = loggedDetl;

    const [visible, setVisible] = useState(false);

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

    const postData = {
        complaint_slno: complaint_slno,
        assigned_emp: emp_id,
        assigned_date: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
        assign_rect_status: 0,
        assigned_user: emp_id
    }

    //quick assign function
    const quickAssignMent = useCallback(async () => {
        // console.log(postData)
        const result = await axiosApi.post('/complaintassign', postData);
        const { message, success } = result.data;
        if (success === 1) {
            alert(message)
            setCount(complaint_slno)
        } else if (success === 0) {
            alert(message)
        } else {
            alert(message)
        }

    }, [postData])

    // const quickAsign = useCallback(() => quickAssignMent, [quickAssignMent]);


    return (
        <View style={styles.FLCP_container}>
            <Suspense>
                <CustmDIalog
                    visible={visible}
                    setVisible={setVisible}
                    quickAssignMent={quickAssignMent}
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
                        // onPress={() => setVisible(!visible)}
                        onPress={() => quickAssignMent()}
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
