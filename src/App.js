import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
const Home = lazy(() => import("./routes/Home"));
const PlayerDetails = lazy(() => import("./routes/PlayerDetails"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/player/:playerId" component={PlayerDetails} />
        <Route path="/" component={Home} />
      </Switch>
    </Suspense>
  );
}

export default App;
