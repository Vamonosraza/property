async function fetchProperties() {
    try {
        const res = await fetch('http://localhost:3000/api/properties');

        if (!res.ok) {
        throw new Error("Failed to fetch properties");
        }
        console.log("success: fetchProperties");
        return res.json();
    } catch (err) {
        console.log(err);
    }
}

export { fetchProperties}