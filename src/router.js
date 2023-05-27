import { createBrowserRouter, } from "react-router-dom";
import Listing from "./pages/Listing";
import Index from "./pages/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "rooms/:id",
    element: <Listing />,
  },
]);

export default router;