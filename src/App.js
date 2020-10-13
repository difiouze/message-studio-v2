import React, { useState } from "react";
import "./style.css";

// Components //

import Design from "./Components/Design";
import Homepage from "./Components/Homepage";
import Mobile from "./Components/Mobile";
import Product from "./Components/Product";

// Material UI //
import {
  TextField,
  Typography,
  Container,
  Paper,
  Grid,
  Tabs,
  Tab,
  Switch,
  Box,
} from "@material-ui/core";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

function App() {
  // Theme //

  const [darkMode, setDarkmode] = useState(false);

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: '#fff'
      }
    },
  });

  const lightTheme = createMuiTheme({
    palette: {
      
    },
  });

  // Nom du site //
  const [siteName, setSiteName] = useState();

  const siteNameHandler = (e) => {
    setSiteName(e.target.value);
  };

  // Numéro du design //
  const [designNumber, setDesignNumber] = useState();

  const designNumberHandler = (e) => {
    setDesignNumber(e.target.value);
  };

  // Numéro du webblock //
  const [webblockNumber, setWebblockNumber] = useState();

  const webblockNumberHandler = (e) => {
    setWebblockNumber(e.target.value);
  };

  // ID Studio //

  const [studioName, setStudioName] = useState();

  const studioNameHandler = (e) => {
    setStudioName(e.target.value);
  };

  // Tabs //
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
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Paper square style={{ minHeight: "100vh", padding: "10px" }} >
        <div class="temp-navbar">
          <Switch
            checked={darkMode}
            onChange={() => setDarkmode(!darkMode)}
          ></Switch>
        </div>
        <Box my={2}>
        <Typography color="primary" variant="h4" align="center">
          Studio Message Delivery
        </Typography>
        </Box>
        <Container>
          <Grid container spacing={1} justify={"center"} style={{margin: '15px 0'}}>
            <Grid item justify={"center"}>
              <TextField
                variant="outlined"
                color="secondary"
                type="text"
                label="Nom du site"
                size="small"
                placeholder="Nom du site"
                id="sitename-id"
                onChange={siteNameHandler}
              />
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                color="secondary"
                type="text"
                label="Numéro du Webblock"
                size="small"
                placeholder="Numéro du Webblock"
                id="design-id"
                onChange={webblockNumberHandler}
              />
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                color="secondary"
                type="text"
                label="Numéro du design"
                size="small"
                placeholder="Numéro du design"
                id="client-id"
                onChange={designNumberHandler}
              />
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                color="secondary"
                type="text"
                label="Votre prénom"
                size="small"
                placeholder="Votre prénom"
                id="studioName"
                onChange={studioNameHandler}
              />
            </Grid>
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

            {selectedTab === 0 && <Design studioName={studioName} />}
            {selectedTab === 1 && (
              <Homepage
                studioName={studioName}
                siteName={siteName}
                designNumber={designNumber}
                webblockNumber={webblockNumber}
              />
            )}
            {selectedTab === 2 && <Product studioName={studioName} />}
            {selectedTab === 3 && <Mobile />}
          </Grid>
        </Container>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
