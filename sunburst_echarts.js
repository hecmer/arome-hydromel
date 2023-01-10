
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
  name: 'Floral',
  itemStyle: {
    color: '#E4AB0A'
  },
  children: [
  {
    name: 'Ruche',
    itemStyle: {
      color: '#FFD85B'
    },
    label:{color:'#000', fontWeight: 'bold'},
    children: [{
      name: 'Miel',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#FFD85B'
      }
    },
    {
      name: 'Cire d abeille',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#FFD85B'
      }
    },
    {
      name: 'Pollen',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#FFD85B'
      }
    },
    {
      name: 'Propolis',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#FFD85B'
      }
    }
    ]
  },
  {
    name: 'Fleurs',
    itemStyle: {
      color: '#F9D87B'
    },
    label:{color:'#000', fontWeight: 'bold'},
    children: [{
      name: 'Bruyère',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#F9D87B'
      }
    },
    {
      name: 'Camomille',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#F9D87B'
      }
    },
    {
      name: 'Géranium',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#F9D87B'
      }
    },
    {
      name: 'Hibiscus',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#F9D87B'
      }
    },
    {
      name: 'Rose',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#F9D87B'
      }
    },
    {
      name: 'Violette',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#F9D87B'
      }
    },
    {
      name: 'Lavande',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#F9D87B'
      }
    },
    {
      name: 'Colza',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#F9D87B'
      }
    },
    {
      name: 'Sarrasin',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#F9D87B'
      }
    },
    {
      name: 'Tournesol',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#F9D87B'
      }
    },
    {
      name: 'Acacia',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#FBE5A7'
      }
    },
    {
      name: 'Bourdaine',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#FBE5A7'
      }
    },
    {
      name: 'Chataignier',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#FBE5A7'
      }
    },
    {
      name: 'Chèvrefeuille',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#FBE5A7'
      }
    },
    {
      name: 'Fleur de sureau',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#FBE5A7'
      }
    },
    {
      name: 'Lierre',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#FBE5A7'
      }
    },
    {
      name: 'Tilleul',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#FBE5A7'
      }
    }]
  }]
},
{
  name: 'Fruits',
  itemStyle: {
    color: '#DD4743'
  },
  children: [
  {
    name: 'Fruits à noyau',
    itemStyle: {
      color: '#DF5B45'
    },
    label:{color:'#000', fontWeight: 'bold'},
    children: [{
      name: 'Abricot',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#DF5B45'
      }
    },
    {
      name: 'Pêche',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#DF5B45'
      }
    },
    {
      name: 'Prune',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#DF5B45'
      }
    },
    {
      name: 'Cerise',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#DF5B45'
      }
    }
    ]
  },
  {
    name: 'Fruits à pépins',
    itemStyle: {
      color: '#E26854'
    },
    label:{color:'#000', fontWeight: 'bold'},
    children: [{
      name: 'Coings',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E26854'
      }
    },
    {
      name: 'Pomme',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E26854'
      }
    },
    {
      name: 'Pomme verte',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E26854'
      }
    },
    {
      name: 'Poire',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E26854'
      }
    },
    {
      name: 'Raisin',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E26854'
      }
    }
    ]
  },
  {
    name: 'Fruits rouges',
    itemStyle: {
      color: '#E57765'
    },
    label:{color:'#000', fontWeight: 'bold'},
    children: [{
      name: 'Baie de sureau',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E57765'
      }
    },
    {
      name: 'Cassis',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E57765'
      }
    },
    {
      name: 'Fraise',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E57765'
      }
    },
    {
      name: 'Framboise',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E57765'
      }
    },
    {
      name: 'Groseille',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E57765'
      }
    },
    {
      name: 'Mûre',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E57765'
      }
    },
    {
      name: 'Myrtille',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E57765'
      }
    }
    ]
  },
  {
    name: 'Agrumes',
    itemStyle: {
      color: '#E78575'
    },
    label:{color:'#000', fontWeight: 'bold'},
    children: [{
      name: 'Citron vert',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E78575'
      }
    },
    {
      name: 'Citron jaune',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E78575'
      }
    },
    {
      name: 'Orange',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E78575'
      }
    },
    {
      name: 'Pamplemousse',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E78575'
      }
    }
    ]
  },
  {
    name: 'Exotique',
    itemStyle: {
      color: '#E99283'
    },
    label:{color:'#000', fontWeight: 'bold'},
    children: [{
      name: 'Banane',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E99283'
      }
    },
    {
      name: 'Ananas',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E99283'
      }
    },
    {
      name: 'Mangue',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E99283'
      }
    },
    {
      name: 'Fruit de la passion',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E99283'
      }
    },
    {
      name: 'Litchi',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E99283'
      }
    }
    ]
  },
  {
    name: 'Fruits secs',
    itemStyle: {
      color: '#ECA194'
    },
    label:{color:'#000', fontWeight: 'bold'},
    children: [{
      name: 'Figue',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#ECA194'
      }
    },
    {
      name: 'Pruneau',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#ECA194'
      }
    },
    {
      name: 'Raisin sec',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#ECA194'
      }
    }
    ]
  },
  {
    name: 'Fruits cuits',
    itemStyle: {
      color: '#EFB1A7'
    },
    label:{color:'#000', fontWeight: 'bold'},
    children: [{
      name: 'Fruit vert',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#EFB1A7'
      }
    },
    {
      name: 'Confiture',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#EFB1A7'
      }
    },
    {
      name: 'Fruit trop mûr',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#EFB1A7'
      }
    }]
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
    color: '#CDC800'
  },
  children: [
  {
    name: 'Vanille',
    itemStyle: {
      color: '#FAF8A0'
    },
    value: 1,

  },
  {
    name: 'Cannelle',
    itemStyle: {
      color: '#FAF8A0'
    },
    value: 1,

  },
  {
    name: 'Cardamome',
    itemStyle: {
      color: '#FAF8A0'
    },
    value: 1,

  },
  {
    name: 'Clou de girofle',
    itemStyle: {
      color: '#FAF8A0'
    },
    value: 1,

  },
  {
    name: 'Gingembre',
    itemStyle: {
      color: '#FAF8A0'
    },
    value: 1,

  },
  {
    name: 'Réglisse',
    itemStyle: {
      color: '#FAF8A0'
    },
    value: 1,

  },
  {
    name: 'Anis',
    itemStyle: {
      color: '#FAF8A0'
    },
    value: 1,

  },
  {
    name: 'Muscade',
    itemStyle: {
      color: '#FAF8A0'
    },
    value: 1,

  },
  {
    name: 'Cumin',
    itemStyle: {
      color: '#FAF8A0'
    },
    value: 1,

  },
  {
    name: 'Safran',
    itemStyle: {
      color: '#FAF8A0'
    },
    value: 1,

  },
  {
    name: 'Poivre',
    itemStyle: {
      color: '#FAF8A0'
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
    name: 'Forêt',
    itemStyle: {
      color: '#7CCC60'
    },
    label:{color:'#000', fontWeight: 'bold'},
    children: [{
      name: 'Mousse',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#7CCC60'
      }
    },
    {
      name: 'Sous-bois',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#7CCC60'
      }
    }
    ]
  },
  {
    name: 'Champignon',
    itemStyle: {
      color: '#98D181'
    },
    label:{color:'#000', fontWeight: 'bold'},
    children: [{
      name: 'Cave / renfermé',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#98D181'
      }
    },
    {
      name: 'Truffe',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#98D181'
      }
    },
    {
      name: 'Levure',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#98D181'
      }
    },
    {
      name: 'Pâte à pain',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#98D181'
      }
    },
    {
      name: 'Choucroute',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#98D181'
      }
    }]
  }]
},
{
  name: 'Animal',
  itemStyle: {
    color: '#C76FAA'
  },
  children: [
  {
    name: 'Animal',
    itemStyle: {
      color: '#CF83B6'
    },
    label:{color:'#000', fontWeight: 'bold'},
    children: [{
      name: 'Cuir',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#CF83B6'
      }
    },
    {
      name: 'Etable',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#CF83B6'
      }
    },
    {
      name: 'Fourrure',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#CF83B6'
      }
    },
    {
      name: 'Gibier',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#CF83B6'
      }
    }
    ]
  },
  {
    name: 'Lactique',
    itemStyle: {
      color: '#D99BC4'
    },
    label:{color:'#000', fontWeight: 'bold'},
    children: [{
      name: 'Beurre',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#D99BC4'
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
      name: 'Pin, Sapin',
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
      name: 'Bois de Santal',
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
      name: 'Bouchonné',
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
    }
    ]
  },
  {
    name: 'Sucres',
    itemStyle: {
      color: '#D7B395'
    },
    label:{color:'#000', fontWeight: 'bold'},
    children: [{
      name: 'Sucre de canne',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#D7B395'
      }
    },
    {
      name: 'Sirop d érable',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#D7B395'
      }
    }]
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
    name: 'Fumé',
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
    name: 'Iode',
    itemStyle: {
      color: '#CBCBCB'
    },
    value: 1,

  },
  {
    name: 'Calcaire, craie',
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
    name: 'Métallique',
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
  }]
},
{
  name: 'Chimique',
  itemStyle: {
    color: '#7D8DA7'
  },
  children: [
  {
    name: 'Carton mouillé',
    itemStyle: {
      color: '#AFBBD5'
    },
    value: 1,

  },
  {
    name: 'Caoutchouc',
    itemStyle: {
      color: '#AFBBD5'
    },
    value: 1,

  },
  {
    name: 'Plastique',
    itemStyle: {
      color: '#AFBBD5'
    },
    value: 1,

  },
  {
    name: 'Pétrole',
    itemStyle: {
      color: '#AFBBD5'
    },
    value: 1,

  },
  {
    name: 'Dissolvant',
    itemStyle: {
      color: '#AFBBD5'
    },
    value: 1,

  },
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
        r0: '23%',
        r: '47%',
        itemStyle: {
          borderWidth: 2
        },
        label : {
          align: 'right',
          color: '#000',
          fontWeight: 'bold',
          padding: 4
        },
      },
      {
        r0: '47.5%',
        r: '71.5%',
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
        r0: '72%',
        r: '76%',
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
