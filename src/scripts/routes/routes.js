import ViralList from '../views/pages/viral-list';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': ViralList, // default page
  '/viral-list': ViralList,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
