interface CountryCardProps
{
    name: string;
    capital: string;
    flag: any;
    currency: any;
    continent: string;
    map: any;
}

const CountryCard = (props:CountryCardProps) =>
{
    const { name, currency, capital, flag, continent, map } = props;
    return (
        <div className="py-5">
            <div className="border-[.1px] border-violet-900  p-5 rounded-md shadow-md mx-auto bg-sky-700 bg-opacity-60 hover:shadow-2xl active:shadow-sky-200 hover:translate-x-2 transition-all duration-200 cursor-pointer">
                <p>Name: {name}</p>
                <p>Capital: {capital}</p>
                <p>Currency: {currency}</p>
                <p>Flag: {flag} </p>
                <p>Continent: {continent}</p>
                <p>Map?: <small><a href={map}>Click</a></small></p>
            </div>
        </div>
    )
};

export default CountryCard;