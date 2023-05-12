import { Add, Available, Domain, Filter, Gender, Get_Data_Failure,Get_Data_Request,Get_Data_Success, Page_Dec, Page_Inc, Search } from "./actiontype"

const getdatarequest=()=>{
    return {
         type:Get_Data_Request
    }
}

const getdatasuccess=(payload)=>{
return {
    type:Get_Data_Success,
    payload
}
}

const getdatafailure=()=>{
    return {
        type:Get_Data_Failure
    }
}

const pageinc=(payload)=>{
    return{
        type:Page_Inc,
        payload
    }
}
const pagedec=(payload)=>{
    return{
        type:Page_Dec,
        payload
    }
}
const search=(payload)=>{
    return{
        type:Search,
        payload
    }
}
const DOmain=(payload)=>{
return{
type:Domain,
payload
}
}
const GEnder=(payload)=>{
return{
    type:Gender,
    payload
}
}
const AVailable=(payload)=>{
return{
    type:Available,
  payload
}
}
const filter=(payload)=>{
    return{
        type:Filter,
        payload
    }
}
const add=(payload)=>{
    return {
        type:Add,
        payload
    }
}

export {getdatafailure,getdatarequest,getdatasuccess,pagedec,pageinc,search,GEnder,AVailable,DOmain,filter,add}