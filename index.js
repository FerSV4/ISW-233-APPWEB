// TODO: Use the DOM API to create the card components
const html = `<article class="card">
<h3 class="card__title"></h3>
<div class="card__body">
  <div class='card__body__image'></div>
  <section class='card__body__content'>
  </section>
</div>
</article>`;

// 1. Seleccione el container
const container = document.querySelector('.container') || document.body;

// 2. cree una funciotn createCardComponent.
/**
 * @param {string} title
 * @param {string} body
 * @return {HTMLElement}
 */
function createCardComponent(title, body ) {
  const card = document.createElement('article');
  card.className = 'card';
  

  const titleElement = document.createElement('h3');
  titleElement.className = 'card__title';
  titleElement.textContent = title;
  

  const cardBody = document.createElement('div');
  cardBody.className = 'card__body';
  

  const imageContainer = document.createElement('div');
  imageContainer.className = 'card__body__image';
  

  const contentSection = document.createElement('section');
  contentSection.className = 'card__body__content';
  contentSection.textContent = body;
  
  cardBody.appendChild(imageContainer);
  cardBody.appendChild(contentSection);
  
  card.appendChild(titleElement);
  card.appendChild(cardBody);
  
  return card;
}

// 3. Cree un componente
const miCard = createCardComponent(
  'Fundamentals', 
  'Some random text here.',

);

// 4. Agrege este nuevo componente al container
container.appendChild(miCard);
