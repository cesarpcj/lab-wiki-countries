import React, { Component } from 'react';
import countries from './../countries.json';
import { Link } from 'react-router-dom';

class countryDetail extends Component {
  //   const countryCode = props.match.params.cca3;
  //

  render() {
    const country = countries.find(
      (country) => country.cca3 === this.props.match.params.cca3
    );

    const bordersTag = [...country.borders];

    const borders = countries.filter((country) => {
      for (let tag of bordersTag) {
        if (country.cca3 === tag) {
          return true;
        }
      }
      return false;
    });

    return (
      <div className="col-7">
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{country.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {borders.map((border) => {
                    return (
                      <li key={border.cca3}>
                        <Link to={'/' + border.cca3}>{border.name.common}</Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default countryDetail;
