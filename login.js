import React, {useState} from 'react';
import {StyleSheet, Text, Button, SafeAreaView, TextInput} from 'react-native';


export default function Login(props){
  const [phoneNumber, setPhoneNumber] = React.useState("Enter Phone Number:");
  const [OneTimePassword, set_otp] = React.useState(null); 
  //change 
  
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input} //login
        placeholder="Phone Number"
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        keyboardType = "numeric"
        
      />

      <Button title="Send Text" onPress={()=>send_sms(phoneNumber)(true)}/>


      <TextInput
        style={styles.input} //login
        onChangeText={set_otp}
        placeholder="one time code"
        keyboardType="numeric"
        value={OneTimePassword}
      />
      <Button title="Log In" onPress={()=>props.setUserLoggedIn(true)}
      />
    </SafeAreaView>
  );
}


const send_sms = async (phoneNumber) => {
  await fetch('https://dev.stedi.me/twofactorlogin/', + phoneNumber, {
  method: 'POST',

  body: JSON.stringify({
    firstParam: 'phoneNumber',
    secondParam: 'OneTimePassword'
  })
});

const set_otp = async (OneTimePassword, phoneNumber)  => 
  await fetch('https://dev.stedi.me/twofactorlogin/', {
  method: 'POST',
  headers: {
    Accept: 'application/text', //json
    'Content-Type': 'application/text'///json
  },
  body: JSON.stringify({
    phoneNumber,
  OneTimePassword
  })
});
}

// const styles = StyleSheet.create({
//     login: {
//         flexDirection: 'row',
//         width: '100%',
//         justifyContent: 'space-between',
//         backgroundColor: 'green',
//         height: '12%',
//         alignItems: 'flex-end',
//         paddingBottom: 5,
//         paddingLeft: 10,
//         paddingRight: 10,
        
//       },
// });


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

