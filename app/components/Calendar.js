import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-big-calendar';

function Calendar() {
    return (
        <View style={styles.container}>
            <Calendar
                events={[
                    {
                        title: 'Meeting with Client',
                        start: '2023-09-18T10:00:00',
                        end: '2023-09-18T12:00:00',
                    },
                    {
                        title: 'Lunch Break',
                        start: '2023-09-18T12:30:00',
                        end: '2023-09-18T13:30:00',
                    },
                    // Add more events as needed
                ]}
                height={600}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default Calendar;
