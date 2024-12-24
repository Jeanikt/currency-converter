# Currency Converter

A simple, real-time currency converter built with Next.js and React.

## Features

- Convert between multiple currencies (USD, EUR, GBP, JPY, AUD, CAD, CHF, CNY, BRL)
- Real-time exchange rates using the Currency Freaks API
- Conversion history tracking
- Responsive design for mobile and desktop
- Dark mode UI
- Multi-language support (English, Portuguese, Spanish)
- Smooth animations using Framer Motion

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for building the application
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS
- [Lucide React](https://lucide.dev/) - Icon set for React
- [Framer Motion](https://www.framer.com/motion/) - Animation library for React
- [Currency Freaks API](https://currencyfreaks.com/) - Real-time exchange rate API

## Installation

1. Clone the repository: `git clone https://github.com/Jeanikt/currency-converter.git`
2. Navigate to the project directory: `cd currency-converter`
3. Install dependencies: `npm install` or `yarn install`

## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file:

`NEXT_PUBLIC_CURRENCY_API_KEY`

For development purposes, you can use the API key provided in the code. For production, please use your own API key.

## API Integration

This project uses the Currency Freaks API for real-time exchange rates. The API key is already integrated into the project. However, for security reasons, it's recommended to use environment variables for API keys in a production environment.

To use your own API key:

1. Sign up for a free account at [Currency Freaks](https://currencyfreaks.com/)
2. Get your API key from the dashboard
3. Create a `.env.local` file in the root of your project
4. Add your API key to the `.env.local` file:
   \`\`\`
   NEXT_PUBLIC_CURRENCY_API_KEY=your_api_key_here
   \`\`\`
5. Update the fetch URL in `components/currency-converter.tsx`:
   \`\`\`typescript
   const response = await fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${process.env.NEXT_PUBLIC_CURRENCY_API_KEY}`);
   \`\`\`

Remember to add `.env.local` to your `.gitignore` file to keep your API key secret.

## Usage

1. Run the development server: `npm run dev` or `yarn dev`
2. Open your browser and go to `http://localhost:3000`

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.


## License

This project is licensed under the MIT License.

