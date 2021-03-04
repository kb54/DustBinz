import {useEffect, useState} from 'react';

export default ()=>{
    const [position, setPosition] = useState({});
    const [error, setError] = useState(null);
    const onSuccess = ({coords}) => {
        setPosition({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      };  

    const onError = (error) => {
        setError(error.message);
      };

    const options = {
        enableHighAccuracy: true,
        maximumAge: 0
    }
    useEffect(()=>{
        const geo = navigator.geolocation;
        if(!geo){
            setError('Geolocation is not supported in your browser');
            return;
        }
        geo.getCurrentPosition(onSuccess, onError, options)
    }, []);

    return {position, error};
}