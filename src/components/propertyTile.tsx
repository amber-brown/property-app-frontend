import { baseUrl } from "../services/properties";
import { Property } from "../types";
import "./propertyTile.css";

interface PropertyTileProps {
  property: Property;
}

const PropertyTile = ({ property }: PropertyTileProps) => {
  const GBP = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: 0,
  });

  return (
    <div className="property-tile">
      <img src={`${baseUrl}${property.imageUri}`} className="property-image" />
      <h2>{property.address}</h2>
      <h4>{GBP.format(property.price)}</h4>
    </div>
  );
};

export default PropertyTile;
