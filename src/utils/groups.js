// Fetch Listings
const getGroups = async () => {
    let groups = [];
    const res = await fetch('http://localhost:5000/listings/');
    const data = await res.json();
    for (let i = 0; i < data.length; i++) {
        const el = data[i].info.amenities.data;
        for (let y = 0; y < el.length; y++) {
            const amenity = el[y];
            groups.push(amenity.group)
        }
    }
    return [...new Set(groups)];
}

const groups = await getGroups();

export default groups;