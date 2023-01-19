//import liraries
import React, { memo, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Dialog, Portal, Text, Button } from 'react-native-paper';
// create a component
const CustmDIalog = ({ visible, setVisible, quickAssignMent }) => {
    const hideDialog = () => setVisible(false);
    return (
        <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Icon icon="alert" color='orange' />
                <Dialog.Title style={styles.title}>Quick Assign</Dialog.Title>
                <Dialog.Content style={{
                    alignItems: 'center',
                }} >
                    <Text variant="bodyMedium">Complaint Directly Assign To Your Assigned List</Text>
                </Dialog.Content>
                <Dialog.Actions style={{
                    justifyContent: 'space-between'
                }} >
                    <Button onPress={useCallback(() => quickAssignMent(), [quickAssignMent])}>Ok</Button>
                    <Button onPress={useCallback(() => hideDialog(), [hideDialog])}>Cancel</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
};

// define your styles
const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
    },
});

//make this component available to the app
export default memo(CustmDIalog);
