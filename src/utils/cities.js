const BASE_URL = "https://hostshare.s3.amazonaws.com/db.json";
// const BASE_URL = "https://file.notion.so/f/s/24643894-e5c3-4c40-974a-52594f581e03/listings.json?id=f795dab6-14d4-48a9-9567-c72151d311a2&table=block&spaceId=f2ea7328-64a4-4f18-bacc-df6c9ac3d888&expirationTimestamp=1685561688948&signature=-ePEfSK1Pv7q3Lm3d9RoI-ja55ze43sB9ftPrR1m1aI&downloadName=listings.json";
// const BASE_URL = process.env.REACT_APP_API_URL;

// Fetch Listings
const getCities = async () => {
    let cities = [];
    const res = await fetch(BASE_URL);
    const info = await res.json()
    const data = info.listings;
    for (let i = 0; i < data.length; i++) {
        const el = data[i].info.location.city;
        cities.push(el)
    }
    return [...new Set(cities)];
}

const cities = await getCities();

export default cities;