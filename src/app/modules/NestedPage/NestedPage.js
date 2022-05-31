import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { ContentRoute } from "../../../_metronic/layout";
import { InputsPage } from "./inputs/InputsPage";

export default function nestedPage() {
  return (
    <Switch>
      <Redirect
        exact={true}
        from="/google-material"
        to="/google-material/inputs/autocomplete"
      />
      {/* Inputs */}
      <ContentRoute from="/google-material/inputs" component={InputsPage} />
      {/* Data Display */}
    </Switch>
  );
}
