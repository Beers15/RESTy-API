import './results.scss';

const Results = (props) => {
  return (
    <section id="results-container">
     
      <pre> Results: {props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
    </section>
  );
}

export default Results;
