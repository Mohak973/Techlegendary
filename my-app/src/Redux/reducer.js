import { useState } from "react";
import { Add, Available, Domain, Filter, Gender, Get_Data_Failure, Get_Data_Request, Get_Data_Success, Page_Dec, Page_Inc, Search } from "./actiontype";


const initialstate={
    team:[],
    x:[],
    data:[],
    isLoading:false,
    isError:false
};
const start={first:"",last:''};

const initial={page:1};
const domain={domain:''}
const gender={gender:''}
const available={available:''}


const datareducer=(state=initialstate,action)=>{
    switch(action.type){
        case Get_Data_Request:
            return{...state,isLoading:true};
            case Get_Data_Success:
                return{...state,isLoading:false,data:action.payload};
        case Filter:
        //    console.log(state.x)
        //     console.log(action.payload)
           
   if(state.x.length===0){
    // console.log(true)
    state.x=state.data.filter((el)=>el.domain===action.payload ||el.gender===action.payload || el.available===action.payload )
   }else{
    // console.log(false)
    state.x=state.x.filter((el)=>el.domain===action.payload || el.gender===action.payload || el.available===action.payload)
   }
           
        //   if( state.x===[]){
        //     console.log(true)
        //     state.x=state.x.filter((el)=>el.domain!==action.payload || el.gender!==action.payload || el.available!==action.payload)
        //   }else{
        //     console.log(false)
        //     state.x=state.data.filter((el)=>el.domain===action.payload ||el.gender===action.payload || el.available===action.payload )
        //   }
            // console.log(state.x)
             return{...state,x:state.x}
        
            case Get_Data_Failure:
               
                return {...state,isError:true};
            case Add:
                console.log(action.payload)
               
                return {...state,team:[...state.team,action.payload]}
                default:return state;
    }

}
const pagereducer=(state=initial,action)=>{
    switch(action.type){
      case Page_Inc:
        return {...state,page:state.page+1};
        case Page_Dec:
            return {...state,page:state.page-1};
            default:
                return{...state}
    }
}
const searchreducer=(state=start,action)=>{
switch(action.type){
    case Search:
        return{...state,first:action.payload,last:action.payload};
        default:
            return{...state}
}
}
const domainreducer=(state=domain,action)=>{
switch(action.type){
    case Domain:
        return{...state,domain:action.payload};
        default:
            return{...state}
}
}
const genderreducer=(state=gender,action)=>{
    switch(action.type){
        case Gender:
            return{...state,domain:action.payload};
            default:
                return{...state}
    }
}
const availablereducer=(state=available,action)=>{
    switch(action.type){
        case Available:
            return{...state,domain:action.payload};
            default:
                return{...state}
    }
}

export {datareducer,pagereducer,searchreducer,domainreducer,genderreducer,availablereducer}