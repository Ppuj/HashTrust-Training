const initialstate={
    formarr:[]
}
const FormData=(state=initialstate,action)=>{
  switch(action.type){
    case 'Submit' :
         return  {...state,
                    formarr:[...state.formarr,action.payload]    
                           }
    default:return state;
  }
}
export default FormData