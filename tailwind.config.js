module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],  
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {colors: {
      siriusblue :{
        light:'#2e4088',
        DEFAULT:'#2e4088',
        dark:'#2e4088',
      },
      siriusorange :{
        light:'#eb6608',
        DEFAULT:'#eb6608',
        dark:'#eb6608',
      },
      gray:{
        light:'rgba(75, 85, 99)',
        DEFAULT:'rgba(75, 85, 99)',
        dark:'rgba(75, 85, 99)',
      },
      formationun :{
        light:'#eb6e34',
        DEFAULT:'#eb6e34',
        dark:'#eb6e34',
      },
      formationdeux :{
        light:'#0072a7',
        DEFAULT:'#0072a7',
        dark:'#0072a7',
      },
      formationtrois :{
        light:'#7e2183',
        DEFAULT:'#7e2183',
        dark:'#7e2183',
      },
      formationquatre :{
        light:'#44792c',
        DEFAULT:'#44792c',
        dark:'#44792c',
      },
      white :{
        light:'#FFFFFF',
        DEFAULT:'#FFFFFF',
        dark:'#FFFFFF',
      },
      
    },},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

