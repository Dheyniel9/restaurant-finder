import build from "next/dist/build";
import { RestaurantResult, RestaurantSearchCommand } from "./types";
import { buildFourSquareParams } from "./squareParams";
import axios from "axios";

export async function searchRestaurants(params: RestaurantSearchCommand['parameters']): Promise<RestaurantResult[]>{
    const headers = {
        Authorization: process.env.FOURSQUARE_API_KEY || '',
    }

    const queryParams = buildFourSquareParams(params);
    const response = await axios.get('https://api.foursquare.com/v3/places/search', {
        headers,
        params: queryParams,
    })
    const results = response.data.results || [];

    return results.map((place: any) => ({
        name: place.name,
        address: place.location?.formatted_address || 'N/A',
        rating: place.rating || 'N/A',
        price: place.price || 'N/A',
        categories: place.categories?.map((c: any) => c.name).join(', ') || 'N/A',
        hours: place.hours?.display || 'N/A',
    }))
}