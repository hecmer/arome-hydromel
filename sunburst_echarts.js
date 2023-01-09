
var app = {};

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

var data = [
{
  name: 'Floral',
  itemStyle: {
    color: '#9346A8'
  },
  children: [
  {
    name: 'Ruche',
    itemStyle: {
      color: '#9F4FB5'
    },
    children: [{
      name: 'Cire d abeille',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Pollen',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Propolis',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    }
    ]
  },
  {
    name: 'Fleurs',
    itemStyle: {
      color: '#A860BC'
    },
    children: [{
      name: 'Bruyère',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Camomille',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Géranium',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Hibiscus',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Jacynthe',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Jasmin',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Pissenlit',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Rose',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Violette',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    }
    ]
  },
  {
    name: 'Fleurs de champs',
    itemStyle: {
      color: '#B475C5'
    },
    children: [{
      name: 'Lavande',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Colza',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Luzerne',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Sarrasin',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Tournesol',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    }
    ]
  },
  {
    name: 'Arbres et arbustes',
    itemStyle: {
      color: '#C08CCE'
    },
    children: [{
      name: 'Acacia',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Bourdaine',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Chataignier',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Chèvrefeuille',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Fleur de sureau',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Lierre',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Tilleul',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    }]
  }]
},
{
  name: 'Fruits',
  itemStyle: {
    color: '#DB3D39'
  },
  children: [
  {
    name: 'Fruits à noyau',
    itemStyle: {
      color: '#DC4F38'
    },
    children: [{
      name: 'Abricot',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Pêche',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Prune',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Cerise',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    }
    ]
  },
  {
    name: 'Fruits à pépins',
    itemStyle: {
      color: '#DF5B45'
    },
    children: [{
      name: 'Coings',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Pomme',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Pomme verte',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Poire',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Raisin',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    }
    ]
  },
  {
    name: 'Fruits rouges',
    itemStyle: {
      color: '#E26854'
    },
    children: [{
      name: 'Baie de sureau',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Cassis',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Fraise',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Framboise',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Groseille',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Mûre',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Myrtille',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    }
    ]
  },
  {
    name: 'Agrumes',
    itemStyle: {
      color: '#E57765'
    },
    children: [{
      name: 'Bergamotte',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Yuzu',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Citron vert',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Citron jaune',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Clémentine',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Orange',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Pamplemousse',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    }
    ]
  },
  {
    name: 'Exotique',
    itemStyle: {
      color: '#E78575'
    },
    children: [{
      name: 'Banane',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Ananas',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Mangue',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Fruit de la passion',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Melon',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Kiwi',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Litchi',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    }
    ]
  },
  {
    name: 'Fruits secs',
    itemStyle: {
      color: '#E99283'
    },
    children: [{
      name: 'Figue',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Pruneau',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Raisin sec',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    }
    ]
  },
  {
    name: 'Fruits cuits',
    itemStyle: {
      color: '#ECA194'
    },
    children: [{
      name: 'Compote',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Confiture',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Ecorce de fruit',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'fruit confit',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Fruit vert',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Fruit trop mûr',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    }]
  }]
},
{
  name: 'Fruits à coque',
  itemStyle: {
    color: '#E1D31F'
  },
  children: [
  {
    name: 'Fruits à coque',
    itemStyle: {
      color: '#E9DF59'
    },
    children: [{
      name: 'Amande',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Cacaouhète',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Noisette',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Noix',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Noix de coco',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    }]
  }]
},
{
  name: 'Sucrosité',
  itemStyle: {
    color: '#9E5454'
  },
  children: [
  {
    name: 'Sucrosité',
    itemStyle: {
      color: '#AC6464'
    },
    children: [{
      name: 'Mélasse',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Sucre de canne',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Sirop d érable',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Miel',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    }]
  }]
},
{
  name: 'Végétal',
  itemStyle: {
    color: '#337D21'
  },
  children: [
  {
    name: 'Herbes sèches',
    itemStyle: {
      color: '#378824'
    },
    children: [{
      name: 'Foin',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Herbe tondue',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Tabac',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Thé noir',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Thé vert',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    }
    ]
  },
  {
    name: 'Herbes aromatiques',
    itemStyle: {
      color: '#3C9527'
    },
    children: [{
      name: 'Aneth',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Basilic',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Cannabis',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Houblon',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Citronnelle',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Menthe',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Romarin',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Feuille de laurier',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Thym',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    }
    ]
  },
  {
    name: 'Légumes',
    itemStyle: {
      color: '#50A539'
    },
    children: [{
      name: 'Cèleris',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Concombre',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Tomate',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Fenouil',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Poivron',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Piment',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Potiron',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    }
    ]
  },
  {
    name: 'Forêt',
    itemStyle: {
      color: '#59B73F'
    },
    children: [{
      name: 'Mousse',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Connifères, résineux',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Sous-bois',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    }
    ]
  },
  {
    name: 'Champignon',
    itemStyle: {
      color: '#69C351'
    },
    children: [{
      name: 'Cave / renfermé',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Truffe',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Levure',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Pâte à pain',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Choucroute',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    }]
  }]
},
{
  name: 'Animal',
  itemStyle: {
    color: '#CF5D96'
  },
  children: [
  {
    name: 'Animal',
    itemStyle: {
      color: '#CA789D'
    },
    children: [{
      name: 'Cuir',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Etable',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Cheval',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Fourrure',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Gibier',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    }
    ]
  },
  {
    name: 'Lactique',
    itemStyle: {
      color: '#F6F5C0'
    },
    children: [{
      name: 'Lait',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Fromage',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Beurre',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    }]
  }]
},
{
  name: 'Boisé',
  itemStyle: {
    color: '#A16A3D'
  },
  children: [
  {
    name: 'Boisé',
    itemStyle: {
      color: '#BA7D4A'
    },
    children: [{
      name: 'Chêne',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Pin, Sapin',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Cèdre',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Bois de Santal',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Encens',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Bois vert',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Bouchonné',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Planche',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    }]
  }]
},
{
  name: 'Torréfaction',
  itemStyle: {
    color: '#AA8E82'
  },
  children: [
  {
    name: 'Torréfaction',
    itemStyle: {
      color: '#B69F94'
    },
    children: [{
      name: 'Cacao',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Café',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Chocolat',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Caramel',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'pain grillé',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Brûlé',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Fumé',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Tourbé',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    }]
  }]
},
{
  name: 'Epice',
  itemStyle: {
    color: '#FF9966'
  },
  children: [
  {
    name: 'Epice',
    itemStyle: {
      color: '#F8AB8C'
    },
    children: [{
      name: 'Vanille',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Cannelle',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Clou de girofle',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Cardamome',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Gingembre',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Réglisse',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Anis',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Noix de muscade',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Cumin',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Curcuma',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Safran',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Moutarde',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Poivre',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    }]
  }]
},
{
  name: 'Minéral',
  itemStyle: {
    color: '#D3D3D3'
  },
  children: [
  {
    name: 'Minéral',
    itemStyle: {
      color: '#E4E4E4'
    },
    children: [{
      name: 'Iode',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Calcaire, craie',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Silex',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Métallique',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Pierre à fusil',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    }]
  }]
},
{
  name: 'Chimique',
  itemStyle: {
    color: '#788DB6'
  },
  children: [
  {
    name: 'Chimique',
    itemStyle: {
      color: '#8D9EC1'
    },
    children: [{
      name: 'Alcool',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Caoutchouc',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Carton mouillé',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Dissolvant',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Médicinal',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Pétrole',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Plastique',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Souffre',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Vernis à ongle',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    },
    {
      name: 'Vinaigre',
      value: 1,
      itemStyle: {
        color: '#1'
      }
    }
    ]
  }]
}
];

option = {
  series: {
    type: 'sunburst',
    data: data,
    radius: [0, '100%'],
    sort: undefined,
    emphasis: {
      focus: 'ancestor'
    },
    levels: [
      {},
      {
        r0: '15%',
        r: '35%',
        itemStyle: {
          borderWidth: 2
        },
      },
      {
        r0: '35%',
        r: '65%',
      },
      {
        r0: '65%',
        r: '70%',
        label: {
          position: 'outside',
          padding: 2,
          silent: false
        },
        itemStyle: {
          borderWidth: 2
        }
      }
    ]
  }
};

option && myChart.setOption(option);
