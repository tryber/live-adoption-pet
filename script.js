const category = document.querySelector('#category');
const categories = Object.keys(pets).sort();

// Percorre o array com as categorias de pets
const loops = (array) => {
  return array.forEach((category) => {
    addCategoryOptions('option', category);
  })
}

// Adiciona as opções no select de categorias
const addCategoryOptions = (element, petCategory) => {
  const optionElement = document.createElement(element);

  optionElement.innerText = petCategory[0].toUpperCase() + petCategory.substring(1);
  optionElement.value = petCategory;
  
  category.appendChild(optionElement);
}

window.onload = () => {
  loops(categories);
}