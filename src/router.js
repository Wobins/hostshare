import { createBrowserRouter, } from "react-router-dom";
import Listing from "./pages/Listing";
import Index from "./pages/Index";
import SearchResults from "./pages/SearchResults";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/rooms/:id",
    element: <Listing />,
  },
  {
    path: "/search",
    element: <SearchResults />,
  },
]);

export default router;