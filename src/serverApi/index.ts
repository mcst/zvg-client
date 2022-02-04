const host = "http://localhost:3000"

export const getRealEstates = async() => {
    const response = await fetch(host);
    return response?.json();
}

export const getConfig = async() => {
    const response = await fetch(`${host}/config`)
    return response?.json();
}