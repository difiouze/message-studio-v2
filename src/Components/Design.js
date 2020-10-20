import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import copyTitleToClipboard from '../utils/copyTitleToClipboard';
import copyTextToClipboard from '../utils/copyTextToClipboard';

const Design = ({ studioName }) => {
  
  return (
    <>
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
            <span id='copiedTitle'>Studio Graphique &gt; Installation de votre design</span>
          </Typography>
        </Box>
        <Box>
          <FormatQuoteIcon color={"primary"} className={"copySelection__icon"} onClick={copyTitleToClipboard}/>
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
            <span id='copiedText'>Bonjour,
            <br />
            <br />
            Notre studio graphique a installé votre présentation personnalisée
            "NOMDUDESIGNCHROME" dans votre site Oxatis. <br />
            <br />
            Pour activer votre nouveau graphisme, suivez la procédure suivante:
            <br />
            <br />
            1) Cliquez sur le menu Configuration &gt; Design <br />
            2) Repérez la ligne de votre nouvelle présentation personnalisée
            Oxatis.
            <br />
            3) Dans la 1ère colonne "Défaut", cliquez sur l’icône grise "V" pour
            activer la présentation. La couleur de l’icône passe alors du gris
            au bleu.
            <br />
            <br />
            Si votre site n’est pas ouvert au public, vous pouvez vous rendre
            dans: <br />
            <br />
            1) Configuration &gt; Propriétés Générales &gt; Modifier <br />
            <br />
            2) Et Sélectionner « Oui » pour Ouvrir le site au public <br />
            <br />
            Nous vous conseillons cependant avant de faire ceci de bien prendre
            connaissances des autres messages de livraison (si vous avez d’autre
            prestations) et de modifier vos pages internes disponibles dans
            Contenu &gt; Pages sur mesure <br />
            <br />
            Pour toute aide supplémentaire, n’hésitez pas à créer une nouvelle
            question en vous rendant dans Support.
            <br />
            <br />
            Cordialement,
            <br />
            {studioName} - Studio Graphique <br />
            New Oxatis</span>
            
          </Typography>
        </Box>
        <Box className={'copySelection'}>
        <FormatQuoteIcon color={"primary"} className={"copySelection__icon"} onClick={copyTextToClipboard}/>
        <span id="copy-success">Message copié !</span>
        </Box>
      </Box>
    </>
  );
};

export default Design;
