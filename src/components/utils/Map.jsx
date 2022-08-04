const MapLink = "https://bit.ly/3b3DlkZ";

const Map = () => {
  return (
    <>
      <div className="map ms-3 ms-md-4 ms-lg-5">Map</div>
      <div className="border5 ms-3 ms-md-4 ms-lg-5"></div>
      <div className="mapFrame mx-auto text-center">
        <iframe
          title="Map"
          src={MapLink}
          height="450"
          frameborder="0"
          allowfullscreen
          aria-hidden="false"
          tabindex="0"
          width="94%"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
