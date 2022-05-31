import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ContentRoute, LayoutSplashScreen } from "../_metronic/layout";
import Test from "./modules/Test/Test";

const NestedPage = lazy(() => import("./modules/NestedPage/NestedPage"));

export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /test. */
          <Redirect exact from="/" to="/test" />
        }
        <ContentRoute path="/test" component={Test} />
        <Route path="/google-material" component={NestedPage} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
