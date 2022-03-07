import { useParams, Link } from 'react-router-dom';

function CountryDetails(props) {
  const { countryId } = useParams();
  
  const countrySelect = props.countries.find((Country) => {
    return Country.alpha3Code === countryId;
  });

  const myBorders = countrySelect.borders.map((eachBorder, index) => {
    let borderCountry = props.countries.find((oneCountry) => {
      return oneCountry.alpha3Code === eachBorder;
    });

    return (
      <Link to={`/${eachBorder}`} key={index}>
        {borderCountry.name.official}
      </Link>
    );
  });

  return (
    <div >
      
    </div>
  );
}

export default CountryDetails;
