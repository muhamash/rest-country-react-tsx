import React, { useEffect, useState } from "react";
import CountryCard from "../countryCard";

interface Country {
    name: { common: string };
    capital?: string;
    flag?: any;
    currencies?: any;
    continents?: string[];
    maps?: { googleMaps: string };
    // Add other properties as needed based on your API response
}

const Countries = () => {
    const [country, setCountry] = useState<Country[]>([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then((data: Country[]) => {
                setCountry(data);
                console.log(data); // Log the fetched data to see its structure
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <div>
                <p className="text-center text-base text-violet-800 bg-gray-400 p-3 w-[40%] mx-auto bg-opacity-30 rounded-md shadow-xl drop-shadow-lg">Total Countries: {country.length}</p>
            </div>
            <div className="grid grid-cols-4 gap-5 justify-center p-10">
                {/* Render CountryCard components */}
                {country.map( ( c, index ) => (
                    <CountryCard
                        key={index}
                        name={c.name.common}
                        capital={c.capital || "N/A"}
                        flag={c.flag}
                        currency={''}
                        continent={c.continents ? c.continents[ 0 ] : "N/A"}
                        map={c.maps ? c.maps.googleMaps : null}
                    />
                ) )}
            </div>
        </div>
    );
};

export default Countries;
