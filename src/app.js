import './app.scss';

import { useState, useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, isLoading] = useState(false);
  const [requestParams, setRequestParams] = useState({});


  useEffect(() => {
    async function callApi() {
      isLoading(true);
      let res;
      if(requestParams.url === '') {
        res = { message: "Empty url provided. Try something a bit more interesting." };
        setData(res);
        return;
      }
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
      isLoading(false);
    }
    callApi();
  }, [requestParams]);

  return (
    <>     
      <Header />
      
      <div id="main-container">
        <Form setRequestParams={setRequestParams} />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Results data={data} loading={loading} />
      </div>  
      
      <Footer />
    </>
  );
}

const performGET = async (requestParams) => {
  try {
    let res = await axios.get(requestParams.url);
    console.log(res.data);
    return res;
  } catch(err) {
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
