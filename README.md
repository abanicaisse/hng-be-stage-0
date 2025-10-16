# Backend Stage 0 - Profile API

A TypeScript Express API that returns profile information with random cat facts.

## Features

- Profile endpoint with dynamic cat facts
- TypeScript with ESLint flat config
- CORS enabled
- Graceful error handling

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **HTTP Client:** Axios
- **Linting:** ESLint v9+

## Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/abanicaisse/hng-be-stage-0.git

   cd hng-be-stage-0
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create environment file (optional)**

   ```bash
   echo "PORT=3000" > .env
   ```

4. **Run development server**

   ```bash
   npm run dev
   ```

5. **Test the endpoint**

   ```bash
   curl http://localhost:3000/me
   ```

The server will start on `http://localhost:3000` (or your specified PORT).

## API Endpoints

### GET /me

Returns profile information with a random cat fact.

**Response:**

```json
{
  "status": "success",
  "user": {
    "email": "abawandjovunicaise@gmail.com",
    "name": "Aba Nicaisse",
    "stack": "Node.js/Express/TypeScript"
  },
  "timestamp": "2024-01-15T14:23:45.678Z",
  "fact": "Cats can rotate their ears 180 degrees."
}
```

### GET /

Simple health check returning "Stage-0 task API running".

## Scripts

```bash
npm run dev      # Development server with hot reload
npm run build    # Compile TypeScript
npm start        # Run production build
npm run lint     # ESLint check
```

## Environment Variables

- `PORT` - Server port (default: 3000)

## Project Structure

```
├── src/
│   └── index.ts          # Main application
├── eslint.config.js      # ESLint flat config
├── tsconfig.json         # TypeScript config
└── package.json          # Dependencies & scripts
```

## Deployment

The app is production-ready and can be deployed to any Node.js hosting platform.

For my case, I hosted it on railway.

> Live API URL: [https://abanicaisse-stage-zero.up.railway.app/me](https://abanicaisse-stage-zero.up.railway.app/me)

---
