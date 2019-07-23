import PageIndex from './pages/Index';
import PageSecond from './pages/Second';

export default [
  {
    path: '/',
    name: 'first',
    component: PageIndex,
  },
  {
    path: '/second',
    name: 'second',
    component: PageSecond,
  },
];
