import { useState } from 'react';

import './form.scss';

const Form = (props) => {
  const [method, setMethod] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: method || 'GET',
      url: e.target.url.value,
    };
    props.handleApiCall(formData);
  }

  const handleMethodClick = (e) => {
    setMethod(e.target.id.toUpperCase());
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>&nbsp;URL:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <input name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span onClick={handleMethodClick} className={method === "GET" ? "clicked" : ''} id="get">GET</span>
          <span onClick={handleMethodClick} className={method === "POST" ? "clicked" : ''} id="post">POST</span>
          <span onClick={handleMethodClick} className={method === "PUT" ? "clicked" : ''} id="put">PUT</span>
          <span onClick={handleMethodClick} className={method === "DELETE" ? "clicked" : ''} id="delete">DELETE</span>
        </label>
      </form>
    </>
  );
}

export default Form;
