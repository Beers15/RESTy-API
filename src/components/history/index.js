import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';

const History = (props) => {
  let [ oldHistory, setOldHistory ] = useState(null)

  useEffect(() => {  
    if(localStorage.getItem('history')) {
      setOldHistory(JSON.parse(localStorage.getItem('history')));
    }
  }, []);


  return (
    <div id="history-container">
      <br />
      <span className="history-txt">History: </span>
      <Accordion defaultActiveKey="0">
        {oldHistory && (
          oldHistory.map((item, key) => {
            //prevents the most recently searched for item from appearing in history twice
            if(props.history[props.history.length - 1] && item.url === props.history[props.history.length - 1].url && key === oldHistory.length - 1) return null;

            return (
              <Accordion.Item eventKey={key}> 
                <Accordion.Header>URL: {item.url}</Accordion.Header>
                <Accordion.Body>
                 {JSON.stringify(item.data, undefined, 2)}
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        )}  
        {props.history && (
          props.history.map((item, key) => {
            return (
              <Accordion.Item eventKey={key}> 
                <Accordion.Header>{item.url}</Accordion.Header>
                <Accordion.Body>
                 {JSON.stringify(item.data, undefined, 2)}
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        )}   
      </Accordion>
    </div>
  )
}

export default History;