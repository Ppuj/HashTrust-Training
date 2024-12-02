export const Submitdata=(formdata)=>{
    return {
      type:'Submit',
      payload:formdata
    }
  }
export const Deletedata=(index)=>{
    return {
        type:'Delete',
        payload:index
    }
}
export const Editdata=(index,editdata)=>{
    return{
        type:'Edit',
        payload:{index,editdata}
    }
}