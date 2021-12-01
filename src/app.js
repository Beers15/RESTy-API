import './app.scss';

import { useReducer, useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import axios from 'axios';

const App = () => {
  let initialState = {
    loading: false,
    data: null,
    method: 'GET',
    body: {},
    url: '',
    history: []
  }
  
  let reducer = (state, action) => {
    switch(action.type) {
      
      case 'SET_DATA':
        return {
          ...state,
          data: action.payload
        }
      case 'SET_LOADING':
        return {
          ...state,
          loading: action.payload
        }
      case 'SET_REQUEST_PARAMS':
        return {
          ...state,
          method: action.payload.method,
          body: action.payload.body,
          url: action.payload.url
        }
      default:
        return state;
    }
  }
  
  let [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if(state.url.length > 0) {
      (async ()=> {
        callApi();
      })()
    }
  }, [state.url]);


  async function callApi() {
    let action = { type: 'SET_LOADING', payload: true }
    dispatch(action);
    console.log("LOADING TRUE?", state.loading)

    action.type = 'SET_DATA';
    let res;

    switch(state.method) {
      case 'GET':
        let { headers, data } = await performGET(state.url);
        action.payload = { headers, data };
        console.log(headers, data)
        dispatch(action);
        break;
      // case 'POST':
      //   //res = await performPOST(requestParams);
      //   res = { message: "This method not supported yet." };
      //   action.payload = res;
      
      //   dispatch(action);
      //   break;
      // case 'PUT':
      //   //res = await performPUT(requestParams);
      //   res = { message: "This method not supported yet." };
      //   action.payload = res;

      //   dispatch(action);
      //   break;
      // case 'DELETE':
      //   //res = await performDELETE(requestParams);
      //   res = { message: "This method not supported yet." };
      //   action.payload = res;

      //   dispatch(action);
      //   break;
      default:
        res = { message: "This method not supported yet." };
        action.payload = res;

        dispatch(action);
    }
    action = { type: 'SET_LOADING', payload: false};
    dispatch(action);
    console.log("LOADING FALSE?", state.loading);
  }

  const setRequestParams = (requestParams) => {
    let action = { type: 'SET_REQUEST_PARAMS', payload: requestParams };

    dispatch(action);
  }

  return (
    <>     
      <Header />
      
      <div id="main-container">
        <Form setRequestParams={setRequestParams} />
        <div>Request Method: {state.method}</div>
        <div>URL: {state.url}</div>
        <Results data={state.data} loading={state.loading} />
      </div>  
      
      <Footer />
    </>
  );
}

const performGET = async (url) => {
  try {
    let res = await axios.get(url);

    return res;
  } catch(err) {
    console.log("ERR", err)
    if(err.response) {
      return { "Error": err.response.statusText };
    }
    return { "Error": "Unable to process a request with those values." }
  }
}

// const performPOST = async (requestParams) => {
//   let config = {
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//     }
//   }

//   try {
//     let res = await axios.post(requestParams.url, requestParams.body, config);
//     console.log(res.data);
//     return res.data;
//   } catch(err) {
//     return err.response;
//   }
// }

// const performPUT = async (requestParams) => {
//   let config = {
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Content-Type': 'application/json',
//     }
//   }

//   try {
//     let res = await axios.put(requestParams.url, requestParams.body, config);
//     console.log(res.data);
//     return res.data;
//   } catch(err) {
//     return err.response;
//   }
// }

// const performDELETE = async (requestParams) => {
//   let config = {
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Content-Type': 'application/json',
//     }
//   }

//   try {
//     let res = await axios.delete(requestParams.url, config);
//     console.log(res.data);
//     return res.data;
//   } catch(err) {
//     return err.response;
//   }
// }

export default App;
