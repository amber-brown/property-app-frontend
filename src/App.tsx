import { useEffect, useState } from "react";

import ListProperties from "./components/listProperties";
import AddPropertyModal from "./components/addPropertyModal";
import { getProperties } from "./services/properties";

import { Property } from "./types";

import "./App.css";

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [properties, setProperties] = useState<Property[]>();
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setErrorMsg("");
    setLoading(true);

    getProperties()
      .then((res) => {
        setProperties(res.data);
      })
      .catch((e) => {
        setErrorMsg("There was an error getting property listings");
      });

    setLoading(false);
  }, []);

  return (
    <div className="app">
      <button onClick={() => setShowModal(true)}>Add Property</button>
      <ListProperties
        properties={properties}
        errorMsg={errorMsg}
        loading={loading}
      />
      {showModal && (
        <AddPropertyModal
          onClose={() => setShowModal(false)}
          onFormSubmitted={(properties) => {
            setProperties(properties);
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
