const initialstate={
    formarr:[]
}
const FormData=(state=initialstate,action)=>{
  switch(action.type){
    case 'Submit' :
         return  {...state,
                    formarr:[...state.formarr,action.payload]    
                           }
    case 'Delete':{
        return {
            ...state,
            formarr:state.formarr.filter((_,i)=>i!==action.payload)
        }
    }
    case 'Edit':{
        const editArr=[...state.formarr]
        editArr[action.payload.index]=action.payload.editdata
        return{
            ...state,
            formarr:editArr
        }
    }
    default:return state;
  }
}
export default FormData