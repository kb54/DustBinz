import React from 'react';
import GoogleMapReact from 'google-map-react';
import '../config/map.css';
import Icon from '@mdi/react';
import { mdiTooltipAccount, mdiTrashCan } from '@mdi/js';
import usePosition from '../hooks/usePosition';

const dustbin_locations = [
    {
        title: "dustbin-1",
        description: "5 star dustbin",
        key: 1,
        coordinate: {
            latitude: 26.939307,
            longitude: 80.942638
        },
        details:
        {

            rating: 5,
            distance: "50 m"
        }

    },
    {
        title: "dustbin-2",
        description: "4 star dustbin",
        key: 2,
        coordinate: {
            latitude: 26.939394, 
            longitude: 80.943659
        },
        details:
        {

            rating: 4,
            distance: "100 m"
        }

    },
    {
        title: "dustbin-3",
        description: "3 star dustbin",
        key: 3,
        coordinate: {
            latitude: 26.939480, 
            longitude: 80.942245
        },
        details:
        {

            rating: 3,
            distance: "200 m"
        }

    },
]

function DustbinzMap(props) {


    const {position, error} = usePosition();

    const UserLocation = () => (
        <div className="pin">
            <Icon path={mdiTooltipAccount}
            size={2}
            color='#b47b00'
            />
          <p className="pin-text">Your Position</p>
        </div>
    );

    const DustbinLocation = ({text}) => (
        <div className="pin">
            <Icon path={mdiTrashCan}
            size={2}
            color='#008418'
            />
          <p className="pin-text">{text}</p>
        </div>
    )

    const Map = ()=>(
    <div className="map">
        <h2 className="map-h2">Locate the Nearest Dustbin</h2>

        <div className="google-map">
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBOpzmzAEBGkBRrdkuhEhZhlgQnQtk5LXo' }}
            defaultCenter={{
                lat: position.latitude,
                lng: position.longitude
            }}
            defaultZoom={19}
        >
            <UserLocation
            lat={position.latitude}
            lng={position.longitude}
            />
            {dustbin_locations.map((item)=><DustbinLocation
                                            lat={item.coordinate.latitude} 
                                            lng={item.coordinate.longitude}
                                            key={item.key}
                                            text={item.title}/>)}
        </GoogleMapReact>
        </div>
    </div>
    );

    const Error = ()=>(
    <div className="map">
        <h2 className="map-h2" style={{color:'red'}}>
            {error?error:"Getting Location...(Please Allow)"}
        </h2>
    </div>
    );
    return (
        Object.keys(position).length === 0?<Error />:<Map />
    );
}

export default DustbinzMap;