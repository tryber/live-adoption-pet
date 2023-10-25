const category = document.querySelector('#category');
const categories = Object.keys(pets).sort();
const selects = document.querySelectorAll('select');
const arrayOfSomeKeys = ['name', 'breed', 'color', 'size', 'temperament'];

// Percorre o array com as categorias de pets
const loops = (array) => array.forEach((category) => addCategoryOptions('option', category));

// Adiciona as opções no select de categorias
const addCategoryOptions = (element, petCategory) => {
  const optionElement = document.createElement(element);

  optionElement.innerText = petCategory[0].toUpperCase() + petCategory.substring(1);
  optionElement.value = petCategory;
  
  category.appendChild(optionElement);
}

// Habilita ou desabilita selects
const categoryClicked = () => {
  category.addEventListener('change', () => {
    if (category.value !== 'category') {
      selects.forEach((select) => select.disabled = false);
      addOptionsToSelects();
    } else {
      location.reload();
    }
  });
}

// Cria arrays sem repetição de valores
const arrayData = (petCategory, key) => {
  const array = [];

  pets[petCategory].forEach((pet) => {
    if (!array.includes(pet[key])) {
      array.push(pet[key]);
    }
  })

  return array.sort();
}

// Adiciona as opções nos demais selects
const addOptionsToSelects = () => {
  arrayOfSomeKeys.forEach((key) => {
    const categorySelected = document.querySelector('#category').value;
    const selectProperty = document.querySelector(`#${key}`);
    const array = arrayData(categorySelected, key);
    
    array.forEach((feature) => {
      const optionElement = document.createElement('option');
      optionElement.innerText = feature;
      selectProperty.appendChild(optionElement);
    });
  });
}

window.onload = () => {
  loops(categories);
  categoryClicked();
}