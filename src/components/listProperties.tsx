import PropertyTile from "./propertyTile";
import { Property } from "../types";

import "./listProperties.css";

interface ListPropertiesProps {
  properties?: Property[];
  errorMsg?: string;
  loading: boolean;
}

const ListProperties = ({
  properties,
  errorMsg,
  loading,
}: ListPropertiesProps) => {
  return (
    <div>
      <h1>Properties</h1>
      {loading && <h3>Loading...</h3>}
      {errorMsg && <h3 className="error-message">{errorMsg}</h3>}
      {!loading && !errorMsg && properties && (
        <div className="list-container">
          {properties.map((property: Property) => {
            return <PropertyTile key={property.id} property={property} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ListProperties;
