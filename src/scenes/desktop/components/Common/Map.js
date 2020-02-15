import React from 'react';
import mapboxgl from 'mapbox-gl';
import '../../assets/less/_map.scss';
mapboxgl.accessToken =
  'pk.eyJ1IjoicHJpdGFtMTk5NWt1bWFyIiwiYSI6ImNqdjR5YzMzODA0eTAzeXFrb3N6aHoxYnYifQ.hZPOcNiQ4cg9E5uaz1_ajQ';

//   'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 77.7102,
      lat: 12.9519,
      zoom: 12
    };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom
    });

    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div>
        {/* <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold"> */}
        <div>
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div
          id="map-root"
          ref={el => (this.mapContainer = el)}
          className="map-box"
        />
      </div>
    );
  }
}

export default Map;
