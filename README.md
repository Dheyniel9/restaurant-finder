# 🍽️ LLM-Powered Restaurant Finder API

This is a serverless API built with **Next.js (TypeScript)** that lets users describe restaurant preferences in natural language. It converts the input using **OpenAI**, and fetches matching restaurants via the **Foursquare Places API**.

---

## 🚀 Features

- Convert free-form restaurant queries into structured search
- Use OpenAI GPT-3.5/4 to understand natural language
- Fetch live data from Foursquare Places API
- Protected API access via `?code=pioneerdevai`
- Built with clean TypeScript and modular design
- Ready for deployment on Vercel

---

## 🧪 Example Query

## 🛠️ Local Development

### 1. Clone the repo

```bash
git clone https://github.com/your-username/restaurant-finder.git
cd restaurant-finder

git checkout master

npm install

OpenAI: https://platform.openai.com/account/api-keys

Foursquare: https://foursquare.com/developers/apps


http://localhost:3000/api/execute?message=Find%20a%20cheap%20pizza%20place%20in%20New%20York&code=pioneerdevai
