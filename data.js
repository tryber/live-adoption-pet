const pets = {
  dogs: [
    {
      "id": 1,
      "name": "Buddy",
      "image": "https://img.nsctotal.com.br/wp-content/uploads/2023/07/Labrador-retriever.jpg",
      "birth_date": "2011-04-15",
      "breed": "Labrador Retriever",
      "color": "Amarelo",
      "size": "Médio",
      "temperament": "Amigável",
    },
    {
      "id": 2,
      "name": "Luna",
      "image": "https://i0.wp.com/parlamentopb.com.br/wp-content/uploads/2018/03/Siberian-husky.jpg",
      "birth_date": "2012-07-22",
      "breed": "Husky Siberiano",
      "color": "Branco e preto",
      "size": "Médio",
      "temperament": "Brincalhona"
    },
    {
      "id": 3,
      "name": "Rocky",
      "image": "https://www.cobasi.com.br/arquivos/bulldog-ingles-meio-2.png",
      "birth_date": "2013-01-10",
      "breed": "Bulldog Inglês",
      "color": "Amarelo e preto",
      "size": "Pequeno",
      "temperament": "Teimoso"
    },
    {
      "id": 4,
      "name": "Daisy",
      "image": "https://dicasboaspracachorro.com.br/wp-content/uploads/2019/08/gplden-retriver-observando.jpg",
      "birth_date": "2014-06-05",
      "breed": "Golden Retriever",
      "color": "Amarelo",
      "size": "Médio",
      "temperament": "Carinhosa"
    },
    {
      "id": 5,
      "name": "Max",
      "image": "https://cdn.pixabay.com/photo/2019/08/09/17/08/dog-4395446_1280.jpg",
      "birth_date": "2015-09-12",
      "breed": "Poodle",
      "color": "Branco",
      "size": "Pequeno",
      "temperament": "Inteligente"
    },
    {
      "id": 6,
      "name": "Lucy",
      "image": "https://cdn.pixabay.com/photo/2015/08/14/06/45/dog-888025_1280.jpg",
      "birth_date": "2016-02-28",
      "breed": "Beagle",
      "color": "Tricolor",
      "size": "Pequeno",
      "temperament": "Curiosa"
    },
    {
      "id": 7,
      "name": "Riley",
      "image": "https://caocidadao.com.br/wp-content/uploads/2018/08/saiba-escolher-a-raca-do-cachorro-ideal.jpg",
      "birth_date": "2017-11-19",
      "breed": "Sem raça definida",
      "color": "Preto",
      "size": "Médio",
      "temperament": "Brincalhão"
    },
    {
      "id": 8,
      "name": "Caco",
      "image": "https://i0.statig.com.br/bancodeimagens/6b/2f/3v/6b2f3vlff1qtq7q8515lgexen.jpg",
      "birth_date": "2018-04-03",
      "breed": "Sem raça definida",
      "color": "Marrom",
      "size": "Pequeno",
      "temperament": "Atrevido"
    },
    {
      "id": 9,
      "name": "Bailey",
      "image": "https://cachorroblog.wordpress.com/files/2009/09/blackdachshund_10241.jpg",
      "birth_date": "2019-08-14",
      "breed": "Dachshund",
      "color": "Marrom e preto",
      "size": "Pequeno",
      "temperament": "Colorajoso"
    },
    {
      "id": 10,
      "name": "Milo",
      "image": "https://cdn.pixabay.com/photo/2012/11/06/16/56/dog-64327_640.jpg",
      "birth_date": "2020-03-25",
      "breed": "Shih Tzu",
      "color": "Branco e Amarelo",
      "size": "Pequeno",
      "temperament": "Amigável"
    },
    {
      "id": 11,
      "name": "Zoe",
      "image": "https://cdn.pixabay.com/photo/2016/09/02/15/09/dog-1639528_1280.jpg",
      "birth_date": "2021-10-07",
      "breed": "Boxer",
      "color": "Amarelo e preto",
      "size": "Médio",
      "temperament": "Energética"
    },
    {
      "id": 12,
      "name": "Charlie",
      "image": "https://cdn.pixabay.com/photo/2022/12/27/18/02/dog-7681505_1280.jpg",
      "birth_date": "2011-05-19",
      "breed": "Labradoodle",
      "color": "Creme",
      "size": "Médio",
      "temperament": "Inteligente"
    },
    {
      "id": 13,
      "name": "Mia",
      "image": "https://cdn.pixabay.com/photo/2022/01/12/05/42/rottweiler-6932045_1280.jpg",
      "birth_date": "2012-08-28",
      "breed": "Rottweiler",
      "color": "Preto e marrom",
      "size": "Grande",
      "temperament": "Leal"
    },
    {
      "id": 14,
      "name": "Oscar",
      "image": "https://cdn.pixabay.com/photo/2023/10/01/14/40/dog-8287533_1280.jpg",
      "birth_date": "2013-02-14",
      "breed": "Sem raça definida",
      "color": "Cinza e Amarelo",
      "size": "Pequeno",
      "temperament": "Colorajoso"
    },
    {
      "id": 15,
      "name": "Sadie",
      "image": "https://cdn.pixabay.com/photo/2017/07/28/23/35/pyrenees-2550225_1280.jpg",
      "birth_date": "2014-07-02",
      "breed": "Sem raça definida",
      "color": "Creme",
      "size": "Médio",
      "temperament": "Independente"
    },
    {
      "id": 16,
      "name": "Tucker",
      "image": "https://cdn.pixabay.com/photo/2016/05/23/22/07/dog-1411405_1280.jpg",
      "birth_date": "2015-10-11",
      "breed": "Australian Shepherd",
      "color": "Branco e marrom",
      "size": "Médio",
      "temperament": "Ativo"
    },
    {
      "id": 17,
      "name": "Lily",
      "image": "https://cdn.pixabay.com/photo/2015/03/26/01/55/dog-689684_640.jpg",
      "birth_date": "2016-03-02",
      "breed": "Sem raça definida",
      "color": "Marrom",
      "size": "Médio",
      "temperament": "Afetuosa"
    },
    {
      "id": 18,
      "name": "Duke",
      "image": "https://cdn.pixabay.com/photo/2013/07/25/11/59/german-shepherd-166972_1280.jpg",
      "birth_date": "2017-11-29",
      "breed": "German Shepherd",
      "color": "Preto e castanho",
      "size": "Grande",
      "temperament": "Protetor"
    },
    {
      "id": 19,
      "name": "Penny",
      "image": "https://cdn.pixabay.com/photo/2014/08/05/20/15/dog-410946_1280.jpg",
      "birth_date": "2018-04-15",
      "breed": "Sem raça definida",
      "color": "Creme",
      "size": "Pequeno",
      "temperament": "Brincalhona"
    },
    {
      "id": 20,
      "name": "Cooper",
      "image": "https://cdn.pixabay.com/photo/2015/11/14/15/51/pit-bull-1043356_1280.jpg",
      "birth_date": "2019-08-22",
      "breed": "Sem raça definida",
      "color": "Creme",
      "size": "Grande",
      "temperament": "Sociável"
    }
  ],
  cats: [
    {
      "id": 21,
      "name": "Mia",
      "image": "https://cdn.pixabay.com/photo/2017/10/07/08/45/cat-2825794_1280.jpg",
      "birth_date": "2012-04-15",
      "breed": "Siamês",
      "color": "Cinza",
      "size": "Pequeno",
      "temperament": "Alegre"
    },
    {
      "id": 22,
      "name": "Frajola",
      "image": "https://cdn.pixabay.com/photo/2020/11/26/11/48/cat-5778777_1280.jpg",
      "birth_date": "2013-08-02",
      "breed": "Sem raça definida",
      "color": "Amarelo e branco",
      "size": "Médio",
      "temperament": "Brincalhão"
    },
    {
      "id": 23,
      "name": "Luna",
      "image": "https://cdn.pixabay.com/photo/2019/03/03/11/50/cat-4031695_1280.jpg",
      "birth_date": "2011-11-19",
      "breed": "Maine Coon",
      "color": "Preto",
      "size": "Grande",
      "temperament": "Calmo"
    },
    {
      "id": 24,
      "name": "Bolinha",
      "image": "https://cdn.pixabay.com/photo/2019/09/16/14/54/cats-4481235_1280.jpg",
      "birth_date": "2015-02-14",
      "breed": "Persa",
      "color": "Branco",
      "size": "Pequeno",
      "temperament": "Tímido"
    },
    {
      "id": 25,
      "name": "Simba",
      "image": "https://cdn.pixabay.com/photo/2018/07/22/03/48/cat-3553784_1280.jpg",
      "birth_date": "2010-07-03",
      "breed": "Sem raça definida",
      "color": "Amarelo",
      "size": "Médio",
      "temperament": "Colorajoso"
    },
    {
      "id": 26,
      "name": "Mel",
      "image": "https://cdn.pixabay.com/photo/2018/11/21/14/29/cat-3829753_1280.jpg",
      "birth_date": "2013-06-25",
      "breed": "Sem raça definida",
      "color": "Marrom",
      "size": "Médio",
      "temperament": "Curioso"
    },
    {
      "id": 27,
      "name": "Whiskers",
      "image": "https://cdn.pixabay.com/photo/2020/04/11/19/33/cat-5031734_1280.jpg",
      "birth_date": "2014-09-10",
      "breed": "Sem raça definida",
      "color": "Cinza e branco",
      "size": "Médio",
      "temperament": "Afetuoso"
    },
    {
      "id": 28,
      "name": "Milo",
      "image": "https://cdn.pixabay.com/photo/2019/04/08/10/03/cat-4111686_1280.jpg",
      "birth_date": "2012-03-07",
      "breed": "Bengal",
      "color": "Amarelo e preto",
      "size": "Médio",
      "temperament": "Energético"
    },
    {
      "id": 29,
      "name": "Lika",
      "image": "https://cdn.pixabay.com/photo/2018/07/29/19/58/cat-3570907_1280.jpg",
      "birth_date": "2017-01-22",
      "breed": "Sem raça definida",
      "color": "Preta",
      "size": "Pequeno",
      "temperament": "Carinhosa"
    },
    {
      "id": 30,
      "name": "Garfield",
      "image": "https://guiaanimal.net/uploads/content/image/35375/AdobeStock_96825011.jpeg",
      "birth_date": "2013-04-30",
      "breed": "Sem raça definida",
      "color": "Laranja",
      "size": "Médio",
      "temperament": "Preguiçoso"
    },
    {
      "id": 31,
      "name": "Oreo",
      "image": "https://cdn.pixabay.com/photo/2019/04/27/10/09/cat-4159678_1280.jpg",
      "birth_date": "2015-12-11",
      "breed": "Sem raça definida",
      "color": "Preto e branco",
      "size": "Pequeno",
      "temperament": "Brincalhão"
    },
    {
      "id": 32,
      "name": "Sophie",
      "image": "https://cdn.pixabay.com/photo/2018/05/26/15/21/cat-3431526_1280.jpg",
      "birth_date": "2011-10-05",
      "breed": "British Shorthair",
      "color": "Cinza",
      "size": "Médio",
      "temperament": "Reservado"
    },
    {
      "id": 33,
      "name": "Rocky",
      "image": "https://cdn.pixabay.com/photo/2022/09/06/07/49/cat-7436051_1280.jpg",
      "birth_date": "2014-07-18",
      "breed": "Maine Coon",
      "color": "Amarelo e preto",
      "size": "Grande",
      "temperament": "Jogador"
    },
    {
      "id": 34,
      "name": "Nina",
      "image": "https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462_1280.jpg",
      "birth_date": "2012-09-09",
      "breed": "Siamesa",
      "color": "Cinza e marrom",
      "size": "Médio",
      "temperament": "Ativa"
    },
    {
      "id": 35,
      "name": "Tom",
      "image": "https://cdn.pixabay.com/photo/2014/10/01/10/46/cat-468232_1280.jpg",
      "birth_date": "2010-05-08",
      "breed": "Sem raça definida",
      "color": "Cinza e branco",
      "size": "Médio",
      "temperament": "Aventureiro"
    },
    {
      "id": 36,
      "name": "Lola",
      "image": "https://cdn.pixabay.com/photo/2017/08/24/16/27/cat-2677430_1280.jpg",
      "birth_date": "2016-03-14",
      "breed": "Persa",
      "color": "Branco e marrom",
      "size": "Pequeno",
      "temperament": "Elegante"
    },
    {
      "id": 37,
      "name": "Simon",
      "image": "https://cdn.pixabay.com/photo/2018/11/10/14/51/cat-3806799_1280.jpg",
      "birth_date": "2013-01-07",
      "breed": "Sem raça definida",
      "color": "Cinza",
      "size": "Médio",
      "temperament": "Amigável"
    },
    {
      "id": 38,
      "name": "Lucky",
      "image": "https://cdn.pixabay.com/photo/2016/11/29/11/58/animal-1869339_1280.jpg",
      "birth_date": "2011-06-12",
      "breed": "Sem raça definida",
      "color": "Amarelo",
      "size": "Pequeno",
      "temperament": "Sortudo"
    },
    {
      "id": 39,
      "name": "Coque",
      "image": "https://cdn.pixabay.com/photo/2018/03/28/21/26/kitten-3270625_1280.jpg",
      "birth_date": "2014-08-27",
      "breed": "Burmese",
      "color": "Marrom escuro",
      "size": "Médio",
      "temperament": "Brincalhão"
    },
    {
      "id": 40,
      "name": "Max",
      "image": "https://cdn.pixabay.com/photo/2020/05/19/16/46/cat-5191653_1280.jpg",
      "birth_date": "2012-12-09",
      "breed": "Sem raça definida",
      "color": "Preto",
      "size": "Médio",
      "temperament": "Amigável"
    }
  ],
  fishes: [
    {
      "id": 41,
      "name": "Nemo",
      "image": "https://cdn.pixabay.com/photo/2017/04/19/09/32/fish-2241634_1280.jpg",
      "birth_date": "2012-04-15",
      "breed": "Peixe-palhaço",
      "color": "Laranja e branco",
      "size": "Pequeno",
      "temperament": "Amigável"
    },
    {
      "id": 42,
      "name": "Bolha",
      "image": "https://cdn.pixabay.com/photo/2021/02/14/19/49/neon-tetra-6015626_1280.jpg",
      "birth_date": "2011-07-22",
      "breed": "Tetra-neon",
      "color": "Azul e vermelho",
      "size": "Pequeno",
      "temperament": "Pacífico"
    },
    {
      "id": 43,
      "name": "Ariel",
      "image": "https://cdn.pixabay.com/photo/2021/11/16/13/14/fish-6800969_1280.jpg",
      "birth_date": "2010-11-05",
      "breed": "Guppy",
      "color": "Cinza e laranja",
      "size": "Pequeno",
      "temperament": "Pacífico"
    },
    {
      "id": 44,
      "name": "Marlin",
      "image": "https://share.america.gov/wp-content/uploads/2016/06/shutterstock_268680257.jpg",
      "birth_date": "2012-02-19",
      "breed": "Cirurgião-patela",
      "color": "Azul e preto",
      "size": "Médio",
      "temperament": "Protetor"
    },
    {
      "id": 45,
      "name": "Dory",
      "image": "https://dw0jruhdg6fis.cloudfront.net/producao/24810467/G/tang_hepatus.jpg",
      "birth_date": "2013-08-10",
      "breed": "Peixe-cirurgião-patela-paleta-azul",
      "color": "Azul e amarelo",
      "size": "Pequeno",
      "temperament": "Esquecido"
    },
    {
      "id": 46,
      "name": "Bubbles",
      "image": "https://cdn.pixabay.com/photo/2019/05/14/20/27/betta-4203428_1280.jpg",
      "birth_date": "2014-05-29",
      "breed": "Betta",
      "color": "Vermelho",
      "size": "Pequeno",
      "temperament": "Agressivo"
    },
    {
      "id": 47,
      "name": "Coloral",
      "image": "https://cdn.pixabay.com/photo/2013/10/29/12/07/angelfish-202325_1280.jpg",
      "birth_date": "2012-09-17",
      "breed": "Peixe-anjo",
      "color": "Laranja e azul",
      "size": "Médio",
      "temperament": "Pacífico"
    },
    {
      "id": 48,
      "name": "Finny",
      "image": "https://cdn.pixabay.com/photo/2020/02/02/15/12/sumatra-barbering-4813269_1280.jpg",
      "birth_date": "2013-04-02",
      "breed": "Barbo",
      "color": "Verde",
      "size": "Pequeno",
      "temperament": "Ativo"
    },
    {
      "id": 49,
      "name": "Goldie",
      "image": "https://cdn.pixabay.com/photo/2012/01/06/01/17/veiltail-11453_1280.jpg",
      "birth_date": "2014-01-14",
      "breed": "Peixe-Amarelo",
      "color": "Amarelo",
      "size": "Médio",
      "temperament": "Curioso"
    },
    {
      "id": 50,
      "name": "Splash",
      "image": "https://cdn.pixabay.com/photo/2018/03/18/14/05/aquarium-3236897_1280.jpg",
      "birth_date": "2011-03-28",
      "breed": "Plati",
      "color": "Vermelho e preto",
      "size": "Pequeno",
      "temperament": "Jovial"
    },
    {
      "id": 51,
      "name": "Nina",
      "image": "https://images.tcdn.com.br/img/img_prod/648834/coridora_sodalis_corydoras_sodalis_2497_1_142e1241aaa22bdbe598e89d97b77f14.jpg",
      "birth_date": "2012-12-09",
      "breed": "Colorydoras",
      "color": "Verde-oliva",
      "size": "Pequeno",
      "temperament": "Pacífico"
    },
    {
      "id": 52,
      "name": "Spike",
      "image": "https://cdn.pixabay.com/photo/2021/06/27/09/20/fish-6368229_1280.jpg",
      "birth_date": "2013-10-06",
      "breed": "Betta",
      "color": "Cinza",
      "size": "Pequeno",
      "temperament": "Agitado"
    },
    {
      "id": 53,
      "name": "Ruby",
      "image": "https://cdn.pixabay.com/photo/2018/06/24/13/53/betta-3494579_1280.jpg",
      "birth_date": "2011-06-18",
      "breed": "Betta",
      "color": "Vermelho",
      "size": "Pequeno",
      "temperament": "Agressivo"
    },
    {
      "id": 54,
      "name": "Pearl",
      "image": "https://cdn.pixabay.com/photo/2013/10/29/12/07/angelfish-202331_1280.jpg",
      "birth_date": "2012-08-03",
      "breed": "Peixe-anjo",
      "color": "Prateado",
      "size": "Médio",
      "temperament": "Elegante"
    },
    {
      "id": 55,
      "name": "Sunny",
      "image": "https://cdn.pixabay.com/photo/2018/08/25/19/12/gourami-pearl-3630675_1280.jpg",
      "birth_date": "2013-01-25",
      "breed": "Gourami",
      "color": "Amarelo",
      "size": "Pequeno",
      "temperament": "Vivaz"
    },
    {
      "id": 56,
      "name": "Blu",
      "image": "https://cdn.pixabay.com/photo/2015/09/09/05/31/clown-fish-931121_1280.jpg",
      "birth_date": "2010-12-12",
      "breed": "Peixe-palhaço",
      "color": "Laranja e branco",
      "size": "Pequeno",
      "temperament": "Sociável"
    },
    {
      "id": 57,
      "name": "Finn",
      "image": "https://www.comipez.com/4885/TETRA-FANTASMA-NEGRO.jpg",
      "birth_date": "2011-04-04",
      "breed": "Tetra-fantasma",
      "color": "Branco",
      "size": "Pequeno",
      "temperament": "Misterioso"
    },
    {
      "id": 58,
      "name": "Cleo",
      "image": "https://cdn.pixabay.com/photo/2014/07/08/13/11/coral-386971_1280.jpg",
      "birth_date": "2010-08-26",
      "breed": "Peixe-borboleta",
      "color": "Laranja e preto",
      "size": "Médio",
      "temperament": "Gracioso"
    },
    {
      "id": 59,
      "name": "Sushi",
      "image": "https://cdn.pixabay.com/photo/2019/10/05/03/51/nature-4526924_1280.jpg",
      "birth_date": "2011-09-30",
      "breed": "Betta",
      "color": "Azul e vermelho",
      "size": "Pequeno",
      "temperament": "Agressivo"
    },
    {
      "id": 60,
      "name": "Misty",
      "image": "https://cdn.pixabay.com/photo/2015/06/01/13/41/emperor-angelfish-793372_1280.jpg",
      "birth_date": "2012-06-13",
      "breed": "Peixe-anjo",
      "color": "Prateado",
      "size": "Médio",
      "temperament": "Serenidade"
    }
  ]
}