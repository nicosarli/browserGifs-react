import {useReducer, useCallback} from 'react'

const ACTIONS = {
  UPDATE_KEYWORD: "update_keyword",
  UPDATE_RATING: "update_rating",
  UPDATE_LANGUAGE: "update_language",
  RESET_KEYWORDS: "reset_state",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
        times: state.times + 1,
      };

    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    
    case ACTIONS.UPDATE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      }

    case ACTIONS.RESET_KEYWORDS:
      return {
        ...state,
        keyword: '',
        times: 0,
        rating: 'g',
      }

    default:
      return state;
    // throw new Error(`Action ${action.type} not supported`)
  }
}

const useForm = ({ 
  initialKeyword = '', 
  initialRating = 'g',
  initialLanguage = 'es',
} = {}) => {

  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
    times: 0,
    language: initialLanguage,
  });

  const { keyword, rating, times, language } = state;

  return {
    keyword,
    rating,
    times,
    language,
    updateKeyword: useCallback(keyword => dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword }),[keyword]), //utilizar useCallback x2,agregar filtro de idiomas y reseteador de estados
    updateRating: useCallback(rating => dispatch({type: ACTIONS.UPDATE_RATING, payload: rating}),[rating]),
    updateLanguage: useCallback(language => dispatch({type: ACTIONS.UPDATE_LANGUAGE, payload: language}),[language]),
    resetState: () => dispatch({type: ACTIONS.RESET_KEYWORDS})
  }
}


export default useForm