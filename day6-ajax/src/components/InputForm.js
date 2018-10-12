import React, { Component } from 'react';

import './InputForm.css';

class InputForm extends Component {
  componentDidMount() {
    const { loadData } = this.props;

    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

    fetch(endpoint)
      .then(res => res.json())
      .then(data => loadData(data));
  }

  componentDidUpdate() {
    const { suggestions } = this.props;
  }

  render() {
    const { onChange, suggestions, input } = this.props;
    const suggestionList = suggestions.map((location, index) => {
      const regex = new RegExp(input, 'gi');
      const cityName = location.city.replace(regex, `<span class='hl'>${input}</span>`);
      const stateName = location.state.replace(regex, `<span class='hl'>${input}</span>`);

      return <li key={index}>
        <span className="name" dangerouslySetInnerHTML={ {__html: `${cityName}, ${stateName}` }}></span>
        <span className="population">{location.population}</span>
      </li>
    })

    return (
      <form className="search-form">
        <input
          type="text"
          className="search"
          placeholder="City or State"
          onChange={e => {
            onChange(e.target.value);
          }}
          value={input}
        />
        <ul className="suggestions">
          { suggestionList }
        </ul>
      </form>
    );
  }
}

export default InputForm;

// class App extends React.Component {
//
//
//   render() {
//     let data = "Try\nenter\nenter\nenter";
//     return (
//       <div>
//         <p>Won't work:</p>
//         {data.replace(/\n/g, '<br/>')}
//         <p>This works</p>
//         {
//           data.split('\n').map( line => {
//             return (<span>{line}<br/></span>)
//           })
//         }
//       </div>
//     );
//   }
// };
//
// ReactDOM.render(
//   <App></App>,
//   document.getElementById("root")
// );