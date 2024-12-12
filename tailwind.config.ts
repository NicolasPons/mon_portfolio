import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		container : {
			center : true,
			padding : "15px",
		},
  		colors: {
 			primary : '#1c1c22',
			accent: {
				DEFAULT: '#00ff99',
				hover: '#00e187'
			}
			

  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  screens: {
			sm: '640px', // Mobile
			md: '768px', // Tablette
			lg: '960px', // Desktop
			xl: '1200px', // Grand écran
		 },
		 fontFamily: {
			primary: "var(--font-jetbrainsMono)", 
		 }
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
