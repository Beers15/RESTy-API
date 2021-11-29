import './results.scss';
import ReactJson from 'react-json-view';

const Results = (props) => {
  return (
    <section id="results-container" data-testid="data"> 
      {props.loading ? <h1>LOADING...</h1> : (
        <pre> 
          <span className="result-txt">Results:</span>

          {props.data && (
            <ReactJson src={props.data} theme="summerfruit:inverted" />
          )}
          <br />
          
        </pre>
      )}
    </section>
  );
}

export default Results;
