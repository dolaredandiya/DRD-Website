/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx,html}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            fontFamily: {
                neuton: ['var(--font-neuton)', 'serif'],
            },
        },
    },
    plugins: [],
}