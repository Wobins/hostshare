const url = "https://file.notion.so/f/s/24643894-e5c3-4c40-974a-52594f581e03/listings.json?id=f795dab6-14d4-48a9-9567-c72151d311a2&table=block&spaceId=f2ea7328-64a4-4f18-bacc-df6c9ac3d888&expirationTimestamp=1685375782399&signature=wkFkIvAWFU8D2PGbfIpUKBTvkKZpDhgtBdeE0BI24Oo&downloadName=listings.json"

const getCategories = async () => {
    let categories = [];
    const res = await fetch(url);
    const data = await res.json();
    const arr = data.categories;
    for (let i = 0; i < arr.length; i++) {
        categories.push(arr[i].title);
    }
    return [...new Set(categories)];
}

const categories = await getCategories();

export default categories;