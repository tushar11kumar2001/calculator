# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




# CALCULATOR BY USING REACT + VITE
for this application , I make 1 components 
   Btn.jsx - called this Btn.jsx component for multiple times to make different button;

And use one useState variable for display the result and input given by user
      const[displayValue,setDisplayValue] = useState(null);
      Update the displayValue after every click on any button.
      displayValue variable declare and  initialize in parent component in App.jsx and update by child component Btn.jsx by the "lifting state up";


Modified useState variables of Parent is not possible from children component. so we are doing lifting state up.
Lifting State Up :-   we pass the set function of useState variables as props to child component and call the set function in child component;

For calculate the expression I used eval() funtion 
eval() take the expression in string like:- eval("2+3-1") and return the result in interger value 

         