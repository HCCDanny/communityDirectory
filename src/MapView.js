import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
// import icon from "/public/assets/mapMarker.png";
import CustomIcon from "/public/assets/mapMarker.png";
// import MapMarker from "./icons/MapMarker";

const position = [53.75, -0.34];

export default function MapView({ data }) {
  const markerIcon = new L.Icon({
    iconUrl: CustomIcon,
  });
  return (
    <>
      <MapContainer center={position} zoom={10}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.os.uk/maps/raster/v1/zxy/Outdoor_3857/{z}/{x}/{y}.png?key=QhsX9okggG6qYt3O4ITSwLh6v1UFdB0d"
        />
        <MarkerClusterGroup>
          {data?.map((item) =>
            item?.lat && item?.long ? (
              <Marker position={[item?.lat, item?.long]} icon={markerIcon}>
                <Popup>
                  <Card variant="plain">
                    <CardContent>
                      <Typography level="title-md">
                        {item.organisation}
                      </Typography>
                      <Typography>Description of the card.</Typography>
                    </CardContent>
                  </Card>
                </Popup>
              </Marker>
            ) : (
              ""
            )
          )}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
}
