const reducer = (state,action) => {
    switch(action.type){
        case 'loading' :
            return{
                ...state,
                isLoading : true,
            };
        case 'get_news' :
            return{
                ...state,
                isLoading  : false,
                hits : action.payload.Narticles,
                
            };

            case 'get_india' :
                return{
                    ...state,
                    isLoading  : false,
                    india : action.payload.Narticles,
                    
                };
                
                case 'get_buisness' :
                    return{
                        ...state,
                        isLoading  : false,
                        Buisness : action.payload.Narticles,
                        
                    };      
             
        case 'remove_Post' :
            return {
                ...state,
                hits : state.hits.filter((currEle,i) => i !== action.payload)
            };
        case 'add_Post' :   
            return {
                ...state,
                arr : [...state.arr,(state.hits.filter((currEle,i) => i === action.payload))],
            };  
        
            case 'remove_PostI' :
                return {
                    ...state,
                    india : state.india.filter((currEle,i) => i !== action.payload)
                };
            case 'add_PostI' :   
                return {
                    ...state,
                    arr : [...state.arr,(state.india.filter((currEle,i) => i === action.payload))],
                }; 

                case 'remove_PostB' :
                    return {
                        ...state,
                        Buisness : state.Buisness.filter((currEle,i) => i !== action.payload)
                    };
                case 'add_PostB' :   
                    return {
                        ...state,
                        arr : [...state.arr,(state.Buisness.filter((currEle,i) => i === action.payload))],
                    }; 
            
        case 'rm_Post' :
           
        return {
            ...state,
            arr : [...state.arr,state.arr.splice(action.payload,1)],
            
        };
        
        case 'searchPost' :
            return{
                ...state,
                q  : action.payload,
                
            }; 
          
    }
   
return state;
}

export default reducer;