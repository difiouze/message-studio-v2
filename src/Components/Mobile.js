import React from 'react'
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import copyTitleToClipboard from '../utils/copyTitleToClipboard';
import copyTextToClipboard from '../utils/copyTextToClipboard';

const Mobile = ( {studioName}) => {
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
            <span id='copiedTitle'>Studio Graphique &gt; Installation de votre accueil mobile</span>
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
            <span id='copiedText'>Bonjour,<br /><br />
            Nous venons de finaliser l’intégration de votre page d’accueil Mobile sous le nom de " NOMDELAPAGE  ".<br /><br />
            Numéro de votre page  sur mesure : XXXX<br />
            Lien : XXXXX<br /><br />
            Vous pouvez retrouver cette page sur mesure dans Contenu &gt; Pages sur mesure &gt; et repérer la ligne du nom de votre page.<br /><br />
            Nous avons intégré les éléments validés à la page d’accueil, vous avez la main sur ces éléments pour les modifier comme bon vous semble.<br /><br />
            La page sur mesure est déjà fonctionnelle sur la version mobile.<br /><br />
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
    )
}

export default Mobile
