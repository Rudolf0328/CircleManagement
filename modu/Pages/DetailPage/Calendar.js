import React from "react";
import { View, Text } from 'react-native';
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Fonts } from '../../Fonts';

LocaleConfig.locales['fr'] = {
    monthNames: ["1월", "2월", "3월", "4월", "5월", "6월" ,"7월", "8월", "9월", "10월", "11월", "12월"],
    dayNames: ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"],
    dayNamesShort: ["월", "화", "수", "목", "금", "토", "일"],
}

LocaleConfig.defaultLocale = 'fr';

const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
const workout = { key: 'workout', color: 'green' };

export const DetailCalendar = ({style}) => {
    return (
        <View style={style}>
            <Calendar
                style={{
                    
                    // backgroundColor: "#FF0000"
                }}
                theme={{
                    textMonthFontFamily: Fonts.Dohyeon,
                    textDayFontFamily: Fonts.Dohyeon,
                    textDayHeaderFontFamily: Fonts.Dohyeon,
                    textMonthFontSize: 18,
                    textDayFontSize: 14,
                    arrowColor: "gray",
                    dotColor: "orange",
                    selectedDayBackgroundColor: "#00adf5",
                    selectedDayTextColor: "#ffffff",
                }}
                // onDayPress={} // TODO
                monthFormat={"yyyy년 MM월"}
                enableSwipeMonths={true}
                hideExtraDays={true}

                // 이렇게 쓰면 됨!
                // markedDates={{
                //     '2022-02-14': {
                //         periods: [
                //             { startingDay: true, endingDay: false, color: '#ffa500' },
                //             { color: 'transparent' },
                //             { startingDay: false, endingDay: false, color: '#f0e68c' },
                //         ]
                //     },
                //     '2022-02-15': {
                //         periods: [
                //             { startingDay: true, endingDay: false, color: '#ffa500' },
                //             { color: 'transparent' },
                //             { startingDay: false, endingDay: false, color: '#f0e68c' },
                //         ]
                //     },
                // }}
                // markingType='multi-period'

                markingType={'multi-dot'}
                markedDates={{
                    '2022-02-11': { dots: [vacation, massage, workout]},
                    '2022-02-13': { dots: [massage, workout]},
                }}
            />
        </View>
    )
}