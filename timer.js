import React from 'react';
import { View, Text } from 'react-native';
import CountDown from 'react-native-countdown-component';

const Timer = ({ play, style, id }) => {
  return (
   <View>
       <CountDown
            id={id}
            style={style}
            running={play}
            size={30}
            until={30}
            digitStyle={{backgroundColor: "transparent"}}
            digitTxtStyle={{color: "#1dbf73"}}
            onFinish={() => alert("Time!")}
            timeLabels={{s: null}}
            timeToShow={["S"]}
       />
   </View>
  )

}

export default Timer