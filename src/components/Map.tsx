import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Popup,
  CircleMarker,
} from "react-leaflet";
import { GALLERIES } from "../constants/Constants";
import { LatLngTuple } from "leaflet";

export default function Map() {
  type Exhibition = { exhibitionName: string; artist: string; date: string; openingDate: string; }

  type OnGoingExhibition = {
    galleryName: string;
    gallerySite: string;
    location: string;
    locationName: string;
    hasMultipleLocations: boolean;
    position: number[];
    gMapLink: string;
    exhibitions: Exhibition[] ;
    englishName?: string;

  }

  const currentDate = new Date();

  function isExhibitionOngoing(dateRange: string) {
    const [startDate, endDate] = dateRange.split(" - ").map((dateStr) => {
      const [year, month, day] = dateStr.split(".").map(Number);
      if (year && month && day) return new Date(year, month - 1, day); // -1 because month index starts from 0 in JS
    });
    if (startDate && endDate)
      return startDate <= currentDate && currentDate <= endDate;
  }

  const ongoingExhibitions: OnGoingExhibition[] = [];

  GALLERIES.forEach((gallery) => {
    gallery.locations.forEach((location) => {
      const locationExhibitions: Exhibition[] = [];

      gallery.exhibitions.forEach((exhibition) => {
        if (isExhibitionOngoing(exhibition.date)) {
          locationExhibitions.push({
            exhibitionName: exhibition.showName,
            artist: exhibition.artist,
            date: exhibition.date,
            openingDate: exhibition.openingDate,
          });
        }
      });

      if (locationExhibitions.length) {
        ongoingExhibitions.push({
          galleryName: gallery.name,
          gallerySite: gallery.website,
          location: location.address,
          locationName: location.locationName,
          hasMultipleLocations: gallery.locations.length > 1,
          position: location.position,
          gMapLink: location.gMapLink,
          exhibitions: locationExhibitions,
        });
      }
    });
  });

  

  const center: LatLngTuple = [25.0823, 121.536];
  const redOptions = { color: "#e59834" };
  return (
    <MapContainer center={center} zoom={12} style={{ height: "100vh" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="" // Please follow the instruction of your map tile provider.
      />
      {ongoingExhibitions.map((gallery: OnGoingExhibition) => (
        <CircleMarker
          center={gallery.position as LatLngTuple}
          pathOptions={redOptions}
          radius={20}
          key={gallery.galleryName+gallery.position.toString()}
        >
          <Popup>
            <a href={gallery.gallerySite} target="_blank" rel="noreferrer">
              {gallery.galleryName}{" "}
            </a>
            <br />
            {gallery.locationName} <br />
            {gallery.exhibitions.map((exhibition: Exhibition) => (
              <div key={exhibition.exhibitionName+gallery.locationName}>
                {exhibition.exhibitionName} <br />
                {exhibition.date} <br />
              </div>
            ))}
            <a href={gallery.gMapLink} target="_blank" rel="noreferrer">
              Google Map
            </a>
            <br />
            {gallery.hasMultipleLocations
              ? <>*This gallery has multiple locations. <br/> Please check the detail before visiting.</>
              : null}
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
            }