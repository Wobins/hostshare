const BASE_URL = "https://file.notion.so/f/s/24643894-e5c3-4c40-974a-52594f581e03/listings.json?id=f795dab6-14d4-48a9-9567-c72151d311a2&table=block&spaceId=f2ea7328-64a4-4f18-bacc-df6c9ac3d888&expirationTimestamp=1685561688948&signature=-ePEfSK1Pv7q3Lm3d9RoI-ja55ze43sB9ftPrR1m1aI&downloadName=listings.json";
// const BASE_URL = process.env.REACT_APP_API_URL;

const getCategories = async () => {
    let categories = [];
    const res = await fetch(BASE_URL);
    const data = await res.json();
    const arr = data.categories;
    for (let i = 0; i < arr.length; i++) {
        categories.push(arr[i].title);
    }
    return [...new Set(categories)];
}

const categories = await getCategories();

export default categories;