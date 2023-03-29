import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

const RootLayout = () => {

    return (<RouterProvider router={routes} />);

}

export default RootLayout;