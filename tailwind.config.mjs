/** @type {import('tailwindcss').Config} */
module.exports = {

	darkMode: ["class"],
  	content: [

    	"./pages/**/*.{js,jsx}",
    	"./components/**/*.{js,jsx}",
    	"./app/**/*.{js,jsx}",
    	"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",

  	],
  	prefix: "",
  	theme: {

		container: {

			center: true,
      		padding: "2rem",
      		screens: {
        		"2xl": "1400px",
      		},

		},
    	extend: {

			backgroundImage: {

				'custom-gradient': 'linear-gradient(60deg, #f5d8df, #e8dbd0, #d7e1e5)',
				
			},
			keyframes: {

				"loop-scroll": {
                    "from": { transform: "translateX(0)" },
                    "to": { transform: "translateX(-100%)" },
                },
				"slide-in-left": {
                    "0%": {
                        visibility: "visible",
                        transform: "translate3d(-100%, 0, 0)",
                    },
                    "100%": {
                        transform: "translate3d(0, 0, 0)",
                    },
                },
                "slide-in-right": {
                    "0%": {
                        visibility: "visible",
                        transform: "translate3d(100%, 0, 0)",
                    },
                    "100%": {
                        transform: "translate3d(0, 0, 0)",
                    },
                },
				"accordion-down": {

					from: { height: "0" },
          			to: { height: "var(--radix-accordion-content-height)" },

				},
        		"accordion-up": {

					from: { height: "var(--radix-accordion-content-height)" },
          			to: { height: "0" },

				},
      		},
      		animation: {

				"loop-scroll": "loop-scroll 20s linear infinite",
				"slide-in-left": 'slide-in-left 1s ease-in-out 0.25s 1',
                "slide-in-right": 'slide-in-right 1s ease-in-out 0.25s 1',
				"accordion-down": "accordion-down 0.2s ease-out",
        		"accordion-up": "accordion-up 0.2s ease-out",

			},
			colors: {

				"pink": "#f5d8df",
				"yellow": "#e8dbd0",
				"blue": "#d7e1e5",
				"pink_bg": "#eee5e1",

			},
			fontFamily: {

				'montserrat': [ 'Montserrat', 'sans-serif' ],
				'Poppins': [ 'Poppins', 'sans-serif' ],
				'Rubik': [ 'Rubik', 'sans-serif' ]

			}

		}

	},
  	plugins: [require("tailwindcss-animate")],

}
