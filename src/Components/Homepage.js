import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import copyTitleToClipboard from "../utils/copyTitleToClipboard";
import copyTextToClipboard from "../utils/copyTextToClipboard";

const Homepage = ({ studioName, siteName, designNumber, webblockNumber }) => {
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
          <Typography className={"copySelection"}>
            <span id="copiedTitle">
              Studio Graphique &gt; Livraison Page d’accueil
            </span>
          </Typography>
        </Box>
        <Box>
          <FormatQuoteIcon
            color={"primary"}
            className={"copySelection__icon"}
            onClick={copyTitleToClipboard}
          />
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
          <Typography className={"copySelection"}>
            <span id="copiedText">
              Bonjour,
              <br />
              <br />
              Nous venons de finaliser l’intégration de votre page d’accueil
              sous le nom de " _Oxatis FR 2020 - Accueil - Base de travail ".{" "}
              <br />
              <br />
              Numéro de votre page sur mesure : {webblockNumber} <br />
              Lien : https://{siteName}
              .oxatis.com/PBCPPlayer.asp?ADContext=1&ID=
              {webblockNumber}&DesignCode={designNumber}&pgfflags=1 <br />
              <br />
              Nous avons intégré les éléments validés à la page d’accueil, vous
              avez la main sur ces éléments pour les modifier comme bon vous
              semble. <br />
              <br />
              Voici la méthode pour appliquer votre Page d’Accueil: <br />
              <br />
              1) Cliquez sur le menu Configuration &gt; Page d’Accueil &gt;
              [Modifier] &gt; et changer l’action de navigation […] pour
              sélectionner votre nouvelle page d’accueil <br />
              <br />
              2) Si vous avez un élément de menu de type "Accueil" - Cliquez sur
              le menu Configuration &gt; Menus &gt; Pour modifier de manière
              identique au point 1 l’action de navigation de votre élément de
              menu page d’accueil <br />
              <br />
              Si votre page d’accueil actuelle est une page sur mesure
              <br />
              3) Cliquez sur Contenu &gt; Pages sur mesure &gt; et éditez les
              propriétés de votre ANCIENNE page d’accueil. Rendez-vous dans
              l’onglet "Complémentaire" &gt; zone Redirection et appliquez ici
              aussi l’action de navigation permettant d’afficher la nouvelle
              page sur mesure.
              <br />
              <br />
              Recommandation : nous vous conseillons de dupliquer votre page sur
              mesure pour disposer d’une copie de sauvegarde avant toute
              modification de celle-ci.
              <br />
              <br />
              Aide aux pages sur mesure : Comment dupliquer une page sur mesure
              ?
              <br />
              http://www.oxatis.com/Help/HelpCenterContent.asp?ActionID=1024&TID=55110&MID=53001{" "}
              <br />
              <br />
              Editeur de Texte Enrichi <br />
              http://www.oxatis.com/Help/HelpCenterContent.asp?ActionID=512&TID=1242&MID=5000|12000
              <br />
              <br />
              Eléments <br />
              http://www.oxatis.com/Help/HelpCenterContent.asp?ActionID=512&TID=55233&MID=5000|12000{" "}
              <br />
              <br />
              Si votre site n’est pas ouvert au public, vous pouvez vous rendre
              dans: <br />
              <br />
              1) Configuration &gt; Propriétés Générales &gt; Modifier <br />
              2) Et Sélectionner « Oui » pour Ouvrir le site au public <br />
              <br />
              Nous vous conseillons cependant avant de faire ceci de bien
              prendre connaissances des autres messages de livraison et de
              modifier vos pages internes disponibles dans Contenu &gt; Pages
              sur mesure Pour toute aide supplémentaire, n’hésitez pas à créer
              une nouvelle question en vous rendant dans Support. <br />
              <br />
              Cordialement,
              <br />
              {studioName} - Studio Graphique <br />
              New Oxatis
            </span>
          </Typography>
        </Box>
        <Box className={'copySelection'}>
          <FormatQuoteIcon
            color={"primary"}
            className={"copySelection__icon"}
            onClick={copyTextToClipboard}
          />
            <span id="copy-success">Message copié</span>
        </Box>
      </Box>
    </>
  );
};

export default Homepage;
