import axios from "axios";
import React, { useEffect, useState } from "react";
import Baslik from "./components/Baslik";
import KarakterCon from "./components/KarakterCon";
// import Footer from "./components/Footer";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [datalar, setDatalar] = useState();

  const site = "https://swapi.dev/api/people/";

  const getData = () => {
    axios.get(site).then((resp) => setDatalar(resp.data));
  };
  // getData();
  useEffect(() => {
    getData();
  }, []);
  // console.log(datalar);

  if (!datalar) {
    return <div>Page is loading ... Please wait </div>;
  } else {
    return (
      <div className="App">
        <Baslik />
        <KarakterCon data={datalar} />
        {/* <Footer data={datalar} /> */}
      </div>
    );
  }
};

export default App;
