export async function onRequestGet({ request, env }) {
    const url = new URL(request.url);
    const city = url.searchParams.get("city") || "New York City";

    const apiKey = env.OPENWEATHER_API_KEY;

    if (!apiKey) {
        return new Response("API key not set", { status: 500 });
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    try {
        const weatherRes = await fetch(apiUrl);
        const data = await weatherRes.json();

        return new Response(JSON.stringify(data), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        return new Response("Error fetching weather data", { status: 500 });
    }
}
