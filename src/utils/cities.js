// Fetch Listings
const getCities = async () => {
    let categories = [];
    const res = await fetch('http://localhost:5000/listings/');
    const data = await res.json();
    for (let i = 0; i < data.length; i++) {
        const el = data[i].info.location.city;
        categories.push(el)
    }
    return [...new Set(categories)];
}

const cities = await getCities();

export default cities;