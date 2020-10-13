import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const Product = ({ studioName }) => {
  return (
    <>
      <Box>
        <Typography>
          <p>
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
            ---------------------------------------------------------------------
            Voici l’aide en ligne qui vous expliquera comment utiliser et créer
            des onglets :
            https://www.oxatis.com/Help/HelpCenter.asp?actionid=1024&tid=56183&mid=56018&LangID=0
            Si votre site est déjà ouvert au public, nous attendons votre feu
            vert pour finaliser la mise en place de la fiche produit qui
            nécessite l’activation de votre nouveau design. Cordialement,
            {studioName} - Studio Graphique Oxatis
          </p>
        </Typography>
      </Box>
    </>
  );
};

export default Product;
