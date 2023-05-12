

import {legacy_createStore,combineReducers} from "redux";
import { availablereducer, datareducer, domainreducer, genderreducer, searchreducer } from "./reducer";
import { pagereducer } from "./reducer";

const rootreducer=combineReducers({data:datareducer,page:pagereducer,search:searchreducer,domain:domainreducer,gender:genderreducer,available:availablereducer})

 export const store = legacy_createStore(rootreducer)
