import { CarType } from "../types";

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '5a0d6cda68msh0c88a68f0e5e0bcp108355jsn1db8195d2169',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
};

interface Filter {
    make?: string,
    model?: string,
    limit?: string,
    fuel_type?: string,
    year?: string,

}

export const fetchCars = async (paramsObj: Filter): Promise<CarType[] | undefined > => {
    // verilere varsayılan değer ataması yaptık
    const { limit = "",
        make = "bmw",
        model = "",
        fuel_type = "",
        year = ""
    } = paramsObj

    const url = new URL("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars")
    if (make) url.searchParams.append("make", make)
    if (model) url.searchParams.append("model", model)
    if (fuel_type) url.searchParams.append("fuel_type", fuel_type)
    if (year) url.searchParams.append("year", year)
    if (limit) url.searchParams.append("limit", limit)

    if (url.href !== "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars"){
        const response = await fetch(url.href, options);
        const result = await response.json();
        return result        
    }

}