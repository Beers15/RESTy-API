import React from 'react';

import './app.scss';

import { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  let res;

  const callApi = async (requestParams) => {
    switch(requestParams.method) {
      case 'GET':
        res = await performGET(requestParams);
        setData(res);
        break;
      case 'POST':
        //res = await performPOST(requestParams);
        res = { message: "This method not supported yet." };
        setData(res);
        break;
      case 'PUT':
        //res = await performPUT(requestParams);
        res = { message: "This method not supported yet." };
        setData(res);
        break;
      case 'DELETE':
        //res = await performDELETE(requestParams);
        res = { message: "This method not supported yet." };
        setData(res);
        break;
      default:
        console.log("Invalid method choice given");
        setData('Invalid method choice given');
    }

    const data = res;
    setData(data);
    setRequestParams(requestParams);
  }

  return (
    <React.Fragment>     
      <Header />
      
      <div id="main-container">
        <Form handleApiCall={callApi} />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Results data={data} />
      </div>  
      
      <Footer />
    </React.Fragment>
  );
}

const performGET = async (requestParams) => {
  try {
    let res = await axios.get(requestParams.url);
    console.log(res.data);
    return res.data;
  } catch(err) {
    return { "Error": err.response.statusText };
  }
}

// const performPOST = async (requestParams) => {
//   let config = {
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Content-Type': 'application/json',
//     }
//   }

//   try {
//     let res = await axios.post(requestParams.url, {}, config);
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
//     let res = await axios.put(requestParams.url, {}, config);
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
