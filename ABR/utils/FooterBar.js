import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import BackgroundImage from '../Images/Subtract.jpg';

export default function FooterBar({navigation , page}) {//{navigation}
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prevValue) => !prevValue);
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <TouchableOpacity 
          style={styles.optionLeft} 
          onPress={()=>navigation.navigate(page === "Battery" ? "SpeedTime" : page === "SpeedTime" ? "Music" : page === "Music" ? "Battery" : null)}>
        <FontAwesome 
            name={page === "Battery" ? "tachometer" : page === "SpeedTime" ? "music" : page === "Music" ? "battery-half" : "Error"}
            size={24} 
            color="black" />
        <Text style={styles.optionText}>{page === "Battery" ? "Speed" : page === "SpeedTime" ? "Music" : page === "Music" ? "Battery" : "Error"}</Text>
      </TouchableOpacity>

      <View style={styles.switchContainer}>
        <TouchableOpacity style={styles.toggleButton} onPress={toggleSwitch}>
          <MaterialIcons name="power-settings-new" size={40} color={isOn ? 'green' : 'red'} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.optionRight} 
        onPress={()=>navigation.navigate(page === "Battery" ? "Music" : page === "SpeedTime" ? "Battery" : page === "Music" ? "SpeedTime" : null)}>
        <FontAwesome 
            name={page === "Battery" ? "music" : page === "SpeedTime" ? "battery-half" : page === "Music" ? "tachometer" : "Error"} 
            size={24} 
            color="black" />
        <Text style={styles.optionText}>{page === "Battery" ? "Music" : page === "SpeedTime" ? "Battery" : page === "Music" ? "Speed" : "Error"}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex:1,
  },
  optionLeft: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:20,
  },
  optionRight: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:20,
  },
  optionText: {
    fontSize: 12,
    color: 'black',
    marginTop: 5,
  },
  switchContainer: {
    position: 'absolute',
    top: -35, // מרים את הכפתור המרכזי
    left: '50%', // ממקם במרכז האופקי
    transform: [{ translateX: -35 }], // מפצה על רוחב הכפתור
    backgroundColor: '#E8E8E8',
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, // הצללה לאנדרואיד
    shadowColor: '#000', // הצללה לאייפון
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  toggleButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEFEFE',
    borderRadius: 35,
    width: 60,
    height: 60,
  },
});

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
// import Svg, { Path } from 'react-native-svg';

// export default function FooterBar() {
//   const [isOn, setIsOn] = useState(false);

//   const toggleSwitch = () => {
//     setIsOn((prevValue) => !prevValue);
//   };

//   return (
//     <View style={styles.container}>
//       {/* חלק ה-SVG לעיצוב הקימור */}
//       <Svg
//         height="100%"
//         width="100%"
//         style={styles.svgStyle}
//         viewBox="0 0 1440 80"
//       >
//         <Path
//           fill="#FEECB5"
//           d="M -3 -145 C 663 -203 474 14 715 55 C 935 22 825 -194 1440 -145 L 1440 320 L 0 320 Z"
//           // d="M -3 -145 C 663 -203 474 14 705 51 C 935 22 825 -194 1440 -145 L 1440 320 L 0 320 Z"
//           // d="M -3 -145 C 889 -191 407 8 711 110 C 1011 42 599 -184 1440 -145 L 1440 320 L 0 320 Z"
//         />
//       </Svg>

//       {/* תוכן ה-Footer */}
//       <View style={styles.content}>
//         {/* אופציה 1 */}
//         <TouchableOpacity style={styles.option} onPress={() => console.log('Music')}>
//           <FontAwesome name="music" size={24} color="black" />
//           <Text style={styles.optionText}>Music</Text>
//         </TouchableOpacity>

//         {/* כפתור הפעלה */}
//         <View style={styles.switchContainer}>
//           <TouchableOpacity style={styles.toggleButton} onPress={toggleSwitch}>
//             <MaterialIcons name="power-settings-new" size={40} color="black" />
//           </TouchableOpacity>
//         </View>

//         {/* אופציה 2 */}
//         <TouchableOpacity style={styles.option} onPress={() => console.log('Battery')}>
//           <FontAwesome name="battery-half" size={24} color="black" />
//           <Text style={styles.optionText}>Battery</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     position: 'relative',
//     width: '100%',
//     height: 100,
//   },
//   svgStyle: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     backgroundColor: 'white',
//   },
//   content: {
//     flexDirection: 'row',
//     alignItems:'center',
//     justifyContent:'space-between',
//     // backgroundColor: 'red',
//     // backgroundColor: '#FEECB5',
//     width: '100%',
//     height: '100%',
//     paddingHorizontal: 30,
//   },
//   option: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width:70,
//   },
//   optionText: {
//     fontSize: 12,
//     color: 'black',
//     marginTop: 5,
//   },
//   switchContainer: {
//     position: 'absolute',
//     top: -25,
//     left: '50%',
//     // left: '60%',
//     // transform: [{ translateX: -35 }],
//     backgroundColor: '#E8E8E8',
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 5, // הצללה לאנדרואיד
//     shadowColor: '#000', // הצללה לאייפון
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//   },
//   toggleButton: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#FEFEFE',
//     borderRadius: 35,
//     width: 60,
//     height: 60,
//   },
// });
