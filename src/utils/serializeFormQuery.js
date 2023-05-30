export default function serializeFormQuery(formData) {
    const params = new URLSearchParams();
  
    for (let [name, value] of formData) {
      params.append(name, value);
    }
  
    return params.toString();
}

