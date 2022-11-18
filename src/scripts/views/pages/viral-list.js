import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ViralList = {
  async render() {
    return `
      <div class="content">
        <h1 class="content__heading">Explore Restaurants</h1>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantDbSource.ViralListRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
        createRestaurantItemTemplate(restaurant);
    });
  },
};

export default ViralList;
