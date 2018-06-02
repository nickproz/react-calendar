import Home from '../../pages/Home';
import About from '../../pages/About';
import Contact from '../../pages/Contact';

// Routes to render with our router
const routes = [
    {
        path: '/',
        component: Home,
        indexRoute: { component: Home }
    },
    {
        path: '/home',
        component: Home,
        indexRoute: { component: Home }
    },
    {
        path: '/about',
        component: About,
        indexRoute: { component: About }
    },
    {
        path: '/contact',
        component: Contact,
        indexRoute: { component: Contact }
    },
    {
        path: '/**',
        component: Home,
        indexRoute: { component: Home }
    }
];

export default routes;