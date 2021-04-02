  
import React, {useState} from 'react';
import { ThemeProvider, Header, Text, Button, Input } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {

  const [users, setUsers] =  useState([]);
  const [chat, setChat] = useState([]);
  const [isLoggedin, setIsLoggedin] = useState(false);

  function onPressCreateRoom(){
    // redirect to a form to Create a Room
  }
  function onPressJoinChat(){
    //redirect to to a form to Join a Chat
  }
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Grid style={{maxWidth:'400px'}}>
          <Row>
            <Text h1>AnoChat</Text>
          </Row>
          <Row style={{display:'block'}}>
            <Text>Create a Chat Room and send the id to whom you want to join.</Text>
            <Button type='outline'  title="Create a Chat Room" onPress={onPressCreateRoom}/>
          </Row>
          <Row style={{display:'block'}}>
            <Text>Or join a room.</Text>
            <Button type='outline'  title="Join a Chat Room" onPress={onPressJoinChat}/>
          </Row>
      </Grid>   
    </ThemeProvider>
    </SafeAreaProvider>
  );
}

const theme = {
  Button: {
    raised: true,
    color: 'auto',
    titleStyle:{          
        fontSize:30,
    },
    Input:{
        color:'red',
    }
  },
};