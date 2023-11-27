/* eslint-disable react/prop-types */
import "./Card.css";

const Card = ({
  singleCountry,
  name,
  flags,
  population,
  language,
  flagAlt,
  currency,
  nationalSymbol,
}) => {
  // const {name} = singleCountry;
  // const {name}=props.singleCountry
  // console.log(name)
  // console.log(singleCountry);
  // console.log(language)
  // console.log(name)
  // console.log(flags)
  const languageList = [];
  let currencyName = null;
  let currencySymbol = null;

  
  /*
   * - Taking languages into an array
   */
  for (const key in language) {
    languageList.push(language[key]);
  }

  
  /*
   * - Taking currencies into a valiable
   */
  for (const key in currency) {
    currencyName = currency[key].name;
    
  }


  /*
   * - Taking currency symbols into a variable
   */
  for (const key in currency) {
    currencySymbol = currency[key].symbol;
  }

  return (
    <div className="single-card">
      <h1>{name}</h1>
      <img className="flag-image" src={flags} alt={flagAlt} />
      <p>
        <span className="content-title">Population:</span> {population}
      </p>
      <p>
        <span className="content-title">Languages: </span>{" "}
        {languageList.join(", ")}
      </p>
      <div className="content-flex">
        <p>
          <span className="content-title">Currency: </span> {currencyName}
        </p>
        {currencySymbol && (
          <p>
            <span className="content-title">Symbol: </span> {currencySymbol}
          </p>
        )}
      </div>
      {nationalSymbol && (
        <>
          <p className="content-title">National Symbol: </p>
          <img
            className="symbol-img"
            src={nationalSymbol}
            // alt={`National Symbol of ${name}`}
          />
        </>
      )}
    </div>
  );
};

export default Card;
