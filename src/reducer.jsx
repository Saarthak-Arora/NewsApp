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
            
        case 'rm_Post' :   
        return {
            ...state,
            arr : [...state.arr,state.arr.splice(action.payload,1)],
            
        };       
          
    }
   
return state;
}

export default reducer;