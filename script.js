const category = document.querySelector('#category');
const categories = Object.keys(pets).sort();
const selects = document.querySelectorAll('select');

// Percorre o array com as categorias de pets
const loops = (array) => array.forEach((category) => addCategoryOptions('option', category));

// Adiciona as opções no select de categorias
const addCategoryOptions = (element, petCategory) => {
  const optionElement = document.createElement(element);

  optionElement.innerText = petCategory[0].toUpperCase() + petCategory.substring(1);
  optionElement.value = petCategory;
  
  category.appendChild(optionElement);

  categoryClicked();
}

// Habilita ou desabilita selects
const categoryClicked = () => {
  category.addEventListener('change', () => {
    if (category.value !== 'category') {
      selects.forEach((select) => select.disabled = false);
    } else {
      location.reload();
    }
  });
}

window.onload = () => {
  loops(categories);
}