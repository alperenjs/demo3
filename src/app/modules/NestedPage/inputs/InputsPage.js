import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { ContentRoute } from "../../../../_metronic/layout";
import AutocompleteExamplesPage from "./AutocompleteExamplesPage";

export function InputsPage() {
  return (
    <Switch>
      <Redirect
        exact={true}
        from="/google-material/inputs"
        to="/google-material/inputs/autocomplete"
      />

      <ContentRoute
        path="/google-material/inputs/autocomplete"
        component={AutocompleteExamplesPage}
      />
    </Switch>
  );
}
