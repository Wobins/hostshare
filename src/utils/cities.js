const BASE_URL = process.env.REACT_APP_API_URL;

// Fetch Listings
const getCities = async () => {
    let cities = [];
    const res = await fetch(BASE_URL);
    const info = await res.json()
    const data = info.data;
    for (let i = 0; i < data.length; i++) {
        const el = data[i].info.location.city;
        cities.push(el)
    }
    return [...new Set(cities)];
}

const cities = await getCities();

export default cities;