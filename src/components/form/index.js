import { useState } from 'react';

import './form.scss';

const Form = (props) => {
  const [method, setMethod] = useState('');
  const [body, setBody] = useState(null);

  const handleSubmit = e => {
    props.isLoading(true);
    e.preventDefault();

    //mocking load time for the purpose of showing loading feedback
    setTimeout(() => {
      let checkedBody = {}

      try {
        checkedBody = JSON.parse(body);
      } catch(err) {
        console.log("Invalid JSON entered into the form by user")
      }
      
      const formData = {
        method: method || 'GET',
        url: e.target.url.value,
        body: checkedBody,
      };
      props.handleApiCall(formData);  
      props.isLoading(false);
    }, 500);
  }

  const handleMethodClick = (e) => {
    setMethod(e.target.id.toUpperCase());
  }

  const handleBodyChange = (e) => {
    e.preventDefault();
    setBody(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>&nbsp;URL:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <input id="url-input" name='url' type='text' />     
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span onClick={handleMethodClick} className={method === "GET" ? "clicked" : ''} id="get">GET</span>
          <span onClick={handleMethodClick} className={method === "POST" ? "clicked" : ''} id="post">POST</span>
          <span onClick={handleMethodClick} className={method === "PUT" ? "clicked" : ''} id="put">PUT</span>
          <span onClick={handleMethodClick} className={method === "DELETE" ? "clicked" : ''} id="delete">DELETE</span>
        </label>
        {(method === 'POST' || method === 'PUT') && (
          <>
            <label htmlFor="body-text-area">Enter a correctly formatted JSON object to use as the request body</label>
            <textarea  rows="4" cols="50" onChange={handleBodyChange} name="body" id="body-text-area"></textarea>
          </>
        )}
      </form>
    </>
  );
}

export default Form;
