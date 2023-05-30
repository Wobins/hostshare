const BASE_URL = process.env.REACT_APP_API_URL;

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