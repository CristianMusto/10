const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

var iPortaTcp = 4204;
var sIpAddress = "127.0.0.1";

app.listen(iPortaTcp, sIpAddress, () =>
  console.log("API is running on http://" + sIpAddress + ":" + iPortaTcp)
);

app.use("/api/animali", (req, res) => {
  const obj = [
    {
      id: 1,
      specie: "cane",
      nome: "Nami",
      eta: 1,
      razza: "Amstaff",
      img: "https://www.centrodogtrainer.it/wp-content/uploads/2016/02/addestramento-amstaff.jpg",
      descrizione:
        "Conosciuto come Amstaff, il suo nome completo è American Staffordshire Terrier.",
    },
    {
      id: 2,
      specie: "cane",
      nome: "Pippo",
      eta: 12,
      razza: "Pincher",
      img: "https://timgate.it/ecm/online-content/3cb/0b8/247/pinscher-nano-caratteristiche-e-carattere-del-cane_acd5b21e.jpg",
      descrizione: "Il cane di razza Pincher ha origini tedesche.",
    },
    {
      id: 3,
      specie: "cane",
      nome: "Scooby",
      eta: 7,
      razza: "Alano",
      img: "https://cdn.wamiz.fr/cdn-cgi/image/quality=80,width=400,height=200,fit=cover/https://cdn.wamiz.fr/article/main-picture/61890afa7fff9270000858.jpg",
      descrizione:
        "L'alano tedesco, talora in modo non corretto chiamato anche danese o gran danese, è una razza canina molossoide di taglia gigante ritenuta tradizionalmente aristocratica ed elegante.",
    },
    {
      id: 4,
      specie: "gatto",
      nome: "Wojtek",
      eta: 5,
      razza: "Siamese",
      img: "https://www.amoreaquattrozampe.it/wp-content/uploads/2020/10/adobestock_73614075-1_optimized-1280x720.jpeg",
      descrizione:
        "Il gatto siamese è uno dei pochi da essere riconosciuto quasi da tutti, con i suoi caratteristici occhi chiari e le estremità del corpo di una tonalità più scura rispetto al mantello.",
    },
    {
      id: 5,
      specie: "gatto",
      nome: "Neko",
      eta: 4,
      razza: "Certosino",
      img: "https://www.naturalcode.eu/wp-content/uploads/2020/09/curiosi-dinatura-certosino.jpg",
      descrizione: "Il gatto certosino è una delle razze feline più antiche.",
    },
    {
      id: 6,
      specie: "gatto",
      nome: "Sky",
      eta: 7,
      razza: "Savannah",
      img: "https://www.amoreaquattrozampe.it/wp-content/uploads/2020/11/serval-cat-4786294-pixabay-1280.jpg",
      descrizione:
        "Il primo esemplare, una femmina di nome Savannah, venne ottenuto il 7 aprile 1986 da Judee Frank, un'allevatrice di bengala che incrociò un maschio di servalo, appartenente a Suzi Woods, con una gatta siamese.",
    },
    {
      id: 7,
      specie: "coniglio",
      nome: "Bugs",
      eta: 8,
      razza: "Ariete",
      img: "https://www.oggitreviso.it/sites/default/files/styles/505/public/field/image/coniglio-.jpg?itok=tggkq-Fd",
      descrizione:
        "Il coniglio ariete è in assoluto la razza più coccolona e dolce che ci sia, è molto adatta ai bambini in quanto si presta molto alle loro attenzioni, donando emozioni molto belle soprattutto quando vengono dati ai bimbi da parte del coniglio ariete dei veri e propri bacini.",
    },
    {
      id: 8,
      specie: "coniglio",
      nome: "Carota",
      eta: 5,
      razza: "Nano",
      img: "https://arcapagliare.it/wp-content/uploads/2020/10/CONIGLIO-NANO-NERO.jpg",
      descrizione:
        "Il coniglio nano appartiene all'ordine dei Logomorfi. La durata della sua vita è attorno ai 4-7 anni. La sua forma è raccolta e arrotondata. Il pelo, fine, presenta varie colorazioni e lunghezze a seconda della razza.",
    },
    {
      id: 9,
      specie: "coniglio",
      nome: "Krzysztow",
      eta: 3,
      razza: "Polacco",
      img: "https://www.ilverdemondo.it/public/blog/thumbs/coniglio-nano-ermellino-tutto-quello-che-c-e-da-sapere-it-000.jpg",
      descrizione:
        "Il coniglio polacco, detto anche coniglio Ermellino, fa parte della famiglia dei Leporidi e dell’ordine dei Lagomorfi ed è un animale molto rinomato perché è tra gli animali da compagnia più gradevoli a belli a detta di molti.",
    },
  ];
  const myJSON = JSON.stringify(obj);

  res.send(myJSON);
});

app.use("/api/film", (req, res) => {
  const obj = [
    {
      id: 1,
      titolo: "IT",
      genere: "Horror",
      regista: "Andrés Muschietti",
      img: "https://cdn.gelestatic.it/kataweb/tvzap/2018/03/It.jpg",
      descrizione:
        "It, conosciuto anche come It - Capitolo uno (It: Chapter One), è un film del 2017 diretto da Andy Muschietti, adattamento del romanzo It di Stephen King.",
    },
    {
      id: 2,
      titolo: "Interstellar",
      genere: "Fantascienza",
      regista: "Christopher Nolan",
      img: "https://www.sorrisi.com/wp-content/uploads/2021/06/interstellar2.jpg",
      descrizione:
        "Interstellar è un film del 2014 diretto da Christopher Nolan.",
    },
    {
      id: 3,
      titolo: "Hachiko",
      genere: "Drammatico",
      regista: "Lasse Hallström",
      img: "https://hotcorn-cdn.s3.amazonaws.com/wp-content/uploads/sites/2/2021/05/21134905/hachiko-storia-vera-film-758x426.png",
      descrizione:
        "Hachiko - Il tuo migliore amico (Hachi: A Dog's Tale) è un film del 2009 diretto da Lasse Hallström, basato sulla storia vera del cane giapponese Hachikō e sul film giapponese del 1987 Hachikō Monogatari, del quale è il remake.",
    },
    {
      id: 4,
      titolo: "Avatar",
      genere: "Fantascienza",
      regista: "James Cameron",
      img: "https://www.superguidatv.it/wp-content/uploads/2019/05/avatar-film.jpg",
      descrizione:
        "Avatar è un film del 2009 scritto, diretto, co-prodotto e co-montato da James Cameron.",
    },
    {
      id: 5,
      titolo: "Harry Potter",
      genere: "magia",
      regista: "Chris Columbus",
      img: "https://techprincess.it/wp-content/uploads/2021/11/Harry-Potter-reunion-tech-princess.jpg",
      descrizione:
        "Harry Potter è una serie di romanzi fantasy scritta da J. K. Rowling, incentrata sulle avventure del giovane mago Harry Potter e dei suoi migliori amici Ron Weasley e Hermione Granger, studenti della Scuola di Magia e Stregoneria di Hogwarts.",
    },
    {
      id: 6,
      titolo: "Fast and Furious",
      genere: "azione",
      regista: "Rob Cohen",
      img: "https://cronobinetto.files.wordpress.com/2015/04/world-premiere-of-fast-furious-4-to-take-place-on-march-12-4749_1.jpg",
      descrizione:
        "Sapendo che Toretto è un organizzatore di corse illegali, l'agente O'Conner va ad un raduno e sfida Toretto per avvicinarsi il più possibile a lui.",
    },
    {
      id: 7,
      titolo: "Spider Man",
      genere: "Fantascienza-Azione",
      regista: "Sam Raimi",
      img: "https://images.everyeye.it/img-articoli/spider-man-4-amazing-spider-man-3-storia-sequel-maledetti-speciale-v11-54450-1280x16.webp",
      descrizione:
        "Spider-Man è un film di supereroi del 2002 diretto da Sam Raimi, basato sui fumetti del persononaggio titolare creato da Stan Lee e Steve Ditko, pubblicato dalla Marvel Comics.",
    },
    {
      id: 8,
      titolo: "Avengers: endgame",
      genere: "Fantascienza-Azione",
      regista: "Anthony e Joe Russo",
      img: "https://www.lascimmiapensa.com/wp-content/uploads/2019/04/avengers-endgame.jpg",
      descrizione:
        "Basato sul gruppo di supereroi dei Vendicatori di Marvel Comics, il film è il seguito di Avengers: Infinity War (2018) e costituisce il ventiduesimo film del Marvel Cinematic Universe.",
    },
    {
      id: 9,
      titolo: "venom",
      genere: "Fantascienza-Azione",
      regista: "Ruben Fleischer",
      img: "https://images.everyeye.it/img-articoli/venom-furia-carnage-recensione-sequel-convincente-recensione-v7-54844-1280x16.webp",
      descrizione:
        "Mentre esplora lo spazio per cercare nuovi mondi abitabili, un'astronave appartenente alla società di bioingegneria denominata Life Foundation scopre quattro forme di vita aliene e le porta sulla Terra.",
    },
  ];
  const myJSON = JSON.stringify(obj);

  res.send(myJSON);
});
app.use("/api/piatti", (req, res) => {
  const obj = [
    {
      id: 1,
      titolo: "Pizza",
      img:"https://d1e3z2jco40k3v.cloudfront.net/-/media/drog19/recipe-images/pizza-margherita-con-basilico_2000.jpg?rev=c0ef67e2f4684f9dbbcf1a54188cc5b0&vd=20200707T052020Z&hash=097A78228B5887F0247E9EFAB27CE958",
      ingredienti: "Farina Manitoba 200 g, Farina 00 300 g, Acqua a temperatura ambiente 300 ml, Sale fino 10 g, Lievito di birra fresco (oppure 1,5 se secco) 4 g"
    },
    {
      id: 2,
      titolo: "Carbonara",
      img: "http://cdn.cook.stbm.it/thumbnails/ricette/144/144286/hd750x421.jpg",
      ingredienti: "Spaghetti 320 g, Guanciale 150 g, Tuorli di uova medie 6, Pepe nero q.b., Pecorino romano 50 g"
    },

    {
      id: 3,
      titolo: "Gnocchi alla sorrentina",
      img: "https://blog.giallozafferano.it/lacucinadiloredana/wp-content/uploads/2019/02/gnocchi-alla-sorrentina.jpg",
      ingredienti: "Patate rosse 1 kg, Uova medio 1, Semola q.b., Farina 00 300 g, Sale fino q.b., Passata di pomodoro 600 g, Basilico 6 foglie, Aglio 1 spicchio, Olio extravergine d'oliva q.b., Sale fino q.b., Mozzarella 250 g, Parmigiano Reggiano DOP da grattugiare 70 g"
    },

    {
      id: 4,
      titolo: "Focaccia",
      img: "https://d2sj0xby2hzqoy.cloudfront.net/kenwood_italy/attachments/data/000/007/824/medium/focaccia-genovese.jpg",
      ingredienti: "Farina 0 470 g, Zucchero 16 g, Latte intero 115 g, Sale fino 12 g, Lievito di birra secco 5 g, Acqua a temperatura ambiente 230 g, Olio extravergine d'oliva 45 g, Rosmarino q.b., Fiocchi di sale q.b., Olio extravergine d'oliva 40 g"
    },

    {
      id: 5,
      titolo: "Hamburger",
      img: "https://www.buttalapasta.it/wp-content/uploads/2016/01/hamburger-di-carne-americano.jpg",
      ingredienti: "Panini da hamburger 4, Caciocavallo silano 130 g, Lattuga q.b., Sale fino q.b., Olio extravergine d'oliva q.b., Manzo spalla tritata 800 g, Pomodorini secchi sottolio 50 g, Burro (per ungere i panini) q.b., Pepe nero q.b."
    },

    {
      id: 6,
      titolo: "Piadina",
      img: "https://www.visitanutrizionista.it/wp-content/uploads/2020/06/piadina-ceci.jpg",
      ingredienti: "Farina 00 500 g, Acqua a temperatura ambiente 170 g, Bicarbonato 1,5 cucchiaini, Strutto 125 g, Sale fino 15 g"
    },

    {
      id: 7,
      titolo: "Impepata di cozze",
      img: "https://www.hotel-sangiorgio.com/wp-content/uploads/2020/02/impepata3.jpg",
      ingredienti: "Cozze da pulire 2 kg, Pepe nero da macinare al momento q.b., Prezzemolo q.b., Limoni q.b."
    },

    {
      id: 8,
      titolo: "panzerotti",
      img:"https://images.lacucinaitaliana.it/wp-content/uploads/2017/02/05005244/Panzerotto-ricetta-classica1-1600x800.jpg",
      ingredienti: "Farina 00 250 g, Acqua tiepida 285 g, Lievito di birra fresco 8,5 g, Sale fino 10 g, Farina Manitoba 250 g, Olio extravergine d'oliva 8 g, Zucchero 5 g, Fiordilatte 250 g, Sale fino q.b., Olio extravergine d'oliva q.b., Passata di pomodoro 200 g, Origano q.b., Olio di semi q.b."
    },

    {
      id: 9,
      titolo: "Pasta al ragù",
      img: "https://blog.giallozafferano.it/loscrignodelbuongusto/wp-content/uploads/2019/03/3-3.jpg", 
      ingredienti: "Carne bovina (trita di manzo, macinata grossa e mista) 300 g, Carote 50 g, Cipolle dorate 50 g, Pepe nero q.b., Pancetta 150 g, Olio extravergine d'oliva 1 cucchiaio, Passata di pomodoro 300 g, Sedano 50 g, Sale fino q.b., Vino rosso 100 g, Brodo vegetale q.b."
    },


    
  ];
  const myJSON = JSON.stringify(obj);

  res.send(myJSON);
});
