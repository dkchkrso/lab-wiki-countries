import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ color: 'red', backgroundColor: 'blue' }}
        >
          test
          {props.countries.map((eachCountry, index) => {
            return (
              <Link
                className="list-group-item list-group-item-action"
                to={eachCountry.alpha3Code}
                key={index}
              >
                {eachCountry.name.official}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
