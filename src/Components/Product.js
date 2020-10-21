import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import copyTitleToClipboard from "../utils/copyTitleToClipboard";
import copyTextToClipboard from "../utils/copyTextToClipboard";

// Material UI //
import {
  TextField,
  Container,
  Grid,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  InputLabel,
} from "@material-ui/core";

const Product = ({ studioName, siteName, designNumber, value, classes }) => {
  // ID Webblock //

  const [wbIdProduct, setWbIdProduct] = useState();

  const wbIdProductHandler = (e) => {
    setWbIdProduct(e.target.value);
  };

  // Type de réassurances //

  const [reaValue, setReaValue] = useState();

  const handleReaChange = (e) => {
    setReaValue(e.target.value);
  };

  return (
    <>
      <Container>
        <Grid
          container
          spacing={1}
          justify={"center"}
          alignItems={"center"}
          style={{ margin: "15px 0" }}
        >
          <Grid item justify={"center"}>
            <TextField
              variant="outlined"
              color="secondary"
              type="text"
              label="Id du Webblock Produit"
              size="small"
              placeholder="Id du Webblock Produit"
              id="wbProduct-id"
              onChange={wbIdProductHandler}
            />
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel>Réassurances</InputLabel>
              <Select
                labelId="test"
                label="test"
                displayEmpty
                reaValue={reaValue}
                onChange={handleReaChange}
                autoWidth
              >
                <MenuItem value="_product-page-reinsurance-head">
                  Header
                </MenuItem>
                <MenuItem value="_product-page-reinsurance-addtocart">
                  Add to Cart
                </MenuItem>
                <MenuItem value="_product-page-reinsurance-bottom">
                  Bottom
                </MenuItem>
              </Select>
              <FormHelperText>Position des réassurances</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </Container>

      <Box
        display={"flex"}
        border={1}
        borderRadius="borderRadius"
        borderColor={"action.disabled"}
        p={2}
        my={2}
      >
        <Box flexGrow={1}>
          <Typography>
            <span id="copiedTitle">
              Studio Graphique &gt; Installation de votre fiche produit
            </span>
          </Typography>
        </Box>
        <Box className="copyTitle">
          <FormatQuoteIcon
            color={"primary"}
            className={"copyTitle__icon"}
            onClick={copyTitleToClipboard}
          />
          <span id="copyTitle-success">Titre copié !</span>
        </Box>
      </Box>

      <Box
        display={"flex"}
        border={1}
        borderRadius="borderRadius"
        borderColor={"action.disabled"}
        p={2}
      >
        <Box flexGrow={1}>
          <Typography>
            <span id="copiedText">
              Bonjour, <br />
              <br />
              Le studio graphique Oxatis vient de terminer l’intégration du
              système de fiche produit. <br /><br />
              Vos fiches articles contiennent maintenant les réseaux sociaux, le
              fil de navigation, les quantités ainsi que le système d’onglet
              sous forme d’apps qui sont activables ou désactivables dans le
              menu Apps de votre administration. <br />
              <br />
              Les réassurances affichées sont disponibles via Contenu &gt; Page
              sur mesure &gt; {wbIdProduct} {reaValue} <br />
              <br />
              Voici un exemple: <br />
  Lien : https://{siteName}.oxatis.com/PBSCProduct.asp?ItmID=30673346&DesignCode={designNumber}&ADContext=1&AVERTISSEMENT=NE-PAS-UTILISER-CETTE-URL <br />
              <br />
              Cet article n’étant étant lié à aucune catégorie les visiteurs ne
              pourront le voir.
              <br /> <br />
              Voici l’aide en ligne qui vous expliquera comment utiliser et
              créer des onglets :<br /> <br />
              https://www.oxatis.com/Help/HelpCenter.asp?actionid=1024&tid=56183&mid=56018&LangID=0
              <br /> <br />
              Si votre site est déjà ouvert au public, nous attendons votre feu
              vert pour finaliser la mise en place de la fiche produit qui
              nécessite l’activation de votre nouveau design.
              <br /> <br />
              Cordialement,
              <br />
              {studioName} - {value} <br />
              New Oxatis
            </span>
          </Typography>
        </Box>
        <Box className={"copySelection"}>
          <FormatQuoteIcon
            color={"primary"}
            className={"copySelection__icon"}
            onClick={copyTextToClipboard}
          />
          <span id="copy-success">Message copié !</span>
        </Box>
      </Box>
    </>
  );
};

export default Product;
