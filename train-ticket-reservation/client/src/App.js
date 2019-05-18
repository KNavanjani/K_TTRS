import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import TrainList from "./components/TrainList";
import AvailableTrainList from "./components/AvailableTrainList";
import ItemModal from "./components/ItemModal";
import HomePageContents from "./components/HomePageContents";
import { Container } from "reactstrap";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//App
class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <HomePageContents />
          <ItemModal />

          <TrainList />
          <AvailableTrainList />
          <Container />
        </div>
      </Provider>
    );
  }
}

export default App;
