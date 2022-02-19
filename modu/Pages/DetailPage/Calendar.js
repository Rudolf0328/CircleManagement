import React from "react";
import { View, Text } from 'react-native';
import { Calendar } from "react-native-calendars";

export const DetailCalendar = ({style}) => {
    return (
        <View style={style}>
            <Calendar
                // onDayPress={} // TODO
                monthFormat={"yyyy년 MM월"}
                // hideArrows={true}
                hideExtraDays={true}
                // disableArrowLeft={true}
                // disableArrowRight={true}
                // renderHeader={(date) => {return <Text>{date}</Text>}}
            />
        </View>
    )
}