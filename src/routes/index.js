import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
// layouts
import Layout from "../layouts";
// components
import LoadingScreen from "../components/LoadingScreen";

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <Suspense
      fallback={<LoadingScreen isDashboard={pathname.includes("/dashboard")} />}
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { element: <HomePage />, index: true },
        // { path: 'home', element: <HomePage /> },
        { path: "ceo", element: <CeoPage /> },
        { path: "story", element: <StoryPage /> },
        { path: "career", element: <CareerPage /> },
        { path: "news", element: <NewsPage /> },
        { path: "news/:num", element: <NewsDetailPage /> },
        { path: "faq", element: <FaqPage /> },
        { path: "earlycareer", element: <EarlyCareerPage /> },
        { path: "eliteprogram", element: <EliteCareerPage /> },
        { path: "reimagine", element: <ReimaginePage /> },
        { path: "ozeetyblockchain", element: <OzeetyBlockchainPage /> },
        { path: "finacetech", element: <FinancialTechPage /> },
        { path: "assetmanage", element: <AssetManagePage /> },
        { path: "term", element: <TermofUsePage /> },
        { path: "policy", element: <PrivacyPage /> },
        { path: "cookie", element: <UseofCookiePage /> },
      ],
    },
    {
      path: "*",
      children: [
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const HomePage = Loadable(lazy(() => import("../pages/HomePage")));
const CeoPage = Loadable(lazy(() => import("../pages/CeoPage")));
const StoryPage = Loadable(lazy(() => import("../pages/StoryPage")));
const CareerPage = Loadable(lazy(() => import("../pages/CareerPage")));
const NewsPage = Loadable(lazy(() => import("../pages/NewsPage")));
const NewsDetailPage = Loadable(lazy(() => import("../pages/NewsDetailPage")));
const FaqPage = Loadable(lazy(() => import("../pages/FaqPage")));
const EarlyCareerPage = Loadable(lazy(() => import("../pages/EarlyCareerPage")));
const EliteCareerPage = Loadable(lazy(() => import("../pages/EliteCareerPage")));
const OzeetyBlockchainPage = Loadable(lazy(() => import("../pages/OzeetyBlockchainPage")));
const FinancialTechPage = Loadable(lazy(() => import("../pages/FinancialTechPage")));
const AssetManagePage = Loadable(lazy(() => import("../pages/AssetManagePage")));
const ReimaginePage = Loadable(lazy(() => import("../pages/ReimaginePage")));
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
const TermofUsePage = Loadable(lazy(() => import("../pages/TermofUsePage")));
const PrivacyPage = Loadable(lazy(() => import("../pages/PrivacyPage")));
const UseofCookiePage = Loadable(
  lazy(() => import("../pages/UseofCookiePage"))
);
