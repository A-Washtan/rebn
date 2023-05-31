import React from 'react'
import {GoogleMap, useLoadScript ,Marker} from '@react-google-maps/api'
import { useMemo } from 'react'


export default function Mylocation() {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey:'AIzaSyCL6grQBlBkTjL-t94kCkKSr61pSekbLYA',
    })

    if (!isLoaded) return <div> جار التحميل</div>;
    
  return <div className='map-container' id='map'><Map/></div>
}

function Map() {
    const center = useMemo(() => ({lat:24.535117496615953,lng:46.662616085510294}),[])
    return (
        <GoogleMap zoom={5} center={center} mapContainerClassName="map-container">
        {markers.map((marker)=>{
            return(
                <div key={marker.name}>
                    <Marker position={marker.location}/>
                </div>
            )
        })}
      </GoogleMap>
    )
}

const markers = [
    {
        name:"الرياض-الدار البيضاء",
        location: {
            lat: 24.56931921216352 ,
            lng: 46.7894640336675,
        }
    },
    {
        name:"الرياض- العريجاء",
        location: {
            lat: 24.587477132781384,
            lng: 46.6004655693173739,
        }
    },
    {
        name:"نجران",
        location: {
            lat: 17.57982996835501,
            lng: 44.44425406931739,
        }
    },
    {
        name:"الهفوف  السليمانية الجنوبية",
        location: {
            lat: 25.346007936455027 ,
            lng: 49.55759448873686
        }
    },
    {
        name:"الهفوف السليمانية الشمالية",
        location: {
            lat: 25.371345420191858 ,
            lng: 49.5451428443143
        }
    },
   
    {
        name:"نجران - طريق الملك عبدالعزيز",
        location: {
            lat: 17.558055969172152 ,
            lng: 44.3109973553028
        }
    },
    
    {
        name:"رضوان",
        location: {
            lat: 22.074587547538773 ,
            lng: 41.25788722886769510294
        }
    },
]