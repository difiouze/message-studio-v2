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
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  InputLabel,
} from "@material-ui/core";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

function App() {
  // Theme //

  const [darkMode, setDarkmode] = useState(false);

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#F50057",
      },
    },
  });

  const lightTheme = createMuiTheme({
    palette: {},
  });

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
  }));

  const classes = useStyles();

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

  // ID Departement //

  const [value, setValue] = useState();

  const handleDepartmentChange = (e) => {
    setValue(e.target.value);
  };

  // Tabs //
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Paper square style={{ minHeight: "100vh", padding: "10px" }}>
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
          <Grid
            container
            spacing={1}
            justify={"center"}
            alignItems={"center"}
            style={{ margin: "15px 0" }}
          >
            <Grid item>
              <FormControl className={classes.formControl}>
                <InputLabel>Département</InputLabel>
                <Select
                  labelId="test"
                  label="test"
                  displayEmpty
                  value={value}
                  onChange={handleDepartmentChange}
                  autoWidth
                >
                  <MenuItem value="Studio Graphique">Studio Graphique</MenuItem>
                  <MenuItem value="Chef de Projet">Chef de Projet</MenuItem>
                </Select>
                <FormHelperText>Sélectionnez votre département</FormHelperText>
              </FormControl>
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
                label="Numéro du Webblock"
                size="small"
                placeholder="Numéro du Webblock"
                id="design-id"
                onChange={webblockNumberHandler}
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

            {selectedTab === 0 && (
              <Design studioName={studioName} designNumber={designNumber} value={value} />
            )}
            {selectedTab === 1 && (
              <Homepage
                studioName={studioName}
                siteName={siteName}
                designNumber={designNumber}
                webblockNumber={webblockNumber}
                value={value}
              />
            )}
            {selectedTab === 2 && <Product studioName={studioName} value={value} classes={classes}/>}
            {selectedTab === 3 && <Mobile studioName={studioName} value={value} />}
          </Grid>
        </Container>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
