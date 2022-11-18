import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantDbSource {
  static async ViralListRestaurants() {
    const response = await axios.get(API_ENDPOINT.VIRAL_LIST);
    return response.data.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await axios.get(API_ENDPOINT.DETAIL(id));
    return response.data.restaurant;
  }
}

export default TheRestaurantDbSource;
