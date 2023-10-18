
var app = {};

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

function generateRadioMenu(data, id_prefix = "") {
  let html = "";

  if (data.length > 1) {
    html = '<div class="ms-4">';
  }

  for (const group of data) {
    let name = group['name'];
    let children = group['children'];
    let id = (id_prefix + name).replace(/\s/g, '');

    html += '<div class="form-check">';
    html += `<input class="form-check-input" type="checkbox"  name="${name}" value="" id="${id}" onclick="updateSelection(this)">`;
    html += `<label class="form-check-label" for="${id}">${name}</label>`;
    html += '</div>';

    if (children) {
      html += generateRadioMenu(children, id + "-");
    }

  }

  if (data.length > 1) {
    html += "</div>";
  }

  return html;
}

let selected = new Set();

function unselectChildren(button) {
  let maybe_div = button.parent();
  if (!maybe_div.is('div') || !maybe_div.hasClass("form-check")) {
    // Shouldn't really happen.
    alert(`Something is wrong. Error #001.\nDebug: '${maybe_div}'`);
    return;
  }

  let maybe_child_div = maybe_div.next();
  if (!maybe_child_div.is('div') || !maybe_child_div.hasClass('ms-4')) {
    // This item probably doesn't have a child.
    return;
  }

  maybe_child_div.find('input').each(function() {
    $(this).prop('checked', false);
    selected.delete($(this).attr('name'));
    unselectChildren($(this));
  });
}

function selectParents(button) {
  let maybe_div = button.closest('.ms-4');
  if (!maybe_div) {
    // Shouldn't really happen.
    alert(`Something is wrong. Error #002.\nDebug: '${maybe_div}'`);
    return;
  }

  let maybe_next = maybe_div.prev();
  if (!maybe_next || !maybe_next.is('div') || !maybe_next.hasClass('form-check')) {
    // We reached the outermost checkebox.
    return;
  }

  let input = maybe_next.find('input:first');
  input.prop('checked', true);
  selected.add(input.attr('name'));
  selectParents(input);
}


function updateSelection(button) {
  let checked = $(button).is(':checked');
  if (!checked) {
    // Unselecting in chart, and unselecting all children.
    selected.delete(button.name);
    unselectChildren($(button));
  } else {
    // Selecting in chart, and selecting all parents.
    selected.add(button.name);
    selectParents($(button));
  }

  if (selected.size == 0) {
    // Highlight everything
    myChart.dispatchAction({type:"highlight"});
  } else {
    // Highlight things that are selected
    myChart.dispatchAction({type:"highlight", name: Array.from(selected)});
  }
}


var data = [
{
name: 'Fruits',
itemStyle: {
color: '#DA5C52'
},
children: [
{
name: 'Fruits à noyau',
itemStyle: {
color: '#DC6E62'
},
label:{color:'#000', fontWeight: 'bold'},
children: [{
name: 'Abricot',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#DC6E62'
}
},
{
name: 'Pêche',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#DC6E62'
}
},
{
name: 'Prune',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#DC6E62'
}
},
{
name: 'Cerise',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#DC6E62'
}
}
]
},
{
name: 'Fruits à pépins',
itemStyle: {
color: '#DE776C'
},
label:{color:'#000', fontWeight: 'bold'},
children: [{
name: 'Coings',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#DE776C'
}
},
{
name: 'Pomme',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#DE776C'
}
},
{
name: 'Pomme verte',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#DE776C'
}
},
{
name: 'Poire',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#DE776C'
}
},
{
name: 'Raisin',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#DE776C'
}
}
]
},
{
name: 'Fruits rouges',
itemStyle: {
color: '#E18379'
},
label:{color:'#000', fontWeight: 'bold'},
children: [{
name: 'Baie de sureau',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#E18379'
}
},
{
name: 'Cassis',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#E18379'
}
},
{
name: 'Fraise',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#E18379'
}
},
{
name: 'Framboise',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#E18379'
}
},
{
name: 'Groseille',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#E18379'
}
},
{
name: 'Mûre',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#E18379'
}
},
{
name: 'Myrtille',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#E18379'
}
}
]
},
{
name: 'Agrumes',
itemStyle: {
color: '#DF8C7B'
},
label:{color:'#000', fontWeight: 'bold'},
children: [{
name: 'Citron vert',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#DF8C7B'
}
},
{
name: 'Citron jaune',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#DF8C7B'
}
},
{
name: 'Orange',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#DF8C7B'
}
},
{
name: 'Pamplemousse',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#DF8C7B'
}
}
]
},
{
name: 'Exotique',
itemStyle: {
color: '#E2998A'
},
label:{color:'#000', fontWeight: 'bold'},
children: [{
name: 'Banane',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#E2998A'
}
},
{
name: 'Ananas',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#E2998A'
}
},
{
name: 'Mangue',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#E2998A'
}
},
{
name: 'Passion',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#E2998A'
}
},
{
name: 'Litchi',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#E2998A'
}
}
]
},
{
name: 'Fruits secs',
itemStyle: {
color: '#E5A497'
},
label:{color:'#000', fontWeight: 'bold'},
children: [{
name: 'Figue',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#E5A497'
}
},
{
name: 'Pruneau',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#E5A497'
}
},
{
name: 'Raisin sec',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#E5A497'
}
}
]
},
{
name: 'Fruits cuits',
itemStyle: {
color: '#E9B0A5'
},
value: 1,
}]
},
{
name: 'Fruits à coque',
itemStyle: {
color: '#D96D2B'
},
children: [
{
name: 'Amande',
itemStyle: {
color: '#E39667'
},
value: 1,

},
{
name: 'Noisette',
itemStyle: {
color: '#E39667'
},
value: 1,

},
{
name: 'Noix',
itemStyle: {
color: '#E39667'
},
value: 1,

},
{
name: 'Noix de coco',
itemStyle: {
color: '#E39667'
},
value: 1,
}]
},
{
name: 'Epice',
itemStyle: {
color: '#EACD50'
},
children: [
{
name: 'Vanille',
itemStyle: {
color: '#F4D974'
},
value: 1,

},
{
name: 'Cannelle',
itemStyle: {
color: '#F4D974'
},
value: 1,

},
{
name: 'Cardamome',
itemStyle: {
color: '#F4D974'
},
value: 1,

},
{
name: 'Clou de girofle',
itemStyle: {
color: '#F4D974'
},
value: 1,

},
{
name: 'Gingembre',
itemStyle: {
color: '#F4D974'
},
value: 1,

},
{
name: 'Réglisse',
itemStyle: {
color: '#F4D974'
},
value: 1,

},
{
name: 'Anis',
itemStyle: {
color: '#F4D974'
},
value: 1,

},
{
name: 'Muscade',
itemStyle: {
color: '#F4D974'
},
value: 1,

},
{
name: 'Cumin',
itemStyle: {
color: '#F4D974'
},
value: 1,

},
{
name: 'Safran',
itemStyle: {
color: '#F4D974'
},
value: 1,

},
{
name: 'Poivre',
itemStyle: {
color: '#F4D974'
},
value: 1,
}]
},
{
name: 'Végétal',
itemStyle: {
color: '#52A535'
},
children: [
{
name: 'Herbes sèches',
itemStyle: {
color: '#57AE38'
},
label:{color:'#000', fontWeight: 'bold'},
children: [{
name: 'Foin',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#57AE38'
}
},
{
name: 'Tabac',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#57AE38'
}
},
{
name: 'Thé noir',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#57AE38'
}
},
{
name: 'Thé vert',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#57AE38'
}
}
]
},
{
name: 'Aromates',
itemStyle: {
color: '#5DBA3C'
},
label:{color:'#000', fontWeight: 'bold'},
children: [{
name: 'Basilic',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#5DBA3C'
}
},
{
name: 'Cannabis',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#5DBA3C'
}
},
{
name: 'Houblon',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#5DBA3C'
}
},
{
name: 'Menthe',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#5DBA3C'
}
},
{
name: 'Romarin',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#5DBA3C'
}
},
{
name: 'Laurier',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#5DBA3C'
}
},
{
name: 'Thym',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#5DBA3C'
}
}
]
},
{
name: 'Légumes',
itemStyle: {
color: '#6DC64E'
},
label:{color:'#000', fontWeight: 'bold'},
children: [{
name: 'Cèleris',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#6DC64E'
}
},
{
name: 'Fenouil',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#6DC64E'
}
},
{
name: 'Poivron',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#6DC64E'
}
},
{
name: 'Piment',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#6DC64E'
}
}
]
},
{
name: 'Terreux',
itemStyle: {
color: '#9BD08C'
},
label:{color:'#000', fontWeight: 'bold'},
children: [{
name: 'Mousse',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#9BD08C'
}
},
{
name: 'Sous-bois',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#9BD08C'
}
}
]
},
{
name: 'Champignon',
itemStyle: {
color: '#9BD08C'
},
label:{color:'#000', fontWeight: 'bold'},
children: [{
name: 'Cave humide',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#9BD08C'
}
},
{
name: 'Truffe',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#9BD08C'
}
},
{
name: 'Levure',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#9BD08C'
}
},
{
name: 'Pâte à pain',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#9BD08C'
}
},
{
name: 'Choucroute',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#9BD08C'
}
}]
}]
},
{
name: 'Animal',
itemStyle: {
color: '#C36161'
},
children: [
{
name: 'Cuir',
itemStyle: {
color: '#CD7D7D'
},
value: 1,

},
{
name: 'Etable',
itemStyle: {
color: '#CD7D7D'
},
value: 1,

},
{
name: 'Pipi de chat',
itemStyle: {
color: '#CD7D7D'
},
value: 1,

},
{
name: 'Gibier',
itemStyle: {
color: '#CD7D7D'
},
value: 1,

},
{
name: 'Lactique',
itemStyle: {
color: '#C98D8D'
},
label:{color:'#000', fontWeight: 'bold'},
children: [{
name: 'Beurre',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#C98D8D'
}
}]
}]
},
{
name: 'Boisé',
itemStyle: {
color: '#BA7A46'
},
children: [
{
name: 'Bois',
itemStyle: {
color: '#CA9970'
},
label:{color:'#000', fontWeight: 'bold'},
children: [{
name: 'Chêne',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#CA9970'
}
},
{
name: 'Cèdre',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#CA9970'
}
},
{
name: 'Encens',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#CA9970'
}
},
{
name: 'Bois vert',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#CA9970'
}
},
{
name: 'Planche',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#CA9970'
}
},
{
name: 'Bouchonné',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#CA9970'
}
},
{
name: 'Carton mouillé',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#CA9970'
}
}
]
},
{
name: 'Résiné',
itemStyle: {
color: '#D7B395'
},
label:{color:'#000', fontWeight: 'bold'},
children: [{
name: 'Propolis',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#D7B395'
}
},
{
name: 'Connifère',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#D7B395'
}
}]
}]
},
{
name: 'Sucre',
itemStyle: {
color: '#AA6056'
},
children: [
{
name: 'Mélasse',
itemStyle: {
color: '#C7776F'
},
value: 1,

},
{
name: 'Sirop d érable',
itemStyle: {
color: '#C7776F'
},
value: 1,

},
{
name: 'Miel',
itemStyle: {
color: '#C7776F'
},
value: 1,
}]
},
{
name: 'Ruche',
itemStyle: {
color: '#DDA519'
},
children: [
{
name: 'Cire',
itemStyle: {
color: '#EABB5C'
},
value: 1,

},
{
name: 'Propolis',
itemStyle: {
color: '#EABB5C'
},
value: 1,
}]
},
{
name: 'Torréfaction',
itemStyle: {
color: '#9E7E66'
},
children: [
{
name: 'Cacao',
itemStyle: {
color: '#C4B1A8'
},
value: 1,

},
{
name: 'Café',
itemStyle: {
color: '#C4B1A8'
},
value: 1,

},
{
name: 'Caramel',
itemStyle: {
color: '#C4B1A8'
},
value: 1,

},
{
name: 'Brûlé',
itemStyle: {
color: '#C4B1A8'
},
value: 1,

},
{
name: 'Fumé, tourbé',
itemStyle: {
color: '#C4B1A8'
},
value: 1,
}]
},
{
name: 'Minéral',
itemStyle: {
color: '#9F9F9F'
},
children: [
{
name: 'Iode, sel',
itemStyle: {
color: '#CBCBCB'
},
value: 1,

},
{
name: 'Silex',
itemStyle: {
color: '#CBCBCB'
},
value: 1,

},
{
name: 'Pierre à fusil',
itemStyle: {
color: '#CBCBCB'
},
value: 1,

},
{
name: 'Métallique',
itemStyle: {
color: '#CBCBCB'
},
value: 1,
}]
},
{
name: 'Chimique',
itemStyle: {
color: '#7D8DA7'
},
children: [
{
name: 'Médicinal',
itemStyle: {
color: '#AFBBD5'
},
value: 1,

},
{
name: 'Souffre',
itemStyle: {
color: '#AFBBD5'
},
value: 1,

},
{
name: 'Vinaigre',
itemStyle: {
color: '#AFBBD5'
},
value: 1,

},
{
name: 'Alcool',
itemStyle: {
color: '#AFBBD5'
},
value: 1,

},
{
name: 'Pétrochimique',
itemStyle: {
color: '#AFBBD5'
},
label:{color:'#000', fontWeight: 'bold'},
children: [{
name: 'Dissolvant',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#AFBBD5'
}
},
{
name: 'Plastique',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#AFBBD5'
}
},
{
name: 'Caoutchouc',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#AFBBD5'
}
}]
}]
},
{
name: 'Floral',
itemStyle: {
color: '#A472DC'
},
children: [
{
name: 'Fleurs fraiches',
itemStyle: {
color: '#BA93E5'
},
label:{color:'#000', fontWeight: 'bold'},
children: [{
name: 'Acacia',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#BA93E5'
}
},
{
name: 'Bruyère',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#BA93E5'
}
},
{
name: 'Colza',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#BA93E5'
}
},
{
name: 'Géranium',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#BA93E5'
}
},
{
name: 'Hibiscus',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#BA93E5'
}
},
{
name: 'Lavande',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#BA93E5'
}
},
{
name: 'Rose',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#BA93E5'
}
},
{
name: 'Violette',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#BA93E5'
}
}
]
},
{
name: 'Infusion',
itemStyle: {
color: '#CCAFEB'
},
label:{color:'#000', fontWeight: 'bold'},
children: [{
name: 'Camomille',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#CCAFEB'
}
},
{
name: 'Tilleul',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#CCAFEB'
}
},
{
name: 'Verveine',
value: 1,
label:{color:'#000'},
itemStyle: {
color: '#CCAFEB'
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
    nodeClick:false,
    emphasis: {
      focus: 'ancestor'
    },
    selectMode: 'multiple',
    levels: [
      {},
      {
        r0: '26%',
        r: '51%',
        itemStyle: {
          borderWidth: 2
        },
        label : {
          align: 'right',
          color: '#000',
          fontWeight: 'bold',
          padding: 7
        },
      },
      {
        r0: '51.5%',
        r: '74.5%',
        itemStyle: {
          borderWidth: 2
        },
        label : {
          color: '#000',
          align: 'right',
          padding: 4
        },
      },
      {
        r0: '75%',
        r: '80%',
        itemStyle: {
          borderWidth: 2
        },
        label : {
          position: 'outside'
        }
      }
      ]
  }
};

option && myChart.setOption(option);
