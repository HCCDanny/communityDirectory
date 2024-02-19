import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
// import icon from "/public/assets/mapMarker.png";
import CustomIcon from "./icons/mapMarker.png";
import MapMarker from "./icons/MapMarker";
import renderCategoryColour from "./functions/categoryColours";

const position = [53.75, -0.34];

export default function MapView({ data }) {
  const markerIcon = new L.divIcon({
    html: `<svg
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 61 85"
  >
    <path
      fill=""
      d="M31.75,0C48.318,0,61,12.488,61,29.057V30c0,21.834-19.322,49-29.75,55H31C20.572,79,0,51.834,0,30v-0.943  C0,12.488,13.932,0,30.5,0C30.667,0,31.583,0,31.75,0z"
    ></path>
    <path
      fill="#0A6BCB"
      d="M31.688,2C47.428,2,59,13.989,59,29.729v0.896C59,51.367,41.119,77,31.212,83h-0.237  C21.069,77,2,51.367,2,30.625v-0.896C2,13.989,14.76,2,30.5,2C30.659,2,31.529,2,31.688,2z"
    ></path>
  </svg>`,
    iconSize: [28, 0],
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
