const BASE_URL = process.env.REACT_APP_API_URL;

// Fetch Listings
const getGroups = async () => {
    let groups = [];
    const res = await fetch(BASE_URL);
    const data = await res.json()
    const listings = data.data;
    for (let i = 0; i < listings.length; i++) {
        const el = listings[i].info.amenities.data;
        for (let y = 0; y < el.length; y++) {
            const amenity = el[y];
            groups.push(amenity.group)
        }
    }
    return [...new Set(groups)];
}

const groups = await getGroups();

export default groups;