export const getRealEstates = async() => {
    const response = await fetch('http://localhost:3000/');
    return response?.json();
}
