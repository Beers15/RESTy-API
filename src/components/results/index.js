import './results.scss';
import ReactJson from 'react-json-view';

const Results = (props) => {
  return (
    <section id="results-container" data-testid="data"> 
      {props.loading ? <h1>LOADING...</h1> : (
        <pre> 
          <span className="result-txt">Results:</span>

          {(props.data && typeof props.data === 'object') && (
            <>
              <p>HEADERS</p>
              <ReactJson src={props.data.headers} theme="summerfruit:inverted" />
              <p>DATA</p>
              {/* Big performance issues with large data sets */}
              <ReactJson src={props.data.data} theme="summerfruit:inverted" />
            </>
          )}
          <br />    
        </pre>
      )}
    </section>
  );
}

export default Results;
