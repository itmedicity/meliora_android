//import liraries
import React, { memo, useState, lazy, useMemo, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux'
import _ from 'underscore';
import { styles } from './Style/Style';

const DashCountTile = lazy(() => import('./DashCountTile'));

// create a component
const DashBoardView = ({ navigation }) => {

    const [newTicket, setNewTicket] = useState(0);
    const [assigned, setAssigned] = useState(0)
    const [assit, setAssist] = useState(0)
    const [onHold, setOnHold] = useState(0)
    const [forVerify, setForVerify] = useState(0)
    const [completed, setCompleted] = useState(0)

    const ticketCount = useSelector((state) => state.complaint.ticketCount, _.isEqual);
    const tickCounts = useMemo(() => ticketCount, [ticketCount]);

    useEffect(() => {
        const { newTicketCount, assignedTickectCount,
            assistTicketCount, onHoldTicketCount,
            forVerifyTicketCount, todayCompletedCount, } = tickCounts;
        setNewTicket(newTicketCount)
        setAssigned(assignedTickectCount)
        setAssist(assistTicketCount)
        setOnHold(onHoldTicketCount)
        setForVerify(forVerifyTicketCount)
        setCompleted(todayCompletedCount)
    }, [tickCounts])

    return (
        <ScrollView
            horizontal={true}
            fadingEdgeLength={10}
            showsHorizontalScrollIndicator={false}
            style={styles.dbvContainer}
        >
            <DashCountTile navigation={navigation} escalated={0} id={1} name='New Ticket' count={newTicket} />
            <DashCountTile navigation={navigation} escalated={0} id={2} name='Assigned' count={assigned} />
            <DashCountTile navigation={navigation} escalated={0} id={3} name='Assistance' count={assit} />
            <DashCountTile navigation={navigation} escalated={0} id={4} name='OnHold' count={onHold} />
            <DashCountTile navigation={navigation} escalated={0} id={5} name='For Verify' count={forVerify} />
            <DashCountTile navigation={navigation} escalated={0} id={6} name='On Progress' count={completed} />
        </ScrollView>
    );
};

//make this component available to the app
export default memo(DashBoardView);
