  
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
        <Grid style={{maxWidth:'400px', padding:'10px', backgroundColor:'#1e90ff'}}>
          <Row style={{flex:1, justifyContent:'center'}}>
            <Text h1>AnoChat</Text>
          </Row>
          <Row style={{display:'block'}}>
            <Col style={{paddingBottom:'10px'}}>
            <Text style={{fontSize:'18px'}}>Create a Chat Room and send the id to whom you want to join.</Text>
            </Col>
            <Col>
            <Button type='outline'  title="Create a Chat Room" onPress={onPressCreateRoom}/>
            </Col>
          </Row>
          <Row style={{display:'block'}}>
            <Col style={{paddingBottom:'10px'}}>
            <Text style={{fontSize:'18px'}}>Or join a room.</Text>
            </Col>
            <Col>
            <Button type='outline'  title="Join a Chat Room" onPress={onPressJoinChat}/>
            </Col>
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
        fontSize:24,
    },
    Input:{
        color:'red',
    }
  },
};
