const category = document.querySelector('#category');
const categories = Object.keys(pets).sort();
const selects = document.querySelectorAll('select');
const arrayOfSomeKeys = ['name', 'breed', 'color', 'size', 'temperament'];
const locationOfImages = document.querySelector('#images');

const loops = (array) => array.forEach((category) => addCategoryOptions('option', category));

const addCategoryOptions = (element, petCategory) => {
  const optionElement = document.createElement(element);

  optionElement.innerText = petCategory[0].toUpperCase() + petCategory.substring(1);
  optionElement.value = petCategory;

  category.appendChild(optionElement)
}

const categoryClicked = () => {
  category.addEventListener('change', () => {
    if (category.value !== 'category') {
      clearMainTitles();
      clearMainImages();

      const selectCategory = document.getElementById('category').value;

      const array = [selectCategory];

      addPetsTitles(array);
      captureImage();

      selects.forEach((select) => {
        select.disabled = false;
      });
      addOptionToSelects();
    } else {
      location.reload();
    }
  })
}

const arrayData = (petCategory, key) => {
  const array = [];

  pets[petCategory].forEach((pet) => {
    if (!array.includes(pet[key])) {
      array.push(pet[key]);
    }
  });

  return array.sort();
}

const addOptionToSelects = () => {
  clearOptions();

  arrayOfSomeKeys.forEach((key) => {
    const categorySelected = document.querySelector('#category').value;

    const selectProperty = document.querySelector(`#${key}`);

    const array = arrayData(categorySelected, key);

    array.forEach((feature) => {
      const optionElement = document.createElement('option');

      optionElement.innerText = feature;

      selectProperty.appendChild(optionElement);
    })
  });
}

const clearOptions = () => {
  selects.forEach((select, index) => {
    if (index !== 0) {
      const optionBySelect = [...select.options];

      optionBySelect.forEach((option, index) => {
        if (index !== 0) {
          option.remove();
        }
      })
    }
  })
}

const addPetsTitles = (petType) => {
  petType.forEach((category) => {
    const headingElement = document.createElement('h2');

    headingElement.innerText = category.toUpperCase();
    headingElement.className = 'categoryTitle';

    locationOfImages.appendChild(headingElement);

    addImages(pets[category], category);
  });
}

const addImages = (arrayCategory, category) => {
  arrayCategory.forEach((pet) => {
    const div = document.createElement('div');
    const image = document.createElement('img');

    image.className = category;
    image.id = pet.id;
    image.src = pet.image;

    div.appendChild(image);
    locationOfImages.appendChild(div);
  })
}

const captureImage = () => {
  const picture = document.querySelectorAll('#pictures div img');

  picture.forEach((picture) => {
    picture.addEventListener('click', (event) => {
      const capturedId = event.target.id;
      const capturedClass = event.target.className;

      addInfo(capturedId, capturedClass);
    })
  })
}

const arrayInfo = () => {
  const pictureSelected = document.querySelector('#pictureSelected img');
  const nameInfo = document.querySelector('#nameInfo');
  const birthInfo = document.querySelector('#birthInfo');
  const breedInfo = document.querySelector('#breedInfo');
  const colorInfo = document.querySelector('#colorInfo');
  const sizeInfo = document.querySelector('#sizeInfo');
  const temperamentInfo = document.querySelector('#temperamentInfo');

  return [pictureSelected, nameInfo, birthInfo, breedInfo, colorInfo, sizeInfo, temperamentInfo];
}

const addInfo = (id, className) => {
  const [pictureSelected, nameInfo, birthInfo, breedInfo, colorInfo, sizeInfo, temperamentInfo] = arrayInfo();

  const object = pets[className].find((pet) => {
    return pet.id === parseInt(id);
  })

  pictureSelected.src = object.image;
  nameInfo.innerText = `Nome: ${object.name}`;
  birthInfo.innerText = `Data de nascimento: ${object.birth_date}`;
  breedInfo.innerText = `Raça: ${object.breed}`;
  colorInfo.innerText = `Cor: ${object.color}`;
  sizeInfo.innerText = `Porte: ${object.size}`;
  temperamentInfo.innerText = `Temperamento: ${object.temperament}`;
}

const clearMainTitles = () => {
  const mainTitles = document.querySelectorAll('.categoryTitle');
  mainTitles.forEach((title) => title.remove());
}

const clearMainImages = () => {
  const mainImages = document.querySelectorAll('#images div');
  mainImages.forEach((image) => image.remove());
}

const filterPets = () => {
  const newSelects = [...selects].filter((select) => select.id !== 'category');

  newSelects.forEach((newSelect) => {
    newSelect.addEventListener('change', () => {
      const item = newSelect.value; //creme
      const selectedCategory = document.querySelector('#category').value; // dogs

      const arrayNewPets = pets[selectedCategory].filter((pet) => pet[newSelect.id] === item);

      clearOptions();
      addOptionToSelects();
      clearMainImages();

      addImages(arrayNewPets, selectedCategory);
      captureImage();
    });
  })
}

window.onload = () => {
  loops(categories);
  categoryClicked();
  addPetsTitles(categories);
  captureImage();
  filterPets();
}