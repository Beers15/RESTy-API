import './results.scss';

const Results = (props) => {
  return (
    <section id="results-container">   
      <p> 
        <span className="result-txt">Results:</span> &#123;
        {props.data && (
          Object.keys(props.data).map((key, i) => { 
            return <div key={i}>
              &nbsp;&nbsp;&nbsp;
              <span className="key-txt">"{key}" : </span>
              <span className="value-txt">"{props.data[key]}"</span>
              <br />
            </div>
          })
        )}
        &#125; 
      </p>
    </section>
  );
}

const displayResults = (data) => {

}

export default Results;
