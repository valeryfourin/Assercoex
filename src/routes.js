import Home from "./pages/Home";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import { HOME_ROUTE, ABOUT_ROUTE, CATALOG_ROUTE, CONTACT_ROUTE, FAQ_ROUTE, POLICY_ROUTE} from "./utils/consts";

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: CATALOG_ROUTE,
        Component: Catalog
    },
    {
        path: CONTACT_ROUTE,
        Component: Contact
    },
    {
        path: FAQ_ROUTE,
        Component: FAQ
    },
    {
        path: POLICY_ROUTE,
        Component: PrivacyPolicy
    }
]