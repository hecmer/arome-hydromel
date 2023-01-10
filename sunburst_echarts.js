
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
    color: '#525FC2'
  },
  children: [
  {
    name: 'Ruche',
    label:{color:'#000'},
    itemStyle: {
      color: '#7D87D1'
    },
    children: [{
      name: 'Cire d abeille',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#7D87D1'
      }
    },
    {
      name: 'Pollen',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#7D87D1'
      }
    },
    {
      name: 'Propolis',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#7D87D1'
      }
    }
    ]
  },
  {
    name: 'Fleurs',
    label:{color:'#000'},
    itemStyle: {
      color: '#8A93D6'
    },
    children: [{
      name: 'Bruyère',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#8A93D6'
      }
    },
    {
      name: 'Camomille',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#8A93D6'
      }
    },
    {
      name: 'Géranium',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#8A93D6'
      }
    },
    {
      name: 'Hibiscus',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#8A93D6'
      }
    },
    {
      name: 'Jacynthe',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#8A93D6'
      }
    },
    {
      name: 'Jasmin',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#8A93D6'
      }
    },
    {
      name: 'Pissenlit',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#8A93D6'
      }
    },
    {
      name: 'Rose',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#8A93D6'
      }
    },
    {
      name: 'Violette',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#8A93D6'
      }
    },
    {
      name: 'Lavande',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#969EDA'
      }
    },
    {
      name: 'Colza',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#969EDA'
      }
    },
    {
      name: 'Luzerne',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#969EDA'
      }
    },
    {
      name: 'Sarrasin',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#969EDA'
      }
    },
    {
      name: 'Tournesol',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#969EDA'
      }
    },
    {
      name: 'Acacia',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#A2A9DE'
      }
    },
    {
      name: 'Bourdaine',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#A2A9DE'
      }
    },
    {
      name: 'Chataignier',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#A2A9DE'
      }
    },
    {
      name: 'Chèvrefeuille',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#A2A9DE'
      }
    },
    {
      name: 'Fleur de sureau',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#A2A9DE'
      }
    },
    {
      name: 'Lierre',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#A2A9DE'
      }
    },
    {
      name: 'Tilleul',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#A2A9DE'
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
    label:{color:'#000'},
    itemStyle: {
      color: '#DF5B45'
    },
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
    label:{color:'#000'},
    itemStyle: {
      color: '#E26854'
    },
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
    label:{color:'#000'},
    itemStyle: {
      color: '#E57765'
    },
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
    label:{color:'#000'},
    itemStyle: {
      color: '#E78575'
    },
    children: [{
      name: 'Bergamotte',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E78575'
      }
    },
    {
      name: 'Yuzu',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E78575'
      }
    },
    {
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
      name: 'Clémentine',
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
    label:{color:'#000'},
    itemStyle: {
      color: '#E99283'
    },
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
      name: 'Melon',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E99283'
      }
    },
    {
      name: 'Kiwi',
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
    label:{color:'#000'},
    itemStyle: {
      color: '#ECA194'
    },
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
    label:{color:'#000'},
    itemStyle: {
      color: '#EFB1A7'
    },
    children: [{
      name: 'Compote',
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
      name: 'Ecorce de fruit',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#EFB1A7'
      }
    },
    {
      name: 'fruit confit',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#EFB1A7'
      }
    },
    {
      name: 'Fruit vert',
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
    name: 'Fruits à coque',
    label:{color:'#000'},
    itemStyle: {
      color: '#E39667'
    },
    children: [{
      name: 'Amande',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E39667'
      }
    },
    {
      name: 'Cacaouhète',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E39667'
      }
    },
    {
      name: 'Noisette',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E39667'
      }
    },
    {
      name: 'Noix',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E39667'
      }
    },
    {
      name: 'Noix de coco',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#E39667'
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
    label:{color:'#000'},
    itemStyle: {
      color: '#B87A7A'
    },
    children: [{
      name: 'Mélasse',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#B87A7A'
      }
    },
    {
      name: 'Sucre de canne',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#B87A7A'
      }
    },
    {
      name: 'Sirop d érable',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#B87A7A'
      }
    },
    {
      name: 'Miel',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#B87A7A'
      }
    }]
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
    label:{color:'#000'},
    itemStyle: {
      color: '#57AE38'
    },
    children: [{
      name: 'Foin',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#57AE38'
      }
    },
    {
      name: 'Herbe tondue',
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
    name: 'Herbes aromatiques',
    label:{color:'#000'},
    itemStyle: {
      color: '#5DBA3C'
    },
    children: [{
      name: 'Aneth',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#5DBA3C'
      }
    },
    {
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
      name: 'Citronnelle',
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
      name: 'Feuille de laurier',
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
    label:{color:'#000'},
    itemStyle: {
      color: '#6DC64E'
    },
    children: [{
      name: 'Cèleris',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#6DC64E'
      }
    },
    {
      name: 'Concombre',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#6DC64E'
      }
    },
    {
      name: 'Tomate',
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
    },
    {
      name: 'Potiron',
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
    label:{color:'#000'},
    itemStyle: {
      color: '#7CCC60'
    },
    children: [{
      name: 'Mousse',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#7CCC60'
      }
    },
    {
      name: 'Connifères, résineux',
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
    label:{color:'#000'},
    itemStyle: {
      color: '#98D181'
    },
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
    label:{color:'#000'},
    itemStyle: {
      color: '#CF83B6'
    },
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
      name: 'Cheval',
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
    label:{color:'#000'},
    itemStyle: {
      color: '#D99BC4'
    },
    children: [{
      name: 'Lait',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#D99BC4'
      }
    },
    {
      name: 'Fromage',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#D99BC4'
      }
    },
    {
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
    label:{color:'#000'},
    itemStyle: {
      color: '#CA9970'
    },
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
    }]
  }]
},
{
  name: 'Torréfié',
  itemStyle: {
    color: '#9E7E66'
  },
  children: [
  {
    name: 'Torréfaction',
    label:{color:'#000'},
    itemStyle: {
      color: '#B69F94'
    },
    children: [{
      name: 'Cacao',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#B69F94'
      }
    },
    {
      name: 'Café',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#B69F94'
      }
    },
    {
      name: 'Chocolat',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#B69F94'
      }
    },
    {
      name: 'Caramel',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#B69F94'
      }
    },
    {
      name: 'pain grillé',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#B69F94'
      }
    },
    {
      name: 'Brûlé',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#B69F94'
      }
    },
    {
      name: 'Fumé',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#B69F94'
      }
    },
    {
      name: 'Tourbé',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#B69F94'
      }
    }]
  }]
},
{
  name: 'Epicé',
  itemStyle: {
    color: '#CDC800'
  },
  children: [
  {
    name: 'Epice',
    label:{color:'#000'},
    itemStyle: {
      color: '#F6F364'
    },
    children: [{
      name: 'Vanille',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#F6F364'
      }
    },
    {
      name: 'Cannelle',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#F6F364'
      }
    },
    {
      name: 'Clou de girofle',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#F6F364'
      }
    },
    {
      name: 'Cardamome',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#F6F364'
      }
    },
    {
      name: 'Gingembre',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#F6F364'
      }
    },
    {
      name: 'Réglisse',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#F6F364'
      }
    },
    {
      name: 'Anis',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#F6F364'
      }
    },
    {
      name: 'Noix de muscade',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#F6F364'
      }
    },
    {
      name: 'Cumin',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#F6F364'
      }
    },
    {
      name: 'Curcuma',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#F6F364'
      }
    },
    {
      name: 'Safran',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#F6F364'
      }
    },
    {
      name: 'Moutarde',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#F6F364'
      }
    },
    {
      name: 'Poivre',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#F6F364'
      }
    }]
  }]
},
{
  name: 'Minéralité',
  itemStyle: {
    color: '#909090'
  },
  children: [
  {
    name: 'Minéral',
    label:{color:'#000'},
    itemStyle: {
      color: '#B2B2B2'
    },
    children: [{
      name: 'Iode',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#B2B2B2'
      }
    },
    {
      name: 'Calcaire, craie',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#B2B2B2'
      }
    },
    {
      name: 'Silex',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#B2B2B2'
      }
    },
    {
      name: 'Métallique',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#B2B2B2'
      }
    },
    {
      name: 'Pierre à fusil',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#B2B2B2'
      }
    }]
  }]
},
{
  name: 'Artificiel',
  itemStyle: {
    color: '#687A98'
  },
  children: [
  {
    name: 'Chimique',
    label:{color:'#000'},
    itemStyle: {
      color: '#8D9EC1'
    },
    children: [{
      name: 'Alcool',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#8D9EC1'
      }
    },
    {
      name: 'Caoutchouc',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#8D9EC1'
      }
    },
    {
      name: 'Carton mouillé',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#8D9EC1'
      }
    },
    {
      name: 'Dissolvant',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#8D9EC1'
      }
    },
    {
      name: 'Médicinal',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#8D9EC1'
      }
    },
    {
      name: 'Pétrole',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#8D9EC1'
      }
    },
    {
      name: 'Plastique',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#8D9EC1'
      }
    },
    {
      name: 'Souffre',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#8D9EC1'
      }
    },
    {
      name: 'Vernis à ongle',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#8D9EC1'
      }
    },
    {
      name: 'Vinaigre',
      value: 1,
      label:{color:'#000'},
      itemStyle: {
        color: '#8D9EC1'
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
    levels: [
      {},
      {
        r0: '15%',
        r: '40%',
        itemStyle: {
          borderWidth: 2
        },
        label : {
          align: 'right',
          color: '#000',
          fontWeight: 'bold',
          padding : 5
        },
      },
      {
        r0: '40%',
        r: '70%',
        label : {
          align: 'right',
          fontWeight: 'bold',
        },
      },
      {
        r0: '70%',
        r: '75%',
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
