const category = document.querySelector('#category');
const categories = Object.keys(pets).sort();
const selects = document.querySelectorAll('select');
const arrayOfSomeKeys = ['name', 'breed', 'color', 'size', 'temperament'];
const locationOfImages = document.querySelector('#images');

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
  clearOptions();
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

// Limpa os selects quando selecionamos outra categoria
const clearOptions = () => {
  selects.forEach((select, index) => {
    if (index !== 0) {
      const optionBySelect = [...select.options];
      optionBySelect.forEach((option, index) => {
        if (index !== 0) {
          option.remove();
        }
      });
    };
  });
};

// Adiciona os títulos das categorias de imagens dos pets na página
const addPetsTitles = (petType) => {
  petType.forEach((category) => {
    const headingElement = document.createElement('h2');

    headingElement.innerText = category.toUpperCase();
    headingElement.className = 'categoryTitle';
    
    locationOfImages.appendChild(headingElement);

    addImages(pets[category], category);
  });
}

// Adiciona as imagens dos pets na página
const addImages = (arrayCategory, category) => {
  arrayCategory.forEach((pet) => {
    const div = document.createElement('div');
    const image = document.createElement('img');

    image.className = category;
    image.id = pet.id;
    image.src = pet.image;

    div.appendChild(image);
    locationOfImages.appendChild(div);

    console.log(div);
    console.log(image);
  });
}


window.onload = () => {
  loops(categories);
  categoryClicked();
  addPetsTitles(categories);
}