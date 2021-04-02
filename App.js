  
import React, {useState} from 'react';
import { ThemeProvider, Header, Text, Button, Input } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {

  const [users, setUsers] =  useState([]);
  const [chat, setChat] = useState([]);
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Grid>
          <Row>
            <Text>AnoChat</Text>
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