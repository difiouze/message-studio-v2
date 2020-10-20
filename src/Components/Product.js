import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import copyTitleToClipboard from '../utils/copyTitleToClipboard';
import copyTextToClipboard from '../utils/copyTextToClipboard';

const Product = ({ studioName }) => {
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
            <span id='copiedTitle'>Studio Graphique &gt; Installation de votre fiche produit</span>
          </Typography>
        </Box>
        <Box className='copyTitle'>
          <FormatQuoteIcon color={"primary"} className={"copyTitle__icon"} onClick={copyTitleToClipboard}/>
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
        <span id='copiedText'>
            Bonjour, <br />
            <br />
            Le studio graphique Oxatis vient de terminer l’intégration du
            système de fiche produit. <br />
            Vos fiches articles contiennent maintenant les réseaux sociaux, le
            fil de navigation, les quantités ainsi que le système d’onglet sous
            forme d’apps qui sont activables ou désactivables dans le menu Apps
            de votre administration. <br />
            <br />
            Les réassurances affichées sont disponibles via Contenu &gt; Page
            sur mesure &gt; ID-NOM-DU-WB <br />
            <br />
            Voici un exemple: <br />
            Liens <br />
            <br />
            Cet article n’étant étant lié à aucune catégorie les visiteurs ne
            pourront le voir.
            <br /> <br />
            Voici l’aide en ligne qui vous expliquera comment utiliser et créer 
            des onglets :<br /> <br />
            https://www.oxatis.com/Help/HelpCenter.asp?actionid=1024&tid=56183&mid=56018&LangID=0<br /> <br />
            Si votre site est déjà ouvert au public, nous attendons votre feu
            vert pour finaliser la mise en place de la fiche produit qui
            nécessite l’activation de votre nouveau design.<br /> <br />
             Cordialement,<br />
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

export default Product;
