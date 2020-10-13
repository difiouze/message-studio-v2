import React, { useState } from 'react';
import './App.css';

// Components //

import Design from './Components/Design'

// Material UI //

import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function App() {

  // ID Client
  const [clientId, setClientId] = useState();

  const clientIdHandler = (e) => {
    setClientId(e.target.value);
    //console.log(clientId)
  };

    const [selectedTab, setSelectedTab] = useState(0);
    const handleChange = (event, newValue) => {
      setSelectedTab(newValue);
    };


    function CopyToClipboard() {
      var r = document.createRange();
      r.selectNode(document.querySelector(".copied"));
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(r);
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
    }

    return (
      <div className="App">
        <Typography color='primary' variant='h4' align='center'>Studio Message Delivery</Typography>
        <Container>
          <Grid>
            <TextField
              variant='outlined'
              color='secondary'
              type='text'
              label='ID du client'
              size='small'
              placeholder='ID Client'
              id='client-id'
              onChange={clientIdHandler}
            />
          </Grid>

          <Grid>
            <Tabs
              value={selectedTab}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Design" />
              <Tab label="Homepage" />
              <Tab label="Fiche Produit" />
              <Tab label="Mobile" />
            </Tabs>

            {selectedTab === 0 && <Design clientId={clientId}/>}

          </Grid>
        </Container>
      </div>
    );
  }

  export default App;
