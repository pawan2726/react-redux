import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import ProductListing from "./containers/ProductListing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route>Not Found</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
