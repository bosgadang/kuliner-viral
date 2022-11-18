import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${
    CONFIG.BASE_IMAGE_LARGE_URL + restaurant.pictureId
  }" alt="${restaurant.name}" />
  <div class="restaurant__info">
  <h2>Information</h2>
    <h3>City</h3>
    <p>${restaurant.city}</p>
    <h3>Address</h3>
    <p>${restaurant.address}</p>
    <h3>Category</h3>
    <p>${restaurant.categories[0].name}</p>
    <h3>Rating</h3>
    <p>⭐️<span class="restaurant-item__header__rating__score">
        ${restaurant.rating}</span></p>
  </div>
  <div class="restaurant__description">
    <h2>Description</h2>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__food">
    <h2>Food</h2>
  ${restaurant.menus.foods
    .map((food) => `<ul><li>${food.name}</li></ul>`)
    .join('')}
    </div>
  <div class="restaurant__drink"><h2>Drink</h2>
  ${restaurant.menus.drinks
    .map((drink) => `<ul><li>${drink.name}</li></ul>`)
    .join('')}</div>
    
    
  </div>
  <div class="restaurant__review">
    <h2>Review</h2>

  ${restaurant.customerReviews
    .map(
      (comment) =>
        `<h3>${comment.name}</h3>
        <p>${comment.review}</p>
        <p>${comment.date}</p>
        <hr>`
    )
    .join('')}

`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster" alt="${restaurant.name}"
           src="${
             restaurant.pictureId
               ? CONFIG.BASE_IMAGE_MEDIUM_URL + restaurant.pictureId
               : CONFIG.BASE_IMAGE_MEDIUM_URL + 14
           }">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">
        ${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h2><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h2>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createFavoriteRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster" alt="${restaurant.name}"
           src="${
             restaurant.pictureId
               ? CONFIG.BASE_IMAGE_MEDIUM_URL + restaurant.pictureId
               : CONFIG.BASE_IMAGE_MEDIUM_URL + 14
           }">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">
        ${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h2><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h2>
      <p>${restaurant.address}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFavoriteRestaurantItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
