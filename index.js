var express = require("express");
var cors = require("cors");
var app = express();
var port = 8000;
const listeningStartedCallback = () => {
  console.log(`A szervert elindult, port: ${port}`);
};

app.use(cors());

app.listen(port, listeningStartedCallback);

var etelek = [
  // Első
  {
    id: "11",
    name: "Spanyol omlett",
    kitchenType: "Spanyol",
    dishType: "Reggeli",
    ingredients: {
      first: "4 tojás",
      second: "2 közepes burgonya",
      third: "1 közepes hagyma",
      fourth: "Só, bors",
      fifth: "olívaolaj",
    },
    preparation:
      "Hámozzuk meg és szeleteljük fel a burgonyát vékony karikákra. Szeleteljük fel a hagymát. Melegítsünk olívaolajat egy serpenyőben, és süssük meg a burgonyát és hagymát, amíg meg nem puhulnak. Közben verjük fel a tojásokat egy tálban, sózzuk és borsozzuk. Adjuk hozzá a megsült burgonyát és hagymát a tojásokhoz, keverjük össze. Öntsük vissza a serpenyőbe, és süssük alacsony lángon, amíg az omlett megszilárdul és aranybarna lesz.",
  },
  {
    id: "12",
    name: "Bruschetta",
    kitchenType: "Olasz",
    dishType: "Előétel",
    ingredients: {
      first: "1 baguette",
      second: "4 paradicsom",
      third: "2 gerezd fokhagyma",
      fourth: "2 evőkanál olívaolaj",
      fifth: "Só és bors",
      sixth: "Friss bazsalikom",
    },
    preparation:
      "Szeleteljük fel a baguettet, és pirítsuk meg a szeleteket. A paradicsomokat kockázzuk fel, és keverjük össze az apróra vágott fokhagymával, olívaolajjal, sóval és borssal. Kenjük a paradicsomos keveréket a pirított kenyérre, és díszítsük friss bazsalikommal.",
  },
  {
    id: "13",
    name: "Fokhagymás rákok",
    kitchenType: "Mediterrán",
    dishType: "Főétel",
    ingredients: {
      first: "500 g rák",
      second: "4 gerezd fokhagyma",
      third: "2 evőkanál olívaolaj",
      fourth: "1 citrom",
      fifth: "Só és bors",
      sixth: "Friss petrezselyem",
    },
    preparation:
      "Pároljuk meg a apróra vágott fokhagymát olívaolajban. Adjuk hozzá a rákokat, sózzuk, borsozzuk, és főzzük 5-7 percig. Locsoljuk meg citromlével, és szórjuk meg friss petrezselyemmel. Tálaljuk azonnal.",
  },
  {
    id: "14",
    name: "Tiramisu",
    kitchenType: "Olasz",
    dishType: "Desszert",
    ingredients: {
      first: "250 g mascarpone sajt",
      second: "3 tojás",
      third: "100 g cukor",
      fourth: "200 ml kávé",
      fifth: "200 g babapiskóta",
      sixth: "Kakaópor a tetejére",
    },
    preparation:
      "Verjük fel a tojásokat a cukorral, majd keverjük hozzá a mascarpone sajtot. A kávét hűtsük le, és mártsuk bele a babapiskótákat. Rétegezzük a kávés piskótákat és mascarpone krémet egy tálba. Szórjuk meg kakaóporral, és hűtsük le 2-3 órán keresztül.",
  },
  {
    id: "15",
    name: "Párolt zöldségek",
    kitchenType: "Nemzetközi",
    dishType: "Vacsora",
    ingredients: {
      first: "1 brokkoli",
      second: "1 sárgarépa",
      third: "1 cukkini",
      fourth: "2 evőkanál olívaolaj",
      fifth: "Só és bors",
    },
    preparation:
      "Vágjuk fel a zöldségeket egyenlő darabokra. Pároljuk őket egy gőzölőben vagy serpenyőben 10-15 percig, amíg megpuhulnak. Locsoljuk meg olívaolajjal, sózzuk és borsozzuk ízlés szerint.",
  },
  //Második
  {
    id: "21",
    name: "Avokádós pirítós",
    kitchenType: "Amerikai",
    dishType: "Reggeli",
    ingredients: {
      first: "2 szelet teljes kiőrlésű kenyér",
      second: "1 érett avokádó",
      third: "1 citrom leve",
      fourth: "Só és bors",
      fifth: "Friss koriander",
    },
    preparation:
      "Pirítsuk meg a kenyérszeleteket. Az avokádót hámozzuk meg és pürésítsük egy tálban citromlével, sóval és borssal. Kenjük az avokádó pürét a pirítósokra, és szórjuk meg friss korianderrel.",
  },
  {
    id: "22",
    name: "Hummusz",
    kitchenType: "Közel-Keleti",
    dishType: "Előétel",
    ingredients: {
      first: "400 g csicseriborsó",
      second: "2 evőkanál tahini",
      third: "2 evőkanál citromlé",
      fourth: "2 gerezd fokhagyma",
      fifth: "2 evőkanál olívaolaj",
      sixth: "Só és bors",
    },
    preparation:
      "Törjük össze a csicseriborsót egy turmixgépben. Adjuk hozzá a tahinit, citromlevet, fokhagymát, olívaolajat, sót és borsot. Turmixoljuk simára, és tálaljuk pita kenyérrel vagy zöldségekkel.",
  },
  {
    id: "23",
    name: "Bolognai spagetti",
    kitchenType: "Olasz",
    dishType: "Főétel",
    ingredients: {
      first: "500 g darált marhahús",
      second: "1 hagyma",
      third: "2 gerezd fokhagyma",
      fourth: "1 sárgarépa",
      fifth: "400 g paradicsom konzerv",
      sixth: "2 evőkanál olívaolaj",
      seventh: "Só és bors",
      eighth: "1 teáskanál bazsalikom",
    },
    preparation:
      "Pároljuk meg az apróra vágott hagymát és fokhagymát olívaolajban. Adjuk hozzá a darált marhahúst, és pirítsuk meg. Keverjük hozzá a felkockázott sárgarépát és a paradicsomot. Főzzük alacsony lángon 30-40 percig, amíg a szósz besűrűsödik. Sózzuk, borsozzuk, és ízesítsük bazsalikommal. Tálaljuk spagettivel.",
  },
  {
    id: "24",
    name: "Gyümölcssaláta",
    kitchenType: "Nemzetközi",
    dishType: "Desszert",
    ingredients: {
      first: "1 alma",
      second: "1 banán",
      third: "1 narancs",
      fourth: "1 marék bogyós gyümölcs",
      fifth: "1 evőkanál méz",
      sixth: "Friss menta",
    },
    preparation:
      "Vágjuk fel az almát, banánt és narancsot kis darabokra. Keverjük össze a gyümölcsöket egy tálban, locsoljuk meg mézzel, és díszítsük friss mentával.",
  },
  {
    id: "25",
    name: "Töltött paprikák",
    kitchenType: "Magyar",
    dishType: "Vacsora",
    ingredients: {
      first: "6 nagy paprika",
      second: "300 g darált hús",
      third: "1 csésze főtt rizs",
      fourth: "1 tojás",
      fifth: "1 hagyma",
      sixth: "2 gerezd fokhagyma",
      seventh: "200 ml paradicsom szósz",
      eighth: "Só és bors",
    },
    preparation:
      "Főzzük meg a rizst. Keverjük össze a darált húst, főtt rizst, tojást, apróra vágott hagymát és fokhagymát, sózzuk és borsozzuk. Töltsük meg a paprikákat a húsos keverékkel, és helyezzük őket egy tepsibe. Öntsük rá a paradicsom szószt, és süssük 180°C-on 40-45 percig, amíg a paprikák megpuhulnak.",
  },
  // Harmadik
  {
    id: "31",
    name: "Müzli joghurttal",
    kitchenType: "Nemzetközi",
    dishType: "Reggeli",
    ingredients: {
      first: "1 csésze müzli",
      second: "200 ml natúr joghurt",
      third: "1 banán",
      fourth: "1 evőkanál méz",
      fifth: "Néhány friss bogyós gyümölcs",
    },
    preparation:
      "Keverjük össze a müzlit és a joghurtot egy tálban. Szeleteljük fel a banánt, és adjuk hozzá a müzlihez. Locsoljuk meg mézzel, és szórjuk meg friss bogyós gyümölcsökkel.",
  },
  {
    id: "32",
    name: "Caprese saláta",
    kitchenType: "Olasz",
    dishType: "Előétel",
    ingredients: {
      first: "200 g mozzarella sajt",
      second: "4 paradicsom",
      third: "Friss bazsalikom levelek",
      fourth: "2 evőkanál olívaolaj",
      fifth: "Só és bors",
    },
    preparation:
      "Szeleteljük fel a mozzarellát és a paradicsomokat. Rétegezzük fel őket egy tányérra, és helyezzük közéjük a bazsalikom leveleket. Locsoljuk meg olívaolajjal, és sózzuk, borsozzuk ízlés szerint.",
  },
  {
    id: "33",
    name: "Csirke curry",
    kitchenType: "Indiai",
    dishType: "Főétel",
    ingredients: {
      first: "500 g csirkemell",
      second: "1 hagyma",
      third: "2 gerezd fokhagyma",
      fourth: "1 evőkanál curry por",
      fifth: "400 ml kókusztej",
      sixth: "2 evőkanál olívaolaj",
      seventh: "Só és bors",
    },
    preparation:
      "Pároljuk meg az apróra vágott hagymát és fokhagymát olívaolajban. Adjuk hozzá a felkockázott csirkemellet, curry port, sót és borsot, majd pirítsuk 5-7 percig. Öntsük hozzá a kókusztejet, és főzzük 15-20 percig, amíg a csirke megpuhul. Tálaljuk rizzsel.",
  },
  {
    id: "34",
    name: "Puding",
    kitchenType: "Nemzetközi",
    dishType: "Desszert",
    ingredients: {
      first: "500 ml tej",
      second: "100 g cukor",
      third: "40 g pudingpor",
      fourth: "1 vaníliás cukor",
    },
    preparation:
      "Keverjük össze a cukrot és pudingport egy kis tálban. A tejet forraljuk fel, majd keverjük hozzá a cukros pudingport. Folyamatos keverés mellett főzzük addig, amíg a puding besűrűsödik. Hűtsük le, és tálaljuk gyümölccsel vagy csokoládéval.",
  },
  {
    id: "35",
    name: "Fűszeres csirkemell",
    kitchenType: "Amerikai",
    dishType: "Vacsora",
    ingredients: {
      first: "4 csirkemell filé",
      second: "2 evőkanál olívaolaj",
      third: "1 teáskanál paprika",
      fourth: "1 teáskanál fokhagymapor",
      fifth: "Só és bors",
    },
    preparation:
      "Keverjük össze az olívaolajat, paprikát, fokhagymaport, sót és borsot egy tálban. Kenjük be vele a csirkemelleket, és süssük 180°C-on 25-30 percig, amíg átsülnek és aranybarna színt kapnak.",
  },
  // Negyedik
  {
    id: "41",
    name: "Omelette sonkával és sajttal",
    kitchenType: "Francia",
    dishType: "Reggeli",
    ingredients: {
      first: "3 tojás",
      second: "100 g sonka",
      third: "50 g reszelt sajt",
      fourth: "Só és bors",
      fifth: "1 evőkanál vaj",
    },
    preparation:
      "Verjük fel a tojásokat sóval és borssal. Melegítsük fel a vajat egy serpenyőben, öntsük bele a tojásokat, és süssük meg az omlettet. Adjuk hozzá a sonkát és sajtot, majd hajtsuk félbe az omlettet, és süssük tovább, amíg a sajt megolvad.",
  },
  {
    id: "42",
    name: "Gombás pástétom",
    kitchenType: "Francia",
    dishType: "Előétel",
    ingredients: {
      first: "250 g gomba",
      second: "1 hagyma",
      third: "2 gerezd fokhagyma",
      fourth: "100 g vaj",
      fifth: "Só és bors",
      sixth: "Friss petrezselyem",
    },
    preparation:
      "Pároljuk meg az apróra vágott hagymát és fokhagymát vajban. Adjuk hozzá a felkockázott gombát, sózzuk, borsozzuk, és pároljuk, amíg a gomba megpuhul. Keverjük össze a keveréket egy turmixgépben, amíg sima pástétomot kapunk. Tálaljuk friss kenyérrel.",
  },
  {
    id: "43",
    name: "Lasagna",
    kitchenType: "Olasz",
    dishType: "Főétel",
    ingredients: {
      first: "500 g darált marhahús",
      second: "1 hagyma",
      third: "2 gerezd fokhagyma",
      fourth: "400 g paradicsom konzerv",
      fifth: "12 lasagna tészta lap",
      sixth: "250 g ricotta sajt",
      seventh: "200 g mozzarella sajt",
      eighth: "50 g parmezán sajt",
      ninth: "2 evőkanál olívaolaj",
      tenth: "Só és bors",
    },
    preparation:
      "Pároljuk meg az apróra vágott hagymát és fokhagymát olívaolajban. Adjuk hozzá a darált marhahúst, sózzuk, borsozzuk, majd pirítsuk meg. Keverjük hozzá a paradicsomot, és főzzük 20 percig. Készítsük elő a lasagna lapokat, majd rétegezzük a húsos szószt, ricottát, mozzarellát és tészta lapokat egy tepsiben. Süssük 180°C-on 30-35 percig, amíg a sajt szépen megpirul.",
  },
  {
    id: "44",
    name: "Almás pite",
    kitchenType: "Amerikai",
    dishType: "Desszert",
    ingredients: {
      first: "1 csésze liszt",
      second: "100 g vaj",
      third: "50 g cukor",
      fourth: "4 alma",
      fifth: "1 teáskanál fahéj",
      sixth: "1 tojás",
    },
    preparation:
      "Keverjük össze a lisztet, vajat és cukrot, amíg tésztát kapunk. Nyújtsuk ki, és helyezzük egy piteformába. Töltsük meg a felkockázott almával, amelyet fahéjjal ízesítettünk. Süssük 180°C-on 45-50 percig, amíg a tészta aranybarna lesz.",
  },
  {
    id: "45",
    name: "Rakott krumpli",
    kitchenType: "Magyar",
    dishType: "Vacsora",
    ingredients: {
      first: "4 közepes burgonya",
      second: "300 g főtt tojás",
      third: "200 g főtt kolbász",
      fourth: "200 ml tejföl",
      fifth: "1 hagyma",
      sixth: "Só és bors",
    },
    preparation:
      "Főzzük meg a burgonyát, majd hámozzuk meg és szeleteljük fel. Vágjuk fel a főtt tojásokat és kolbászt is szeletekre. Rétegezzük a burgonyát, tojást és kolbászt egy tepsiben, minden réteget sózzunk és borsozzunk. Öntsük rá a tejfölt, és süssük 180°C-on 30-35 percig.",
  },
  // Ötödik
  {
    id: "51",
    name: "Gyümölcs smoothie",
    kitchenType: "Amerikai",
    dishType: "Reggeli",
    ingredients: {
      first: "1 banán",
      second: "1 csésze fagyasztott bogyós gyümölcs",
      third: "200 ml tej",
      fourth: "1 evőkanál méz",
      fifth: "Jégkockák",
    },
    preparation:
      "Tegyük a banánt, bogyós gyümölcsöket, tejet, mézet és jégkockákat egy turmixgépbe. Turmixoljuk simára, és azonnal fogyasszuk.",
  },
  {
    id: "52",
    name: "Sült zöldségnyársak",
    kitchenType: "Mediterrán",
    dishType: "Előétel",
    ingredients: {
      first: "1 piros paprika",
      second: "1 zöld paprika",
      third: "1 cukkini",
      fourth: "1 padlizsán",
      fifth: "2 evőkanál olívaolaj",
      sixth: "Só és bors",
      seventh: "Friss rozmaring",
    },
    preparation:
      "Vágjuk fel a zöldségeket egyenlő darabokra, és keverjük össze olívaolajjal, sóval és borssal. Húzzuk fel a zöldségeket nyársra, és grillezzük 10-15 percig, amíg megpuhulnak. Szórjuk meg friss rozmaringgal, és tálaljuk melegen.",
  },
  {
    id: "53",
    name: "Pulykamell zöldségekkel",
    kitchenType: "Magyar",
    dishType: "Főétel",
    ingredients: {
      first: "500 g pulykamell",
      second: "1 cukkini",
      third: "1 sárgarépa",
      fourth: "1 piros paprika",
      fifth: "2 evőkanál olívaolaj",
      sixth: "Só és bors",
      seventh: "Friss petrezselyem",
    },
    preparation:
      "Vágjuk fel a pulykamellet és zöldségeket egyenlő darabokra. Keverjük össze olívaolajjal, sóval és borssal. Süssük a pulykamellet és a zöldségeket egy serpenyőben 15-20 percig, amíg minden megpuhul. Tálalás előtt szórjuk meg friss petrezselyemmel.",
  },
  {
    id: "54",
    name: "Sajttorta",
    kitchenType: "Amerikai",
    dishType: "Desszert",
    ingredients: {
      first: "200 g keksz",
      second: "100 g vaj",
      third: "400 g krémsajt",
      fourth: "200 ml tejszín",
      fifth: "150 g cukor",
      sixth: "2 tojás",
    },
    preparation:
      "A kekszet morzsoljuk össze, és keverjük össze olvasztott vajjal. Nyomkodjuk bele egy tortaformába. Keverjük össze a krémsajtot, tejszínt, cukrot és tojásokat. Öntsük a masszát a kekszes alapra, és süssük 160°C-on 45-50 percig. Hűtsük le, és tálaljuk gyümölccsel.",
  },
  {
    id: "55",
    name: "Sült lazac citrommal",
    kitchenType: "Mediterrán",
    dishType: "Vacsora",
    ingredients: {
      first: "4 lazacfilé",
      second: "1 citrom",
      third: "2 evőkanál olívaolaj",
      fourth: "Só és bors",
      fifth: "Friss kapor",
    },
    preparation:
      "Melegítsük elő a sütőt 180°C-ra. Kenjük meg a lazacfiléket olívaolajjal, sózzuk és borsozzuk. Szeleteljük fel a citromot, és helyezzünk egy-egy szeletet a filékre. Süssük 15-20 percig, amíg a hal átsül. Tálalás előtt szórjuk meg friss kaporral.",
  },
  // Hatodik
  {
    id: "61",
    name: "Tükörtojás",
    kitchenType: "Nemzetközi",
    dishType: "Reggeli",
    ingredients: {
      first: "2 tojás",
      second: "1 evőkanál vaj",
      third: "Só és bors",
    },
    preparation:
      "Olvasszuk fel a vajat egy serpenyőben. Üssük bele a tojásokat, és süssük meg alacsony lángon, amíg a fehérje megszilárdul, de a sárgája folyós marad. Sózzuk, borsozzuk ízlés szerint.",
  },
  {
    id: "62",
    name: "Töltött gomba",
    kitchenType: "Nemzetközi",
    dishType: "Előétel",
    ingredients: {
      first: "12 nagy gomba",
      second: "100 g krémsajt",
      third: "2 evőkanál reszelt sajt",
      fourth: "2 gerezd fokhagyma",
      fifth: "Friss petrezselyem",
      sixth: "Só és bors",
    },
    preparation:
      "Tisztítsuk meg a gombákat, és távolítsuk el a szárakat. Keverjük össze a krémsajtot, reszelt sajtot, apróra vágott fokhagymát, és ízlés szerint sózzuk, borsozzuk. Töltsük meg a gombafejeket a keverékkel, és süssük 180°C-on 15-20 percig.",
  },
  {
    id: "63",
    name: "Sült húsgombócok",
    kitchenType: "Nemzetközi",
    dishType: "Főétel",
    ingredients: {
      first: "500 g darált hús",
      second: "1 tojás",
      third: "1 csésze zsemlemorzsa",
      fourth: "2 gerezd fokhagyma",
      fifth: "Só és bors",
      sixth: "1 evőkanál olívaolaj",
    },
    preparation:
      "Keverjük össze a darált húst, tojást, zsemlemorzsát, apróra vágott fokhagymát, sót és borsot egy tálban. Formáljunk kis gombócokat, és helyezzük őket egy tepsibe. Locsoljuk meg olívaolajjal, és süssük 200°C-on 20-25 percig, amíg a gombócok átsülnek.",
  },
  {
    id: "64",
    name: "Mákos guba",
    kitchenType: "Magyar",
    dishType: "Desszert",
    ingredients: {
      first: "4 kifli",
      second: "500 ml tej",
      third: "100 g mák",
      fourth: "100 g cukor",
      fifth: "1 tojás",
      sixth: "Vanília aroma",
    },
    preparation:
      "A kifliket szeleteljük fel, és helyezzük egy tálba. Forraljuk fel a tejet, és öntsük a kiflikre. Keverjük hozzá a mákot, cukrot, tojást és vanília aromát. Süssük 180°C-on 30-35 percig, amíg a teteje aranybarna lesz.",
  },
  {
    id: "65",
    name: "Quiche Lorraine",
    kitchenType: "Francia",
    dishType: "Vacsora",
    ingredients: {
      first: "1 kész pite tészta",
      second: "200 g bacon",
      third: "150 g reszelt sajt",
      fourth: "3 tojás",
      fifth: "200 ml tejszín",
      sixth: "Só és bors",
    },
    preparation:
      "Süssük elő a pite tésztát 180°C-on 10 percig. Közben pirítsuk meg a bacont, és hagyjuk kihűlni. Verjük fel a tojásokat a tejszínnel, sózzuk és borsozzuk. A tésztára szórjuk rá a bacont és reszelt sajtot, öntsük rá a tojásos-tejszínes keveréket, majd süssük 180°C-on 30-35 percig, amíg a quiche megszilárdul.",
  },
  // Hetedik
  {
    id: "01",
    name: "Kakaós palacsinta",
    kitchenType: "Nemzetközi",
    dishType: "Reggeli",
    ingredients: {
      first: "1 csésze liszt",
      second: "1 tojás",
      third: "200 ml tej",
      fourth: "2 evőkanál kakaópor",
      fifth: "1 evőkanál cukor",
      sixth: "Vaj a sütéshez",
    },
    preparation:
      "Keverjük össze a lisztet, tojást, tejet, kakaóport és cukrot egy tálban, amíg sima tésztát kapunk. Melegítsünk fel vajat egy serpenyőben, és süssük a palacsintákat mindkét oldalán aranybarnára. Tálaljuk kedvenc töltelékeinkkel.",
  },
  {
    id: "02",
    name: "Bruschetta al Pomodoro",
    kitchenType: "Olasz",
    dishType: "Előétel",
    ingredients: {
      first: "4 szelet bagett",
      second: "2 paradicsom",
      third: "1 gerezd fokhagyma",
      fourth: "Friss bazsalikom",
      fifth: "Olívaolaj",
      sixth: "Só és bors",
    },
    preparation:
      "Pirítsuk meg a bagett szeleteket. Kockázzuk fel a paradicsomot, keverjük össze aprított fokhagymával, bazsalikommal, olívaolajjal, sóval és borssal. Kenjük a paradicsomos keveréket a pirítósokra.",
  },
  {
    id: "03",
    name: "Ratatouille",
    kitchenType: "Francia",
    dishType: "Főétel",
    ingredients: {
      first: "1 padlizsán",
      second: "1 cukkini",
      third: "1 piros paprika",
      fourth: "1 hagyma",
      fifth: "2 paradicsom",
      sixth: "2 evőkanál olívaolaj",
      seventh: "Só és bors",
      eighth: "Friss bazsalikom",
    },
    preparation:
      "Vágjuk fel a padlizsánt, cukkinit, paprikát, hagymát és paradicsomot egyenlő darabokra. Keverjük össze olívaolajjal, sóval és borssal. Süssük a zöldségeket egy serpenyőben 20-25 percig, amíg megpuhulnak. Tálaljuk friss bazsalikommal.",
  },
  {
    id: "04",
    name: "Citromos túrós süti",
    kitchenType: "Amerikai",
    dishType: "Desszert",
    ingredients: {
      first: "200 g túró",
      second: "100 g cukor",
      third: "1 citrom",
      fourth: "200 g liszt",
      fifth: "2 tojás",
      sixth: "1 teáskanál sütőpor",
    },
    preparation:
      "Keverjük össze a túrót, cukrot, citrom héját és levét. Adjuk hozzá a lisztet, tojásokat és sütőport. Keverjük simára, és öntsük egy sütőformába. Süssük 180°C-on 35-40 percig, amíg a süti megszilárdul és aranybarna lesz.",
  },
  {
    id: "05",
    name: "Pad Thai",
    kitchenType: "Thai",
    dishType: "Vacsora",
    ingredients: {
      first: "200 g rizstészta",
      second: "200 g csirkemell",
      third: "2 tojás",
      fourth: "100 g bambuszrügy",
      fifth: "100 g babcsíra",
      sixth: "3 evőkanál hal szósz",
      seventh: "2 evőkanál tamarind paszta",
      eighth: "1 evőkanál cukor",
      ninth: "2 evőkanál olaj",
      tenth: "Friss koriander és lime",
    },
    preparation:
      "Főzzük meg a rizstésztát az utasítás szerint. Szeleteljük fel a csirkemellet és pároljuk meg egy wokban olajban. Adjuk hozzá a felvert tojásokat, bambuszrügyet, babcsírát, hal szószt, tamarind pasztát és cukrot, majd keverjük össze. Tálaljuk friss korianderrel és lime-lal.",
  },
];

// Összes étel lekérdezése:

app.get("/api/etelek", (req, res) => {
  res.send(etelek);
});

// ID alapján lekérdezés

app.get("/api/etelek/:id", (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  const etel = etelek.find((etel) => etel.id === id);
  if (typeof etel === "undefined") {
    res.send("Nincs ilyen étel.");
  } else {
    res.send(etel);
  }
});

// Típus alapján lekérdezés

app.get("/api/etelek/type/:type", (req, res) => {
  const type = req.params.type.toLowerCase();
  const etel = etelek.filter((etel) => etel.type.toLowerCase() === type);
  if (etel.length === 0) {
    res.send("Nincs ilyen típusú étel.");
  } else {
    res.send(etel);
  }
});

// var express = require("express");
// var app = express();
// app.use(express.static("public"));
// var port = 8000;
// var sqlite3 = require("sqlite3");

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// const listeningStartedCallback = () => {
//   console.log(`A szerver elindult, port: ${port}`);
// };

// // // Elindítja a szervert
// app.listen(port, listeningStartedCallback);

//Adatbáziskezelés//

// app.get("/about", function (req, res) {
//   var db = sqlite3.Database("myDatabase.db");
//   res.sendFile(path.join(__dirname + "./public/about.html"));
// });

// function databeseOperations(db) {
//   db.run(`
//     CREATE TABLE IF NOT EXISTS Features (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       feature TEXT NOT NULL,
//       version TEXT NOT NULL,
//       year INTEGER NOT NULL
//   )

//     `);

//   db.run(`
//     INSERT INTO Features (feature, version, year)
//     VALUES("Spread operator", "ES6", 2015),
//           ("power operator", "ES7", 2016),
//           ("async-await", "ES8", 2018);
//     `);

//   function getAllRows(hiba, sorok) {
//     if (hiba) {
//       console.log("Hiba " + hiba.message, hiba);
//     } else {
//       console.log(sorok);
//     }
//   }
//   db.all(`SELECT * FROM Features`, getAllRows);
// }

// db.serialise(() => databeseOperations(db));

// process.on("SIGTERM", shutdown);
// process.on("SIGINT", shutdown);

// function shutdown() {
//   db.close((err) => {
//     if (err) {
//       console.log(err.message);
//     } else {
//       console.log("Close the database connection.");
//     }
//     console.log("END");
//     process.exit(0);
//   });
// }

//Adatbáziskezelés//

// var features = [
//   {
//     id: 1,
//     feature: "Spread operator",
//     version: "ES6",
//     year: 2015,
//   },
//   {
//     id: 2,
//     feature: "power operator",
//     version: "ES7",
//     year: 2016,
//   },
//   {
//     id: 3,
//     feature: "async-await",
//     version: "ES8",
//     year: 2017,
//   },
// ];

// var nextId = 3;

//Összes feature lekérdezése

// app.get("/api/features", (req, res) => {
//   res.send(features);
// });

// app.get("/api/features/:id", (req, res) => {
//   const id = Number.parseInt(req.params.id, 10);
//   console.log(`Requesting feature ${id}`);
//   const feature = features.find((feature) => feature.id === id);
//   if (typeof feature === "undefined") {
//     res.send([]);
//   } else {
//     res.send(feature);
//   }
// });

// app.get("/", (request, response) => {
//   console.log("Home request: " + request.url);
//   response.send(`
//   <html>
//   <head>
//     <title>Home</title>
//   </head>
//   <body>
//     <h1>Home</h1>
//       <form action="/api/features/new" method="POST">
//         <input type="text" name="feature" placeholder="Enter feature" />
//         <input type="text" name="version" placeholder="Enter version" />
//         <input type="number" name="year" placeholder="Enter year" />
//         <input type="submit" value="Submit" />
//         </form>
//         </body>
//         </html>
//         `);
// });

// app.post("/api/features/new", function (req, res) {
//   features.push({
//     feature: req.body.feature,
//     version: req.body.version,
//     year: req.body.year,
//     id: features.length + 1,
//   });
//   res.send({ status: true });
// });

// Útvonalválasztó (pont, mint az urls.py és views.py kombinációja Djangóban)
// app.get("/", (request, response) => {
//   console.log("Új hívás: " + request.url);
//   response.send(`
//     <html>
//         <head>
//             <title>Express</title>
//         </head>
//     <body>
//         <h1>This is an Express-served page</h1>
//         <p>Enjoy!</p>
//         <a href="/about">About oldal</a>
//     </body>
//     </html>
//     `);
// });

// app.get("/about", (request, response) => {
//   console.log("New request" + request.url);
//   response.send(`
//                     <html>
//                 <head>
//                     <title>About Us</title>
//                 </head>
//                 <body>
//                     <h1>About</h1>
//                     <a href="/">Home</a>
//                 </body>
//         `);
// });

//JSON üzenet

// const colors = [
//   { id: 1, name: "fekete", hex: "#000000" },
//   { id: 2, name: "fehér", hex: "#FFFFFF" },
//   { id: 3, name: "piros", hex: "#FF0000" },
//   { id: 4, name: "zöld", hex: "#00FF00" },
//   { id: 5, name: "kék", hex: "#0000FF" },
//   { id: 6, name: "sárga", hex: "#FFFF00" },
//   { id: 7, name: "narancs", hex: "#FFA500" },
//   { id: 8, name: "lila", hex: "#800080" },
//   { id: 9, name: "rózsaszín", hex: "#FFC0CB" },
//   { id: 10, name: "barna", hex: "#A52A2A" },
//   { id: 11, name: "szürke", hex: "#808080" },
//   { id: 12, name: "ciánkék", hex: "#00FFFF" },
//   { id: 13, name: "mályva", hex: "#FF00FF" },
//   { id: 14, name: "világoszöld", hex: "#90EE90" },
//   { id: 15, name: "világoskék", hex: "#ADD8E6" },
//   { id: 16, name: "sötétkék", hex: "#00008B" },
//   { id: 17, name: "sötétzöld", hex: "#006400" },
//   { id: 18, name: "arany", hex: "#FFD700" },
//   { id: 19, name: "ezüst", hex: "#C0C0C0" },
//   { id: 20, name: "türkiz", hex: "#40E0D0" },
// ];

// app.get("/api/colors", (req, res) => {
//   res.send(colors);
// });

//Egy adott szín kiválasztása id alapján

// app.get("/api/colors/:id", (req, res) => {
//   const id = Number.parseInt(req.params.id);
//   const color = colors.find((c) => c.id === id);
//   if (color) {
//     res.json(color);
//   } else {
//     res.status(404).send("Szín nem található.");
//   }
// });
