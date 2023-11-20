// import type { Config } from 'tailwindcss'
// const withMT = require("@material-tailwind/react/utils/withMT");

// const config: Config = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/**/*.{js,ts,jsx,tsx}',
//     './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
//   ],
//   plugins: [withMT()],
// }
// export default config

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {},
  },
  plugins: [],
});