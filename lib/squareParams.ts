import { RestaurantSearchCommand } from "./types";


export function buildFourSquareParams(params: RestaurantSearchCommand['parameters']){
    return {
        query: params.query,
        near: params.near,
        price: params.price ? params.price.split(',').map(p => p.trim()).join(',') : undefined,
        open_now: params.open_now ? 'true' : 'false',
        categories: '13065',
        sort: 'RELEVANCE',
        limit: 50, // Default limit for FourSquare API
    }
}