module.exports = {
    content: ['./public/index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                desktop: "url('../images/bg-desktop.png')",
                mobile: "url('../images/bg-mobile.png')",
            },
            colors: {
                primary: {
                    orange: 'hsl(6, 100%, 80%)',
                    pink: 'hsl(335, 100%, 65%)',
                },
                neutral: {
                    'pale-blue': 'hsl(243, 100%, 93%)',
                    'gray-blue': 'hsl(229, 7%, 55%)',
                    'dark-blue': 'hsl(228, 56%, 26%)',
                    'very-dark-blue': 'hsl(229, 57%, 11%)',
                },
            },
            fontFamily: {
                sans: ['Raleway', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
