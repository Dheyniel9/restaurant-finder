export interface RestaurantSearchCommand {
    action: 'restaurant_search';
    parameters: {
        query: string;
        near: string;
        price?: string;
        open_now?: boolean;
    }
}

export interface RestaurantResult {
    name: string;
    address: string;
    cuisine: string;
    rating: number;
    price_level?: string;
    hours?: string;
    categories?: string[];
}

