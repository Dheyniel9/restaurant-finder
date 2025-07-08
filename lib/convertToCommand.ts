import OpenAI from 'openai';
import { RestaurantSearchCommand } from './types'


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY 
});

export async function convertToCommand(message:string): Promise<RestaurantSearchCommand>{
    const prompt = `Convert the user's message into this strict JSON format:
    {
        "action": "restaurant_search",
        "parameters": {
            "query": "",
            "near": "",
            "price": "",
            "open_now": false
        }
    }`

    const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{role: "user", content: prompt}]
    })

    const command = response.choices[0].message.content
    return JSON.parse(command)
}

