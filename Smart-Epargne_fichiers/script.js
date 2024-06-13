const COMPANY = "Smart-Epargne";
const COMPANY_LINK = "Smart-epargne.com";
// const COMPANY_LINK = `${COMPANY.toLowerCase()}.io`
const MULTI_LANG = true;
const SYMBOLS = `https://api.${COMPANY_LINK}/symbols/full`;

const COMPANY_LOGIN = `https://cfd.${COMPANY_LINK}`;
const COMPANY_REGISTER = `https://cfd.${COMPANY_LINK}/register`;

const ACCOUNT_SIGN = "$";
const COMPANY_PRICE = [
    [0, 2500],
    [2500, 10000],
    [10000, 25000],
    [25000, 50000],
    [50000, 100000],
    [100000, 100000],
];

const langs = {
    fr: {
        _name: "fr",

        menu: {
            home: 'PAGE D\'ACCUEIL',
            faq: 'faq',
            assets: 'ACTIFS',
            forex: 'FOREX',
            stocks: 'ACTIONS',
            crypto: 'CRYPTO',
            metals: 'MÉTAUX',
            indices: 'INDICES',
            commodities: 'MATIÈRES PREMIÈRES',
            nft: 'NFt',
            trading: 'SPÉCULATION',
            accountTypes: 'TYPES DE COMPTE',
            education: 'ÉDUCATION',
            ourPlatform: 'NOTRE PLATEFORME',
            cfdTrading: 'TRADING DE CFD',
            technicalAnalysis: 'ANALYSE TECHNIQUE',
            fundamentalAnalysis: 'ANALYSE FONDAMENTALE',
            riskManagement: 'GESTION DES RISQUES',
            legal: 'LÉGALITÉ',
            privacy: 'CONFIDENTIALITÉ',
            disclaimer: 'AVERTISSEMENT',
            kyc: 'CONNAITRE VOTRE CLIENT',
            aboutUs: ' À PROPOS DE NOUS POUR',
            contacts: 'CONTACTER'
        },

        menuBtn: {
            login: 'Login',
            signUp: 'Enregistrez-vous'
        },
        btnsText:{
            send: 'ENVOYER'
        },
        hero: {
            title: 'Système de Trading ',
            subtitle: "CFD Professionnel",
            desc: 'Le portail vers votre liberté financière. Engagez-vous dès aujourd\'hui et conquérez les marchés avec nos services et solutions',
            btnText: 'Commencer',
            titleP1: 'Le trading professionnel',
            titleP2: 'pour tous',
            titleP3: 'Investir, Mieux, Ensemble',
        },
        features: {
            mainTitle: 'Accès facile aux opportunités d\'investissement',
            mainDesc: 'Ce n\'est jamais trop tard pour commencer votre voyage dans le monde de la finance et assurer un avenir riche et durable pour vous et votre famille. Notre vision est que la liberté financière est cruciale et que l\'accès aux opportunités d\'investissement devrait être illimité. C\'est pourquoi nous offrons le moyen le plus simple, le plus rapide et le plus abordable de commencer à trader pour un investisseur de détail régulier.',
            title1: 'Pas de commission',
            title2: 'Trading sûr et sécurisé',
            title3: 'Marchés mondiaux les plus liquides',
            title4: 'Tradez partout',
            title5: 'Retraits rapides garantis',
            title6: 'Plusieurs comptes dans des devises différentes',
            desc1: 'Tradez autant que vous voulez',
            desc2: 'Avec notre logiciel professionnel de haut niveau',
            desc3: 'Actions, crypto, matières premières, forex, indices et ETF',
            desc4: 'De tout lieu avec accès à Internet',
            desc5: 'Prenez vos profits chaque fois que vous en avez besoin',
            desc6: 'Gérez vos fonds à votre façon',
        },
        steps: {
            desc4: 'Vérification',
            desc5: 'Dépôt',
            title: '3 ÉTAPES FACILES POUR COMMENCER À TRADER',
            desc2: 'Inscrivez-vous sur notre Plateforme',
            desc3: 'Faites un dépôt',
            desc4: 'Finir la Vérification',
            text1: 'Remplissez un formulaire d\'inscription avec des informations essentielles sur vous-même pour créer un compte sur notre Plateforme.',
            text2: 'Nous sommes légalement obligés de vérifier votre identité, donc des photos de vos documents seront indispensables.',
            text3: 'Rechargez votre compte en utilisant l\'une des méthodes disponibles et commencez à passer des commandes tout de suite.',
            stepText: "Étape",
        },
        planet: {
            title: 'Investissez dans la crypto et les NTF',
        },
        markets: {
            title: 'MARCHÉS',

            itemTitle1: 'Actions',
            itemDesc1: '200+ entreprises publiques bien connues\n',
            itemTitle2: 'Crypto',
            itemDesc2: 'Bitcoin établis et altcoins émergents',
            itemTitle3: 'Matières premières',
            itemDesc3: 'Pétrole et gaz, produits industriels et agricoles',
            itemTitle4: 'Indices',
            itemDesc4: 'Principaux indicateurs économiques mondiaux',
            itemTitle5: 'Forex',
            itemDesc5: 'Paires de devises principales et exotiques',
            itemTitle6: 'Métaux',
            itemDesc6: 'Or, argent, autres métaux précieux et industriels',
            itemTitle7: 'NFT',
            itemDesc7: 'Les index qu traquent les collections NFT les plus populaires',
        },
        cryptocurrency: {
            title: 'Cryptocurrency',
            desc: 'La crypto-monnaie fait fureur aujourd\'hui. C\'est le marché qui connaît la croissance la plus rapide et le meilleur rendement du 21e siècle à ce jour. La Crypto est là où la technologie de pointe sophistiquée rencontre de grandes opportunités de profit sans frontières pour entrer. Bitcoin et altcoins sont essentiels à tout système de trading crypto, mais nous avons quelque chose de spécial pour vous! La possibilité de trader des indices NFT est une fonctionnalité spéciale, nouvelle et à chaud de notre plate-forme!',
            btnText: 'Registration',
        },
        widgets: {
            title: 'QUELQUES DÉNOMINATIONS',
        },
        cryptoNft: {
            title: 'Investissez dans la crypto et les NTF',
            desc: 'La crypto-monnaie fait fureur aujourd\'hui. C\'est le marché qui connaît la croissance la plus rapide et le meilleur rendement du 21e siècle à ce jour. La Crypto est là où la technologie de pointe sophistiquée rencontre de grandes opportunités de profit sans frontières pour entrer. Bitcoin et altcoins sont essentiels à tout système de trading crypto, mais nous avons quelque chose de spécial pour vous! La possibilité de trader des indices NFT est une fonctionnalité spéciale, nouvelle et à chaud de notre plate-forme!',
        },
        stats: {
            desc1: 'années dans le business',
            desc2: 'utilisateurs actifs chaque mois',
            desc3: 'bureaux dans le monde entier',
            desc4: 'actifs à échanger',
        },
        prices: {
            title: 'QUELQUES DÉNOMINATIONS'
        },
        optimized: {
            mainTitle: 'Mobile-optimized trading experience',
            mainDesc: 'Never miss out on an opportunity with our mobile interface! Whenever you are not at your desktop or laptop computer, our Platform got you covered.',
            title1: 'Adaptive',
            desc1: 'The interface is fully adaptive to any mobile device with full functionality remaining intact. Trade anywhere, anytime!',
            title2: 'Fast',
            desc2: 'Our mobile interface is as fast as a desktop version. Make sure you have a fast mobile data connection and stay on top of the markets no matter the circumstances!',
            title3: 'Convenient',
            desc3: 'In a fast moving world it’s crucial to keep an eye on the markets even when you are on the go. Stay informed and stay mobile with our Platform!',
        },
        page: {
            forex: "QU'EST-CE QUE LE MARCHÉ FOREX?",
            stocks: "QU'EST-CE QU'UNE ACTION?",
            crypto: "QU'EST-CE QUE LA CRYPTO-MONNAIE?",
            metals: "QU'EST-CE QUE LES MÉTAUX?",
            indices: "QU'EST-CE QU'UN INDICE DE MARCHÉ?",
            commodities: "QU'EST-CE QUE LES MATIÈRES PREMIÈRES?",
            nft: "QU'EST-CE QU'UN JETON NON FONGIBLE (NFT)?"
        },
        forex: {
            descHead: 'Le marché Forex permet aux participants, tels que les banques et les individus, d\'acheter, de vendre ou d\'échanger des devises à des fins de couverture et de spéculation. Le marché des changes (forex) est le plus grand marché financier au monde et il est composé de banques, de sociétés commerciales, de banques centrales, de sociétés de gestion de placements, de fonds spéculatifs, de courtiers forex de détail et d\'investisseurs.\n',
            list1: 'Le marché forex permet aux participants, y compris les banques, les fonds et les individus d\'acheter, de vendre ou d\'échanger des devises à des fins de couverture et de spéculation.',
            list2: 'Le marché forex fonctionne 24 heures sur 24, 5,5 jours par semaine, et il est responsable de milliers de milliards de dollars d\'activités de trading quotidiennes.',
            list3: 'Le trading sur le Forex peut fournir des rendements élevés, mais comprend également des risques élevés.',
            list4: 'Le marché des changes est composé de deux niveaux: le marché interbancaire et le marché de gré à gré (OTC).',
            list5: 'De nombreux comptes forex peuvent être ouverts avec minimum de 100$.',
            understanding: '// Comprendre le marché Forex',
            textUnderstanding1: 'Le marché forex n\'est pas dominé par une bourse unique, mais par un réseau mondial d\'ordinateurs et de courtiers du monde entier. Les courtiers forex agissent également en tant que teneurs de marché et peuvent afficher des prix d\'offre et de demande pour une paire de devises qui diffère de l\'offre la plus compétitive du marché.',
            textUnderstanding2: 'Le marché des changes est composé de deux niveaux—le marché interbancaire et le marché de gré à gré (OTC). Le marché interbancaire est la pace où les grandes banques négocient des devises à des fins telles que la couverture, les ajustements de bilan et pour le compte de clients. Le marché de gré à gré, d\'autre part, est l\'endroit où les individus négocient via des plateformes en ligne et des courtiers.',
            textUnderstanding3: 'Du lundi matin en Asie au vendredi après-midi à New York, le marché des changes est un marché de 24 heures, ce qui signifie qu\'il ne ferme pas du jour au lendemain. Le marché des changes ouvre du dimanche à 17h00 EST au vendredi à 16h00 EST.',
            textUnderstanding4: 'Cela diffère des marchés tels que les actions, les obligations et les matières premières, qui ferment tous pendant un certain temps, généralement en fin d\'après-midi EST. Cependant, comme pour la plupart des choses, il y a des exceptions. Certaines devises des marchés émergents ferment pendant quelque temps lors le jour de négociation.',
            stock: '// Trading de CFD sur actions',
            textStock: 'Avec Investous, vous pouvez trader des Contrats de différence (CFD) qui utilisent le forex comme actif sous-jacent, vous permettant d\'acheter ou de vendre les actions d\'une entreprise sans les posséder réellement. Cela vous permet de spéculer sur les prix changeants des actions, même sans accès à une bourse comme la Bourse de New York ou la Bourse de Londres. Par exemple, vous achèteriez des contrats pour des actions IBM si vous pensez que le prix des actions de la société augmentera ou les vendriez à découvert si vous pensez que le prix diminuera. La beauté du trading de CFD est la possibilité de spéculer sur la hausse ou la baisse des prix tout en ayant droit aux dividendes si l\'entreprise annonce des paiements aux actionnaires. Avec une longue liste d\'actions de grandes entreprises mondiales disponibles, participez à l\'action dès aujourd\'hui en rejoignant Investous.',
            table: 'FOREX DISPONIBLE SUR NOTRE PLATEFORME'
        },
        stocks: {
            descHead1: 'Une action (également appelée capitaux propres) est un titre qui représente la propriété d\'une fraction d\'une société. Elle donne droit à son propriétaire à une proportion de l\'actif et des bénéfices de la société égale à la quantité d\'actions qu\'il possède. Les unités d\'actions sont appelées " actions."',
            descHead2: 'Les actions sont achetées et vendues principalement en bourse (bien qu\'il puisse également y avoir des ventes privées) et constituent le fondement des portefeuilles de nombreux investisseurs individuels. Ces transactions doivent être conformes aux réglementations gouvernementales dont le but est de protéger les investisseurs contre les pratiques frauduleuses. Historiquement, elles ont surperformé la plupart des autres investissements à long terme. Ces investissements peuvent être achetés auprès de la plupart des courtiers en ligne',
            list1: 'Une action est une forme de titre indiquant que son détenteur possède une participation proportionnelle dans la société émettrice.',
            list2: 'Les sociétés émettent (vendent) des actions pour lever des fonds pour exploiter leurs entreprises. Il existe deux principaux types de stock: commun et préféré.',
            list3: 'Les actions sont achetées et vendues principalement en bourse, bien qu\'il puisse également y avoir des ventes privées, et elles constituent le fondement de presque tous les portefeuilles.',
            list4: 'Historiquement, elles ont surperformé la plupart des autres investissements à long terme.',
            understanding: '// Comprendre les Actions',
            textUnderstanding1: 'Les sociétés émettent (vendent) des actions pour lever des fonds pour exploiter leurs entreprises. Le détenteur d\'actions (un actionnaire) achète une partie de la société et, selon le type d\'actions détenues, il peut avoir droit à une partie de ses actifs et de ses bénéfices. En d\'autres termes, un actionnaire est désormais propriétaire de la société émettrice. La propriété est déterminée par le nombre d\'actions qu\'une personne possède par rapport au nombre d\'actions en circulation. Par exemple, si une société a 1 000 actions en circulation et qu\'une personne possède 100 actions, cette personne détiendrait et aurait droit à 10% des actifs et des bénéfices de la société.',
            textUnderstanding2: 'Les actionnaires ne sont pas propriétaires de sociétés; ils possèdent des actions émises par des sociétés. Mais les sociétés sont un type particulier d\'organisation parce que la loi les traite comme des personnes morales. En d\'autres termes, les sociétés déclarent des impôts, peuvent emprunter, posséder des biens, être poursuivies en justice, etc. L\'idée qu\'une société est une "personne" signifie que la société possède ses propres actifs. Un siège social rempli de chaises et de tables appartient à la société et pas aux actionnaires.',
            textUnderstanding3: 'Cette distinction est importante parce que les biens de la société sont légalement séparés des biens des actionnaires, ce qui limite la responsabilité de la société et de l\'actionnaire. Si la société fait faillite, un juge peut ordonner la vente de tous ses actifs—mais vos actifs personnels ne sont pas en danger. Le tribunal ne peut même pas vous forcer à vendre vos actions, bien que la valeur de vos actions aura chuté de façon drastique. En outre, si un actionnaire majoritaire fait faillite, il ne peut pas vendre les actifs de l\'entreprise pour rembourser ses créanciers.',
            table: 'ACTIONS DISPONIBLES SUR NOTRE PLATEFORME'
        },
        crypto: {
            descHead: 'Une crypto-monnaie est une monnaie numérique ou virtuelle sécurisée par cryptographie, ce qui rend presque impossible sa contrefaçon ou sa double dépense. De nombreuses crypto-monnaies sont des réseaux décentralisés basés sur la technologie blockchain—un registre distribué appliqué par un réseau disparate d\'ordinateurs. Une caractéristique déterminante des crypto-monnaies est qu\'elles ne sont généralement émises par aucune autorité centrale, ce qui les rend théoriquement immunisées contre l\'ingérence ou la manipulation du gouvernement.',
            list1: 'Une crypto-monnaie est une forme d\'actif numérique basée sur un réseau distribué sur un grand nombre d\'ordinateurs. Cette structure décentralisée leur permet d\'exister en dehors du contrôle des gouvernements et des autorités centrales.',
            list2: 'Les experts estiment que la blockchain et les technologies associées perturberont de nombreux secteurs, y compris la finance et le droit.',
            list3: 'Les avantages des crypto-monnaies incluent des transferts d\'argent moins chers et plus rapides et des systèmes décentralisés qui ne s\'effondrent pas en un seul point.',
            list4: 'Les inconvénients des crypto-monnaies comprennent leur volatilité des prix, leur consommation d\'énergie élevée pour les activités minières et leur utilisation dans des activités criminelles.',
            understanding: '// Comprendre les Crypto-monnaies',
            textUnderstanding1: 'Les crypto-monnaies sont des monnaies numériques ou virtuelles soutenues par des systèmes cryptographiques. Ils permettent des paiements en ligne sécurisés sans recourir à des intermédiaires tiers. "Crypto" fait référence aux différents algorithmes de cryptage et techniques cryptographiques qui protègent ces entrées, tels que le cryptage à courbe elliptique, les paires de clés publiques-privées et les fonctions de hachage.',
            textUnderstanding2: 'Les crypto-monnaies peuvent être minées ou achetée par les échanges de crypto-monnaie. Tous les sites de commerce électronique n\'autorisent pas les achats utilisant des crypto-monnaies. En fait, les crypto-monnaies, même les plus populaires comme le Bitcoin, sont à peine utilisées pour les transactions de détail. Cependant, la valeur en flèche des crypto-monnaies les a rendues populaires en tant qu\'instruments de trading. Dans une mesure limitée, ils sont également utilisés pour les transferts transfrontaliers.',
            blockchain: '// Blockchain',
            textBlockchain1: 'La technologie blockchain est au cœur de l\'attrait et des fonctionnalités de Bitcoin et d\'autres crypto-monnaies. Comme son nom l\'indique, la blockchain est essentiellement un ensemble de blocs connectés ou un registre  en ligne. Chaque bloc contient un ensemble de transactions qui ont été vérifiées indépendamment par chaque membre du réseau. Chaque nouveau bloc généré doit être vérifié par chaque nœud avant d\'être confirmé, ce qui rend presque impossible la falsification des historiques de transactions. Le contenu du registre en ligne doit être accepté par l\'ensemble du réseau d\'un nœud individuel ou d\'un ordinateur conservant une copie du registre.',
            textBlockchain2: 'Les experts disent que la technologie blockchain peut servir plusieurs industries, telles que la chaîne d\'approvisionnement, et des processus tels que le vote en ligne et le financement participatif. Des institutions financières telles que JPMorgan Chase & Co. (JPM) teste l\'utilisation de la technologie blockchain pour réduire les coûts de transaction en rationalisant le traitement des paiements.',
            table: 'CRYPTOMONNAIES DISPONIBLES SUR NOTRE PLATEFORME'
        },
        metals: {
            descHead: 'Le tableau périodique représente les éléments chimiques connus de la planète, et certains d\'entre eux font d\'excellents investissements. Les métaux des terres rares, ainsi qu\'une sélection d\'éléments connus sous le nom de métaux de base et de métaux précieux, offrent aux investisseurs et aux traders actifs d\'aujourd\'hui une variété d\'opportunités de trading. Ils sont également souvent formés en lingots pour les achats physiques.',
            list1: 'Les investisseurs peuvent participer au marché des métaux de base en achetant des actions de sociétés comme U. S. Steel, des contrats à terme, des options et  des ETF divers.',
            list2: 'Les métaux précieux offrent le plus grand champ d\'opportunités pour les investisseurs, avec des sociétés minières, des ETF pour les actions et les métaux eux-mêmes, des options, des contrats à terme et même des achats directs de métaux physiques.',
            list3: 'À mesure que les métaux des terres rares devenaient plus importants pour la technologie et l\'économie, les investisseurs s\'intéressaient de plus en plus aux actions des sociétés productrices de terres rares et aux ETF connexes.',
            base: '// Métaux Communs',
            textBase1: 'En chimie, les métaux qui s\'oxydent ou se corrodent facilement sont appelés les métaux communs. Ces métaux industriels comprennent le cuivre (Cu sur le tableau périodique), le nickel( Ni), l\'aluminium (Al), le zinc (Zn), le plomb (Pb), l\'étain (Sn) et le fer (Fe)/acier (un alliage de fer et de carbone).',
            textBase2: 'Les métaux communs sont généralement abondants et sont utilisés dans une variété d\'applications commerciales et industrielles. Ces applications comprennent la plomberie en cuivre, les canettes en aluminium et l\'acier utilisé dans la production automobile. À cause de leur abondance, les prix des métaux communs sont bien inférieurs aux prix des métaux précieux et des terres rares. Leurs prix répondent à l\'évolution de la demande pour les produits dans la prodictions desquels les métaux sont utilisés.',
            textBase3: 'Les investisseurs et les traders peuvent participer au marché des métaux de base de plusieurs manières. Les investissements peuvent être réalisés dans des sociétés individuelles spécialisées dans la production de métaux de base particuliers, notamment la société sidérurgique U. S. Steel (X) ou la société d\'aluminium Alcoa (AA). Les contrats à terme et les contrats d\'options de métaux individuels peuvent être tradés, par exemple les contrats à terme sur cuivre (HG) et les options (HX) sur CME Globex.',
            textBase4: 'En outre, il existe une grande variété de fonds tradés en bourse (ETF) sur les métaux de base. L\'un d\'eux est le fonds Invesco DB Base Metal (DBB), composé de contrats à terme sur l\'aluminium, le zinc et le cuivre. Le FNB SPDR S & P Metals & Mining (XME) est un autre, et il est composé de sociétés impliquées dans les industries des métaux et des mines. Enfin, le fonds iShares U. S. Basic Materials ETF (IYM) est constitué d\'entreprises engagées dans la production de matériaux de base.',
            precious: '// Métaux Précieux',
            textPrecious1: 'Les métaux précieux sont des éléments chimiques métalliques naturels qui sont  très brillant et ont un point de fusion élevés. Ils sont plus doux et plus ductiles que les autres métaux et sont moins réactifs que la plupart des éléments. Les métaux précieux comprennent l\'argent (Ag), l\'or (Au), le platine (Pt) et le palladium (Pd). En raison de leur rareté,  leur valeu est beaucoup plus haute que des métaux communs. Ils sont utilisés pour les bijoux, l\'art, les pièces de monnaie, les travaux dentaires, les appareils médicaux, l\'électronique et les investissements.',
            textPrecious2: 'Comme les métaux communs, une large gamme de véhicules d\'investissement est disponible pour ceux qui s\'intéressent aux marchés des métaux précieux. L\'or a longtemps été considéré comme un investissement solide et il est souvent détenu physiquement sous forme de bijoux, de pièces de monnaie ou de lingots d\'or. En particulier en période d\'incertitude économique, l\'or gagne en popularité en tant qu\'actif de dernier recours. Outre la possession physique de métaux précieux, les investisseurs peuvent négocier des actions, des contrats à terme, des options, des fonds communs de placement et des FNB en fonction de leurs.',
            textPrecious3: 'Des exemples d\'actions comprennent Eldorado Gold Corporation (EGO) et Mines Agnico-Eagle Limitée (AEM), deux producteurs d\'or établis au Canada. De plus, le Groupe CME offre aux investisseurs un choix de contrats à terme et d\'options sur l\'or. Le contrat pleine grandeur est basé sur 100 onces troy (GC), tandis que le contrat e-mini gold est de 50 onces troy (QO) et le contrat micro gold est de 10 onces troy (MGC). Les options d\'or sont également disponibles dans une taille de contrat de 100 onces troy (OG). Des contrats à terme et des contrats d\'options sont également disponibles pour l\'argent, le platine et le palladium.',
            textPrecious4: 'Les ETF de métaux précieux comprennent le SPDR Gold Trust ETF (GLD) adossé physiquement et fortement tradé, le VanEck Vectors Junior Gold Miners ETF (GDXJ) et le iShares Silver Trust ETF (SLV). Le Invesco DB Precious Metals Fund (DBP) et le Aberdeen Standard Physical Palladium Shares ETF (PALL) sont parmi les autres choix disponibles.',
            table: 'MÉTAUX DISPONIBLES SUR NOTRE PLATEFORME'
        },
        index: {
            descHead1: 'Un indice de marché est un portefeuille hypothétique d\' avoirs investis qui représente un segment du marché financier. Le calcul de la valeur de l\'indice provient des prix des avoirs sous-jacents. Certains indices ont des valeurs basées sur la pondération de la capitalisation boursière, la pondération des revenus, la pondération flottante et la pondération fondamentale. La pondération est une méthode d\'ajustement de l\'impact individuel des éléments d\'un indice.',
            descHead2: 'Les investisseurs suivent différents indices de marché pour évaluer les mouvements du marché. Les trois indices boursiers les plus populaires pour suivre la performance du marché américain sont le Dow Jones Industrial Average (DJIA), l\'indice S&P 500 et l\'indice composite Nasdaq. Sur le marché obligataire, Bloomberg est l\'un des principaux fournisseurs d\'indices de marché, l\'indice Bloomberg U. S. Aggregate Bond servant de proxy parmi les plus populaires pour les obligations américaines.  Les investisseurs ne peuvent pas investir directement dans un indice, de sorte que ces portefeuilles sont largement utilisés comme indices de référence ou pour développer des fonds indiciels.',
            list1: 'Les indices de marché offrent un large portefeuille représentatif d\'avoirs investis.',
            list2: 'Les méthodologies de construction des indices individuels varient, mais presque tous les calculs sont basés sur les mathématiques des moyennes pondérées.',
            list3: 'Les indices sont utilisés comme indices de référence pour évaluer le mouvement et la performance des segments de marché',
            list4: 'Les investisseurs utilisent les indices comme la base du portefeuille ou des investissements passifs.',
            understanding: '// Comprendre un Indice de Marché',
            textUnderstanding1: 'Un indice de marché mesure la valeur d\'un portefeuille d\'avoirs avec des caractéristiques de marché spécifiques. Chaque indice a sa propre méthodologie qui est calculée et maintenue par le fournisseur de l\'indice. Les méthodologies des indices seront généralement pondérées en fonction du prix ou de la capitalisation boursière. Une grande variété d\'investisseurs utilisent les indices de marché pour suivre les marchés financiers et gérer leurs portefeuilles d\'investissement. Les indices sont profondément ancrés dans le secteur de la gestion de placements, les fonds les utilisent comme références pour les comparaisons de performances et les gestionnaires les utilisent comme la base pour créer des fonds indiciels investissables.',
            market: '// Méthodologies des Indices Boursiers',
            textMarket: 'Chaque indice individuel a sa propre méthode de calcul de la valeur de l\'indice. Les mathématiques de la moyenne pondérée constituent principalement la base des calculs de l\'indice, car les valeurs sont dérivées d\'un calcul de la moyenne pondérée de la valeur de l\'ensemble du portefeuille. En tant que tels, les indices pondérés par les prix seront plus fortement touchés par les variations des avoirs dont le prix est le plus élevé, tandis que les indices pondérés par la capitalisation boursière seront plus fortement touchés par les variations des actions les plus importantes, et donc, selon les caractéristiques de pondération.',
            table: 'INDICES DISPONIBLES SUR NOTRE PLATEFORME',
        },
        commodities: {
            descHead1: 'Avez-vous déjà pensé à ce qu\'il y a dans cette tasse de café que vous prenez tous les matins? Qu\'en est-il de l\'essence que vous utilisez pour remplir votre réservoir chaque semaine? La plupart d\'entre nous ne s\'en rendent jamais compte, mais pratiquement tous les biens commencent par des matières premières.',
            descHead2: 'Les matières premières sont une partie extrêmement importante du marché financier. C\'est parce qu\'elles sont essentielles pour les producteurs et les fabricants. Une matière première est essentiellement un produit de base ou une matière première utilisée pour fabriquer tous les biens et services dont nous avons besoin dans notre vie quotidienne.',
            descHead3: 'Il existe un large éventail de produits, notamment le pétrole, le gaz, le café, le soja et le riz. Ces matières premières sont tradées sur des bourses de matières premières du monde entier telles que le Chicago Mercantile Exchange (CME), le London Metals Exchange et l\'Intercontinental Exchange (ICE). Investir dans les matières premières offre aux investisseurs un moyen de diversifier leurs portefeuilles, en particulier en période de volatilité des marchés.',
            descHead4: 'Vous voulez apprendre plus sur cette partie unique du marché? Continuez à lire pour apprendre plus sur les différents types de produits, leurs structures de prix et qui les met sur le marché.',
            list1: 'Les matières premières se présentent sous de nombreuses formes, y compris les céréales, les produits énergétiques et les métaux.',
            list2: 'Les prix changent au fur et à mesure que les événements économiques se déroulent et déclenchent des vagues d\'achat et de vente.',
            list3: 'Les traders n\'achètent et ne vendent généralement pas de produits physiques.',
            list4: 'Les matières premières sont tradées sur le marché au comptant ou au marché au comptant, et sur des bourses organisées sous la forme de contrats à terme.',
            list5: 'Les contrats à terme sur matières premières sont tradés en bourse et sont utilisés à des fins de spéculation et de couverture.',
            types: '// Types des matières premières',
            tetTypes1: 'Étant donné que les matières premières sont tradées en bourse, leurs prix ne sont pas fixés par un seul individu ou entité. En fait, il y a de nombreux facteurs économiques et différents catalyseurs qui affectent et déplacent leurs prix chaque jour.',
            tetTypes2: 'De même que les titres de participation, les prix des matières premières sont principalement déterminés par les forces de l\'offre et de la demande sur le marché. Par exemple, si l\'offre de pétrole augmente, le prix d\'un baril diminue. Inversement, si la demande de pétrole augmente (ce qui arrive souvent pendant l\'été), le prix augmente. L\'essence et le gaz naturel entrent dans la catégorie des produits énergétiques.',
            tetTypes3: 'Les conditions météorologiques jouent un rôle extrêmement important dans l\'évolution des prix des produits agricoles ou liés aux cultures, en particulier à court terme. Si la météo affecte les approvisionnements dans une certaine région, elle a un impact direct sur le prix de ce produit. Les produits qui entrent dans cette catégorie comprennent le maïs, le soja et le blé. Le coton, le café et le riz sont appelés produits mous.',
            tetTypes4: 'L\'or est l\'une des matières premières les plus activement tradées car il est utilisé pour produire des bijoux et d\'autres biens. Mais il est également considéré comme un investissement rentable à long terme. L\'argent et le cuivre sont d\'autres exemples de produits du groupe des métaux.',
            tetTypes5: 'Le bétail est un autre groupe de produits. Cette catégorie comprend les animaux vivants, tels que les porcs et les bovins.',
            stock: '// Trading de CFD sur actions',
            textStock1: 'Avec Investous, vous pouvez trader des Contrats de différence (CFD) utilisant des matières premières comme actif sous-jacent, ce qui vous permet d\'acheter ou de vendre les actions d\'une entreprise sans les posséder réellement. Cela vous permet de spéculer sur les prix changeants des actions, même si vous n\'avez pas accès à une bourse comme la Bourse de New York ou la Bourse de Londres. Par exemple, vous achèteriez des contrats pour des actions IBM si vous pensez que le prix des actions de la société augmentera ou les vendriez à découvert si vous pensez que le prix diminuera. La beauté du trading de CFD est la possibilité de spéculer sur la hausse ou la baisse des prix tout en ayant droit aux dividendes si l\'entreprise annonce des paiements aux actionnaires. Avec une longue liste d\'actions de grandes entreprises mondiales disponibles, participez à l\'action dès aujourd\'hui en rejoignant Investous.',
            table: 'MATIÈRES PREMIÈRES DISPONIBLES SUR NOTRE PLATEFORME'
        },
        nft: {
            descHead1: 'Les jetons non fongibles (NFT) sont des actifs cryptographiques sur une blockchain avec des codes d\'identification uniques et des métadonnées qui les distinguent les uns des autres. Contrairement aux crypto-monnaies, elles ne peuvent pas être échangées ou échangées à l\'équivalence. Cela diffère des jetons fongibles comme les crypto-monnaies, qui sont identiques les uns aux autres et, par conséquent, peuvent servir de support pour les transactions commerciales.',
            descHead2: 'La construction distincte de chaque NFT a le potentiel de plusieurs cas d\'utilisation. Par exemple, ils constituent un instrument idéal pour représenter numériquement des actifs physiques tels que des biens immobiliers et des œuvres d\'art. Parce qu\'ils sont basés sur des blockchains, les NFT peuvent également fonctionner pour supprimer les intermédiaires et connecter les artistes avec le public ou pour la gestion de l\'identité. Les NFT peuvent supprimer les intermédiaires, simplifier les transactions et créer de nouveaux marchés.',
            descHead3: 'Une grande partie du marché actuel des NFT est centrée sur les objets de collection, tels que les œuvres d\'art numériques, les cartes de sport et les raretés. L\'espace le plus médiatisé est peut-être NBA Top Shot, un endroit pour collecter des moments NBA tokenisés non fongibles sous la forme de cartes numériques. Certaines de ces cartes se sont vendues pour des millions de dollars. Récemment, Jack Dorsey de Twitter (TWTR) a tweeté un lien vers une version tokenisée du tout premier tweet, dans laquelle il écrivait: "Je viens de configurer mon twttr."La version NFT du tout premier tweet a été vendue pour plus de 2,9 millions de dollars.',
            list1: 'Les NFT sont des jetons cryptographiques uniques qui existent sur une blockchain et ne peuvent pas être répliqués.',
            list2: 'Les NFT peuvent représenter des objets du monde réel comme des œuvres d\'art et des biens immobiliers.',
            list3: 'La "tokenisation" de ces actifs corporels réels rend l\'achat, la vente et le trading plus efficaces tout en réduisant la probabilité de fraude.',
            list4: 'Les NFT peuvent également représenter l\'identité des individus, les droits de propriété, etc.',
            understanding: '// Comprendre les NFT',
            textUnderstanding1: 'Comme l\'argent physique, les crypto-monnaies sont fongibles, ce qui signifie qu\'elles peuvent être tradées ou échangées, l\'une pour l\'autre. Par exemple, un bitcoin a toujours la même valeur qu\'un autre bitcoin. De même, une seule unité d\'éther est toujours égale à une autre unité. Cette caractéristique de fongibilité rend les crypto-monnaies adaptées comme moyen de transaction sécurisé dans l\'économie numérique.',
            textUnderstanding2: 'Les NFT modifient le paradigme de la cryptographie en rendant chaque jeton unique et irremplaçable, rendant ainsi impossible qu\'un jeton non fongible soit égal à un autre. Ce sont des représentations numériques d\'actifs et elles ont été comparées à des passeports numériques car chaque jeton contient une identité unique et non transférable pour le distinguer des autres jetons. Ils sont également extensibles, ce qui signifie que vous pouvez combiner un NFT avec un autre pour “reproduire” un troisième NFT unique.',
            textUnderstanding3: 'Tout comme Bitcoin, les NFT contiennent également des détails sur la propriété pour une identification et un transfert faciles entre les détenteurs de jetons. Les propriétaires peuvent également ajouter des métadonnées ou des attributs relatifs à l\'actif dans les NFT. Par exemple, les jetons représentant des grains de café peuvent être classés comme commerce équitable. Ou, les artistes peuvent signer leur œuvre numérique avec leur propre signature dans les métadonnées.',
            textUnderstanding4: 'Les NFT ont évolué à partir de la norme ERC-721. Développé par certaines des mêmes personnes responsables du contrat intelligent ERC-20, ERC-721 définit l\'interface minimale—détails de propriété, sécurité et métadonnées—requise pour l\'échange et la distribution de jetons de jeu. La norme ERC-1155 pousse le concept plus loin en réduisant les coûts de transaction et de stockage requis pour les NFT et en regroupant plusieurs types de jetons non fongibles en un seul contrat.',
            textUnderstanding5: 'Le cas d\'utilisation le plus célèbre des NFT est peut-être celui des cryptokitties. Lancés en novembre 2017, les cryptokitties sont des représentations numériques de chats avec des identifications uniques sur la blockchain d\'Ethereum. Chaque chaton est unique et a un prix en ether. Ils se reproduisent entre eux et produisent une nouvelle progéniture, qui a des attributs et des valorisations différents de ceux de leurs parents.',
            textUnderstanding6: 'Quelques semaines après leur lancement, les cryptokitties ont accumulé une base de fans qui a dépensé 20 millions de dollars d\'éther pour les acheter et les nourrir. Certains passionnés ont même dépensé plus de 100 000 $ sur l\'effort. Plus récemment, le Bored Ape Yacht Club a suscité une attention controversée pour ses prix élevés, ses célébrités et les vols très médiatisés de certains de ses 10 000 NFT.',
            textUnderstanding7: 'Bien que les cas d\'utilisation des cryptokitties et du Bored Ape Yacht Club puissent sembler anodins, les autres ont des implications commerciales plus sérieuses. Par exemple, les NFT ont été utilisés dans des transactions de capital-investissement ainsi que dans des transactions immobilières. L\'une des implications de l\'activation de plusieurs types de jetons dans un contrat est la possibilité de fournir un entiercement pour différents types de NFT—des œuvres d\'art à l\'immobilier—en une seule transaction financière.',
            stock: '// Trading de CFD sur actions',
            stockText1: 'Avec Investous, vous pouvez négocier des Contrats de différence (CFD) qui utilisent le NFT comme actif sous-jacent, vous permettant d\'acheter ou de vendre les actions d\'une entreprise sans les posséder réellement. Cela vous permet de spéculer sur les prix changeants des actions, même si vous n\'avez pas accès à une bourse comme la Bourse de New York ou la Bourse de Londres. Par exemple, vous achèteriez des contrats pour des actions IBM si vous pensez que le prix des actions de la société augmentera ou les vendriez à découvert si vous pensez que le prix diminuera. La beauté du trading de CFD est la possibilité de spéculer sur la hausse ou la baisse des prix tout en ayant droit aux dividendes si l\'entreprise annonce des paiements aux actionnaires. Avec une longue liste d\'actions de grandes entreprises mondiales disponibles, participez à l\'action dès aujourd\'hui en rejoignant Investous.',
            table: 'INDEX NFT SUR NOTRE PLATEFORME'
        },
        ourPlatform: {
            dash: '// Tableau de bord de l\'utilisateur',
            dashDesc: 'C\'est la première page que vous voyez après être connecté à notre Plateforme. Sur cette page unique, vous pouvez surveiller toutes vos activités de trading: solde actuel, total des profits et pertes, retour sur investissement, informations sur chaque compte que vous avez, nombre d\'ordres rentables par rapport à un certain nombre de tous vos trades, graphique en courbes reflétant la croissance de votre solde au fil du temps et un journal de chaque foi où vous vous êtes connecté au système.',
            deposit: '// Page de Dépôt',
            depositDesc: 'Pour commencer à trader, vous devez recharger votre compte, et vous pouvez le faire sur cette page. Sélectionnez l\'une des méthodes de dépôt disponibles, entrez un montant et passez au système de paiement – service fourni par des tiers. Lorsque votre dépôt est confirmé, vous verrez une notification sur notre Plateforme et pourrez commencer à passer des commandes.',
            main: '// Écran de trading principal',
            mainDesc: 'Ici, vous voyez le graphique de l\'actif que vous avez sélectionné et le menu de commande où vous ouvrez les commandes. Toute transaction que vous ouvrez peut être affinée en fonction de votre stratégie: vous pouvez placer des transactions longues et courtes, définir des ordres à cours limité si nécessaire, choisir l\'une des trois conversions de montants et définir des niveaux de stop-loss et de take-profit. L\'indicateur de tendance vous aidera à prendre une bonne décision et le calculateur de profit est là pour vous aider à planifier vos risques et vos bénéfices futurs.',
            widgets: '// Widget',
            widgetsDesc: 'L\'écran de trading principal est plein de fonctionnalités supplémentaires élaborées pour votre commodité. Sur le côté gauche, vous voyez un panneau de widgets avec MarketWatch, Calendrier économique, Actualités du marché et informations détaillées sur vos transactions ouvertes et fermées. Ces transactions seront également montrées dans le Panneau de commande en bas de votre écran.',
        },
        accountTypes: {
            desc: 'Différents types de comptes sont disponibles pour nos clients réguliers. Plus vous tradez, plus vos options sont pratiques.',
            btnText: 'Open Account',
            minVolume: 'Min Volume',
            maxVolume: 'Max Volume',
            lotSize: 'Taille du Lot',
            main: 'Principal',
            bronze: 'Bronze',
            silver: 'Argent',
            gold: 'D’Or',
            platinum: 'Platine',
            vip: 'VIP',
        },
        trading: {
            descHead1: "Pour le trading momentum, qui est un type de trading technique, un trader surveille les signes indiquant qu'une action est sur le point d'éclater; c'est-à-dire d'entreprendre un mouvement de prix unidirectionnel significatif sur un volume élevé pendant une période de temps suffisante pour générer un profit. En observant la ligne de momentum, le trader de momentum s'est déjà engagé dans une analyse technique en examinant les graphiques boursiers à la recherche de signes de cassure.",
            descHead2: 'Les indicateurs techniques utilisés dans le trading momentum ne sont que la pointe de l\'iceberg; ils ne sont qu\'un petit échantillon de la large gamme de modèles de graphiques et de graphiques disponibles pour le trader technique.',
            descHead3: 'Les traders débutants peuvent expérimenter chacune de ces techniques, mais ils devraient finalement s\'installer sur un seul créneau correspondant à leurs connaissances et à leur expérience en matière d\'investissement avec un style auquel ils sont motivés à consacrer davantage de recherches, d\'éducation et de pratique. Des manuels entiers sont consacrés à chaque style, bien que de nombreux titres tels que " Day Trade Online "ou" Comment démarrer dans le Day Trading électronique " ne soient pas clairs sur le type de trading qu\'ils épousent.',
            different: '// Types Différents de Trading',
            differentDesc: 'Avant de nous concentrer sur le trading technique, voici une revue des types principaux de trading d\'actions:',
            listTitle1: 'Scalping:',
            list1: 'Le scalpeur est un individu qui effectue des dizaines ou des centaines de transactions par jour dans le but de "scalper" un petit profit de chaque transaction en exploitant l\'écart bid-ask.',
            listTitle2: 'Momentum Trading:',
            list2: ' Les traders de Momentum recherchent des actions qui évoluent de manière significative dans une direction en volume élevé. Ces traders tentent de surfer sur la dynamique du profit souhaité.',
            listTitle3: 'Trading technique:',
            list3: 'Les traders techniques se concentrent sur les graphiques . Ils surveillent les lignes sur les graphiques boursiers ou indiciels à la recherche de signes de convergence ou de divergence pouvant indiquer des signaux d\'achat ou de vente.',
            listTitle4: 'Trading fondamental:',
            list4: 'Les fondamentalistes tradent des sociétés sur la base d\'une analyse fondamentale examinant des événements d\'entreprise tels que des rapports de bénéfices réels ou anticipés, des scissions d\'actions, des réorganisations ou des acquisitions.',
            listTitle5: 'Swing Trading:',
            list5: 'Les Swing traders sont des traders fondamentaux qui détiennent leurs positions plus d\'une seule journée. La plupart des fondamentalistes sont en fait des swing traders, car les changements dans les fondamentaux des entreprises nécessitent généralement plusieurs jours, voire plusieurs semaines, pour produire un mouvement de prix suffisant pour que le trader puisse prétendre à un profit raisonnable.',
            technical: '// Explorer le Trading Technique',
            technicalDesc1: 'Le trading technique est un style plus large qui ne se limite pas nécessairement au trading. En règle générale, un technicien utilise des modèles historiques de données de trading pour prédire ce qui pourrait arriver aux actions à l\'avenir. C\'est la même méthode pratiquée par les économistes et les météorologues: se tourner vers le passé pour avoir un aperçu de l\'avenir. Cependant, nous savons tous à quel point les prévisions peuvent être mauvaises.',
            technicalDesc2: 'Le défi de l\'analyse technique est qu\'il existe littéralement des centaines d\'indicateurs techniques disponibles et qu\'il n\'y a pas un seul indicateur considéré comme universellement meilleur que chaque indicateur ou groupe d\'indicateurs particulier, qui ne peut s\'appliquer qu\'à des circonstances spécifiques. Certains indicateurs techniques peuvent être utiles pour certaines industries, les autres ne que pour les actions d\'une certaine classification (par exemple, les actions se situant dans une certaine fourchette de liquidité ou de capitalisation boursière). En raison des tendances uniques que les actions hautement négociées peuvent présenter tout au long de l\'histoire, certains indicateurs peuvent n\'être pertinents que pour certaines actions individuelles.',
            technicalDesc3: 'Les indicateurs techniques, comme les indicateurs de momentum, ne présentent pas une solution miracle pour décider quand acheter ou vendre. Ce sont de mauvais prédicteurs d\'un timing précis, mais ils sont bons pour indiquer quels stocks sont candidats pour une analyse plus approfondie avec des données aussi détaillées que l\'écran de niveau 2. Ainsi, l\'analyse technique peut être considérée comme un point de départ—les modèles historiques ne se traduisent pas nécessairement par une image exacte des performances futures.',
            technicalDesc4: 'Au lieu d\'essayer de fournir une étude exhaustive de tous les indicateurs disponibles pour le trader technique, nous discutons des regroupements les plus courants et fournissons une introduction générale à chacun. Cette discussion se limite aux indicateurs applicables aux actions individuelles—il existe de nombreux indicateurs qui pourraient être utiles pour prédire un indice ou un groupe industriel.',
        },
        cfdTrading: {
            descHead1: 'Un contrat de différence (CFD) est un contrat entre un acheteur et un vendeur qui stipule que l\'acheteur doit payer au vendeur la différence entre la valeur actuelle d\'un actif et sa valeur au moment du contrat. Les CFD permettent aux traders et aux investisseurs de profiter du mouvement des prix sans posséder les actifs sous-jacents. La valeur d\'un contrat CFD ne tient pas compte de la valeur sous-jacente de l\'actif: seulement le changement de prix entre l\'entrée et la sortie du trade.',
            descHead2: 'Cela est accompli par le biais d\'un contrat entre le client et le courtier et n\'utilise aucun échange d\'actions, de forex, de matières premières ou de contrats à terme. Le trading de CFD offre plusieurs avantages majeurs qui ont accru l\'énorme popularité des instruments au cours de la dernière décennie.',
            list1: 'Un contrat de différence (CFD) est un accord entre un investisseur et un courtier en CFD pour échanger la différence de valeur d\'un produit financier entre l\'ouverture et la clôture du contrat.',
            list2: 'Un investisseur en CFD ne possède jamais réellement l\'actif sous-jacent, mais reçoit plutôt des revenus basés sur la variation de prix de cet actif.',
            list3: 'Certains avantages des CFD incluent l\'accès à l\'actif sous-jacent à un coût inférieur à celui de l\'achat pur et simple de l\'actif, la facilité d\'exécution et la possibilité d\'aller long ou court.',
            list4: 'Un inconvénient des CFD est la diminution immédiate de la position initiale de l\'investisseur, qui est réduite par la taille de l\'écart lors de l\'entrée dans le CFD.',
            list5: 'Parmi les autres risques liés aux CFD, citons la faiblesse de la réglementation du secteur, le manque potentiel de liquidité et la nécessité de maintenir une marge adéquate.',
            cfds: '// Comment les CFD fonctionnent',
            cfdsDesc1: 'Un contrat de différence (CFD) est un accord entre un investisseur et un courtier en CFD pour échanger la différence de valeur d\'un produit financier (titres ou dérivés) entre l\'ouverture et la clôture du contrat.',
            cfdsDesc2: 'Il s\'agit d\'une stratégie de trading avancée utilisée uniquement par les traders expérimentés. Il n\'y a pas de livraison de biens physiques ou de titres avec des CFD. Un investisseur en CFD ne possède jamais réellement l\'actif sous-jacent, mais reçoit plutôt des revenus basés sur la variation de prix de cet actif. Par exemple, au lieu d\'acheter ou de vendre de l\'or physique, un trader peut simplement spéculer sur la hausse ou la baisse du prix de l\'or.',
            cfdsDesc3: 'Essentiellement, les investisseurs peuvent utiliser des CFD pour parier sur la hausse ou la baisse du prix de l\'actif ou du titre sous-jacent. Les traders peuvent parier sur un mouvement à la hausse ou à la baisse. Si le trader qui a acheté un CFD voit le prix de l\'actif augmenter, il proposera sa participation à la vente. La différence nette entre le prix d\'achat et le prix de vente est déduite ensemble. La différence nette représentant le gain des transactions est réglée par l\'intermédiaire du compte de courtage de l\'investisseur.',
            cfdsDesc4: 'D\'un autre côté, si le trader pense que la valeur de l\'actif va baisser, une position de vente d\'ouverture peut être placée. Afin de clôturer la position, le trader doit acheter une transaction compensatoire. Ensuite, la différence nette de la perte est réglée en espèces via leur compte.',
        },
        technicalAnalysis: {
            technicalAnalysis: '// Qu\'est-ce que l\'analyse technique?',
            descHead1: 'L\'analyse technique est une discipline de trading utilisée pour évaluer les investissements et identifier les opportunités de trading en analysant les tendances statistiques recueillies à partir de l\'activité de trading, telles que le mouvement des prix et le volume. Contrairement à l\'analyse fondamentale, qui tente d\'évaluer la valeur d\'un titre en fonction de résultats commerciaux tels que les ventes et les bénéfices, l\'analyse technique se concentre sur l\'étude du prix et du volume.',
            list1: 'L\'analyse technique est une discipline de trading utilisée pour évaluer les investissements et identifier les opportunités de trading dans les tendances des prix et les modèles vus sur les graphiques.',
            list2: 'Les analystes techniques estiment que les activités de trading passées et les changements de prix d\'un titre peuvent être des indicateurs précieux des mouvements de prix futurs du titre.',
            list3: 'L\'analyse technique peut être contrastée avec l\'analyse fondamentale, qui se concentre sur les finances d\'une entreprise plutôt que sur les tendances historiques des prix ou des actions.',
            understanding: '// Comprendre l\'Analyse Technique',
            textUnderstanding1: 'Les outils d\'analyse technique sont utilisés pour examiner comment l\'offre et la demande d\'un titre affecteront les changements de prix, de volume et de volatilité implicite. Il part de l\'hypothèse que l\'activité de trading passée et les changements de prix d\'un titre peuvent être des indicateurs précieux des mouvements de prix futurs du titre lorsqu\'ils sont associés à des règles d\'investissement ou de trading appropriées.',
            textUnderstanding2: 'Il est souvent utilisé pour générer des signaux de trading à court terme à partir de divers outils graphiques, mais peut également aider à améliorer l\'évaluation de la force ou de la faiblesse d\'un titre par rapport au marché plus large ou à l\'un de ses secteurs. Ces informations aident les analystes à améliorer leur estimation globale de l\'évaluation.',
            textUnderstanding3: 'L\'analyse technique telle que nous la connaissons aujourd\'hui a été introduite pour la première fois par Charles Dow et la Théorie de Dow à la fin des années 1800. Plusieurs chercheurs remarquables, dont William P. Hamilton, Robert Rhea, Edson Gould et John Magee, ont également contribué aux concepts de la théorie de Dow en contribuant à former sa base. De nos jours, l\'analyse technique a évolué pour inclure des centaines de modèles et de signaux développés au cours d\'années de recherche.',
            using: '// Utilisation de l\'Analyse Technique',
            textUsing1: 'Les analystes professionnels utilisent souvent l\'analyse technique en conjonction avec d\'autres formes de recherche. Les traders de détail peuvent prendre des décisions uniquement sur la base des graphiques de prix d\'un titre et de statistiques similaires, mais les analystes d\'actions en exercice limitent rarement leurs recherches à l\'analyse fondamentale ou technique uniquement.',
            textUsing2: 'L\'analyse technique peut être appliquée à n\'importe quel titre avec des données de trading historiques. Cela comprend les actions, les contrats à terme, les matières premières, les titres à revenu fixe, les devises et autres titres. En fait, l\'analyse technique est beaucoup plus répandue sur les marchés des matières premières et du forex, où les traders se concentrent sur les mouvements de prix à court terme.',
            textUsing3: 'L\'analyse technique tente de prévoir le mouvement des prix de pratiquement tous les instruments tradés qui sont généralement soumis aux forces de l\'offre et de la demande, y compris les actions, les obligations, les contrats à terme et les paires de devises. En fait, certains considèrent l\'analyse technique comme simplement l\'étude des forces de l\'offre et de la demande reflétées dans les mouvements des prix du marché d\'un titre.',
            textUsing4: 'L\'analyse technique s\'applique le plus souvent aux variations de prix, mais certains analystes suivent des chiffres autres que le prix, tels que le volume des transactions ou les chiffres d\'intérêt ouverts.',
        },
        fundamentalAnalysis: {
            fundamentalAnalysis: '// Qu\'est-ce aue l\'Analyse Fondamentale?',
            descHead1: 'L\'analyse fondamentale (AF) est une méthode de mesure de la valeur intrinsèque d\'un titre en examinant les facteurs économiques et financiers connexes. Les analystes fondamentaux étudient tout ce qui peut affecter la valeur du titre, des facteurs macroéconomiques tels que l\'état de l\'économie et les conditions de l\'industrie aux facteurs microéconomiques tels que l\'efficacité de la gestion de l\'entreprise.',
            descHead2: 'L\'objectif final est d\'arriver à un nombre qu\'un investisseur peut comparer avec le prix actuel d\'un titre afin de voir si le titre est sous-évalué ou surévalué.',
            descHead3: 'Cette méthode d\'analyse des actions est considérée comme contrastant avec l\'analyse technique, qui prévoit la direction des prix grâce à une analyse des données historiques du marché telles que le prix et le volume.',
            list1: 'L\'analyse fondamentale est une méthode de détermination de la valeur réelle ou "juste marchande" d\'une action.\n',
            list2: 'Les analystes fondamentaux recherchent des actions qui sont actuellement tradées à des prix supérieurs ou inférieurs à leur valeur réelle.',
            list3: 'Si la juste valeur marchande est supérieure au prix du marché, l\'action est considérée comme sous-évaluée et une recommandation d\'achat est donnée.',
            list4: 'En revanche, les analystes techniques ignorent les fondamentaux au profit de l\'étude des tendances historiques des prix de l\'action.',
            understanding: '// Comprendre l\'Analyse Fondamentale',
            textUnderstanding1: 'Toute analyse boursière tente de déterminer si un titre est correctement évalué sur le marché au sens large. L\'analyse fondamentale est généralement effectuée de macro à micro afin d\'identifier les titres qui ne sont pas correctement évalués par le marché.',
            textUnderstanding2: 'Les analystes étudient généralement, dans l\'ordre, l\'état général de l\'économie, puis la force de l\'industrie spécifique avant de se concentrer sur la performance individuelle de l\'entreprise pour arriver à une juste valeur marchande pour l\'action.',
            textUnderstanding3: 'L\'analyse fondamentale utilise des données publiques pour évaluer la valeur d\'une action ou de tout autre type de titre. Par exemple, un investisseur peut effectuer une analyse fondamentale de la valeur d\'une obligation en examinant des facteurs économiques tels que les taux d\'intérêt et l\'état général de l\'économie, puis en étudiant des informations sur l\'émetteur de l\'obligation, telles que les changements potentiels de sa cote de crédit.',
            textUnderstanding4: 'Pour les actions, l\'analyse fondamentale utilise les revenus, les bénéfices, la croissance future, le rendement des capitaux propres, les marges bénéficiaires et les autres données pour déterminer la valeur sous-jacente et le potentiel de croissance future d\'une entreprise. Toutes ces données sont disponibles dans les déclarations financières d\'une entreprise (plus d\'informations ci-dessous).',
            analysis: '// Investissement et Analyse Fondamentale',
            textAnalysis1: 'Un analyste travaille à créer un modèle pour déterminer la valeur estimée du cours de l\'action d\'une entreprise sur la base de données accessibles au public. Cette valeur n\'est qu\'une estimation, l\'opinion éclairée de l\'analyste, de ce que le cours de l\'action de la société devrait valoir par rapport au prix actuel du marché. Certains analystes peuvent désigner leur prix estimé comme la valeur intrinsèque de l\'entreprise.',
            textAnalysis2: 'Si un analyste calcule que la valeur de l\'action devrait être nettement supérieure au prix actuel du marché de l\'action, il peut publier une note d\'achat ou de surpondération pour l\'action. Cela agit comme une recommandation aux investisseurs qui suivent cet analyste. Si l\'analyste calcule une valeur intrinsèque inférieure au prix actuel du marché, l\'action est considérée comme surévaluée et une recommandation de vente ou de sous-pondération est émise.',
            textAnalysis3: 'Les investisseurs qui suivent ces recommandations s\'attendront à pouvoir acheter des actions avec des recommandations favorables, car ces actions devraient avoir une probabilité plus élevée d\'augmenter au fil du temps. De même, les actions dont les notes sont défavorables devraient avoir une probabilité plus élevée de chute des prix. Ces actions sont candidates pour être retirées des portefeuilles existants ou ajoutées en tant que positions "courtes".',
            textAnalysis4: 'Cette méthode d\'analyse des actions est considérée comme l\'opposé de l\'analyse technique, qui prévoit la direction des prix grâce à une analyse des données historiques du marché telles que le prix et le volume. Ceux qui souhaitent en savoir plus sur l\'analyse fondamentale et d\'autres sujets financiers peuvent envisager de s\'inscrire à l\'un des meilleurs cours d\'investissement actuellement disponibles.',
        },
        riskManagement: {
            riskManagement: '// Qu\'est-ce que la Gestion des Risques?',
            descHead1: 'Dans le monde financier, la gestion des risques est le processus d\'identification, d\'analyse et d\'acceptation ou d\'atténuation de l\'incertitude dans les décisions d\'investissement. Essentiellement, la gestion des risques se produit lorsqu\'un investisseur ou un gestionnaire de fonds analyse et tente de quantifier le potentiel de pertes d\'un investissement, tel qu\'un aléa moral, puis prend les mesures appropriées (ou l\'inaction) compte tenu des objectifs de placement et de la tolérance au risque du fonds.',
            descHead2: 'Le risque est indissociable du rendement. Chaque investissement comporte un certain degré de risque, qui est considéré comme proche de zéro dans le cas d\'un T-bill américain ou très élevé pour quelque chose comme les actions des marchés émergents ou l\'immobilier sur des marchés fortement inflationnistes. Le risque est quantifiable en termes absolus et relatifs. Une solide compréhension du risque sous ses différentes formes peut aider les investisseurs à mieux comprendre les opportunités, les compromis et les coûts liés aux différentes approches d\'investissement.',
            list1: 'La gestion des risques est le processus d\'identification, d\'analyse et d\'acceptation ou d\'atténuation de l\'incertitude dans les décisions d\'investissement.',
            list2: 'Le risque est indissociable du rendement dans le monde de l\'investissement.',
            list3: 'Il existe une variété de tactiques pour déterminer le risque; l\'une des plus courantes est l\'écart-type, une mesure statistique de la dispersion autour d\'une tendance centrale.',
            list4: 'Le bêta, également connu sous le nom de risque de marché, est une mesure de la volatilité, ou du risque systématique, d\'une action individuelle par rapport à l\'ensemble du marché.',
            list5: 'L\'alpha est une mesure du rendement excédentaire; les gestionnaires de fonds qui utilisent des stratégies actives pour battre le marché sont soumis au risque alpha.',
            understanding: '// Comprendre la Gestion des Risques',
            textUnderstanding1: 'La gestion des risques est omniprésente dans le domaine de la finance. Cela se produit lorsqu\'un investisseur achète des obligations du Trésor américain plutôt que des obligations d\'entreprise, lorsqu\'un gestionnaire de fonds couvre son exposition aux devises avec des dérivés de change et lorsqu\'une banque effectue une vérification de crédit sur un individu avant d\'émettre une marge de crédit personnelle. Les courtiers en valeurs mobilières utilisent des instruments financiers tels que les options et les contrats à terme, et les gestionnaires de fonds utilisent des stratégies telles que la diversification du portefeuille, la répartition des actifs et le dimensionnement des positions pour atténuer ou gérer efficacement les risques.',
            textUnderstanding2: 'Une gestion inadéquate des risques peut avoir des conséquences graves pour les entreprises, les individus et l\'économie. Par exemple, l\'effondrement des prêts hypothécaires à risque en 2007, qui a contribué à déclencher la Grande Récession, a découlé de mauvaises décisions de gestion des risques, telles que les prêteurs qui avaient accordé des prêts hypothécaires à des personnes ayant un mauvais crédit; les sociétés d\'investissement qui avaient acheté, emballé et revendu ces prêts hypothécaires; et les fonds qui avaient  investi de manière excessive dans les titres adossés à des créances hypothécaires (MBS) reconditionnés, mais toujours risqués.',
            risk: '// Comment Fonctionne la Gestion des Risques',
            textRisk1: 'Nous avons tendance à penser au "risque" en termes principalement négatifs. Cependant, dans le monde de l\'investissement, le risque est nécessaire et indissociable de la performance souhaitable.',
            textRisk2: 'Une définition commune du risque d\'investissement est un écart par rapport à un résultat attendu. Nous pouvons exprimer cet écart en termes absolus ou par rapport à autre chose, comme un indice de référence du marché.',
            textRisk3: 'Bien que cet écart puisse être positif ou négatif, les professionnels de l\'investissement acceptent généralement l\'idée qu\'un tel écart implique un certain degré du résultat escompté pour vos investissements. Ainsi, pour obtenir des rendements plus élevés, on s\'attend à accepter le plus grand risque. Il est également généralement admis que l\'augmentation du risque se traduit par une volatilité accrue. Alors que les professionnels de l\'investissement cherchent constamment—et trouvent parfois—des moyens de réduire cette volatilité, il n\'y a pas de consensus clair entre eux sur la meilleure façon de le faire.',
            textRisk4: 'Le degré de volatilité qu\'un investisseur devrait accepter dépend entièrement de la tolérance au risque de l\'investisseur individuel ou, dans le cas d\'un professionnel de l\'investissement, de la tolérance permise par ses objectifs de placement. L\'une des mesures de risque absolu les plus couramment utilisées est l\'écart type, une mesure statistique de la dispersion autour d\'une tendance centrale. Vous examinez le rendement moyen d\'un investissement, puis vous trouvez son écart-type moyen pour la même période. Les distributions normales (la courbe familière en forme de cloche) dictent que le rendement attendu de l\'investissement est susceptible d\'être d\'un écart-type par rapport de la moyenne 67% du temps et de deux écarts-types par rapport à l\'écart moyen 95% du temps. Cela aide les investisseurs à évaluer le risque numériquement. S\'ils croient qu\'ils peuvent tolérer le risque, financièrement et émotionnellement, ils investissent.',
        },
        privacy: {
            title: 'CONFIDENTIALITÉ',
            descHead1: 'La présente Politique de confidentialité régit la manière dont %%COMPANY_NAME%% collecte, utilise, conserve et divulgue les informations collectées auprès des utilisateurs du site %%COMPANY_LINK%% site Web ("Site"). Cette politique de confidentialité s\'applique au Site et à tous les produits et services proposés par la société.',
            personal: '// Informations d\'identification personnelle',
            textPersonal: 'Nous pouvons collecter des informations d\'identification personnelle auprès des Utilisateurs de diverses manières, y compris, mais sans s\'y limiter, quand les Utilisateurs visitent le Site, s\'inscrivent sur le Site ou s\'abonnent à la newsletter et en relation avec d\'autres activités, services, fonctionnalités ou ressources que nous mettons à disposition sur le Site. Les utilisateurs peuvent être demandé, au besoin, nom, adresse e-mail, adresse postale, numéro de téléphone, informations de carte de crédit.',
            user: '// Les Utilisateurs peuvent toutefois visiter le Site de manière anonyme',
            textUser: 'Nous ne collecterons des informations d\'identification personnelle des utilisateurs que s\'ils nous les soumettent volontairement. Les utilisateurs peuvent toujours refuser de fournir des informations d\'identification personnelle, sauf que cela peut les empêcher de s\'engager dans certaines activités liées au Site.',
            nonPeronal: 'Informations d\'identification non personnelles',
            textNonPeronal: 'Nous pouvons collecter des informations d\'identification non personnelles sur les Utilisateurs chaque fois qu\'ils interagissent avec notre Site. Les informations d\'identification non personnelles peuvent inclure le nom du navigateur, le type d\'ordinateur et des informations techniques sur les moyens de connexion de l\'utilisateur à notre Site, tels que le système d\'exploitation et les fournisseurs de services Internet utilisés et d\'autres informations similaires.',
            web: '// Cookies de navigateur Web',
            textWeb: 'Notre Site peut utiliser des "cookies" pour améliorer l\'expérience utilisateur. Le navigateur Web de l\'utilisateur place des cookies sur son disque dur à des fins d\'archivage et parfois pour suivre les informations le concernant. L\'utilisateur peut choisir de configurer son navigateur Web pour refuser les cookies ou pour vous alerter lorsque des cookies sont envoyés. S\'ils le font, notez que certaines parties du site  peuvent ne pas fonctionner correctement.',
            use: '// Comment nous utilisons les informations collectées',
            textUse: 'Nous recueillons et utilisons les renseignements personnels de l\'utilisateur aux fins suivantes:\n' +
                '- Pour améliorer le service à la clientèle. Vos informations nous aident à répondre plus efficacement à vos demandes de service client et à vos besoins d\'assistance.\n' +
                '- Pour personnaliser l\'expérience utilisateur. Nous pouvons utiliser les informations dans leur ensemble pour comprendre comment nos Utilisateurs en tant que groupe utilisent les services et les ressources fournis sur notre Site.\n' +
                '- Pour améliorer notre Site. Nous nous efforçons continuellement d\'améliorer les offres de notre site en fonction des informations et des commentaires que nous recevons de votre part.\n' +
                '- Pour traiter les transactions. Nous pouvons utiliser les informations que les utilisateurs fournissent sur eux-mêmes lorsqu\'ils passent une commande uniquement pour fournir un service à cette commande. Nous ne partageons pas ces informations avec des tiers, sauf dans la mesure nécessaire pour fournir le service.\n' +
                '- Pour administrer un concours, une promotion, un sondage ou une autre fonctionnalité du Site.\n' +
                '- Pour envoyer aux Utilisateurs des informations qu\'ils ont accepté de recevoir sur des sujets qui, selon nous, les intéresseront.\n' +
                '- Pour envoyer des courriels périodiques. L\'adresse e-mail fournie par les utilisateurs pour le traitement de la commande ne sera utilisée que pour leur envoyer des informations et des mises à jour relatives à leur commande. Il peut également être utilisé pour répondre à leurs demandes de renseignements et / ou à d\'autres demandes ou questions. Si l\'utilisateur décide de s\'inscrire à notre liste de diffusion, il recevra des courriels pouvant inclure nos nouvelles, mises à jour, informations sur les produits ou services connexes, etc. Si, à tout moment, l\'Utilisateur souhaite se désabonner de la réception de futurs e-mails, nous incluons des instructions de désabonnement détaillées au bas de chaque e-mail ou l\'Utilisateur peut nous contacter via notre Site.',
            protect: '// Comment nous protégeons vos informations',
            textProtect: 'Nous adoptons des pratiques appropriées de collecte, de stockage et de traitement des données et des mesures de sécurité pour protéger les Utilisateurs contre l\'accès non autorisé, la modification, la divulgation ou la destruction de leurs informations personnelles, nom d\'utilisateur, mot de passe, informations de transaction et données stockées sur notre Site. L\'échange de données sensibles et privées entre le Site et ses Utilisateurs se fait via un canal de communication sécurisé SSL et il est crypté et protégé par des signatures numériques.',
            compliance: '// Conformité à la protection de la vie privée en ligne des enfants',
            textCompliance: 'La protection de la vie privée des très jeunes est particulièrement importante. Pour cette raison, nous ne collectons ni ne conservons jamais d\'informations sur notre Site auprès de personnes dont nous savons réellement qu\'elles ont moins de 18 ans, et aucune partie de notre site Web n\'est structurée pour attirer des personnes de moins de 18 ans.',
            changes: '// Modifications de cette politique de confidentialité',
            textChanges: 'Nous avons le pouvoir discrétionnaire de mettre à jour cette politique de confidentialité à tout moment. Lorsque nous le faisons, révisez la date de mise à jour au bas de cette page. Nous encourageons les utilisateurs à consulter fréquemment cette page pour tout changement afin de rester informés de la manière dont nous aidons à protéger les informations personnelles que nous recueillons. Vous reconnaissez et acceptez qu\'il est de votre responsabilité de consulter périodiquement cette politique de confidentialité et de prendre connaissance de toute modification.',
            acceptance: '// Votre acceptation des présentes conditions',
            textAcceptance: 'En utilisant ce site, vous signifiez votre acceptation de cette politique et des conditions d\'utilisation. Si vous n\'acceptez pas cette politique, veuillez ne pas utiliser le Site. Votre utilisation continue du Site après la publication des modifications apportées à la présente politique sera considérée comme votre acceptation de ces modifications.',
            contacting: '// Nous contacter',
            textContacting: 'Si vous avez des questions sur cette Politique de confidentialité, les pratiques de ce Site ou vos opérations sur ce Site, veuillez nous contacter à votre convenance en utilisant les coordonnées de la section Contacts du Site.',
        },
        disclaimer: {
            title: 'AVERTISSEMENT',
            descHead: 'Le trading d\'actifs tels que les crypto-monnaies avec ou sans marge présente un risque élevé, peut entraîner un risque substantiel pour tout ou partie de votre investissement et peut ne pas être convenqble à tous les investisseurs.',
            disclosure: '// Divulgation des risques',
            textDisclosure: 'Le trading et l\'exécution de transactions similaires à celles décrites et/ou résultant de cette clause de non-responsabilité, avec ou sans l\'utilisation d\'un effet de levier financier ou d\'une marge, constituent un trading spéculatif à haut risque. Vous devez examiner attentivement et sérieusement si ce type d\'activité financière convient à vos besoins, vos ressources financières et  votre situation personnelle. Comme le risque de perdre tout ou partie des fonds investis dans un laps de temps relativement court est élevé, il est recommandé de n\'utiliser que les fonds que vous avez réservés à des transactions financières spéculatives à haut risque. En particulier, soyez conscient des points suivants:',
            currency: '// Risque de Change',
            textCurrency: 'La fluctuation des taux sur les marchés des crypto-monnaies et des devises est souvent aigue sans qu\'il soit possible de prévoir la taille ou la direction du changement ou le laps de temps dans lequel il se produit.',
            event: '// Risque d\'Événement',
            textEvent: 'Les prix peuvent fluctuer rapidement en raison de circonstances, d\'événements ou de changements de conditions imprévus.',
            operational: '// Risque Opérationnel',
            textOperational: 'Bien que nous fassions tous les efforts raisonnables pour assurer la continuité des services, les risques opérationnels tels que les perturbations des communications, des ordinateurs, des réseaux ou des événements externes peuvent entraîner des retards dans l\'exécution et le règlement d\'une transaction. L\'utilisation de logiciels de trading électronique entraîne une exposition à des risques impliquant des logiciels informatiques, Internet, des systèmes de communication et des interfaces qui nous sont connectés. Le risque comprend, sans s\'y limiter, les pannes de matériel, de logiciels, de lignes et de systèmes et/ou l\'alimentation incorrecte de données provenant de fournisseurs de données externes. Aucun système de trading n\'est libre de défaillances occasionnelles, et aucun système ne peut garantir un profit à 100% ou n\'est pas exposé à des pertes.',
            margin: '// Risque de Marge',
            textMargin1: 'L\'effet de levier ou la marge dans le trading de crypto-monnaie est créé sur la base d\'une garantie d\'une faible somme par rapport à la transaction totale. Les résultats du trading avec effet de levier ou avec marge sont tels qu\'un petit changement des prix du marché, dans un court laps de temps, peut entraîner un gain ou une perte substantiel, proportionnel à la taille de la garantie, jusqu\'à la perte totale de la somme de la garantie dans un très court laps de temps.',
            textMargin2: 'Cet avertissement ne couvre pas tous les risques possibles liés au type de transactions décrites et/ou résultant de cette clause de non-responsabilité.',
        },
        kyc: {
            title: "CONNAITRE VOTRE CLIENT",
            descHead1: '%%COMPANY_NAME%% s\'engage à se conformer à toutes les réglementations pertinentes en matière de lutte contre le blanchiment d\'argent et de financement du terrorisme et la politique suivante est dérivée des principes généraux, des lois, des règlements et des directives de lutte contre le blanchiment d\'argent.',
            descHead2: 'Nous pensons que le respect des réglementations en matière de lutte contre le blanchiment d\'argent et le financement du terrorisme est essentiel pour l\'intégrité des systèmes financiers et la prévention de l\'utilisation de notre entreprise, intentionnellement ou non, par des éléments criminels.',
            descHead3: 'Nous avons mis en place des programmes de connaissance du client (KYC) en tant que l\'élément essentiel des procédures de service, de gestion des risques et de contrôle. Nous sommes tenus non seulement d\'établir l\'identité de ses clients, mais également de surveiller l\'activité du compte pour déterminer les transactions qui ne sont pas conformes aux transactions normales ou attendues pour ce client ou ce type de compte. Le programme comprend également des exigences en matière de tenue de dossiers, de déclaration d\'activités suspectes et de formation en matière de lutte contre le blanchiment d\'argent.',
            money: '// Qu\'est-ce que le blanchiment d\'argent?',
            textMoney1: 'Le blanchiment d\'argent comprend toutes les formes de manipulation ou de possession de biens criminels, y compris la possession du produit de son propre crime, et la facilitation de toute manipulation ou transfert de biens criminels pour une autre personne; y compris le produit de tout acte de fraude, de corruption ou de corruption. Lorsque les biens criminels comprennent l\'argent ou la valeur de l\'argent, les valeurs mobilières, les biens corporels et incorporels; y compris la réception, la manipulation et le transfert de fonds provenant de la criminalité.',
            textMoney2: 'Une vue simplifiée d\'une opération efficace de blanchiment d\'argent comporte trois étapes:',
            textMoney3: '1. Placement d\'espèces physiques (par exemple dans un compte bancaire). Une vue simplifiée d\'une opération efficace de blanchiment d\'argent comporte trois étapes:',
            textMoney4: '2. Superposition. En utilisant les fonds du compte bancaire et en effectuant plusieurs transactions qui confondent la piste d\'audit et séparent l\'argent de son origine',
            textMoney5: '3. L\'intégration des produits blanchis dans l\'économie légitime, de sorte qu\'ils semblent légitimes en étant présentés comme des fonds commerciaux normaux.',
            textMoney6: 'Aux fins de la présente politique, le blanchiment d\'argent comprend également les activités liées au financement des activités terroristes, y compris la manipulation ou la possession de fonds destinés à être utilisés à des fins terroristes ainsi que les produits du terrorisme.',
            textMoney7: 'Lorsque nous traitons avec des clients, nous sommes attentifs à la possibilité que des clients, leurs contreparties ou d\'autres personnes (avec ou sans la participation du client à l\'insu) tentent de blanchir de l\'argent en utilisant nos services – par superposition ou intégration.\nLorsque nous traitons avec des clients, nous sommes attentifs à la possibilité que des clients, leurs contreparties ou d\'autres personnes (avec ou sans la participation du client à l\'insu) tentent de blanchir de l\'argent en utilisant nos services – par superposition ou intégration.',
            kyc: '// Connaissez votre clientr',
            textKyc1: 'Nous posons aux clients un certain nombre de questions au cours de l\'étape de la demande afin de comprendre les clients et de nous assurer que le demandeur n\'est pas victime d\'un crime financier. La documentation est recueillie auprès des clients afin de vérifier les informations fournies à l\'étape de la demande. Ces documents peuvent être vérifiés électroniquement au cours du processus de demande.',
            textKyc2: 'Périodiquement, nous demandons également aux clients de fournir des mises à jour des informations personnelles qui ont été fournies au stade de la demande pour s\'assurer que les données et informations sur ses clients sont à jour.',
            customer: '// Acceptation du Client',
            textCustomer1: 'Nous maintenons des politiques et des procédures claires d\'acceptation des clients, y compris une description des types de clients susceptibles de présenter un risque plus élevé que la moyenne. Avant d\'accepter un client potentiel, les procédures KYC et de diligence raisonnable sont suivies, en examinant des facteurs tels que les antécédents du client, le pays d\'origine, la position publique ou de haut niveau, les comptes liés, les activités commerciales ou d\'autres indicateurs de risque.',
            textCustomer2: 'Une diligence raisonnable approfondie est essentielle pour une personne ayant une valeur nette élevée mais dont la source des fonds n\'est pas claire. L\'argent des nouveaux clients est transféré via une banque réputée. Les banques ont leurs propres procédures de lutte contre le blanchiment d\'argent. La décision d\'établir des relations d\'affaires avec des clients à risque plus élevé, tels que des personnes politiquement exposées, est prise exclusivement au niveau de la haute direction.',
            control: '// Contrôle',
            textControl: 'Nous avons un certain nombre de contrôles internes, y compris, mais sans s\'y limiter, la non-acceptation d\'espèces et la non-acceptation de dépôts et de rachats de tiers. Nous n\'accepterons pas en tant que clients, personnes ou entités de pays, organisations restreints ou sanctionnés. Les points de référence pour de tels examens comprennent les sites Web de:\n' +
                '- Ministère Australien des Affaires étrangères et du Commerce,\n' +
                '- Listes Consolidées des Nations,\n' +
                '- Bureau Américain de Contrôle des Avoirs Étrangers,\n' +
                '- GAFI.\n' +
                '\n' +
                'Nous n\'acceptons pas les citoyens américains.\n' +
                '\n' +
                'Nous n\'acceptons aucun compte anonyme et n\'entretenons aucune relation avec des banques fictives.',
            identification: '//  Identification du Client',
            textIdentification1: 'Nous obtenons toutes les informations nécessaires pour établir à notre entière satisfaction l\'identité de chaque nouveau client et le but et la nature prévue de la relation commerciale. L\'étendue et la nature des informations dépendent du type de demandeur (personnel, entreprise,etc.) et la taille attendue du compte.',
            textIdentification2: 'L\'identification du client est un élément essentiel des normes KYC. Aux fins de la présente politique, un client comprend:\n' +
                '- La personne ou l\'entité qui tient un compte ou ceux pour le compte desquels un compte est tenu (c\'est-à-dire les bénéficiaires effectifs);\n' +
                '- Les bénéficiaires des transactions effectuées par des intermédiaires professionnels;\n' +
                '- Toute personne ou entité liée à une transaction financière qui peut présenter un risque important de réputation ou autre pour notre société.\n' +
                '\n',
            textIdentification3: 'L\'identification du client doit être effectuée dès que cela est raisonnablement possible après le premier contact. Nous maintenons une procédure systématique d\'identification des nouveaux clients et ne pouvons pas entrer en relation de service tant que l\'identité d\'un nouveau client n\'est pas vérifiée de manière satisfaisante.',
            textIdentification4: 'Nous accordons une attention particulière dans le cas des clients non résidents et en aucun cas les procédures d\'identité en court-circuit ne sont suivies simplement parce que le nouveau client n\'est pas en mesure de présenter suffisamment de documents et d\'informations pour satisfaire aux procédures KYC et de diligence raisonnable.',
            textIdentification5: 'Dans le cadre de l\'obligation d\'exercer une diligence raisonnable en matière d\'identification des clients, nous devons confirmer que les informations d\'identité qu\'elle détient pour ses clients restent entièrement à jour avec toutes les informations d\'identification et informations nécessaires tout au long de la relation commerciale. Nous examinons et surveillons régulièrement la validité et l\'adéquation des informations d\'identification des clients en sa possession.',
            textIdentification6: 'Si le client refuse ou  ne parvient pas à  nous fournir les documents et informations requis pour l\'identification, avant d\'entrer dans la relation commerciale, ou pendant l\'exécution d\'une transaction individuelle sans justification adéquate, nous ne procéderons pas dans une relation contractuelle ou n\'exécuterons pas la transaction et peut également le signaler au Superviseur de la LBC/FT. Cela peut conduire à un soupçon que le client est engagé dans le blanchiment d\'argent et le financement du terrorisme.',
            required: '// Informations Client Requises et Informations de Vérification',
            textRequired1: 'Les informations suivantes seront collectées pour les nouveaux clients:\n' +
                '- Vrai nom complet et / ou noms utilisés;\n' +
                '- Adresse permanente actuelle, y compris le code postal;\n' +
                '- Date de naissance;\n' +
                '- Profession ou occupation.',
            textRequired2: 'Les noms doivent être vérifiés par référence obtenue d\'une source réputée qui porte une photographie, telle que:\n' +
                '- Passeport complet en cours de validité;\n' +
                '- Carte d\'identité avec photo émise par le gouvernement.\n',
            textRequired3: 'Nous ne tenterons pas de déterminer si le document que le client a fourni pour l\'identification a été valablement délivré. À des fins de vérification, nous nous appuierons sur une pièce d\'identité émise par le gouvernement pour établir l\'identité d\'un client. Cependant, nous analyserons les informations fournies pour déterminer s\'il existe des incohérences logiques dans les informations obtenues.',
            textRequired4: 'En plus de la vérification du nom du client, l\'adresse permanente actuelle sera vérifiée en obtenant l\'un des documents suivants sous forme originale:\n' +
                '- Copie d\'une facture d\'électricité récente;\n' +
                '- Facture de l\'administration fiscale locale;\n' +
                '- Relevé bancaire;\n' +
                '- Relevé mensuel de carte de crédit.',
            textRequired5: 'Les informations suivantes seront collectées pour les Entreprises clientes:\n' +
                '- L\'original ou la copie certifiée conforme du certificat de constitution;\n' +
                '- Constitution, Mémorandum et statuts;\n' +
                '- Résolution du Conseil d\'administration pour conclure des transactions sur le marché de la crypto-monnaie et conférant le pouvoir à ceux qui agiront pour le client;\n' +
                '- Registres des Administrateurs et Actionnaires;\n' +
                '- Identité des personnes liées à l\'Entreprise;\n' +
                '- Le profil d\'activité de l\'Entreprise en termes de nature et d\'ampleur des activités;',
            textRequired6: 'Recherches d\'entreprises et autres enquêtes commerciales pour s\'assurer que le demandeur n\'a pas été ou n\'est pas en voie d\'être dissous, radié, liquidé ou résilié. Si des changements dans la structure de l\'entreprise se produisent ou si la propriété survient après l\'ouverture d\'un compte auprès de l\'Entreprise, des vérifications supplémentaires seront effectuées.',
            textRequired7: 'La vérification d\'identité pour les Entreprises clientes vise à identifier:\n' +
                '- Entreprise;\n' +
                '- Directeur;\n' +
                '- Toutes les personnes dûment autorisées à exploiter le compte;\n' +
                '- Structure de propriété;\n' +
                '- Dans le cas des sociétés privées, les principaux actionnaires effectifs;\n' +
                '- Derniers états financiers vérifiés (si disponibles).',
            textRequired8: 'Nous devons vérifier l\'identité des bénéficiaires effectifs des comptes. Pour les personnes morales, nous avons besoin de ces données et informations pour comprendre la structure de propriété et de contrôle du client. Quel que soit le type de client (par exemple, personne physique ou morale, société en nom collectif ou entreprise individuelle), nous prenons des données et des informations adéquates sur les activités commerciales du client et le modèle et le niveau attendus des transactions.',
            textRequired9: 'L\'identité de tous les clients est vérifiée sur la base de données et d\'informations fournies ou reçues de sources indépendantes et fiables, c\'est-à-dire les données et informations difficiles à falsifier ou à obtenir de manière illégale.',
            performance: '// Exécution par des tiers\n',
            textPerformance: 'Nous pouvons faire appel à des tiers pour appliquer les exigences relatives aux procédures d\'identification du client et aux mesures de diligence raisonnable du client, à condition que toutes les données et informations soient détenues par la tierce personne pour l\'identification du client et que des copies certifiées conformes des originaux nous soient fournies.',
            on: '// Surveillance continue et Enregistrement des Comptes et Transactions',
            textOn1: 'La surveillance continue est un aspect essentiel des procédures KYC efficaces. Nous ne pouvons contrôler et réduire efficacement le risque que si nous comprenons l\'activité normale et raisonnable du compte de nos clients afin de disposer des moyens d\'identifier les transactions qui ne correspondent pas au schéma régulier de l\'activité d\'un compte. Sans cette connaissance, il est susceptible de manquer à son obligation de signaler les transactions suspectes aux autorités compétentes dans les cas où elles sont tenues de le faire. L\'étendue de la surveillance doit être sensible au risque.',
            textOn2: 'Pour tous les comptes, nous avons mis en place des systèmes pour détecter les schémas d\'activité inhabituels ou suspects. Cela se fait en établissant des limites pour une catégorie  de comptes particulière. Une attention particulière est portée aux transactions qui dépassent ces limites.',
            textOn3: 'Certains types de transactions alertent sur la possibilité que le client mène des activités inhabituelles ou suspectes. Ils peuvent inclure des transactions qui ne semblent pas avoir de sens économique ou commercial (transactions importantes), ou qui impliquent de grandes quantités de dépôts en espèces qui ne sont pas compatibles avec les transactions normales et attendues du client.',
            textOn4: 'Une surveillance accrue des comptes à risque plus élevé est effectuée. Nous avons défini des indicateurs clés pour ces comptes, en tenant compte des antécédents du client, tels que le pays d\'origine et la source des fonds, le type de transactions impliquées et d\'autres facteurs de risque.',
            reporting: '// Signaler Une Activité Suspecte',
            textReporting1: 'Conformément à la réglementation en vigueur, toute activité suspecte de blanchiment d\'argent et de financement du terrorisme est signalée aux autorités compétentes, après enquête.',
            textReporting2: 'Les exemples d\'activités suspectes comprennent, sans s\'y limiter:\n' +
                '- Activité de compte hors de l\'ordinaire. Le client souhaite s\'engager dans des transactions qui manquent de sens des affaires ou de stratégie d\'investissement apparente, ou qui sont incompatibles avec la stratégie commerciale déclarée du client.',
            textReporting3: '- Hors de la fourchette prévue des volumes de transactions ou des seuils financiers.\n' +
                '- Les informations fournies par le client qui identifient une source légitime de fonds sont fausses, trompeuses ou substantiellement incorrectes.\n' +
                '- Sur demande, le client refuse d\'identifier ou ne parvient pas à indiquer toute source légitime de ses fonds et autres avoirs.\n' +
                '- Le client (ou une personne associée publiquement au client) a des antécédents douteux ou fait l\'objet de reportages indiquant d\'éventuelles violations pénales, civiles ou réglementaires.\n' +
                '- Le client présente un manque de préoccupation concernant les risques, les commissions ou autres coûts de transaction.\n' +
                '- Le client a des difficultés à décrire la nature de son activité ou manque de connaissances générales sur son secteur d\'activité.',
            record: '// Tenue des Dossiers',
            textRecord1: 'Les informations fournies par nos clients sont conservées pendant une période de cinq ans et protégées à l\'aide des dernières technologies. La période de 5 ans est calculée à la suite de la réalisation des transactions ou de la fin de la relation commerciale.',
            textRecord2: 'Plus précisément, nous obtenons des papiers d\'identité des clients et en conservons des copies pendant au moins cinq ans après la fermeture d\'un compte. Nous conservons également tous les registres des transactions financières pendant au moins cinq ans à compter de la date à laquelle notre relation avec le client a pris fin ou qu\'une transaction a été conclue.',
            textRecord3: 'Les informations client que nous recevons sont traitées de manière confidentielle conformément à la loi applicable.',
            textRecord4: 'Les registres suivants sont conservés:\n' +
                '- Des copies des pièces justificatives de l\'identité du client;\n' +
                '- Les éléments de preuve pertinents et les détails de toutes les relations commerciales et transactions, y compris les documents pour l\'enregistrement des transactions dans les livres comptables;\n' +
                '- Les documents pertinents de correspondance avec les clients et les autres personnes avec lesquelles ils entretiennent une relation d\'affaires.',
            textRecord5: 'Tous les documents et informations sont mis à la disposition des autorités rapidement et sans délai dans le but de s\'acquitter des devoirs qui leur sont imposés par la loi.',
            textRecord6: 'Les documents et les renseignements doivent être des originaux ou des copies certifiées conformes.',
            trading: '// Formation des employés',
            textTrading1: 'Nous effectuons une diligence raisonnable approfondie sur nos employés avant le recrutement. De plus, nos employés reçoivent une formation régulière afin que les employés soient correctement formés aux procédures KYC et afin que les employés soient conscients des modèles et techniques possibles en matière de blanchiment d\'argent et de détecter d\'éventuelles activités suspectes.',
            textTrading2: 'Le calendrier et le contenu de la formation pour différentes catégories d\'employés sont adaptés par notre entreprise à nos propres besoins. Les exigences en matière de formation sont différentes pour les nouveaux employés, les employés de première ligne, les employés chargés de la conformité ou les employés qui traitent avec de nouveaux clients.',
            textTrading3: 'Les nouveaux employés sont sensibilisés à l\'importance des politiques KYC et aux exigences de base. Les employés qui traitent directement avec les clients sont formés pour vérifier l\'identité des nouveaux clients, pour exercer une diligence raisonnable dans le traitement des comptes des clients existants sur une base continue et pour détecter les modèles d\'activités suspectes.',
            textTrading4: 'Une formation de recyclage régulière est offerte pour s\'assurer que les employés sont rappelés de leurs responsabilités et sont tenus au courant des nouveaux développements.',
            regular: '// Audits et Examens réguliers',
            textRegular1: 'Des audits réguliers sont effectués par des cabinets d\'audit réputés afin de s\'assurer que les politiques et procédures sont respectées. Nos politiques et procédures sont régulièrement revues pour s\'assurer qu\'elles reflètent la réglementation en vigueur et l\'environnement externe.',
            textRegular2: 'Si vous avez des questions ou des requêtes concernant le contenu de cette politique, n\'hésitez pas à nous contacter à votre convenance en utilisant les coordonnées de la section Contacts de ce site.',
            additional: '// Informations Complémentaires',
            textAdditional1: 'La réglementation exige que nous gardions toutes les informations sur les clients à jour en surveillant en permanence nos relations commerciales. C\'est pourquoi nous pourrions avoir besoin de demander à nos clients de nous fournir des documents et des informations supplémentaires si nécessaire.',
            textAdditional2: 'Si, à un stade ultérieur, des changements surviennent dans la structure du statut de propriété ou dans des détails, le client doit nous en informer et fournir toutes les informations et documents nouveaux/mis à jour.',
            textAdditional3: 'Si, dans le pays du client potentiel/existant, l\'un des documents requis n\'existe pas sous la forme requise par nous, le responsable de la conformité peut accepter un document similaire répondant aux besoins de la due diligence.',
        },
        about: {
            descHead1: '%%COMPANY_NAME%% est l\'une des plus grandes marques de trading de CFD, et chez %%COMPANY_NAME%%, nous travaillons dur pour garantir que nos clients prennent les meilleures décisions de trading et d\'investissement.\n',
            descHead2: 'Lorsque vous choisissez %%COMPANY_NAME%%, vous trader avec un courtier mondial. Nous travaillons jour et nuit pour créer et maintenir un environnement de trading qui aide tout le monde à accéder aux marchés – des débutants à ceux qui ont fait le trading leur carrière. Avec notre plateforme, vous pouvez trader et investir comme vous le souhaitez, en choisissant parmi des centaines d\'actifs les plus liquides.',
            descHead3: 'Nous fournissons un environnement commercial digne de confiance, fiable et technologiquement avancé, tout en veillant à ce que chaque client reçoive un service client impeccable. Nos clients sont notre priorité numéro un, c\'est pourquoi nous avons des experts disponibles pour répondre à toutes vos questions par téléphone, e-mail et chat en direct.',
        },
        faq: {
            faq: 'FAQ',
            title1: 'Que\'est-ce que l\'effet de levier signifie?',
            desc1: 'L\'effet de levier est le rapport entre le montant de la marge et le montant emprunté: 1:100, 1:200, 1:1000. l\'effet de levier 1:100 signifie que, pour ouvrir un trade, vous devez avoir un montant 100 fois inférieur au montant d\'un trade. Sur %%COMPANY_NAME%%, vous pouvez choisir l\'effet de levier de 1:1 à 1:1000.',
            title2: 'Est-il possible qu\'un trader doive de l\'argent à l\'entreprise?',
            desc2: 'Non, ce n\'est pas possible. Si un trader perd plus que ce qu\'il a sur un compte de trading, la société doit couvrir la perte jusqu\'à 0.',
            title3: 'Quel est le montant minimum de dépôt?',
            desc3: 'Le montant minimum du dépôt est de 250$, et il vous permet d\'ouvrir un commerce sur n\'importe quel instrument.',
            title4: 'Y a-t-il quelque différence entre le trading démo et le trading en direct?',
            desc4: 'Il n\'y a pas de différences entre les conditions de trading et les instruments de trading. Le trading sur compte démo est identique au trading en direct, sauf l\'indisponibilité des options de dépôt et de retrait pour les comptes démo.',
            title5: 'Comment peut-on calculer le montant de la marge pour un trade?',
            desc5: 'Le montant de la marge est égal au volume des échanges divisé par l\'effet de levier. Le volume des échanges est égal à 10000 dollars américains multiplié par le nombre de lots et par le taux de change d\'une devise de base dans une paire par rapport à l\'USD. La devise de base est la première d\'une paire de devises. Par exemple, dans la paire de devises EUR/USD, la devise de base est EUR (par la suite, le taux de change d\'une transaction vers l\'USDollar est EURUSD), en USDCAD – est USD (le taux de change d\'une transaction vers le dollar américain est égal à 1, car USD/USD = 1), en GBPJPY – la devise de base est GBP (le taux de change d\'une transaction vers le dollar américain est égal au taux de change GBP/USD ou au taux de change de GBPUSD). Ainsi, lorsque le taux de change GBPUSD est égal à 1,4956 dans une transaction en 2 lots avec l\'effet de levier 1:100, la marge sera de 10000 * 2 * GBPUSD/100 = 299,12 USD. Dans un trade de 3,4 lots sur USDJPY avec l\'effet de levier 1:1000, la marge est égale à 10000 * 3.5 * 1/1000 = 35 USD.',
            title6: 'Combien est-ce que je vais gagner si je commence à trader sur le forex avec un dépôt minimum?',
            desc6: 'Cela dépend absolument de votre expérience, de vos connaissances et de vos compétences. Le trading Forex / Crypto est très risqué, et vous devez assumer ce risque et évaluer votre niveau de professionnalisme. Les conditions de trading de Bullden font votre chemin d\'un débutant à un trader expérimenté.',
            title7: 'Quelles sont les heures de travail de la bourse?',
            desc7: 'La séance de bourse commence à 22h00 (GMT+00) le dimanche et se termine à 22h00 (GMT+00) le vendredi.',
            title8: 'J\'ai oublié mon mot de passe (ou je veux changer mon mot de passe de trader). Qu\' est-ce que je dois faire?',
            desc8: 'Vous pouvez changer le mot de passe en vous adressant au Service client avec les informations suivantes: adresse e-mail, Numéro de compte. Une fois qu\'ils auront vérifié votre identité, ils vous fourniront un lien unique – où vous pourrez changer votre mot de passe. (Lettres latines, de 6 à 12 symboles). Le mot de passe de votre compte sera récupéré ou changé à votre discrétion.',
            title9: 'La société facture-t-elle des frais pour déposer de l\'argent sur votre compte?',
            desc9: '%%COMPANY_NAME%% ne facture aucun frais pour le dépôt d\'argent sur votre compte de trading. Cependant, le montant de votre transaction sera facturé avec une commission par un système de paiement ou une banque qui crédite ou débite votre compte.',
            title10: 'Quel est le montant minimum de retrait?',
            desc10: 'Il n\'y a pas de limites du retrait. Vous pouvez toujours demander le retrait de tout reste du montant  sur votre compte de trading. L\'exception comprend le virement bancaire (le montant minimum pour le retrait est de 300$). Pour les portefeuilles, les systèmes de paiement électronique et les cartes bancaires – le montant minimum pour le retrait est de 1 USD, commission comprise. Faites également attention à la commission qu\'une banque peut facturer pour une opération: jusqu\'à 30 dollars américains.',
            title11: 'Qu\'est-ce qu\'une vérification de compte? Est-ce que j\'ai le droit de trader sur un compte non vérifié?',
            desc11: 'La vérification signifie l\'identification d\'un client. Elle protège votre compte de trading lors de la récupération de votre mot de passe ou d\'autres données confidentielles. La procédure de vérification du compte n\'affecte pas l\'utilisation de vos fonds. Vous pouvez vérifier votre compte à tout moment.',
            title12: 'Combien de temps prend-il pour vérifier un compte?',
            desc12: 'La vérification du compte peut prendre jusqu\'à 72 heures de travail.',
            title13: 'Quels documents sont requis pour la vérification du compte?',
            desc13: 'Tout document d\'identification est accepté. Un passeport (pièce d\'identité) ou un permis de conduire sont préférés, ainsi qu\'une facture de services publics pour les deux derniers mois.',
            title14: 'J\'ai reçu un courriel m\'informant que mon document n\'a pas été accepté pour la vérification, qu\' est-ce que je dois faire?',
            desc14: 'Le document n\'est pas accepté pour la vérification dans les cas suivants: la mauvaise qualité de la copie numérisée du document. Vous avez envoyé le document qui ne convient pas à la vérification (il n\'y a pas de photo ou votre nom complet). Le document que vous avez envoyé a déjà été utilisé pour le premier niveau de vérification ou il n\'y a pas de date d\'expiration sur l\'ID.',
        },
        contacts: {
            title: 'Contactez-Nous',
            desc: 'La satisfaction du client est notre priorité absolue! Notre service d\'assistance est disponible 24h / 24 et 7j / 7 pour vous aider avec toutes les questions que vous pourriez avoir sur notre Plateforme: dépôts et retraits, opérations de trading, comptes et paramètres, etc.\n' +
                'Vous pouvez nous contacter du moyen que vous préférez:',

            label1: 'Nom',
            label2: 'E-mail',
            label3: 'Saisissez la description',
            agree: 'J\'accepte le traitement des données personnelles fournies'
        },
        modal: {
            title1: 'Check that the data you entered is correct!',
            title2: 'There was an error form was not sent, check your Internet connection!',
            title3: 'The form is being sent, please wait',
            title4: 'Form sent successfully!',
        },
        footer: {
            text: 'Les contrats sur différence (CFD) sont des produits financiers complexes négociés sur marge. Le trading de CFD comprend un degré de risque élevé. Il est possible de perdre tout votre capital. Ces produits peuvent ne pas convenir à tout le monde et vous devez vous assurer que vous comprenez les risques encourus. Demandez un conseil à un expert indépendant si nécessaire et spéculez uniquement avec des fonds que vous pouvez vous permettre de perdre. Le contenu de cette page n\'est qu\'à titre informatif et ne constitue pas une recommandation ou un conseil. Ce n\'est que le client qui est responsable de toutes les activités ou investissements réalisés. Nous n\'offrons pas nos services aux résidents de certaines juridictions telles que l\'Afghanistan, Hong Kong, le Japon, les États-Unis d\'Amérique et quelques autres régions.'
        },
        key: {
            text: "LES POINTS CLÉS"
        },
        btn: {
            text1: 'Commencer',
        },
        table:{
            name: 'Dénomination',
            symbol: 'Symbole',
            lot: 'Taille du Lot',
            price: 'Prix',
            change: 'Changement'
        },
    },
    en: {
        _name: "en",
        menu: {
            home: 'Home',
            faq: 'FAQ',
            assets: 'Assets',
            forex: 'Forex',
            stocks: 'Stocks',
            crypto: 'Crypto',
            metals: 'Metals',
            indices: 'Indices',
            commodities: 'Commodities',
            nft: 'NFt',
            trading: 'Trading',
            accountTypes: 'Account types',
            education: 'Trading',
            ourPlatform: 'Platform',
            cfdTrading: 'Cfd trading',
            technicalAnalysis: 'Technical analysis',
            fundamentalAnalysis: 'Fundamental analysis',
            riskManagement: 'Risk management',
            legal: 'Legal',
            privacy: 'Privacy',
            disclaimer: 'Disclaimer',
            kyc: 'KYC',
            aboutUs: 'About us',
            contacts: 'Contacts'
        },
        menuBtn: {
            login: 'Login',
            signUp: 'Sign Up'
        },
        btnsText:{
            send: 'Send'
        },
        hero: {
            title: 'Professional CFD',
            title2: 'Professional',
            title3: 'Professional CFD trading system',
            title4: 'NFT',
            subtitle: "Trading System",
            subtitle2: "CFD Trading System",
            subtitle3: "Affordable NFT trading is finally here!",
            desc: 'Gateway to your financial freedom. Get involved today and conquer the markets with our services and solutions',
            btnText: 'Registration',
            btnText2: 'Get started',
            titleP1: 'Professional trading for',
            titleP2: 'everyone',
            titleP3: 'Investing, Better, Together',

        },
        features: {
            mainCirclesTitle: 'Stay ahead of the game with our professional software',

            layeredTitle1: 'Mobile-optimized trading experience',
            layeredTitle2: 'Adaptive',
            layeredTitle3: 'Fast',
            layeredTitle4: 'Convenient',

            plusTooltip1: 'Browser-based, no downloads required',
            plusTooltip2: 'Built-in Market news and Events calendar',
            plusTooltip3: 'Customized for desktop, laptop, tablet and mobile',
            plusTooltip4: 'Intuitive easy-to-use interface',
            plusInfo1: 'Stay ahead of the game with our professional software',
            plusInfo2: 'Browser-based, no downloads required',
            plusInfo3: 'Intuitive easy-to-use interface',
            plusInfo4: 'Customized for desktop,laptop, tablet and mobile',
            plusInfo5: 'Built-in Market News and Events Calendar',
            plusInfo6: 'Instant orders execution',
            plusInfo7: 'Margin trading',

            layeredDesc1: 'Mobile optimized',
            layeredDesc2: 'Live support',
            layeredDesc3: 'Financial calendar',
            layeredDesc4: 'Market watch',
            layeredDesc5: 'Never miss out on an opportunity with our mobile interface! Whenever you are not at your desktop or laptop computer, our Platform got you covered.',
            layeredDesc6: 'The interface is fully adaptive to any mobile device with full functionality remaining intact. Trade anywhere, anytime!',
            layeredDesc7: 'Our mobile interface is as fast as a desktop version. Make sure you have a fast mobile data connection and stay on top of the markets no matter the circumstances!',
            layeredDesc8: 'In a fast moving world it’s crucial to keep an eye on the markets even when you are on the go. Stay informed and stay mobile with our Platform!',

            moduleDesc1: 'Trade from any location with Internet access',
            moduleTitle1: 'Safe and secure trading',
            moduleDesc2: 'with our professional top-tier software',

            mainTitle: 'Easy access to cryptocurrency investments',
            mainDesc: 'It is never too late to start your journey into the world of crypto and secure a wealthy and sustainable future for yourself and your family. Our vision is that financial freedom is crucial and the access to investment opportunities should be unlimited. That is why we offer the easiest, fastest and most affordable way to start trading for a regular retail investor',
            mainArrowTitle: 'Stay ahead of the game with our professional software',
            arrowText1: 'Browser-based, no downloads required',
            arrowText2: 'Intuitive easy-to-use interface',
            arrowText3: 'Customized for desktop, laptop, tablet and mobile',
            arrowText4: 'Built-in Market News and Events Calendar',
            arrowText5: 'Instant orders execution',
            arrowText6: 'Margin trading',

            mainCardTitle: 'Easy access to investment opportunities',
            cardTitle1: 'Most liquid world markets',
            cardDesc1: 'stocks, crypto, commodities, forex, indices and ETFs',
            cardTitle2: 'Trade anywhere',
            cardDesc2: 'from any location with Internet access using any device',
            cardTitle3: 'Save and secure trading with our top-tier software',
            cardDesc3: 'with our professional top-tier software and cutting-edge security',
            cardTitle4: 'Guaranteed fast withdrawals',
            cardDesc4: 'take any and all of your profits whenever you need',

            title1: 'Safe and secure trading',
            desc1: 'With our professional top-tier software',
            title2: 'No commissions',
            desc2: 'Trade as much as you like',
            title3: 'Multiple accounts in different currencies',
            desc3: 'Manage your funds your way',
            title4: 'Most liquid world markets',
            desc4: 'Stocks, crypto, commodities, forex, indices and ETFs',
            title5: 'Bitcoin, altcoins & NFT indexes',
            desc5: 'From any location with Internet access',
            title6: 'Guaranteed fast withdrawals',
            desc6: 'Take your profits whenever you need',
        },
        markets: {
            title: 'Markets',
            desc: 'There are hundreds of assets available for trading on our Platform that represent the most liquid world markets. You can diversify your strategies and manage your risk profile any way you prefer. Go classic with stocks of well-established companies or get more exposure to cryptocurrencies for more yield opportunities. There is also a Forex market to trade traditional currency pairs, Metals section in case you need a safe harbor for your funds and broader Commodities section to access raw materials market. Indices and ETFs are also available should you want to trade more complex instruments.',

            itemTitle1: 'Stocks',
            itemDesc1: '200+ well-known public companies',
            itemTitle2: 'Crypto',
            itemDesc2: 'Bitcoin, established and emerging altcoins',
            itemTitle3: 'Commodities',
            itemDesc3: 'Oil and gas, industrial and agricultural',
            itemTitle4: 'Indices',
            itemDesc4: 'Main world economy indicators',
            itemTitle5: 'Forex',
            itemDesc5: 'Major and exotic currency pairs',
            itemTitle6: 'Metal',
            itemDesc6: 'Gold, silver, other precious and industrial metals',
            itemTitle7: 'NFTs',
            itemDesc7: 'Indexes tracking the most popular NFT collections',
        },
        steps: {
            title: '3 easy steps to start trading',
            desc1: 'Register on our Platform',
            desc2: 'Complete Verification',
            desc3: 'Make a Deposit',
            desc4: 'Verification',
            desc5: 'Deposit',
            text1: 'Fill in a registration form with basic information about yourself to create account on our Platform.',
            text2: 'We are legally obliged to verify your identity so photos of your documents will be needed',
            text3: 'Top-up your account using one of available methods and start placing orders straight away.',
            stepText: "Step",
        },
        illustrated: {
            title1: 'Mobile-optimized',
            desc1: 'Never miss out on an opportunity with our mobile interface! Whenever you are not at your desktop or laptop computer, our Platform got you covered.',
            desc2: 'The interface is fully adaptive to any mobile device with full functionality remaining intact. Stay on top of the markets no matter the circumstances! Trade anywhere, anytime!',
        },
        planet: {
            title: 'Crypto trading',
        },
        cryptocurrency: {
            title: 'Cryptocurrency',
            desc: 'Cryptocurrency is all the rage nowadays. It is the most rapidly-growing and the best yielding market in the 21-st century so far. Crypto is where sophisticated cutting-edge technology meets great profit opportunities with no boundaries to enter. Bitcoin and altcoins are essential to any crypto trading system but we have something special for you! An opportunity to trade NFT indexes is a new and hot feature exclusive to our Platform!',
            btnText: 'Registration',
        },
        widgets: {
            title: 'live price feed',
        },
        cryptoNft: {
            title: 'Invest in Crypto & NFTs',
            desc: 'Cryptocurrency is all the rage nowadays. It is the most rapidly-growing and the best yielding market in the 21-st century so far. Crypto is where sophisticated cutting-edge technology meets great profit opportunities with no boundaries to enter. Bitcoin and altcoins are essential to any crypto trading system but we have something special for you! An opportunity to trade NFT indexes is a special, new and hot feature of our Platform!',
        },
        stats: {
            desc1: 'years in the business',
            desc2: 'monthly active users',
            desc3: 'offices worldwide',
            desc4: 'assets to trade',
        },
        prices: {
            title: 'LIVE PRICE FEED'
        },
        optimized: {
            mainTitle: 'Mobile-optimized trading experience',
            mainDesc: 'Never miss out on an opportunity with our mobile interface! Whenever you are not at your desktop or laptop computer, our Platform got you covered.',
            title1: 'Adaptive',
            desc1: 'The interface is fully adaptive to any mobile device with full functionality remaining intact. Trade anywhere, anytime!',
            title2: 'Fast',
            desc2: 'Our mobile interface is as fast as a desktop version. Make sure you have a fast mobile data connection and stay on top of the markets no matter the circumstances!',
            title3: 'Convenient',
            desc3: 'In a fast moving world it’s crucial to keep an eye on the markets even when you are on the go. Stay informed and stay mobile with our Platform!',
        },
        page: {
            forex: "WHAT IS THE FOREX MARKET?",
            stocks: "WHAT IS A STOCK?",
            crypto: "WHAT IS CRYPTOCURRENCY?",
            metals: "WHAT IS METALS?",
            indices: "WHAT IS A MARKET INDEX?",
            commodities: "WHAT IS COMMODITIES?",
            nft: "WHAT IS A NON-FUNGIBLE TOKEN (NFT)?"
        },
        forex: {
            descHead: 'The forex market allows participants, such as banks and individuals, to buy, sell or exchange currencies for both hedging and speculative purposes. The foreign exchange (forex) market is the largest financial market in the world and is made up of banks, commercial companies, central banks, investment management firms, hedge funds, retail forex brokers, and investors.',
            list1: 'The forex market allows participants, including banks, funds, and individuals to buy, sell or exchange currencies for both hedging and speculative purposes.',
            list2: 'The forex market operates 24 hours, 5.5 days a week, and is responsible for trillions of dollars in daily trading activity.',
            list3: 'Forex trading can provide high returns but also brings high risk.',
            list4: 'The forex market is made up of two levels: the interbank market and the over-the-counter (OTC) market.',
            list5: 'Many forex accounts can be opened with as little as $100.',
            understanding: '// Understanding the Forex Market',
            textUnderstanding1: 'The forex market is not dominated by a single market exchange, but a global network of computers and brokers from around the world. Forex brokers act as market makers as well and may post bid and ask prices for a currency pair that differs from the most competitive bid in the market.',
            textUnderstanding2: 'The forex market is made up of two levels—the interbank market and the over-the-counter (OTC) market. The interbank market is where large banks trade currencies for purposes such as hedging, balance sheet adjustments, and on behalf of clients. The OTC market, on the other hand, is where individuals trade through online platforms and brokers.',
            textUnderstanding3: 'From Monday morning in Asia to Friday afternoon in New York, the forex market is a 24-hour market, meaning it does not close overnight. The forex market opens from Sunday at 5 p.m. EST to Friday at 4 p.m. EST.',
            textUnderstanding4: 'This differs from markets such as equities, bonds, and commodities, which all close for a period of time, generally in the late afternoon EST. However, as with most things, there are exceptions. Some emerging market currencies close for a period of time during the trading day.',
            stock: '// Stock CFD trading',
            textStock: 'With Investous you can trade Contracts for Difference (CFDs) that use forex as an underlying asset, allowing you to go long or short a company’s shares without actually owning them. This enables you to speculate on the moving prices of shares, even if you don’t have access to an exchange like the New York Stock Exchange or London Stock Exchange. For instance, you’d buy contracts for IBM shares if you believe shares of the company will increase in price or sell them short if you think price will decrease. The beauty of trading CFDs is the ability to speculate on prices rises or falling while also being entitled to the dividends if the company announces payouts to shareholders. With a long list of major global company shares available, get in on the action today by joining Investous.',
            table: 'FOREX AVAILABLE ON OUR PLATFORM'
        },
        stocks: {
            descHead1: 'A stock (also known as equity) is a security that represents the ownership of a fraction of a corporation. This entitles the owner of the stock to a proportion of the corporation\'s assets and profits equal to how much stock they own. Units of stock are called "shares."',
            descHead2: 'Stocks are bought and sold predominantly on stock exchanges (though there can be private sales as well) and are the foundation of many individual investors\' portfolios. These transactions have to conform to government regulations that are meant to protect investors from fraudulent practices. Historically, they have outperformed most other investments over the long run. These investments can be purchased from most online stockbrokers.',
            list1: 'A stock is a form of security that indicates the holder has proportionate ownership in the issuing corporation.',
            list2: 'Corporations issue (sell) stock to raise funds to operate their businesses. There are two main types of stock: common and preferred.',
            list3: 'Stocks are bought and sold predominantly on stock exchanges, though there can be private sales as well, and they are the foundation of nearly every portfolio.',
            list4: 'Historically, they have outperformed most other investments over the long run.',
            understanding: '// Understanding Stocks',
            textUnderstanding1: 'Corporations issue (sell) stock to raise funds to operate their businesses. The holder of stock (a shareholder) buys a piece of the corporation and, depending on the type of shares held, may have a claim to part of its assets and earnings. In other words, a shareholder is now an owner of the issuing company. Ownership is determined by the number of shares a person owns relative to the number of outstanding shares. For example, if a company has 1,000 shares of stock outstanding and one person owns 100 shares, that person would own and have a claim to 10% of the company\'s assets and earnings.',
            textUnderstanding2: 'Stockholders do not own corporations; they own shares issued by corporations. But corporations are a special type of organization because the law treats them as legal persons. In other words, corporations file taxes, can borrow, can own property, can be sued, etc. The idea that a corporation is a “person” means that the corporation owns its own assets. A corporate office full of chairs and tables belongs to the corporation, and not to the shareholders.',
            textUnderstanding3: 'This distinction is important because corporate property is legally separated from the property of shareholders, which limits the liability of both the corporation and the shareholder. If the corporation goes bankrupt, a judge may order all of its assets sold—but your personal assets are not at risk. The court cannot even force you to sell your shares, although the value of your shares will have fallen drastically. Likewise, if a major shareholder goes bankrupt, they cannot sell the company’s assets to pay off their creditors.',
            table: 'stocks AVAILABLE ON OUR PLATFORM'
        },
        crypto: {
            descHead: 'A cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend. Many cryptocurrencies are decentralized networks based on blockchain technology—a distributed ledger enforced by a disparate network of computers. A defining feature of cryptocurrencies is that they are generally not issued by any central authority, rendering them theoretically immune to government interference or manipulation.',
            list1: 'A cryptocurrency is a form of digital asset based on a network that is distributed across a large number of computers. This decentralized structure allows them to exist outside the control of governments and central authorities.',
            list2: 'Experts believe that blockchain and related technology will disrupt many industries, including finance and law.',
            list3: 'The advantages of cryptocurrencies include cheaper and faster money transfers and decentralized systems that do not collapse at a single point',
            list4: 'The disadvantages of cryptocurrencies include their price volatility, high energy consumption for mining activities, and use in criminal activities.',
            understanding: '// Understanding Cryptocurrencies',
            textUnderstanding1: 'Cryptocurrencies are digital or virtual currencies underpinned by cryptographic systems. They enable secure online payments without the use of third-party intermediaries. "Crypto" refers to the various encryption algorithms and cryptographic techniques that safeguard these entries, such as elliptical curve encryption, public-private key pairs, and hashing functions.',
            textUnderstanding2: 'Cryptocurrencies can be mined or purchased from cryptocurrency exchanges. Not all ecommerce sites allow purchases using cryptocurrencies. In fact, cryptocurrencies, even popular ones like Bitcoin, are hardly used for retail transactions. However, the skyrocketing value of cryptocurrencies has made them popular as trading instruments. To a limited extent, they are also used for cross-border transfers.',
            blockchain: '// Blockchain',
            textBlockchain1: 'Central to the appeal and functionality of Bitcoin and other cryptocurrencies is blockchain technology. As its name indicates, blockchain is essentially a set of connected blocks or an online ledger. Each block contains a set of transactions that have been independently verified by each member of the network. Every new block generated must be verified by each node before being confirmed, making it almost impossible to forge transaction histories.1The contents of the online ledger must be agreed upon by the entire network of an individual node, or computer maintaining a copy of the ledger.',
            textBlockchain2: 'Experts say that blockchain technology can serve multiple industries, such as supply chain, and processes such as online voting and crowdfunding. Financial institutions such as JPMorgan Chase & Co. (JPM) are testing the use of blockchain technology to lower transaction costs by streamlining payment processing.',
            table: 'CRYPTOCURRENCIES AVAILABLE ON OUR PLATFORM'
        },
        metals: {
            descHead: 'The periodic table represents the earth\'s known chemical elements, and some of them make excellent investments. Rare earth metals, along with a selection of elements known as base and precious metals, provide today\'s investors and active traders with a variety of trading opportunities. They\'re also often formed into ingots for physical purchases.',
            list1: 'Investors can participate in the base metals market by buying shares of companies like U.S. Steel, futures, options, and various ETFs.',
            list2: 'Precious metals offer the widest field of opportunities for investors, with mining companies, ETFs for both stocks and the metals themselves, options, futures, and even direct purchases of physical metals.',
            list3: 'As rare earth metals became more important to both technology and the economy, investors became more interested in shares of rare earth producing companies and related ETFs.',
            brief: '// A Brief History of Stocks',
            textBrief: 'The concept of selling equity in companies was popularized as early as the 16th century, when governments that issued charters to businesses also began selling shares in these businesses to interested retail investors. When new democratic ideas helped inform free market principles in the US and beyond, regulations led to the formation of exchanges like the NYSE, where buyers and sellers can meet and come to an agreement on the price of a company’s shares. Derivatives, indices, and secondary markets appeared afterwards, leading to the investing environment we enjoy today.',
            base: '// Base Metals',
            textBase1: 'In chemistry, metals that oxidize or corrode easily are referred to as base metals. These industrial metals include copper (Cu on the periodic table), nickel (Ni), aluminum (Al), zinc (Zn), lead (Pb), tin (Sn), and iron (Fe)/steel (an alloy of iron and carbon).',
            textBase2: 'Base metals are generally plentiful and are used in a variety of commercial and industrial applications. These applications include copper plumbing, aluminum cans, and the steel used in automobile production. Because of their abundance, prices for base metals are far below those of both precious and rare earth metals. Their prices respond to changes in demand for the products for which the metals are used.',
            textBase3: 'Investors and traders can participate in the base metals market in several ways. Investments can be made in individual companies specializing in particular base metals production, including steel company U.S. Steel (X) or aluminum company Alcoa (AA). Futures and options contracts of individual metals can be traded, such as copper futures (HG) and options (HX) on CME Globex.',
            textBase4: 'In addition, a wide variety of base metal exchange traded funds (ETFs) exist. One of them is the Invesco DB Base Metal Fund (DBB), which is composed of futures contracts on aluminum, zinc, and copper. The SPDR S&P Metals & Mining ETF (XME) is another, and it is made up of companies involved in the metals and mining industries. Finally, the iShares U.S. Basic Materials ETF (IYM) consists of companies engaged in producing basic materials.',
            precious: '// Precious Metals',
            textPrecious1: 'Precious metals are naturally occurring metallic chemical elements that have a high luster and melting point. They are softer and more ductile than other metals and are less reactive than most elements. Precious metals include silver (Ag), gold (Au), platinum (Pt), and palladium (Pd). Because of their scarcity, precious metals are valuable—much more so than the base metals. They are used for jewelry, art, coins, dental work, medical devices, electronics, and investment purposes.',
            textPrecious2: 'Like base metals, a wide range of investment vehicles are available to those interested in the precious metals markets. Gold has long been considered a solid investment and is often physically held in the form of jewelry, coins, or gold bars. Particularly during times of economic uncertainty, gold gains popularity as an asset of last resort. Aside from physical possession of precious metals, investors can trade stocks, futures, options, mutual funds, and ETFs based on precious metal holdings.',
            textPrecious3: 'Examples of stocks include Eldorado Gold Corporation (EGO) and Agnico-Eagle Mines Limited (AEM), both Canadian-based gold producers. Furthermore, the CME Group offers investors a choice of gold futures and options contracts. The full-sized contract is based on 100 troy ounces (GC), while the e-mini gold contract is 50 troy ounces (QO), and the micro gold contract is 10 troy ounces (MGC). Gold options are also available in a contract size of 100 troy ounces (OG). Futures and options contracts are also available for silver, platinum, and palladium.',
            textPrecious4: 'Precious metal ETFs include the physically backed and heavily traded SPDR Gold Trust ETF (GLD), the VanEck Vectors Junior Gold Miners ETF (GDXJ), and the iShares Silver Trust ETF (SLV). The Invesco DB Precious Metals Fund (DBP) and the Aberdeen Standard Physical Palladium Shares ETF (PALL) are among the other choices available.',
            table: 'METALS AVAILABLE ON OUR PLATFORM'
        },
        index: {
            descHead1: 'A market index is a hypothetical portfolio of investment holdings that represents a segment of the financial market. The calculation of the index value comes from the prices of the underlying holdings. Some indexes have values based on market-cap weighting, revenue-weighting, float-weighting, and fundamental-weighting. Weighting is a method of adjusting the individual impact of items in an index.',
            descHead2: 'Investors follow different market indexes to gauge market movements. The three most popular stock indexes for tracking the performance of the U.S. market are the Dow Jones Industrial Average (DJIA), S&P 500 Index and Nasdaq Composite Index. In the bond market, Bloomberg is a leading provider of market indexes with the Bloomberg U.S. Aggregate Bond Index serving as one of the most popular proxies for U.S. bonds.1 Investors cannot invest directly in an index, so these portfolios are used broadly as benchmarks or for developing index funds.',
            list1: 'Market indexes provide a broad representative portfolio of investment holdings.',
            list2: 'Methodologies for constructing individual indexes vary but nearly all calculations are based on weighted average mathematics.',
            list3: 'Indexes are used as benchmarks to gauge the movement and performance of market segments.',
            list4: 'Investors use indexes as a basis for portfolio or passive index investing.',
            understanding: '// Understanding a Market Index',
            textUnderstanding1: 'A market index measures the value of a portfolio of holdings with specific market characteristics. Each index has its own methodology which is calculated and maintained by the index provider. Index methodologies will typically be weighted by either price or market cap. A wide variety of investors use market indexes for following the financial markets and managing their investment portfolios. Indexes are deeply entrenched in the investment management business with funds using them as benchmarks for performance comparisons and managers using them as the basis for creating investable index funds.',
            market: '// Market Index Methodologies',
            textMarket: 'Each individual index has its own method for calculating the index’s value. Weighted average mathematics is primarily the basis for index calculations as values are derived from a weighted average calculation of the value of the total portfolio. As such, price-weighted indexes will be more greatly impacted by changes in holdings with the highest price, while market capitalization-weighted indexes will be most greatly impacted by changes in the largest stocks, and so on, depending on the weighting characteristics.',
            table: 'INDICES AVAILABLE ON OUR PLATFORM',
        },
        commodities: {
            descHead1: 'Do you ever think about what goes into that cup of coffee you reach for every morning? What about the gas that you use to fill up your tank every week? Most of us never realize it, but virtually all of the goods begin with commodities.',
            descHead2: 'Commodities are an extremely important part of the financial market. That\'s because they are essential for producers and manufacturers. A commodity is essentially a basic product or raw material used to make all the goods and services that we need in our everyday lives.',
            descHead3: 'There are a wide array of commodities, including oil, gas, coffee, soybeans, and rice. These commodities are traded on commodity exchanges around the world such as the Chicago Mercantile Exchange (CME), the London Metals Exchange, and the Intercontinental Exchange (ICE). Investing in commodities provides investors with a way to diversify their portfolios, especially during times of market volatility.',
            descHead4: 'Want to learn more about this unique part of the market? Keep reading to find out more about the different types of commodities, their price structures, and who sets them on the market.',
            list1: 'Commodities come in many forms, including grains, energy products, and metals.',
            list2: 'Prices change as economic events unfold and trigger waves of buying and selling.',
            list3: 'Traders generally don\'t buy and sell physical commodities.',
            list4: 'Commodities trade in the cash or spot market, and on organized exchanges as futures contracts.',
            list5: 'Commodities futures trade on exchanges and are used for speculation and hedging.',
            types: '// Types of Commodities',
            tetTypes1: 'Since commodities are traded on exchanges, their prices aren\'t set by a single individual or entity. In fact, there are many economic factors and different catalysts that affect and move their prices each day.',
            tetTypes2: 'Just like equity securities, commodity prices are primarily determined by the forces of supply and demand in the market. For example, if the supply of oil increases, the price of one barrel decreases. Conversely, if demand for oil increases (which often happens during the summer), the price rises. Gasoline and natural gas fall into the energy commodities category.',
            tetTypes3: 'Weather plays an extremely significant role in price changes for crop-related or agricultural commodities, especially in the short term. If the weather affects supplies in a certain region, it has a direct impact on that commodity\'s price. Commodities that fit into this category include corn, soybeans, and wheat. Cotton, coffee, and rice are referred to as soft commodities.',
            tetTypes4: 'Gold is one of the most actively traded commodities because it is used to produce jewelry and other goods. But is also considered to be a worthwhile, long-term investment. Silver and copper are other examples of commodities in the metals group.',
            tetTypes5: 'Livestock is another group of commodities. This category includes live animals, such as hogs, and cattle.',
            stock: '// Stock CFD trading',
            textStock1: 'With Investous you can trade Contracts for Difference (CFDs) that use commodities as an underlying asset, allowing you to go long or short a company’s shares without actually owning them. This enables you to speculate on the moving prices of shares, even if you don’t have access to an exchange like the New York Stock Exchange or London Stock Exchange. For instance, you’d buy contracts for IBM shares if you believe shares of the company will increase in price or sell them short if you think price will decrease. The beauty of trading CFDs is the ability to speculate on prices rises or falling while also being entitled to the dividends if the company announces payouts to shareholders. With a long list of major global company shares available, get in on the action today by joining Investous.',
            table: 'COMMODITIES AVAILABLE ON OUR PLATFORM'
        },
        nft: {
            descHead1: 'Non-fungible tokens (NFTs) are cryptographic assets on a blockchain with unique identification codes and metadata that distinguish them from each other. Unlike cryptocurrencies, they cannot be traded or exchanged at equivalency. This differs from fungible tokens like cryptocurrencies, which are identical to each other and, therefore, can serve as a medium for commercial transactions.',
            descHead2: 'The distinct construction of each NFT has the potential for several use cases. For example, they are an ideal vehicle to digitally represent physical assets like real estate and artwork. Because they are based on blockchains, NFTs can also work to remove intermediaries and connect artists with audiences or for identity management. NFTs can remove intermediaries, simplify transactions, and create new markets.',
            descHead3: 'Much of the current market for NFTs is centered around collectibles, such as digital artwork, sports cards, and rarities. Perhaps the most hyped space is NBA Top Shot, a place to collect non-fungible tokenized NBA moments in digital card form. Some of these cards have sold for millions of dollars. Recently, Twitter\'s (TWTR) Jack Dorsey tweeted a link to a tokenized version of the first tweet ever, in which he wrote: "just setting up my twttr." The NFT version of the first-ever tweet sold for more than $2.9 million.',
            list1: 'NFTs are unique cryptographic tokens that exist on a blockchain and cannot be replicated.',
            list2: 'NFTs are unique cryptographic tokens that exist on a blockchain and cannot be replicated.',
            list3: 'Tokenizing" these real-world tangible assets makes buying, selling, and trading them more efficient while reducing the probability of fraud.',
            list4: 'NFTs can also function to represent individuals\' identities, property rights, and more.',
            understanding: '// Understanding NFTs',
            textUnderstanding1: 'Like physical money, cryptocurrencies are fungible, meaning that they can be traded or exchanged, one for another. For example, one bitcoin is always equal in value to another bitcoin. Similarly, a single unit of ether is always equal to another unit. This fungibility characteristic makes cryptocurrencies suitable as a secure medium of transaction in the digital economy.',
            textUnderstanding2: 'NFTs shift the crypto paradigm by making each token unique and irreplaceable, thereby making it impossible for one non-fungible token to be equal to another. They are digital representations of assets and have been likened to digital passports because each token contains a unique, non-transferable identity to distinguish it from other tokens. They are also extensible, meaning you can combine one NFT with another to “breed” a third, unique NFT.',
            textUnderstanding3: 'Just like Bitcoin, NFTs also contain ownership details for easy identification and transfer between token holders. Owners can also add metadata or attributes pertaining to the asset in NFTs. For example, tokens representing coffee beans can be classified as fair trade. Or, artists can sign their digital artwork with their own signature in the metadata.',
            textUnderstanding4: 'NFTs evolved from the ERC-721 standard. Developed by some of the same people responsible for the ERC-20 smart contract, ERC-721 defines the minimum interface—ownership details, security, and metadata—required for the exchange and distribution of gaming tokens. The ERC-1155 standard takes the concept further by reducing the transaction and storage costs required for NFTs and batching multiple types of non-fungible tokens into a single contract.',
            textUnderstanding5: 'Perhaps the most famous use case for NFTs is that of cryptokitties. Launched in November 2017, cryptokitties are digital representations of cats with unique identifications on Ethereum’s blockchain. Each kitty is unique and has a price in ether. They reproduce among themselves and produce new offspring, which have different attributes and valuations compared to their parents.',
            textUnderstanding6: 'Within a few short weeks of their launch, cryptokitties racked up a fan base that spent $20 million worth of ether to purchase, feed, and nurture them. Some enthusiasts even spent upward of $100,000 on the effort. More recently, the Bored Ape Yacht Club has garnered controversial attention for its high prices, celebrity following, and high-profile thefts of some of its 10,000 NFTs.',
            textUnderstanding7: 'Though the cryptokitties and Bored Ape Yacht Club use cases may sound trivial, others have more serious business implications. For example, NFTs have been used in private equity transactions as well as real estate deals.10 One of the implications of enabling multiple types of tokens in a contract is the ability to provide escrow for different types of NFTs—from artwork to real estate—into a single financial transaction.',
            stock: '// Stock CFD trading',
            stockText1: 'With Investous you can trade Contracts for Difference (CFDs) that use nft as an underlying asset, allowing you to go long or short a company’s shares without actually owning them. This enables you to speculate on the moving prices of shares, even if you don’t have access to an exchange like the New York Stock Exchange or London Stock Exchange. For instance, you’d buy contracts for IBM shares if you believe shares of the company will increase in price or sell them short if you think price will decrease. The beauty of trading CFDs is the ability to speculate on prices rises or falling while also being entitled to the dividends if the company announces payouts to shareholders. With a long list of major global company shares available, get in on the action today by joining Investous.',
            table: 'NFT INDEXES ON OUR PLATFORM'
        },
        ourPlatform: {
            dash: 'User Dashboard',
            dashDesc: 'This is the first page you see after logging in to our Platform. On this single page you can monitor all your trading activity: current balance, total profit & loss, ROI, information on every account you have, number of profitable orders compared to a number of all of your trades, line chart reflecting your balance growth over time and a log of all the times you logged in to the system.',
            deposit: 'Deposit Page',
            depositDesc: 'To start trading you need to top-up your account, and you can do it on this page. Select one of the available deposit methods, enter an amount and proceed to the payment system – service provided by third parties. When your deposit is confirmed you will see a notification on our Platform and will be able to start placing orders.',
            main: 'Main trading screen',
            mainDesc: 'Here you see the chart for the asset you have selected and the Order Menu from which you open orders. Any trade you open can be fine-tuned according to your strategy: you can place long and short trades, set limit orders if necessary, choose one of three amount conversions and set stop-loss and take-profit levels. Trend indicator will help you make a right decision and Profit Calculator is there to assist you with planning your risks and future profits.',
            widgets: 'Widgets',
            widgetsDesc: 'Main trading screen is full of additional features designed for your convenience. On the left side you see Widgets Panel with Market Watch, Economic Calendar, Market News and detailed information on your open and closed trades. These trades will also be displayed in the Order Panel at the bottom of your screen.',
        },
        accountTypes: {
            desc: 'Various account types are available for our regular clients. The more you trade the more convenient your options are.',
            btnText: 'Open Account',
            minVolume: 'Min Volume',
            maxVolume: 'Max Volume',
            lotSize: 'Lot Size',
            main: 'Main',
            bronze: 'Bronze',
            silver: 'Silver',
            gold: 'Gold',
            platinum: 'Platinum',
            vip: 'VIP',
        },
        trading: {
            descHead1: "For momentum trading, which is a type of technical trading, a trader watches for signs that a stock is about to pop; that is, to undertake a significant unidirectional pricemovement on high volume for a sufficient period of time that might bring a profit. Byvirtue of watching the momentum line, the momentum trader has already engaged intechnical analysis by examining stock charts for signs of the breakout.",
            descHead2: 'The technical indicators used in momentum trading are only the tip of the iceberg; theyare only a small sampling of the wide range of chart and graph patterns available to thetechnical trader.',
            descHead3: 'Novice traders might experiment with each of these techniques, but they should ultimately settle on a single niche matching their investing knowledge and experience with a style to which they are motivated to devote further research, education, and practice. Entire textbooks are devoted to each style although many titles such as "DayTrade Online" or "How to Get Started in Electronic Day Trading are unclear about what type of trading they espouse.',
            different: '// Different Types of Trading',
            differentDesc: 'Before we focus on technical trading, here\'s a review of the main types of equity trading:',
            listTitle1: 'Scalping:',
            list1: 'The scalper is an individual who makes dozens or hundreds of trades per day in an attempt to "scalp" a small profit from each trade by exploiting the bid-ask spread.',
            listTitle2: 'Momentum Trading:',
            list2: 'Momentum traders seek stocks that are moving significantly in one direction in high volume. These traders attempt to ride the momentum to the desired profit.',
            listTitle3: 'Technical Trading:',
            list3: 'Technical traders focus on charts and graphs. They watch lines on stock or index graphs for signs of convergence or divergence that might indicate buy or sell signals.',
            listTitle4: 'Fundamental Trading:',
            list4: 'Fundamentalists trade companies based on fundamental analysis, which examines corporate events such as actual or anticipated earnings reports, stock splits, reorganizations, or acquisitions.',
            listTitle5: 'Swing Trading:',
            list5: 'Swing traders are fundamental traders who hold their positions longer than a single day. Most fundamentalists are actually swing traders since changes in corporate fundamentals typically require several days or even weeks to produce a price movement sufficient enough for the trader to claim a reasonable profit.',
            technical: '// Exploring Technical Trading',
            technicalDesc1: 'Technical trading is a broader style that is not necessarily limited to trading. Generally, a technician uses historical patterns of trading data to predict what might happen to stocks in the future. This is the same method practiced by economists and meteorologists: looking to the past for insight into the future. However, we all know how poor forecasts can be.',
            technicalDesc2: 'The challenge of technical analysis is that there are literally hundreds of technical indicators available, and there is no single indicator that is considered universally better as each particular indicator or group of indicators, that may be applicable only to specific circumstances. Some technical indicators may be useful for certain industries, others only for stocks of a certain classification (for example, stocks within a certain range of liquidity or market capitalization). Because of the unique patterns that highly traded stocks might exhibit throughout history, some indicators may be relevant only to certain individual stocks.',
            technicalDesc3: 'Technical indicators, like momentum indicators, are not a silver bullet for deciding when to buy or sell. They are poor predictors of precise timing, but they are good at indicating which stocks are candidates for further analysis with such detailed data as the Level 2 screen. As such, technical analysis can be viewed as a starting point—the historical patterns do not necessarily translate into an exact picture of future performance.',
            technicalDesc4: 'Instead of trying to provide an exhaustive study of all of the indicators available to the technical trader, we discuss the most common groupings and provide a general introduction to each. This discussion is limited to indicators applicable to individual stocks—there are many indicators that might be useful to predict an index or industry group.',
        },
        cfdTrading: {
            descHead1: 'A contract for difference (CFD) is a contract between a buyer and a seller that stipulates that the buyer must pay the seller the difference between the current value of an asset and its value at contract time. CFDs allow traders and investors an opportunity to profit from price movement without owning the underlying assets. The value of a CFD contract does not consider the asset\'s underlying value: only the price change between the trade entry and exit.',
            descHead2: 'This is accomplished through a contract between client and broker and does not utilize any stock, forex, commodity, or futures exchange. Trading CFDs offers several major advantages that have increased the instruments\' enormous popularity in the past decade.',
            list1: 'A contract for differences (CFD) is an agreement between an investor and a CFD broker to exchange the difference in the value of a financial product between the time the contract opens and closes.',
            list2: 'A CFD investor never actually owns the underlying asset but instead receives revenue based on the price change of that asset.',
            list3: 'Some advantages of CFDs include access to the underlying asset at a lower cost than buying the asset outright, ease of execution, and the ability to go long or short.',
            list4: 'A disadvantage of CFDs is the immediate decrease of the investor\'s initial position, which is reduced by the size of the spread upon entering the CFD.',
            list5: 'Other CFD risks include weak industry regulation, potential lack of liquidity, and the need to maintain an adequate margin.',
            cfds: '// How CFDs Work',
            cfdsDesc1: 'A contract for differences (CFD) is an agreement between an investor and a CFD broker to exchange the difference in the value of a financial product (securities or derivatives) between the time the contract opens and closes.',
            cfdsDesc2: 'It is an advanced trading strategy that is utilized by experienced traders only. There is no delivery of physical goods or securities with CFDs. A CFD investor never actually owns the underlying asset but instead receives revenue based on the price change of that asset. For example, instead of buying or selling physical gold, a trader can simply speculate on whether the price of gold will go up or down.',
            cfdsDesc3: 'Essentially, investors can use CFDs to make bets about whether or not the price of the underlying asset or security will rise or fall. Traders can bet on either upward or downward movement. If the trader that has purchased a CFD sees the asset\'s price increase, they will offer their holding for sale. The net difference between the purchase price and the sale price are netted together. The net difference representing the gain from the trades is settled through the investor\'s brokerage account.',
            cfdsDesc4: 'On the other hand, if the trader believes that the asset\'s value will decline, an opening sell position can be placed. In order to close the position, the trader must purchase an offsetting trade. Then, the net difference of the loss is cash-settled through their account.',
        },
        technicalAnalysis: {
            technicalAnalysis: '// What Is Technical Analysis?',
            descHead1: 'Technical analysis is a trading discipline employed to evaluate investments and identify trading opportunities by analyzing statistical trends gathered from trading activity, such as price movement and volume. Unlike fundamental analysis, which attempts to evaluate a security\'s value based on business results such as sales and earnings, technical analysis focuses on the study of price and volume.',
            list1: 'Technical analysis is a trading discipline employed to evaluate investments and identify trading opportunities in price trends and patterns seen on charts.',
            list2: 'Technical analysts believe past trading activity and price changes of a security can be valuable indicators of the security\'s future price movements.',
            list3: 'Technical analysis may be contrasted with fundamental analysis, which focuses on a company\'s financials rather than historical price patterns or stock trends.',
            understanding: '// Understanding Technical Analysis',
            textUnderstanding1: 'Technical analysis tools are used to scrutinize the ways supply and demand for a security will affect changes in price, volume, and implied volatility. It operates from the assumption that past trading activity and price changes of a security can be valuable indicators of the security\'s future price movements when paired with appropriate investing or trading rules.',
            textUnderstanding2: 'It is often used to generate short-term trading signals from various charting tools, but can also help improve the evaluation of a security\'s strength or weakness relative to the broader market or one of its sectors. This information helps analysts improve their overall valuation estimate.',
            textUnderstanding3: 'Technical analysis as we know it today was first introduced by Charles Dow and the Dow Theory in the late 1800s. Several noteworthy researchers including William P. Hamilton, Robert Rhea, Edson Gould, and John Magee further contributed to Dow Theory concepts helping to form its basis. Nowadays technical analysis has evolved to include hundreds of patterns and signals developed through years of research.',
            using: '// Using Technical Analysis',
            textUsing1: 'Professional analysts often use technical analysis in conjunction with other forms of research. Retail traders may make decisions based solely on the price charts of a security and similar statistics, but practicing equity analysts rarely limit their research to fundamental or technical analysis alone.',
            textUsing2: 'Technical analysis can be applied to any security with historical trading data. This includes stocks, futures, commodities, fixed-income, currencies, and other securities. In fact, technical analysis is far more prevalent in commodities and forex markets where traders focus on short-term price movements.',
            textUsing3: 'Technical analysis attempts to forecast the price movement of virtually any tradable instrument that is generally subject to forces of supply and demand, including stocks, bonds, futures, and currency pairs. In fact, some view technical analysis as simply the study of supply and demand forces as reflected in the market price movements of a security.',
            textUsing4: 'Technical analysis most commonly applies to price changes, but some analysts track numbers other than just price, such as trading volume or open interest figures.',
        },
        fundamentalAnalysis: {
            fundamentalAnalysis: '// What Is Fundamental Analysis?',
            descHead1: 'Fundamental analysis (FA) is a method of measuring a security\'s intrinsic value by examining related economic and financial factors. Fundamental analysts study anything that can affect the security\'s value, from macroeconomic factors such as the state of the economy and industry conditions to microeconomic factors like the effectiveness of the company\'s management.',
            descHead2: 'The end goal is to arrive at a number that an investor can compare with a security\'s current price in order to see whether the security is undervalued or overvalued.',
            descHead3: 'This method of stock analysis is considered to be in contrast to technical analysis, which forecasts the direction of prices through an analysis of historical market data such as price and volume.',
            list1: 'Fundamental analysis is a method of determining a stock\'s real or "fair market" value.',
            list2: 'Fundamental analysts search for stocks that are currently trading at prices that are higher or lower than their real value.',
            list3: 'If the fair market value is higher than the market price, the stock is deemed to be undervalued and a buy recommendation is given.',
            list4: 'In contrast, technical analysts ignore the fundamentals in favor of studying the historical price trends of the stock.',
            understanding: '// Understanding Fundamental Analysis',
            textUnderstanding1: 'All stock analysis tries to determine whether a security is correctly valued within the broader market. Fundamental analysis is usually done from a macro to micro perspective in order to identify securities that are not correctly priced by the market.',
            textUnderstanding2: 'Analysts typically study, in order, the overall state of the economy and then the strength of the specific industry before concentrating on individual company performance to arrive at a fair market value for the stock.',
            textUnderstanding3: 'Fundamental analysis uses public data to evaluate the value of a stock or any other type of security. For example, an investor can perform fundamental analysis on a bond\'s value by looking at economic factors such as interest rates and the overall state of the economy, then studying information about the bond issuer, such as potential changes in its credit rating.',
            textUnderstanding4: 'For stocks, fundamental analysis uses revenues, earnings, future growth, return on equity, profit margins, and other data to determine a company\'s underlying value and potential for future growth. All of this data is available in a company\'s financial statements (more on that below).',
            analysis: '// Investing and Fundamental Analysis',
            textAnalysis1: 'An analyst works to create a model for determining the estimated value of a company\'s share price based on publicly available data. This value is only an estimate, the analyst\'s educated opinion, of what the company\'s share price should be worth compared to the current market price. Some analysts may refer to their estimated price as the company\'s intrinsic value.',
            textAnalysis2: 'If an analyst calculates that the stock\'s value should be significantly higher than the stock\'s current market price, they may publish a buy or overweight rating for the stock. This acts as a recommendation to investors who follow that analyst. If the analyst calculates a lower intrinsic value than the current market price, the stock is considered overvalued and a sell or underweight recommendation is issued.',
            textAnalysis3: 'Investors who follow these recommendations will expect that they can buy stocks with favorable recommendations because such stocks should have a higher probability of rising over time. Likewise, stocks with unfavorable ratings are expected to have a higher probability of falling in price. Such stocks are candidates for being removed from existing portfolios or added as "short" positions.',
            textAnalysis4: 'This method of stock analysis is considered to be the opposite of technical analysis, which forecasts the direction of prices through an analysis of historical market data such as price and volume. Those interested in learning more about fundamental analysis and other financial topics may want to consider enrolling in one of the best investing courses currently available.',
        },
        riskManagement: {
            riskManagement: '// What Is Risk Management?',
            descHead1: 'TIn the financial world, risk management is the process of identification, analysis, and acceptance or mitigation of uncertainty in investment decisions. Essentially, risk management occurs when an investor or fund manager analyzes and attempts to quantify the potential for losses in an investment, such as a moral hazard, and then takes the appropriate action (or inaction) given the fund\'s investment objectives and risk tolerance.',
            descHead2: 'Risk is inseparable from return. Every investment involves some degree of risk, which is considered close to zero in the case of a U.S. T-bill or very high for something such as emerging-market equities or real estate in highly inflationary markets. Risk is quantifiable both in absolute and in relative terms. A solid understanding of risk in its different forms can help investors to better understand the opportunities, trade-offs, and costs involved with different investment approaches.',
            list1: 'Risk management is the process of identification, analysis, and acceptance or mitigation of uncertainty in investment decisions.',
            list2: 'Risk is inseparable from return in the investment world.',
            list3: 'A variety of tactics exist to ascertain risk; one of the most common is standard deviation, a statistical measure of dispersion around a central tendency.',
            list4: 'Beta, also known as market risk, is a measure of the volatility, or systemati risk of an individual stock in comparison to the entire market.',
            list5: 'Alpha is a measure of excess return; money managers who employ active strategies to beat the market are subject to alpha risk.',
            understanding: '// Understanding Risk Management',
            textUnderstanding1: 'Risk management occurs everywhere in the realm of finance. It occurs when an investor buys U.S. Treasury bonds over corporate bonds, when a fund manager hedges his currency exposure with currency derivatives, and when a bank performs a credit check on an individual before issuing a personal line of credit. Stockbrokers use financial instruments like options and futures, and money managers use strategies like portfolio diversification, asset allocation and position sizing to mitigate or effectively manage risk.',
            textUnderstanding2: 'Inadequate risk management can result in severe consequences for companies, individuals, and the economy. For example, the subprime mortgage meltdown in 2007 that helped trigger the Great Recession stemmed from bad risk-management decisions, such as lenders who extended mortgages to individuals with poor credit; investment firms who bought, packaged, and resold these mortgages; and funds that invested excessively in the repackaged, but still risky, mortgage-backed securities (MBS).',
            risk: '// How Risk Management Works',
            textRisk1: 'We tend to think of "risk" in predominantly negative terms. However, in the investment world, risk is necessary and inseparable from desirable performance.',
            textRisk2: 'A common definition of investment risk is a deviation from an expected outcome. We can express this deviation in absolute terms or relative to something else, like a market benchmark.',
            textRisk3: 'While that deviation may be positive or negative, investment professionals generally accept the idea that such deviation implies some degree of the intended outcome for your investments. Thus to achieve higher returns one expects to accept the greater risk. It is also a generally accepted idea that increased risk comes in the form of increased volatility. While investment professionals constantly seek—and occasionally find—ways to reduce such volatility, there is no clear agreement among them on how it\'s best done.',
            textRisk4: 'How much volatility an investor should accept depends entirely on the individual investor\'s tolerance for risk, or in the case of an investment professional, how much tolerance their investment objectives allow. One of the most commonly used absolute risk metrics is standard deviation, a statistical measure of dispersion around a central tendency. You look at the average return of an investment and then find its average standard deviation over the same time period. Normal distributions (the familiar bell-shaped curve) dictate that the expected return of the investment is likely to be one standard deviation from the average 67% of the time and two standard deviations from the average deviation 95% of the time. This helps investors evaluate risk numerically. If they believe that they can tolerate the risk, financially and emotionally, they invest.',
        },
        privacy: {
            descHead1: 'This Privacy Policy governs the manner in which %%COMPANY_NAME%% collects, uses, maintains and discloses information collected from users ("Users", "User") of the %%COMPANY_LINK%% website  ("Site"). This privacy policy applies to the Site and all products and services offered by the company.',
            personal: '// Personal identification information',
            textPersonal: 'We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit the Site, register on the Site or subscribe to the newsletter and in connection with other activities, services, features or resources we make available on the Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number, credit card information.',
            user: '// Users may, however, visit the Site anonymously',
            textUser: 'We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personal identification information, except that it may prevent them from engaging in certain Site related activities.',
            nonPeronal: '// Non-personal identification information',
            textNonPeronal: 'We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about User\'s means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.',
            web: '// Web browser cookies',
            textWeb: 'Our Site may use "cookies" to enhance User experience. User’s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.',
            use: '// How we use collected information',
            textUse: 'We collect and use User\'s personal information for the following purposes:\n' +
                '- To improve customer service. Your information helps us to more effectively respond to your customer service requests and support needs.\n' +
                '- To personalize user experience. We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.\n' +
                '- To improve our Site. We continually strive to improve our website offerings based on the information and feedback we receive from you.\n' +
                '- To process transactions. We may use the information Users provide about themselves when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.\n' +
                '- To administer a contest, promotion, survey or other Site feature.\n' +
                '- To send Users information they agreed to receive about topics we think will be of interest to them.\n' +
                '- To send periodic emails. The email address Users provide for order processing, will only be used to send them information and updates pertaining to their order. It may also be used to respond to their inquiries, and/or other requests or questions. If User decides to opt-in to our mailing list, they will receive emails that may include our news, updates, related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email or User may contact us via our Site.',
            protect: '// How we protect your information',
            textProtect: 'We adopt appropriate data collection, storage and processing practices and security measures to protect Users against unauthorized access, alteration, disclosure or destruction of their personal information, username, password, transaction information and data stored on our Site. Sensitive and private data exchange between the Site and its Users happens over a SSL-secured communication channel and is encrypted and protected with digital signatures.',
            compliance: '// Compliance with children’s online privacy protection',
            textCompliance: 'Protecting the privacy of the very young is especially important. For that reason, we never collect or maintain information at our Site from those we actually know are under 18, and no part of our website is structured to attract anyone under 18.',
            changes: '// Changes to this privacy policy',
            textChanges: 'We have the discretion to update this privacy policy at any time. When we do, revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this Privacy Policy periodically and become aware of any modifications.',
            acceptance: '// Your acceptance of these terms',
            textAcceptance: 'By using this Site, you signify your acceptance of this policy and terms of service. If you do not agree to this policy, please do not use the Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.',
            contacting: '// Contacting us',
            textContacting: 'If you have any questions about this Privacy Policy, the practices of this Site, or your dealings with this Site, please contact us at your convenience using the details in the Contacts section of the Site.',
        },
        disclaimer: {
            descHead: 'Trading assets such as cryptocurrencies with or without margin is high risk, can result in substantial risk of some or all of your investment and may not be suitable for all investors.',
            disclosure: '// Disclosure of Risk',
            textDisclosure: 'Trading and execution of transactions similar to those described and/or resulting from this Disclaimer, with or without the use of financial leverage or margin, is speculative trading of high risk. You must carefully and seriously consider if this type of financial activity suits your needs, your financial resources and personal circumstances. As the risk of losing some, or all, of the invested funds in a relatively short period of time is high, it is recommended that you use only funds which you have earmarked for speculative, high risk financial transactions. In particular, be aware of the following points:',
            currency: '// Currency Risk',
            textCurrency: 'The fluctuation of the rates in the cryptocurrency markets and currency markets are often sharp without the ability to forecast the size or direction of the change or the time frame in which it occurs.',
            event: '// Event Risk',
            textEvent: 'Prices can fluctuate rapidly as a result of unforeseen circumstances, events, or changes in conditions.',
            operational: '// Operational Risk',
            textOperational: 'While we will make every reasonable effort to ensure continuity of services, operational risk such as disruptions to communications, computers, networks or external events may lead to delays in the execution and settlement of a transaction. The use of electronic trading software results in exposure to risks involving computer software, internet, communication systems and interfaces connected to us. Risk includes, but is not limited to, hardware, software, lines and systems crashes and/or incorrect data feeding from external data providers. No trading system is free of occasional failures, and there is no system that can guarantee 100% profit or is not exposed to loss.',
            margin: '// Margin Risk',
            textMargin1: 'Leverage or margin in the trading of cryptocurrency is created based on collateral of a low sum relative to the total transaction. The results of trading with leverage or with margin are that a small change in market prices, within a short period of time, may cause substantial gain or loss, proportional to the size of the collateral, up to the total loss of the collateral sum in a very short period of time.',
            textMargin2: 'This warning does not cover all possible risks connected with the type of transactions described and/or resulting from this Disclaimer.',
        },
        kyc: {
            descHead1: '%%COMPANY_NAME%% is committed to comply with all relevant AML and funding of terrorism regulations and the following policy has been derived from the general principles, laws, regulations and directives for combating money laundering.',
            descHead2: 'We believe that compliance with AML and CFT regulations is essential for the integrity of financial systems and prevention of our company from being used, intentionally or unintentionally, by criminal elements.',
            descHead3: 'We have put in place Know-Your-Customer (KYC) programs as an essential element for service, risk management and control procedures. We are obliged not only to establish the identity of its clients, but also to monitor account activity to determine those transactions that do not conform with the normal or expected transactions for that client or type of account. The program also includes record keeping requirements, the reporting of suspicious activity and AML training.',
            money: '// What is Money Laundering?',
            textMoney1: 'Money laundering includes all forms of handling or possessing criminal property, including possessing the proceeds of one\'s own crime, and facilitating any handling or transfer of criminal property for another person; including the proceeds derived from any act of fraud, bribery or corruption. Where criminal property includes money or money\'s worth, securities, tangible and intangible property; including the receipt, handling and transfer of funds derived from criminality.',
            textMoney2: 'A simplified view of an effective money laundering operation involves three stages:',
            textMoney3: 'Placement of physical cash (e.g. in a bank account). A simplified view of an effective money laundering operation involves three stages:',
            textMoney4: 'Layering. By using funds from the bank account and undertaking multiple transactions which confuse the audit trail and separate the money from its origin',
            textMoney5: 'Integration of laundered proceeds into the legitimate economy, so that it appears to be legitimate by being presented as normal business funds.',
            textMoney6: 'For the purpose of this policy, money laundering also includes activities relating to terrorist financing, including handling or possessing funds to be used for terrorist purposes as well as proceeds from terrorism.',
            textMoney7: 'When dealing with customers, we are alert to the possibility that customers, their counterparties or others (with or without the customer’s knowing participation) may try to launder money using our services – by way of layering or integration.',
            kyc: '// Know-Your-Customer',
            textKyc1: 'We ask clients a number of questions during the application stage in order to understand clients and ensure that the applicant is not a victim of financial crime. Documentation is collected from clients in order to verify the information provided at the application stage. Such documents may be verified electronically during the application process.',
            textKyc2: 'Periodically, we also request clients to provide updates to the personal information which has been provided at the application stage to ensure that the data and information about its clients is up to date.',
            customer: '// Customer Acceptance',
            textCustomer1: 'We maintain clear customer acceptance policies and procedures, including a description of the types of client that are likely to pose a higher than average risk. Before accepting a potential client, KYC and due diligence procedures are followed, by examining factors such as customer\'s background, country of origin, public or high profile position, linked accounts, business activities or other risk indicators.',
            textCustomer2: 'Extensive due diligence is essential for an individual with high net worth but whose source of funds is unclear. New clients\' money is transferred through a reputable bank. Banks have their own anti-money-laundering procedures. A decision to enter into business relationships with higher risk customers, such as politically exposed persons, is taken exclusively at senior management level.',
            control: '// Controls',
            textControl: 'We have a number of internal controls including but not limited to the non-acceptance of cash and the non-acceptance of third party deposits and redemptions. We will not accept as customers, persons or entities from restricted or sanctioned countries, organizations. Reference points for such reviews include the websites of:\n' +
                '- Australian Department of Foreign Affairs and Trade,\n' +
                '- Nations Consolidated Lists,\n' +
                '- US Office of Foreign Assets Control,\n' +
                '- FATF.\n' +
                '\n' +
                'We do not accept US Citizens.\n' +
                '\n' +
                'We do not accept any anonymous accounts and do not maintain any relationships with shell banks.',
            identification: '// Customer Identification',
            textIdentification1: 'We obtain all information necessary to establish to our full satisfaction the identity of each new customer and the purpose and intended nature of the business relationship. The extent and nature of the information depends on the type of applicant (personal, corporate, etc.) and the expected size of the account.',
            textIdentification2: 'Customer identification is an essential element of KYC standards. For the purposes of this policy, a customer includes:\n' +
                '- The person or entity that maintains an account or those on whose behalf an account is maintained (i.e. beneficial owners);\n' +
                '- The beneficiaries of transactions conducted by professional intermediaries;\n' +
                '- Any person or entity connected with a financial transaction who can pose a significant reputational or other risk to our company.\n' +
                '\n',
            textIdentification3: 'Client identification must be carried out as soon as reasonably practicable after first contact is made. We maintain a systematic procedure for identifying new customers and cannot enter into a service relationship until the identity of a new customer is satisfactorily verified.',
            textIdentification4: 'We pay special attention in the case of non-resident customers and in no case are short-circuit identity procedures followed just because the new customer is unable to present enough documents and information to satisfy the KYC and due diligence procedures.',
            textIdentification5: 'As part of its obligation to exercise due diligence in customer identification, we must confirm that the identity information which it holds for its customers remains fully updated with all necessary identification and information throughout the business relationship. We regularly review and monitor on a regular basis the validity and adequacy of customer identification information in its possession.',
            textIdentification6: 'Where the customer refuses or fails to provide us with the required documents and information for identification, before entering into the business relationship, or during the execution of an individual transaction without adequate justification, we will not proceed in a contractual relationship or will not execute the transaction and may also report it to the AML/CFT Supervisor. This can lead to a suspicion that the customer is engaged in money laundering and terrorist financing.',
            required: '// Required Customer Information and Verifying Information',
            textRequired1: 'The following information will be collected for new clients:\n' +
                '- True full name and/or names used;\n' +
                '- Current permanent address, including postal code;\n' +
                '- Date of birth;\n' +
                '- Profession or occupation.',
            textRequired2: 'Names should be verified by reference obtained from a reputable source which bears a photograph, such as:\n' +
                '- Current valid full passport;\n' +
                '- Government issued photo identification card.',
            textRequired3: 'We shall not attempt to determine whether the document that the customer has provided for identification has been validly issued. For verification purposes, we shall rely on government-issued identification to establish a customer’s identity. We, however, will analyze the information provided to determine if there are any logical inconsistencies in the information obtained.',
            textRequired4: 'In addition to the customer’s name verification, the current permanent address will be verified by obtaining any one of the following documents in original form:\n' +
                '- Copy of a recent utility bill;\n' +
                '- Local tax authority bill;\n' +
                '- Bank statement;\n' +
                '- Credit card monthly statement.',
            textRequired5: 'The following information will be collected for Corporate Clients:\n' +
                '- The original or certified copy of the Certificate of incorporation;\n' +
                '- Constitution, Memorandum and articles of association;\n' +
                '- Resolution of the Board of Directors to enter into transactions on the Cryptocurrency market and conferring authority to those who will act for the customer;\n' +
                '- Directors and Shareholders registers;\n' +
                '- Identity of individuals who are connected with the Company;\n' +
                '- The Company\'s business profile in terms of nature and scale of activities;',
            textRequired6: 'Company searches, and other commercial enquiries to ensure that the applicant has not been or in the process of being dissolved, struck off, wound up or terminated. If changes to Company structure occur or ownership occurs subsequent to opening of an account with the Company, further checks will be made.',
            textRequired7: 'Identity verification for Corporate Clients aims to identify:\n' +
                '- The Company;\n' +
                '- The Directors;\n' +
                '- All persons duly authorized to operate the account;\n' +
                '- Ownership structure;\n' +
                '- In case of private companies, the major beneficial shareholders;\n' +
                '- Latest audited financial statements (if available).',
            textRequired8: 'We must verify the identity of beneficial owners of accounts. For legal persons, we require such data and information to understand the ownership and control structure of the customer. Regardless of the customer’s type (e.g. natural or legal person, partnership or sole trader), we take adequate data and information on the customer\'s business activities and the expected pattern and level of transactions.',
            textRequired9: 'The identity of all customers is verified on the basis of reliable data and information given or received from independent and reliable sources, i.e. those data and information that is difficult to be falsified or to be obtained in an illegal way.',
            performance: '// Performance by third parties',
            textPerformance: 'We may rely on third parties for applying the requirements in respect of customer\'s identification procedures and customer due diligence measures provided that all data and information is held by the third person for customer identification, and certified copies of the originals are provided to us.',
            on: '// On-Going Monitoring and Recording of Accounts and Transactions',
            textOn1: 'On-going monitoring is an essential aspect of effective KYC procedures. We can only effectively control and reduce the risk if we have an understanding of normal and reasonable account activity of our customers so that we have means of identifying transactions which fall outside the regular pattern of an account\'s activity. Without such knowledge, it is likely to fail in its duty to report suspicious transactions to the appropriate authorities in cases where they are required to do so. The extent of the monitoring needs to be risk-sensitive.',
            textOn2: 'For all accounts, we have systems in place to detect unusual or suspicious patterns of activity. This is done by establishing limits for a particular class or category of accounts. Particular attention is paid to transactions that exceed these limits.',
            textOn3: 'Certain types of transactions alert to the possibility that the customer is conducting unusual or suspicious activities. They may include transactions that do not appear to make economic or commercial sense (big transactions), or that involve large amounts of cash deposits that are not consistent with the normal and expected transactions of the customer.',
            textOn4: 'Intensified monitoring for higher risk accounts is conducted. We have set key indicators for such accounts, taking note of the background of the customer, such as the country of origin and source of funds, the type of transactions involved, and other risk factors.',
            reporting: '// Reporting Suspicious Activity',
            textReporting1: 'In line with the relevant regulations any suspicious activity of money laundering and funding of terrorism is reported to the relevant authorities, after investigation.',
            textReporting2: 'Examples of suspicious activity include but not limited to:\n' +
                '- Out-of-the-ordinary account activity. The customer wishes to engage in transactions that lack business sense or apparent investment strategy, or are inconsistent with the customer\'s stated business strategy.',
            textReporting3: '- Out of expected range of transaction volumes or financial thresholds.\n' +
                '- The information provided by the customer that identifies a legitimate source for funds is false, misleading, or substantially incorrect.\n' +
                '- Upon request, the customer refuses to identify or fails to indicate any legitimate source for his or her funds and other assets.\n' +
                '- The customer (or a person publicly associated with the customer) has a questionable background or is the subject of news reports indicating possible criminal, civil, or regulatory violations.\n' +
                '- The customer exhibits a lack of concern regarding risks, commissions, or other transaction costs.\n' +
                '- The customer has difficulty describing the nature of his or her business or lacks general knowledge of his or her industry.',
            record: '// Record Keeping',
            textRecord1: 'Information provided by our customers is retained for a period of five years and protected using the latest technology. The 5 year period is calculated following the carrying out of the transactions or the end of the business relationship.',
            textRecord2: 'More specifically, we obtain customer identification papers and retain copies of them for at least five years after an account is closed. We also retain all financial transaction records for at least five years from the date when our relationship with the client was terminated or a transaction was completed.',
            textRecord3: 'Customer information received by us is treated confidentially in accordance with applicable law.',
            textRecord4: 'The following records are kept:\n' +
                '- Copies of the evidential material of the customer identity;\n' +
                '- Relevant evidential material and details of all business relations and transactions, including documents for recording transactions in the accounting books;\n' +
                '- Relevant documents of correspondence with the customers and other persons with whom they keep a business relation.',
            textRecord5: 'All documents and information are available rapidly and without delay to the authorities for the purpose of discharging the duties imposed on them by the law.',
            textRecord6: 'Documents and information must be original or certified true copies.',
            trading: '// Training of employees',
            textTrading1: 'We conduct extensive due diligence on our employees before recruitment. In addition, our employees are provided with regular training so that the employees are adequately trained in KYC procedures and in order for employees to be aware of possible patterns and techniques in money laundering and to detect possible suspicious activity.',
            textTrading2: 'The timing and content of training for various employee categories is adapted by our company for our own needs. Training requirements have a different focus for new employees, front-line employees, compliance employees or employees dealing with new customers.',
            textTrading3: 'New employees are educated in the importance of KYC policies and the basic requirements. Employees who deal directly with the customers are trained to verify the identity of new customers, to exercise due diligence in handling accounts of existing customers on an on-going basis and to detect patterns of suspicious activity.',
            textTrading4: 'Regular refresher training is provided to ensure that employees are reminded of their responsibilities and are kept informed of new developments.',
            regular: '// Regular Audits and Reviews',
            textRegular1: 'Regular Audits are carried out by reputable audit firms in order to ensure that the policies and procedures are being complied with. Our policies and procedures are regularly reviewed to ascertain that these reflect the current regulations and external environment.',
            textRegular2: 'Should you have any questions or queries regarding the contents of this policy please do not hesitate to contact us at your convenience using the details in the Contacts section of this site.',
            additional: '// Additional Information Notice',
            textAdditional1: 'Regulations require that we keep all customer information up-to-date by continuously monitoring our business relationships. That is why we might need to ask our customers to provide us with additional documents and information if required.',
            textAdditional2: 'If at any later stage, changes occur in the structure of the ownership status or to any details, the client should inform us and provide any new/updated information and documents.',
            textAdditional3: 'If in the country of the potential/existing client any of the required document does not exist in the form required by us, the compliance officer may accept a similar document serving the needs of due diligence.',
        },
        about: {
            descHead1: '%%COMPANY_NAME%% is one of the largest CFD Trading brands around, and at %%COMPANY_NAME%% we work hard to make sure our clients make the best trading and investment decisions.',
            descHead2: 'When you choose %%COMPANY__NAME%% you’re trading with a global broker. We work day and night to create and sustain a trading environment that helps everyone access the markets – from first-timers to those who’ve turned trading into a career. With our Platform, you can trade and invest the way you want to, by choosing from hundreds of the most liquid assets.',
            descHead3: 'We provide a trading environment that is trustworthy, reliable and technologically advanced, while ensuring every client receives impeccable customer service. Our clients are our number one priority, which is why we have experts available to answer all your questions by phone, email and live chat.',
        },
        faq: {
            faq: 'FAQ',
            title1: 'What does leverage mean?',
            desc1: 'Leverage is the ratio of a margin amount to the borrowed amount: 1:100, 1:200, 1:1000. 1:100 leverage means that, to open a trade, you should have 100 times less amount than the amount of a trade. In %%COMPANY_NAME%% you may choose the leverage from 1:1 to 1:1000.',
            title2: 'Is it possible that a trader owes money to the company?',
            desc2: 'No, it is impossible. If a trader loses more than he has in a trading account, the company must cover the loss to 0.',
            title3: 'What is the minimum deposit amount?',
            desc3: 'The minimum deposit amount is $250, and it allows you to open a trade on any instrument',
            title4: 'Is there any difference between demo and live trading?',
            desc4: 'There are no differences in trading conditions and trading instruments. Trading on demo account is identical to live trading, except unavailability of deposit and withdrawal options for demo accounts',
            title5: 'How to calculate the amount of margin for a trade?',
            desc5: 'The amount of margin is equal to the trade volume divided by the leverage. The trade volume is equal to 10000 US Dollars multiplied by the amount of lots and by the exchange rate of a base currency in a pair to the USD. The base currency is the first in a currency pair. For example, in the EUR/USD currency pair the base currency is EUR (thereafter, the exchange rate of a trade to the USDollar is EURUSD), in USDCAD – is USD (the exchange rate of a trade to the US Dollar is equal to 1, because USD/USD = 1), in GBPJPY – the base currency is GBP (the exchange rate of a trade to the US Dollar is equal to the GBP/USD exchange rate or to the exchange rate of GBPUSD). So when the GBPUSD exchange rate equals 1.4956 in a 2 lot trade with the 1:100 leverage, the margin will be 10000 * 2 * GBPUSD/100 = 299.12 USD. In a 3.4 lots trade on USDJPY with the 1:1000 leverage, the margin is equal to 10000 * 3.5 * 1/1000 = 35 USD.',
            title6: 'How much will I earn if I start trading on forex with minimum deposit?',
            desc6: 'It totally depends on your experience, knowledge and skills. Forex/Crypto trading is very risky, and you should assume that risk and evaluate your level of professionalism. %%COMPANY_NAME%% trading conditions make your way from a newbie to an experience trader simpler.',
            title7: 'What hours is crypto traded?',
            desc7: 'Cryptocurrencies are traded 24/7.',
            title8: 'I forgot my password (or i want to change my trader password ). What should I do?',
            desc8: 'You can change the password by applying to the Customer Support Service with the following information: email address, Account number. Once they verify your identity they will provide you a unique link – where you will be able to change your password. (Latin letters, from 6 to 12 symbols). Your account password will be recovered or changed at your discretion.',
            title9: 'Does the company charge any fees for depositing money to your Account?',
            desc9: '%%COMPANY_NAME%% does not charge any fees for depositing money to your trading account. However, your transaction amount will be charged with a commission by a payment system or a bank which credits or debits your account.',
            title10: 'What is the minimum withdrawal amount?',
            desc10: 'There are no limits to withdrawal. You can always request the withdrawal of any remaining amount on your trading account. The exception includes bank wire (minimum amount for withdrawal is 300$). For wallets, electronic payment systems and bank cards – minimum amount for withdrawal is 1 USD, including commission. Also, please pay attention to the commission which a bank can charge for an operation: up to 30 US dollars.',
            title11: 'What is an account verification? Am I entitled to trade on an unverified account?',
            desc11: 'Verification means identification of a client. It protects your trading account at recovering your password or other confidential data. Account verification procedure does not affect operating with your funds. You are welcome to verify your account at any time.',
            title12: 'How long does it take to verify an account?',
            desc12: 'Account verification can take up to 72 working hours.',
            title13: 'What documents are required for account verification?',
            desc13: 'Any identifying documents are accepted. A passport (ID) or a driving license are preferred though plus utility bill from the past two months.',
            title14: 'I received an email informing me that my document was not accepted for verification, what should I do?',
            desc14: 'The document is not accepted for verification in the following cases: the scanned document copy is of low quality. You sent the document that is unsuitable for verification (no photo or your full name). The document you sent was already used for the first level of verification or there is no expiration date on the ID.',
        },
        contacts: {
            title: 'Contacts Us',
            desc: 'Customer satisfaction is our top priority! Our support service is available 24/7 to assist you with any questions you may have about our Platform: deposits and withdrawals, trading operations, accounts and settings, etc.\n' +
                'You can contact us any way you prefer:',
            label1: 'Name',
            label2: 'E-mail',
            label3: 'Enter description',
            agree: 'I agree to the processing of the personal data provided',
        },
        modal: {
            title1: 'Check that the data you entered is correct!',
            title2: 'There was an error form was not sent, check your Internet connection!',
            title3: 'The form is being sent, please wait',
            title4: 'Form sent successfully!',
        },
        footer: {
            copy: 'Contracts for Difference (CFDs) are complex financial products that are traded on margin. Trading CFDs carries a high degree of risk. It is possible to lose all your capital. These products may not be suitable for everyone and you should ensure that you understand the risks involved. Seek independent expert advice if necessary and speculate only with funds that you can afford to lose. The content of this page is for information purposes only and it is not intended as a recommendation or advice. The customer carries the sole responsibility for all the businesses or investments that are carried out. We do not offer our services to residents of certain jurisdictions such as Afghanistan, Hong Kong, Japan, the United States of America and some other regions.',
            copyText: 'Copyright',
        },
        key: {
            text: "KEY TAKEAWAYS"
        },
        btn: {
            text1: 'Registration',
        }
    }
}

let changeTextInfo = () => {
    let companyText = document.querySelectorAll("[data-textInfo]")
    if (companyText.length !== 0) {
        let reLink = /%%(\w+_LINK)%%/g
        let reName = /%%(\w+_NAME)%%/g
        companyText.forEach(el => {
            el.innerText = el.innerText.replace(reLink, COMPANY_LINK)
            el.innerText = el.innerText.replace(reName, COMPANY)
        })
    }
}

let langsRender = (langs) => {
    if (langs.length !== 0 && MULTI_LANG) {
        Object.keys(langs).forEach(key => {
            $('#langs').append(`
               <li class="menu__submenu langs__item" data-lang>
                   ${langs[key]._name.toUpperCase()}
               </li>
        `);
        });
    }
    languages = document.querySelectorAll('[data-lang]')
}

let makeActiveLang = lang => {
    activeLang = lang
    if (lang.innerText !== undefined) {
        activeLang = lang.innerText.toLowerCase()
    }

    let landFields = createActiveLangArray(langs[activeLang])

    for (let i = 0; i < landFields.length; i++) {
        Object.keys(langs[activeLang][landFields[i]]).forEach(el => {
            document.querySelectorAll(`[data-${landFields[i]}-${el}`).forEach(lang => {
                lang.innerText = langs[activeLang][`${landFields[i]}`][el]
            })
        })
    }

    getLangText()

    localStorage.setItem('languages', activeLang)
    changeTextInfo()
}

let createActiveLangArray = activeLang => {
    let arrayLang = []
    let i = 0

    Object.keys(activeLang).forEach(key => {
        if (key !== "_name") {
            arrayLang[i] = key
            ++i
        }
    })

    return arrayLang
}


let activeLang
let languages

localStorage.getItem('languages') === null ? activeLang = 'fr' : activeLang = localStorage.getItem('languages')
let getLangText = () => {
    if (MULTI_LANG){
        document.getElementById('active-lang').innerText = activeLang.toUpperCase()
    }
}

getLangText()

langsRender(langs)

languages.forEach(el => {
    el.addEventListener("click", () => {
        makeActiveLang(el)
        removeActive()
        el.classList.add('active')
    })
})

if (!MULTI_LANG){
    document.getElementById('language').remove()
}

let removeActive = () => {
    languages.forEach(el => {
        el.classList.remove('active')
    })
}

makeActiveLang(activeLang);
let test
(function preLoader() {
    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
            document.getElementById("wrapper").classList.add("loaded");
        }, 500);
    });
})();

// CONFIG

// SCRIPTS
let appendDataText = (company, text) => {
    company.forEach(el => {
        el.append(text)
    })
}

let appendDataLink = (company, link) => {
    company.forEach(el => {
        el.href = link
    })
}

// accounts
const accounts = document.querySelectorAll("[data-account-price]")
const sign = document.querySelectorAll("[data-sign]")
if (accounts.length !== 0) {
    sign.forEach(el => {
        el.append(ACCOUNT_SIGN)
    })

    accounts.forEach(el => {
        let index = $(el).data("account-price")
        let minPrice = el.querySelector("[data-min-price]")
        let maxPrice = el.querySelector("[data-max-price]")

        $(minPrice).append(COMPANY_PRICE[index][0])
        $(maxPrice).append(COMPANY_PRICE[index][1])
    })
}

// companyName
const companyName = document.querySelectorAll("[data-company-name]")
if (companyName) {
    appendDataText(companyName, COMPANY)
}
// companyLink
const companyLink = document.querySelectorAll("[data-company-link]")
if (companyLink) {
    appendDataText(companyLink, COMPANY_LINK)
}
// companyLogin
const companyLogin = document.querySelectorAll("[data-company-login]")
if (companyLogin) {
    appendDataLink(companyLogin, COMPANY_LOGIN)
}
// companyRegister
const companyRegister = document.querySelectorAll("[data-company-register]")
if (companyRegister) {
    appendDataLink(companyRegister, COMPANY_REGISTER)
}

changeTextInfo()

let pathname = document.location.pathname.replace(/[\.\/]/g, '').replace("html", '');

function get_name_browser() {
    let ua = navigator.userAgent;
    if (ua.search(/Chrome/) > 0) return 'Google Chrome';
    if (ua.search(/Firefox/) > 0) return 'Firefox';
    if (ua.search(/Opera/) > 0) return 'Opera';
    if (ua.search(/Safari/) > 0) return 'Safari';
    if (ua.search(/MSIE/) > 0) return 'Internet Explorer';

    return 'Не определен';
}

let browser = get_name_browser();

if (browser === 'Firefox') {
    document.body.classList.add('moz')
}

let last_known_scroll_position = 0;
let scrollToTopBtn = document.getElementById("scrollToTopBtn");
let rootElement = document.documentElement;
const header = document.querySelector('.header');

header.classList.add('_active');

if (pathname.toLowerCase() === 'accounttypes'){
    header.classList.add('_active');
}

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.addEventListener('scroll', function (e) {
    last_known_scroll_position = window.scrollY;

    if (last_known_scroll_position > 300) {
        window.requestAnimationFrame(function () {
            scrollToTopBtn.style.opacity = 1;
            scrollToTopBtn.style.zIndex = 999;
            scrollToTopBtn.addEventListener("click", scrollToTop);
        });
    } else {
        scrollToTopBtn.style.opacity = 0;
        scrollToTopBtn.style.zIndex = -1;

    }
});

document.addEventListener("DOMContentLoaded", function () {
    const yrSpan = document.querySelector('.footer__date');
    const currentYr = new Date().getFullYear();
    yrSpan.textContent = currentYr;
});


"use strict"


const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const multiMenu = document.querySelectorAll("ul[data-menu]")

if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        if(!header.classList.contains('_active')){
            header.classList.toggle('_active');
        }
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

// Прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuClick);
    });

    function onMenuClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}


const isMobile = () => {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
}


const clickMenu = (el) => {
    el.addEventListener("click", () => {
        el.classList.toggle("active")
    })
}

const mouseMenu = (el) => {
    el.addEventListener("mouseover", (e) => {
        e.preventDefault()
        el.classList.add("active")
    })
    el.addEventListener("mouseleave", (e) => {
        e.preventDefault()
        el.classList.remove("active")
    })
}

multiMenu.forEach(el => {
    (isMobile() ? clickMenu(el) : mouseMenu(el))
})



let faq = document.querySelectorAll('[data-faq]')
let contacts = document.querySelectorAll('[data-contacts]')

if (pathname === "" || pathname === "/") {
    const home = document.getElementById('home')
    home.classList.toggle("active-page")
    home.addEventListener('click', scrollToTop)
    faq.forEach(el => {
        el.href = "#faq"
    })
    contacts.forEach(el => {
        el.href = "#contacts"
    })
} else {
    faq.forEach(el => {
        el.href = "index.html#faq"
    })
    contacts.forEach(el => {
        el.href = "index.html#contacts"
    })
}

const pages = [
    ["aboutpage", "AboutUs"],
    ["home", "index"],
    ["assets", "Forex", "Stocks", "Crypto", "Metals", "Indices", "Commodities", "NFT"],
    ["trading", "OurPlatform", "AccountTypes",],
    ["education", "Trading", "CFDTrading", "TechnicalAnalysis", "FundamentalAnalysis", "RiskManagement"],
    ["legal", "Disclaimer", "Privacy", "KYC"]
]

for (let i = 0; i < pages.length; i++) {
    for (let j = 0; j < pages[i].length; j++) {
        if (pathname === pages[i][j]) {
            document.getElementById(pages[i][0]).classList.toggle("active-page")
            for (let k = 0; k < pages[i].length; k++) {
                if (pathname.toLowerCase() === pages[i][k].toLowerCase() && pages[i].length > 2) {
                    pathname.toLowerCase() === 'trading'
                        ? document.getElementById(pages[i][k].toLowerCase() + 's').classList.toggle("active")
                        : document.getElementById(pages[i][k].toLowerCase()).classList.toggle("active")
                }
            }
        }
    }
}

if (pathname === '') {
    const home = document.getElementById('home')
    home.classList.toggle("active-page")
    home.addEventListener('click', scrollToTop)
    document.getElementById("faqScroll").href = "#faq"
    document.getElementById("contactsScroll").href = "#contacts"
} else {
    document.getElementById("faqScroll").href = "index.html#faq"
    document.getElementById("contactsScroll").href = "index.html#contacts"
}

if (pathname.toLowerCase() === 'accounttypes') {
(function () {
    $("#header").addClass("_active")

    const colors = ["#00CA7E", "#DCF15C", "#C469DE","#D5C52A","#28C9CE","#FE8A61"]
    const links = document.querySelectorAll("[data-account]")

    links.forEach(el => {
        el.addEventListener("mouseover", () => {

            el.style.backgroundColor = colors[el.getAttribute("data-account")]
        })
        el.addEventListener("mouseleave", () => {
            el.style.backgroundColor = "#fff"
        })
    })
})()
}





const assets = ["Forex", "Stocks", "Crypto", "Metals", "Indices", "Commodities", "NFT"]

if (pathname === '' || pathname === 'index') {
$(function() {
    $('.accordion__title').on('click', function() {
        if($('.block').hasClass('one')){
            $('.accordion__title').not($(this)).removeClass('active');
            $('.accordion__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});
let widgetTabs = document.querySelectorAll('li[data-widget-tab]')
let defaultWidgetTab = 'Popular'
let currentWidgetTab = 'Popular'
let symbols = {}

let popular = ['GBPUSD', 'GBPJPY', 'USDJPY', 'XAUUSD', 'BTCUSD', 'ETHUSD']


let checkTabTitle = (tab) => {

    switch (tab) {
        case 'Popular':
            return 'Most Popular'
    }
}

widgetTabs.forEach(el => {
    el.addEventListener("click", () => {
        removeActive()
        el.classList.add('active')

        renderCurTabContent(el.dataset.widgetTab)
    })
})

let removeActive = () => {
    widgetTabs.forEach(el => {
        el.classList.remove('active')
    })
}

let renderCurTabContent = (tab) => {
    currentWidgetTab = tab
    $('#widget-list').empty()
    $('#widget-content').empty()
    renderCurTabWidgetTitle(tab)
    $('#widget-content').append(`
        <ul id="widget-list">
            
        </ul>   
    `)
    renderCurTabItem(tab)
}

let renderCurTabItem = () => {
    uppdateDate()
    $('#widget-list').empty()
    if (symbols.length !== 0) {
        Object.keys(symbols).forEach(key => {
            $('#widget-list').append(`
            <li>
               <span class="symbol">${symbols[key]?.symbol}</span>
               <span class="bid">$${symbols[key]?.quote?.bid}</span>
               <span class="changePct" id="${symbols[key]?.quote?.changePct >= 0 ? "green" : "red"}">${symbols[key]?.quote?.changePct > 0 ? `+${symbols[key]?.quote?.changePct}` : symbols[key]?.quote?.changePct}%</span>
               <a class="trade" href="${COMPANY_REGISTER}">Trade</a>
            </li>
`);
        });
    }

}

let uppdateDate = () => {
        fetch(SYMBOLS)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                symbols = data.data
                Object.filter = (obj, predicate) =>
                    Object.keys(obj)
                        .filter(key => predicate(obj[key]))
                        .reduce((res, key) => Object.assign(res, {[key]: obj[key]}), {});

                if (currentWidgetTab !== 'Popular'){
                    symbols = Object.filter(symbols, symbol => symbol.quote?.changePct && symbol.market === `${currentWidgetTab.toLowerCase()}`);
                }else{
                    let filteredSymbols = []
                    for (const symbol in symbols) {
                        if (popular.indexOf(symbol) >= 0){
                            filteredSymbols.push(symbols[symbol])
                        }
                    }

                    symbols = filteredSymbols
                }
            });
}

let renderCurTabWidgetTitle = (tab) => {
    checkTabTitle(tab)
    $('#widget-content').append(`
          <h3 class="widget-title">${checkTabTitle(tab) ? checkTabTitle(tab) : currentWidgetTab }</h3>
    `)
}

setInterval(renderCurTabItem, 1000);

renderCurTabContent(defaultWidgetTab)


"use strict"

const popupError = document.querySelector('.popup__error');
const popupErrorFile = document.querySelector('.popup__error-file');
const popupErrorSend = document.querySelector('.popup__error-send');
const popupSending = document.querySelector('.popup__sending');
const popupSuccessSend = document.querySelector('.popup__success-send');
const popupWorning = document.querySelector('.popup__worning');
let formReq = document.querySelectorAll('._req');
var input = document.body.children[0];


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {

        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if (error === 0) {

            popupSending.classList.add('open');
            body.classList.add('_lock');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                formPreview.innerHTML = '';
                form.reset();
                popupSending.classList.remove('open');
                popupSuccessSend.classList.add('open');
                body.classList.add('_lock');
            } else {
                popupErrorSend.classList.add('open');
                body.classList.add('_lock');
                popupSending.classList.remove('open');
            }
        } else {

            popupError.classList.add('open');
            body.classList.add('_lock');
        }
    }

    inputUppdate();

    function formValidate(form) {
        let error = 0;


        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];

            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {

                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }

        }
        return error;
    }

    function checkInput() {
        var textCheck = document.getElementById("inputText").value;
        if (isNaN(textCheck)) {
            document.write("contains letters");
        } else {
            document.write("only numbers");
        }
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    function inputUppdate() {
        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            input.oninput = function () {
                if (input.value > 1 || input.classList.contains('_error')) {
                    input.classList.remove('_error');
                }
            };
        }
    }

});

//API
// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('form');
//     form.addEventListener('submit', formSend);
//     async function formSend(e) {
//         e.preventDefault();
//         let error = formValidate(form);
//         if (error === 0) {
//             let myData = {
//                 firstname: formReq[0].value,
//                 lastname: formReq[1].value,
//                 phone: formReq[3].value,
//                 email: formReq[2].value,
//             }
//             popupSending.classList.add('open');
//             body.classList.add('_lock');
//             fetch('https://api.platform.naxtrader.com/user', {
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json'
//                 },
//                 method: 'POST',
//                 body: JSON.stringify(myData)
//             })
//                 .then(response => {
//                     return response.json();
//                 })
//                 .then(data => {
//                     window.location.replace(data.data.autologin_url)
//                 });
//         } else {
//             popupError.classList.add('open');
//             body.classList.add('_lock');
//         }
//     }
//     inputUppdate();
//
//     function formValidate(form) {
//         let error = 0;
//
//         for (let index = 0; index < formReq.length; index++) {
//             const input = formReq[index];
//
//             formRemoveError(input);
//
//             if (input.classList.contains("_phone")) {
//                 if (phoneTest(input)) {
//                     formAddError(input);
//                     error++;
//                 }
//             } else if (input.classList.contains('_email')) {
//                 if (emailTest(input)) {
//
//                     formAddError(input);
//                     error++;
//                 }
//             } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
//                 formAddError(input);
//                 error++;
//             } else {
//                 if (input.value === '') {
//                     formAddError(input);
//                     error++;
//                 }
//             }
//
//         }
//         return error;
//     }
//
//     function checkInput() {
//         var textCheck = document.getElementById("inputText").value;
//         if (isNaN(textCheck)) {
//             document.write("contains letters");
//         } else {
//             document.write("only numbers");
//         }
//     }
//
//     function formAddError(input) {
//         input.parentElement.classList.add('_error');
//         input.classList.add('_error');
//     }
//
//     function formRemoveError(input) {
//         input.parentElement.classList.remove('_error');
//         input.classList.remove('_error');
//     }
//
//     function emailTest(input) {
//         return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
//     }
//
//     function phoneTest(input) {
//         return (input.value = value.replace("/[^1-9]/g", " "));
//     }
//
//     function inputUppdate() {
//         for (let index = 0; index < formReq.length; index++) {
//             const input = formReq[index];
//             input.oninput = function () {
//                 if (input.value > 1 || input.classList.contains('_error')) {
//                     input.classList.remove('_error');
//                 }
//             };
//         }
//     }
//
// });
const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout =  800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll(".close-popup");
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else{
            bodyLock();
        }
        currentPopup.classList.add('open');
        currentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('_lock');

    unlock = false;
    setTimeout (function() {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function(){
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('_lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});

(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node =  this;
            while (node) {
                if (node.matches(css)) return node;
                    else node = node.parentElement;
                }
                return null;
            };
        }
})();
(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector;
    }
})();
gsap.timeline({
    scrollTrigger: {
        trigger: ".features-phone-laying",
        start: "top+=50% bottom",
        end: "bottom-=50% bottom",
        toggleActions: "play none reset",
    }
})

    .from(".features-phone-laying__image", {
        y: -600,
        opacity: 0,
        duration: 2
    })
    .from(".features-phone-laying__title", {
        opacity: 0,
        y: -20,
        duration: 1
    }, "-=1.7")
    .from(".features-phone-laying__desc", {
        opacity: 0,
        y: -20,
        duration: 1
    }, "-=1.5")
    .from(".features-phone-laying__item", {
        opacity: 0,
        y: -20,
        duration: 1,
        stagger: .3
    }, "-=1.3")
}
for (let i = 0; i < assets.length; i++) {
    if (pathname === assets[i]) {
    let symbols = {}
let time = 1000
let dataExist = true
let loadTable = false

let lot = {
    'stocks': "1,000",
    'forex': "100,000",
    'commodities':"100,000",
    'indices':"1,000",
    'crypto': "1",
    'metals': "100,000",
    'nft': "1",
}

let load = () => {
    $('#table-content').append(`
     <div class="table__content-item" id="${pathname.toLowerCase()}-item">
        <p class="table__content-item-text">Load...</p>
        <p class="table__content-item-text">Load...</p>
        <p class="table__content-item-text">Load...</p>
        <p class="table__content-item-text">Load...</p>
        <p class="table__content-item-text">Load....</p>
    </div>`);
}

let uppdateDate = () => {
    if (dataExist) {
        fetch(SYMBOLS)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                symbols = data.data
                Object.filter = (obj, predicate) =>
                    Object.keys(obj)
                        .filter(key => predicate(obj[key]))
                        .reduce((res, key) => Object.assign(res, {[key]: obj[key]}), {});

                symbols = Object.filter(symbols, symbol => symbol.market === `${pathname.toLowerCase()}`);
                Object.keys(symbols).length === 0 ? dataExist = false : dataExist = true
            });
    }
}

let update = () => {
    uppdateDate()

    let id = `#${pathname.toLowerCase()}-item`
    if (Object.keys(symbols).length !== 0) {
        remmoveContent(id, symbols)
    }

    updateRender()
}

let updateRender = () => {
    if (symbols.length !== 0) {
        Object.keys(symbols).forEach(key => {
            $('#table-content').append(`
             <div class="table__content-item" id="${pathname.toLowerCase()}-item">
                <p class="table__content-item-text"><img src="https://cfd.${COMPANY_LINK}/image/${symbols[key].symbol.toUpperCase()}.png" /> ${symbols[key].alias}</p>
                <p class="table__content-item-text">${symbols[key].symbol}</p>
                <p class="table__content-item-text">${lot[pathname.toLowerCase()]}</p>
                <p class="table__content-item-text">$${symbols[key].quote !== undefined ? symbols[key].quote.bid : ''}</p>
                <p class="table__content-item-text" id="${symbols[key].quote?.changePct >= 0 ? "green" : "red"}">${symbols[key].quote !== undefined && symbols[key].quote.changePct > 0 ? `+${symbols[key].quote?.changePct}` : symbols[key].quote?.changePct}%</p>
            </div>`);
        });
    }

}

let remmoveContent = (id, symbols) => {
    Object.keys(symbols).forEach(() => {
        $(id).remove();
    });
}

let notConnected = () => {
    $("#table").remove();
}

load()
setInterval(update, time)





    break
    }
}
