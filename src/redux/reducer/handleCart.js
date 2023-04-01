 const cart = [];

const handleCart = (state = cart, action) => {
  const product=action.payload
  switch (action.type) {
    case "ADDITEM":
      return [...state,product]
      
break;
  
    case "DELITEM":
      return state=state.filter((x)=>{
      return x.id!==product.id
    })
      
      break;
  
    default: return state;
      break;
  }
};
export default handleCart;
 

// const product = action.payload;
//   switch (action.type) {
//     case "ADDITEM": //! ->action-->index.js -> type
//       //Check existence of products

//       const exist = state.find((x) => x.id === product.id);
//       if (exist) {
//         //increase he quantity
//         return state.map((x) =>
//           x.id === product.id ? { ...x, qty: x.qty + 1 } : x
//         );
//       } else {
//         return [...state, { ...product, qty: 1 }];
//       }

//       break;
//     case "DELITEM":
//       const exist1 = state.find((x) => x.id === product.id);
//       if (exist1.qty === 1) {
//         return state.filter((x) => 
//           x.id!==exist1.id 
//           //! what is this
//         );
//       } else {
//         return state.map((x) => 
//           x.id === product.id ? { ...x, qty: x.qty - 1 } : x
//         );
//       }
//       break;

//     default:
//         return state
//       break;
//   }